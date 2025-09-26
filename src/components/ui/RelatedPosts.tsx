import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/ui/LazyImage";
import { Post } from "@/types/Post";
import { Button } from "./button";

interface RelatedPostsProps {
  currentPostId: number;
  posts: Post[];
  maxPosts?: number;
}

const RelatedPosts = ({ currentPostId, posts, maxPosts = 3 }: RelatedPostsProps) => {
  // Filtrar posts relacionados (excluindo o post atual)
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .slice(0, maxPosts);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <div className="mb-8">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
          Posts Relacionados
        </h2>
        <p className="text-muted-foreground text-lg">
          Continue lendo sobre equipamentos médicos e manutenção técnica
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <article key={post.id} className="group">
            <Link to={`/blog/${post.slug}`}>
              <Card className="overflow-hidden border border-border/50 hover:shadow-medical transition-smooth hover:scale-[1.02] bg-background">
                <div className="relative overflow-hidden">
                  <LazyImage
                    src={post.featuredImage}
                    alt={`${post.title} - Astato Equipamentos Médicos`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    width={300}
                    height={192}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-3 left-3">
                    <Badge className="bg-astato-primary text-white text-xs px-2 py-1">
                      {post.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 p-1.5 rounded-full shadow-lg">
                      <ArrowRight className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-astato-light-green">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <time dateTime={post.publishDate}>
                        {formatDate(post.publishDate)}
                      </time>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>3 min</span>
                    </div>
                  </div>

                  <h3
                    className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="pt-2">
                    <Button variant="link">
                      Ler mais →
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;