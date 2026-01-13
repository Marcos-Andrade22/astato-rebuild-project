import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Clock, User, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  featuredImage: string;
  tags: string[];
  publishDate: string;
  author: {
    name: string;
  };
  readTime: string;
  status: "publish" | "draft";
}

const NewsSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://www.astato.com.br/wp-json/wp/v2/posts?_embed"
        );
        const data = await response.json();

        const formattedPosts: Post[] = data.map((post: any) => {
          const tagsNomes: string[] = post._embedded?.["wp:term"]?.[1]?.map(
            (tag: any) => tag.name
          ) || [];

          const imagem =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

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
            readTime: "5 min",
            status: post.status,
          };
        });

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) return <p>Carregando notícias...</p>;

  if (posts.length === 0)
    return (
      <section id="noticias" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground">Nenhuma notícia disponível.</p>
        </div>
      </section>
    );

  return (
    <section id="noticias" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Newspaper className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Notícias & Artigos</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mantenha-se Atualizado
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe as últimas novidades do setor médico, dicas de manutenção e insights técnicos da nossa equipe especializada.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-medical border-0 bg-background">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img
                  src={posts[0].featuredImage}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">
                    Destaque
                  </Badge>
                </div> */}
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    {/* <Badge variant="secondary">
                      {posts[0].tags.length > 0 ? posts[0].tags[0] : "Geral"}
                    </Badge> */}
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(posts[0].publishDate)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{posts[0].readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                    {posts[0].title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {posts[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{posts[0].author.name}</span>
                    </div>

                    <Link to={`/noticias/${posts[0].slug}`}>
                      <Button className="shadow-medical group">
                        Ler Artigo Completo
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {posts.slice(1, 3).map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden shadow-card hover:shadow-medical transition-all duration-300 border-0 bg-background group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* <div className="absolute top-4 left-4">
                  <Badge variant="secondary">
                    {post.tags.length > 0 ? post.tags[0] : "Geral"}
                  </Badge>
                </div> */}
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

                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{post.author.name}</span>
                  </div>

                  <Link to={`/noticias/${post.slug}`}>
                    <Button variant="link" size="sm" className="text-primary hover:text-primary/80 p-0">
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
