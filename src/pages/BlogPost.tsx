import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  Share2,
  BookOpen,
  Tag,
  ChevronRight
} from "lucide-react";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  tags: string[];
  publishDate: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  readTime: string;
  status: 'published' | 'draft';
}

const BlogPost = () => {
  const { slug } = useParams();

  // Mock data - Em produção, isso viria da API do WordPress baseado no slug
  const posts: Post[] = [
    {
      id: 1,
      title: "Novas Tecnologias em Equipamentos de Videocirurgia 2024",
      slug: "novas-tecnologias-videocirurgia-2024",
      excerpt: "Conheça as principais inovações tecnológicas que estão revolucionando os procedimentos de videocirurgia e como manter seus equipamentos atualizados com as últimas tendências do mercado médico.",
      content: `
        <h2>A Revolução da Videocirurgia Moderna</h2>
        
        <p>A videocirurgia tem passado por transformações significativas nos últimos anos, impulsionada por avanços tecnológicos que melhoram tanto a precisão dos procedimentos quanto a experiência dos cirurgiões e pacientes.</p>
        
        <h3>Principais Inovações Tecnológicas</h3>
        
        <p>Entre as principais inovações que estão moldando o futuro da videocirurgia, destacamos:</p>
        
        <ul>
          <li><strong>Sistemas 4K e 8K Ultra HD:</strong> Proporcionam clareza visual excepcional, permitindo identificação precisa de estruturas anatômicas.</li>
          <li><strong>Realidade Aumentada (AR):</strong> Sobreposição de informações digitais à visualização em tempo real.</li>
          <li><strong>Inteligência Artificial:</strong> Assistência na tomada de decisões e identificação de padrões.</li>
          <li><strong>Robótica Avançada:</strong> Maior precisão e controle nos movimentos cirúrgicos.</li>
        </ul>
        
        <h3>Benefícios para Hospitais e Clínicas</h3>
        
        <p>A adoção dessas novas tecnologias traz benefícios consideráveis:</p>
        
        <blockquote>
          "A tecnologia não substitui a expertise médica, mas a potencializa de forma extraordinária." - Dr. Carlos Astato
        </blockquote>
        
        <p>Redução do tempo de cirurgia, menor trauma ao paciente e recuperação mais rápida são apenas alguns dos benefícios observados.</p>
        
        <h3>Manutenção e Cuidados Especiais</h3>
        
        <p>Com o aumento da complexidade tecnológica, a manutenção adequada torna-se ainda mais crítica. É essencial:</p>
        
        <ol>
          <li>Realizar calibrações regulares dos sistemas de imagem</li>
          <li>Manter atualizações de software em dia</li>
          <li>Treinar equipes técnicas especializadas</li>
          <li>Estabelecer protocolos de manutenção preventiva</li>
        </ol>
        
        <h3>Perspectivas para o Futuro</h3>
        
        <p>O futuro da videocirurgia promete ainda mais inovações, incluindo integração com IoT (Internet das Coisas) e análise preditiva para manutenção de equipamentos.</p>
      `,
      featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop",
      category: "Tecnologia",
      tags: ["Videocirurgia", "Inovação", "Equipamentos", "4K", "Realidade Aumentada"],
      publishDate: "2024-01-15",
      author: { 
        name: "Dr. Carlos Astato",
        bio: "Especialista em equipamentos médicos com mais de 15 anos de experiência no setor."
      },
      readTime: "5 min",
      status: 'published'
    }
  ];

  // Encontrar o post pelo slug
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-muted/20 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground mb-6">O artigo que você procura não existe ou foi removido.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const relatedPosts = posts.filter(p => 
    p.id !== post.id && 
    (p.category === post.category || p.tags.some(tag => post.tags.includes(tag)))
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-foreground">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Link>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h1 className="font-heading text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{post.author.name}</p>
                    {post.author.bio && (
                      <p className="text-sm text-muted-foreground">{post.author.bio}</p>
                    )}
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-medical"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-0 shadow-card">
              <CardContent className="p-8 lg:p-12">
                <div 
                  className="prose prose-lg max-w-none text-foreground
                    prose-headings:text-foreground prose-headings:font-heading prose-headings:font-bold
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                    prose-li:mb-2 prose-li:leading-relaxed
                    prose-blockquote:border-l-4 prose-blockquote:border-primary 
                    prose-blockquote:bg-muted/30 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
                    prose-blockquote:text-foreground prose-blockquote:font-medium prose-blockquote:italic"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Tag className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-lg font-semibold">Tags</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Artigos Relacionados
                </h2>
                <p className="text-muted-foreground">
                  Continue lendo outros artigos sobre o mesmo assunto
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden shadow-card hover:shadow-medical transition-all duration-300 border-0 bg-background group">
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <div className="relative">
                        <img
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{relatedPost.category}</Badge>
                        </div>
                      </div>

                      <CardHeader className="space-y-3">
                        <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </CardHeader>

                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{formatDate(relatedPost.publishDate)}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-medical text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold">
              Gostou do Conteúdo?
            </h2>
            <p className="text-white/90 text-lg">
              Entre em contato conosco para saber como podemos ajudar com a manutenção
              dos seus equipamentos médicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90">
                Solicitar Orçamento
              </Button>
              <Link to="/blog">
                <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                  Ver Mais Artigos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;