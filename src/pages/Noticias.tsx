import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  User,
  Search,
  Filter,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Newspaper
} from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/ui/LazyImage";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  featuredImage: string;  // URL da imagem destacada    // Nome da primeira categoria
  tags: string[];         // Nomes das tags
  publishDate: string;
  author: {
    name: string;
    avatar?: string;
  };
  readTime: string;
  status: "publish" | "draft";
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // SEO structured data para Noticias
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://astato.com.br/noticias",
    "url": "https://astato.com.br/noticias",
    "name": "Notícias Astato - Equipamentos Médicos",
    "description": "Notícias, artigos e novidades sobre manutenção de equipamentos médicos, videocirurgia e tecnologia hospitalar",
    "publisher": {
      "@type": "Organization",
      "name": "Astato Equipamentos Médicos",
      "url": "https://astato.com.br"
    },
    "inLanguage": "pt-BR"
  };

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://www.astato.com.br/wp-json/wp/v2/posts?_embed"
        );
        const data = await response.json();

        const formattedPosts: Post[] = data.map((post: any) => {
          // Pegando categorias
          const categoriasNomes: string[] = post._embedded?.["wp:term"]?.[0]?.map(
            (cat: any) => cat.name
          ) || [];

          // Pegando tags
          const tagsNomes: string[] = post._embedded?.["wp:term"]?.[1]?.map(
            (tag: any) => tag.name
          ) || [];

          // Imagem destacada
          const imagem =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

          // Autor
          const authorName = post._embedded?.author?.[0]?.name || "Autor desconhecido";

          return {
            id: post.id,
            title: post.title.rendered,
            slug: post.slug,
            excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
            content: post.content.rendered,
            featuredImage: imagem,
            tags: tagsNomes,
            publishDate: post.date,
            author: { name: authorName },
            readTime: "N/A",
            status: post.status,
          };
        });

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      }
    }

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  // Scroll para topo ao mudar currentPage
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <>
      <SEOHead
        title="Notícias Astato - Equipamentos Médicos | Videocirurgia & Endoscopia"
        description="Fique por dentro das novidades em equipamentos médicos, tecnologia hospitalar, manutenção de videocirurgia e tendências do setor de saúde."
        canonical="https://astato.com.br/noticias"
        keywords="noticias equipamentos médicos, notícias videocirurgia, tecnologia hospitalar, manutenção médica, endoscopia"
        structuredData={blogStructuredData}
      />

      <div className="min-h-screen bg-muted/20">
        {/* Breadcrumb Navigation */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                { label: "Notícias", current: true }
              ]}
            />
          </div>
        </section>

        {/* Hero Section */}
        <header className="bg-gradient-medical text-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              <Newspaper className="w-5 h-5 mr-2" />
              <span className="text-sm text-foreground font-medium">Notícias Astato</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6 text-foreground">
              Notícias & Artigos Técnicos
            </h1>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
              Mantenha-se atualizado com as últimas novidades em equipamentos médicos,
              dicas técnicas de manutenção e insights da nossa equipe especializada.
            </p>
          </div>
        </header>

        {/* Filters Section */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Pesquisar artigos..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Resetar pra página 1 ao buscar para evitar paginação inválida
                  }}
                  className="pl-10"
                />
              </div>
              {/* Categories */}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <main className="py-16">
          <div className="container mx-auto px-4">
            {currentPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum artigo encontrado com os filtros selecionados.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentPosts.map((post) => (
                  <article
                    key={post.id}
                    className="overflow-hidden shadow-card hover:shadow-medical transition-smooth border border-border/50 bg-background group cursor-pointer rounded-lg hover:scale-[1.02]"
                    itemScope
                    itemType="https://schema.org/BlogPosting"
                  >
                    <Link to={`/noticias/${post.slug}`} itemProp="url" className="block">
                      <div className="relative overflow-hidden">
                        <LazyImage
                          src={post.featuredImage}
                          alt={`Imagem do artigo: ${post.title} - equipamentos médicos`}
                          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                          width={400}
                          height={240}
                        />
                        {/* Overlay para melhor legibilidade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Ícone de leitura */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 p-2 rounded-full shadow-lg">
                            <ArrowRight className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        {/* Meta informações */}
                        <div className="flex items-center space-x-4 text-sm text-astato-light-green">
                          <time className="flex items-center space-x-1" dateTime={post.publishDate} itemProp="datePublished">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{formatDate(post.publishDate)}</span>
                          </time>
                          <Clock className="w-4 h-4" />
                          <span>5 min</span>
                        </div>

                        {/* Título */}
                        <h3
                          className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3"
                          dangerouslySetInnerHTML={{ __html: post.title }}
                          itemProp="headline"
                        />

                        {/* Excerpt */}
                        <p className="text-muted-foreground leading-relaxed line-clamp-3 text-base" itemProp="description">
                          {post.excerpt}
                        </p>

                        {/* Footer do card */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center space-x-2" itemProp="author" itemScope itemType="https://schema.org/Person">
                            <User className="w-4 h-4 text-astato-blue" />
                            <span className="text-sm font-medium text-foreground" itemProp="name">{post.author.name}</span>
                          </div>

                          {/* Tags */}
                          <div className="flex items-center space-x-2">
                            {post.tags.slice(0, 2).map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs border-astato-light-green text-astato-primary hover:bg-astato-light-green hover:text-foreground"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-3">
                          <div className="flex items-center justify-between">
                            <Button variant="link" size="sm" className="text-primary p-0 font-medium group">
                              Ler artigo completo
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Anterior
                </Button>

                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Button
                      key={i + 1}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        if (currentPage !== i + 1) {
                          setCurrentPage(i + 1);
                        }
                      }}
                      className="min-w-[2.5rem]"
                    >
                      {i + 1}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Próxima
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;
