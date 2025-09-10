import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Clock, User, Newspaper, MapPin } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Novas Tecnologias em Equipamentos de Videocirurgia 2024",
      excerpt: "Conheça as principais inovações tecnológicas que estão revolucionando os procedimentos de videocirurgia e como manter seus equipamentos atualizados.",
      category: "Tecnologia",
      date: "15 Jan 2024",
      readTime: "5 min",
      author: "Dr. Carlos Astato",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Protocolo de Manutenção Preventiva: Guia Completo",
      excerpt: "Estabeleça rotinas eficazes de manutenção preventiva para garantir a longevidade e performance ideal dos seus equipamentos médicos.",
      category: "Manutenção",
      date: "08 Jan 2024",
      readTime: "7 min",
      author: "Equipe Técnica Astato",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Certificações de Qualidade em Serviços Médicos",
      excerpt: "A importância das certificações ISO e outras normas internacionais para garantir a qualidade dos serviços de manutenção médica.",
      category: "Qualidade",
      date: "02 Jan 2024",
      readTime: "4 min",
      author: "Ana Paula Santos",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=400&fit=crop"
    }
  ];

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
            Acompanhe as últimas novidades do setor médico, dicas de manutenção e
            insights técnicos da nossa equipe especializada.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-medical border-0 bg-background">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">
                    Destaque
                  </Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <Badge variant="secondary">{news[0].category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{news[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{news[0].readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                    {news[0].title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {news[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{news[0].author}</span>
                    </div>

                    <Button className="shadow-medical group">
                      Ler Artigo Completo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {news.slice(1).map((article) => (
            <Card key={article.id} className="overflow-hidden shadow-card hover:shadow-medical transition-all duration-300 border-0 bg-background group cursor-pointer">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{article.category}</Badge>
                </div>
              </div>

              <CardHeader className="space-y-3">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{article.author}</span>
                  </div>

                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                    Ler mais
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="text-center">
          <Card className="bg-muted/30 border-0 p-8 lg:p-12 shadow-medical">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="font-heading text-3xl font-bold text-foreground">
                Receba Conteúdo Exclusivo
              </h3>
              <p className="text-muted-foreground text-lg">
                Cadastre-se em nossa newsletter e receba dicas técnicas, novidades do setor
                e conteúdos exclusivos sobre manutenção médica.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu e-mail profissional"
                  className="flex-1 px-4 py-3 rounded-xl bg-background border border-input placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button className="px-6 shadow-medical">
                  Inscrever-se
                </Button>
              </div>

              <p className="text-muted-foreground text-sm">
                Seus dados estão seguros. Não compartilhamos informações com terceiros.
              </p>
            </div>
          </Card>
        </div>
        {/* Map Section */}
        <div className="mt-16">
          <Card className="overflow-hidden shadow-medical border-0">
            <div className="bg-muted/50 p-6 border-b">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Nossa Localização
              </h3>
              <p className="text-muted-foreground">
                Venha nos conhecer pessoalmente em nosso escritório em Juiz de Fora
              </p>
            </div>
            <div className="h-96 bg-muted/30 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="w-12 h-12 text-primary mx-auto" />
                <div>
                  <p className="font-medium text-foreground">R. Professor Benjamim Colucci, 50</p>
                  <p className="text-muted-foreground">Sala 201 E 208 - Juiz de Fora/MG</p>
                </div>
                <Button variant="outline">
                  Abrir no Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;