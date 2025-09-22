import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2, Phone, MessageCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";
import RelatedPosts from "@/components/ui/RelatedPosts";
import { Post, BlogPostData } from "@/types/Post";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        // Buscar o post específico
        const response = await fetch(
          `https://www.astato.com.br/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        const data = await response.json();

        if (data.length === 0) {
          navigate("/404");
          return;
        }

        const postData = data[0];
        setPost({
          id: postData.id,
          title: postData.title.rendered,
          content: postData.content.rendered,
          featuredImage:
            postData._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          author: postData._embedded?.author?.[0]?.name || "Autor desconhecido",
          publishDate: postData.date,
        });

        // Buscar todos os posts para posts relacionados
        const allPostsResponse = await fetch(
          "https://www.astato.com.br/wp-json/wp/v2/posts?_embed&per_page=10"
        );
        const allPostsData = await allPostsResponse.json();
        
        const formattedPosts = allPostsData.map((post: any) => ({
          id: post.id,
          title: post.title.rendered,
          slug: post.slug,
          excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
          featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Sem categoria",
          publishDate: post.date,
          author: { name: post._embedded?.author?.[0]?.name || "Autor desconhecido" },
        }));
        
        setAllPosts(formattedPosts);
      } catch (error) {
        console.error("Erro ao carregar post:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug, navigate]);

  if (loading) return <p>Carregando...</p>;
  if (!post) return <p>Post não encontrado.</p>;

  // SEO structured data para o post
  const postStructuredData = post ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title.replace(/<[^>]+>/g, ""),
    "image": post.featuredImage,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Astato Equipamentos Médicos",
      "logo": {
        "@type": "ImageObject",
        "url": "https://astato.com.br/logo.png"
      }
    },
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "description": post.content.replace(/<[^>]+>/g, "").substring(0, 160)
  } : null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      {post && (
        <SEOHead 
          title={`${post.title.replace(/<[^>]+>/g, "")} | Blog Astato`}
          description={post.content.replace(/<[^>]+>/g, "").substring(0, 160)}
          canonical={`https://astato.com.br/blog/${slug}`}
          keywords="manutenção equipamentos médicos, videocirurgia, endoscopia, equipamentos hospitalares"
          structuredData={postStructuredData}
        />
      )}
      
      <div className="min-h-screen bg-muted/10">
        {/* Breadcrumb Navigation */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb 
              items={[
                { label: "Blog", href: "/blog" },
                { label: post?.title.replace(/<[^>]+>/g, "").substring(0, 50) + "..." || "Post", current: true }
              ]}
            />
          </div>
        </section>

        <article className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Botão Voltar Melhorado */}
              <Button
                onClick={() => navigate("/blog")}
                variant="outline"
                size="sm"
                className="mb-8 hover:bg-primary hover:text-white transition-smooth"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span>Voltar ao Blog</span>
              </Button>

              {/* Header do Post */}
              <header className="mb-12">
                {post?.featuredImage && (
                  <div className="relative mb-8 rounded-lg overflow-hidden shadow-medical">
                    <img
                      src={post.featuredImage}
                      alt={post.title.replace(/<[^>]+>/g, "")}
                      className="w-full h-[400px] object-cover"
                    />
                    {/* Overlay para melhor legibilidade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  </div>
                )}

                <div className="space-y-6">
                  <h1
                    className="font-heading text-4xl lg:text-5xl font-bold text-foreground leading-tight"
                    dangerouslySetInnerHTML={{ __html: post?.title || "" }}
                  />

                  {/* Meta informações */}
                  <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{post?.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post?.publishDate}>
                        {post && formatDate(post.publishDate)}
                      </time>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>5 min de leitura</span>
                    </div>
                  </div>

                  {/* Compartilhar */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <span className="text-sm font-medium text-muted-foreground">Compartilhar:</span>
                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline" className="hover:bg-accent hover:text-white">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="hover:bg-astato-light-green hover:text-white">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </header>

              {/* Conteúdo do Post */}
              <div className="blog-content">
                <div
                  dangerouslySetInnerHTML={{ __html: post?.content || "" }}
                />
              </div>

              {/* CTA Contextual */}
              <div className="mt-16 p-8 bg-gradient-medical rounded-lg text-white text-center shadow-medical">
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Precisa de Manutenção em Equipamentos Médicos?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Nossa equipe especializada está pronta para atender sua necessidade
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-primary hover:bg-muted font-medium"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    (32) 3213-8469
                  </Button>
                  <Button 
                    size="lg" 
                    className="bg-astato-red hover:bg-astato-red/90 text-white font-medium"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Fale Conosco
                  </Button>
                </div>
              </div>

              {/* Posts Relacionados */}
              {allPosts.length > 0 && post && (
                <RelatedPosts 
                  currentPostId={post.id}
                  posts={allPosts}
                  maxPosts={3}
                />
              )}
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
