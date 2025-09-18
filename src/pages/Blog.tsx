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

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  featuredImage: string;  // URL da imagem destacada
  category: string;       // Nome da primeira categoria
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
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

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
            category: categoriasNomes.length > 0 ? categoriasNomes[0] : "Sem categoria",
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

  const categories = ["Todas", ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todas" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
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

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Hero Section */}
      <section className="bg-gradient-medical text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
            <Newspaper className="w-5 h-5 mr-2" />
            <span className="text-sm text-foreground font-medium">Blog Astato</span>
          </div>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            Notícias & Artigos
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Mantenha-se atualizado com as últimas novidades do setor médico, dicas
            técnicas e insights da nossa equipe especializada.
          </p>
        </div>
      </section>
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
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            {/* Categories */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Posts Grid */}
      <section className="py-16">
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
                <Card
                  key={post.id}
                  className="overflow-hidden shadow-card hover:shadow-medical transition-all duration-300 border-0 bg-background group cursor-pointer"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                    <CardHeader className="space-y-3">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{post.author.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="pt-2">
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 group">
                          Ler artigo completo
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          )}
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
                    onClick={() => setCurrentPage(i + 1)}
                    className="min-w-[2.5rem]"
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Próxima
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
