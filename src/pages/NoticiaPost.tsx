import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2, Phone, MessageCircle, Newspaper } from "lucide-react";
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      setError(null);
      try {
        // Buscar o post específico
        const response = await fetch(
          `https://www.astato.com.br/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );

        if (!response.ok) {
          throw new Error(`Erro ${response.status}: Post não encontrado`);
        }

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
          featuredImage: postData._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          author: postData._embedded?.author?.[0]?.name || "Autor desconhecido",
          publishDate: postData.date,
        });

        // Buscar todos os posts para relacionados
        const allPostsResponse = await fetch(
          "https://www.astato.com.br/wp-json/wp/v2/posts?_embed&per_page=10"
        );
        if (!allPostsResponse.ok) {
          throw new Error(`Erro ao carregar posts relacionados`);
        }
        const allPostsData = await allPostsResponse.json();

        const formattedPosts = allPostsData.map((post: any) => ({
          id: post.id,
          title: post.title.rendered,
          slug: post.slug,
          excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
          featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          publishDate: post.date,
          author: { name: post._embedded?.author?.[0]?.name || "Autor desconhecido" },
        }));

        setAllPosts(formattedPosts);
      } catch (err) {
        console.error("Erro ao carregar post:", err);
        setError(err instanceof Error ? err.message : "Erro ao carregar artigo");
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug, navigate]);

  const navigateToContato = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToContato();
      }, 200);
    } else {
      scrollToContato();
    }
  };

  const scrollToContato = () => {
    const el = document.getElementById("contato");
    if (el) {
      const offset = -80; // ajuste conforme altura do header fixo
      const top = el.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  // Loading State - Igual à página de notícias
  if (loading) {
    return (
      <div className="min-h-screen bg-muted/20 flex flex-col items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mb-4"></div>
        <p className="text-muted-foreground text-lg">Carregando artigo...</p>
      </div>
    );
  }

  // Error State - Igual à página de notícias
  if (error) {
    return (
      <div className="min-h-screen bg-muted/20">
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                { label: "Notícias", href: "/noticias" },
                { label: "Erro", current: true }
              ]}
            />
          </div>
        </section>

        <div className="container mx-auto px-4 py-20 text-center max-w-md">
          <p className="text-destructive text-lg mb-4">{error}</p>
          <Button onClick={() => window.location.reload()} variant="outline" className="mb-4">
            Tentar novamente
          </Button>
          <Button onClick={() => navigate("/noticias")}>
            Ver todas as notícias
          </Button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-muted/20 flex flex-col items-center justify-center py-20">
        <p className="text-muted-foreground text-lg">Artigo não encontrado.</p>
        <Button onClick={() => navigate("/noticias")} className="mt-4">
          Ver todas as notícias
        </Button>
      </div>
    );
  }

  // SEO structured data para o post
  const postStructuredData = {
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
  };

  return (
    <>
      <SEOHead
        title={`${post.title.replace(/<[^>]+>/g, "")} | Blog Astato`}
        description={post.content.replace(/<[^>]+>/g, "").substring(0, 160)}
        canonical={`https://astato.com.br/noticias/${slug}`}
        keywords="manutenção equipamentos médicos, videocirurgia, endoscopia, equipamentos hospitalares"
        structuredData={postStructuredData}
      />

      <div className="min-h-screen bg-muted/10">
        {/* Breadcrumb Navigation */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                { label: "Notícias", href: "/noticias" },
                { label: post.title.replace(/<[^>]+>/g, "").substring(0, 50) + "...", current: true }
              ]}
            />
          </div>
        </section>

        <article className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Botão Voltar Melhorado */}
              <Button
                onClick={() => navigate("/noticias")}
                variant="outline"
                size="sm"
                className="mb-8 hover:bg-primary hover:text-white transition-smooth"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span>Voltar às Notícias</span>
              </Button>

              {/* Header do Post */}
              <header className="mb-12" id="postHeader">
                {post.featuredImage && (
                  <div className="relative mb-8 rounded-lg overflow-hidden shadow-medical aspect-video">
                    <img
                      src={post.featuredImage}
                      alt={post.title.replace(/<[^>]+>/g, "")}
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Overlay para melhor legibilidade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  </div>
                )}

                <div className="space-y-6">
                  <h1
                    className="text-5xl font-bold [text-shadow:0_0_8px_rgba(59,130,246,0.3)]"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />

                  {/* Meta informações */}
                  <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.publishDate}>
                        {formatDate(post.publishDate)}
                      </time>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>5 min de leitura</span>
                    </div>
                  </div>
                </div>
              </header>

              {/* Conteúdo do Post */}
              <div className="blog-content prose prose-headings:font-heading prose-headings:font-bold prose-a:text-primary max-w-none">
                <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* CTA Contextual */}
              <div className="mt-16 p-8 bg-gradient-medical rounded-lg text-foreground text-center shadow-medical">
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
                    onClick={() => window.location.href = "tel:+5532999629076"}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    (32) 99962-9076
                  </Button>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-medical"
                    onClick={navigateToContato}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Fale Conosco
                  </Button>
                </div>
              </div>

              {/* Posts Relacionados */}
              {allPosts.length > 0 && (
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
