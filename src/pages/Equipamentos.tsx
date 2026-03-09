import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Shield, Wrench, CheckCircle, History, TrendingUp, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import fornecimentoImg from "@/assets/fornecimento-equipamentos-videocirurgia-hospitalar.webp";
import {
  BaseCarousel as Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/BaseCarousel";
import LazyImage from "@/components/ui/LazyImage";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";

// Import equipment images
import test1 from "@/assets/test1.jpg";
import test2 from "@/assets/test2.jpg";
import test3 from "@/assets/test3.png";
import test4 from "@/assets/test4.jpg";
import test5 from "@/assets/test5.jpg";

const Equipamentos = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: History,
      title: "O que nos trouxe até aqui?",
      content: [
        "Após anos atuando exclusivamente na manutenção de equipamentos de videocirurgia, acumulamos conhecimento técnico profundo sobre desempenho, durabilidade e padrões de qualidade exigidos no dia a dia hospitalar.",
        "Essa experiência prática abriu espaço para um novo passo.",
      ],
    },
    {
      icon: TrendingUp,
      title: "Por que essa ampliação?",
      content: [
        "Percebemos que muitos clientes buscavam orientação técnica também no momento da aquisição de equipamentos.",
        "A ampliação para comercialização surge como extensão natural da nossa atuação técnica, oferecendo mais segurança na escolha e maior alinhamento entre manutenção e fornecimento.",
      ],
    },
    {
      icon: Anchor,
      title: "O que continua igual?",
      content: [
        "Nossa essência permanece a mesma: responsabilidade técnica, transparência e compromisso com o funcionamento seguro dos equipamentos.",
        "A base continua sendo a manutenção especializada. A comercialização é um complemento estruturado, não uma mudança de foco.",
      ],
    },
  ];

  const equipments = [
    {
      id: 1,
      name: "Ótica Rígida 0°",
      category: "Óticas",
      image: test1,
      description: "Ótica de alta definição para procedimentos laparoscópicos",
    },
    {
      id: 2,
      name: "Pinça Laparoscópica",
      category: "Instrumentais",
      image: test2,
      description: "Instrumental cirúrgico de precisão para videocirurgia",
    },
    {
      id: 3,
      name: "Fonte de Luz LED",
      category: "Iluminação",
      image: test3,
      description: "Fonte de luz LED de alta potência e durabilidade",
    },
    {
      id: 4,
      name: "Câmera Full HD",
      category: "Câmeras",
      image: test4,
      description: "Sistema de câmera com resolução Full HD para cirurgias",
    },
    {
      id: 5,
      name: "Trocárter 10mm",
      category: "Instrumentais",
      image: test5,
      description: "Trocárter reutilizável com válvula de segurança",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Garantia de Qualidade",
      description: "Todos os equipamentos passam por rigoroso controle de qualidade",
    },
    {
      icon: Wrench,
      title: "Suporte Técnico",
      description: "Assistência técnica especializada incluída",
    },
    {
      icon: ShoppingCart,
      title: "Condições Especiais",
      description: "Preços competitivos e condições de pagamento flexíveis",
    },
  ];

  const whyBuyFromUs = [
    "Equipamentos selecionados por especialistas em manutenção",
    "Curadoria técnica rigorosa",
    "Garantia estendida em todos os produtos",
    "Suporte técnico pós-venda",
    "Entrega para todo o Brasil",
    "Condições especiais para hospitais e clínicas"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Equipamentos de Videocirurgia",
    "description": "Equipamentos médicos de videocirurgia selecionados com curadoria técnica especializada",
    "brand": {
      "@type": "Organization",
      "name": "Astato Equipamentos Médicos"
    },
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "BRL"
    }
  };

  return (
    <>
      <SEOHead
        title="Equipamentos de Videocirurgia | Astato - Vendas"
        description="Equipamentos de videocirurgia selecionados por especialistas em manutenção. Óticas, instrumentais, câmeras e fontes de luz com garantia e suporte técnico."
        keywords="equipamentos videocirurgia, óticas cirúrgicas, instrumentais laparoscópicos, câmeras médicas, fonte de luz LED"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-muted/20">

        {/* Breadcrumb */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                { label: "Equipamentos", current: true }
              ]}
            />
          </div>
        </section>

        {/* Hero Section - Full width, inspired by Confiance Medical reference */}
        <header className="relative w-full h-52 sm:h-72 md:h-auto md:aspect-[3/1] overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src={fornecimentoImg}
              alt="Sistemas de videocirurgia - equipamentos médicos"
              className="w-full h-full object-cover object-left sm:object-left-top md:object-center"
              width={1920}
              height={640}
              loading="eager"
            />
          </div>
        </header>



        {/* Interactive Tabs */}
        <section className="relative z-20 bg-muted/30 py-10">
          <div className="container mx-auto px-4">
            {/* Tab Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              {tabs.map((tab, i) => {
                const isActive = activeTab === i;
                return (
                  <Card
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`group cursor-pointer p-3 sm:p-5 lg:p-6 text-center transition-all duration-200 ease-in-out ${
                      isActive
                        ? "bg-[hsl(180_27%_97%)] border-2 border-primary shadow-card"
                        : "bg-background border border-border shadow-card hover:bg-[hsl(180_27%_97%)] hover:border-2 hover:border-primary"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <div
                        className={`p-2 sm:p-3 rounded-full transition-all duration-200 ${
                          isActive ? "bg-gray-900" : "bg-primary group-hover:bg-gray-900"
                        }`}
                      >
                        <tab.icon
                          className="w-5 h-5 sm:w-7 sm:h-7 text-white transition-colors duration-200"
                        />
                      </div>
                      <span className="font-heading text-sm sm:text-base lg:text-lg font-bold text-foreground leading-tight">
                        {tab.title}
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="mt-6 bg-background rounded-2xl p-6 sm:p-8 lg:p-10 shadow-card min-h-[160px]">
              {tabs.map((tab, i) => (
                <div
                  key={i}
                  className={`transition-opacity duration-300 ${
                    activeTab === i ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  <div className="border-l-4 border-primary pl-4">
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
                      {tab.title}
                    </h2>
                    {tab.content.map((paragraph, j) => (
                      <p key={j} className="text-muted-foreground text-base sm:text-lg mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            {/* Benefits Row */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-card transition-all duration-300 border-0 bg-background"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Why Buy From Us */}
            <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-card mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    Por que comprar conosco?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Nossa experiência em manutenção nos permite selecionar apenas equipamentos que atendem aos mais altos padrões de qualidade.
                  </p>
                  <ul className="space-y-4">
                    {whyBuyFromUs.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-medical rounded-2xl p-8 text-center">
                  <ShoppingCart className="w-24 h-24 text-primary mx-auto mb-6 opacity-80" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Solicite um Orçamento
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Entre em contato para conhecer nosso catálogo completo e condições especiais.
                  </p>
                  <Link to="/contato">
                    <Button size="lg" className="shadow-medical group">
                      Fale Conosco
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Equipment Carousel */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Alguns de Nossos Equipamentos
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Confira alguns dos equipamentos disponíveis em nosso catálogo.
                </p>
              </div>

              <div className="relative px-12">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {equipments.map((equipment) => (
                      <CarouselItem
                        key={equipment.id}
                        className="pl-4 md:basis-1/2 lg:basis-1/3"
                      >
                        <Card className="overflow-hidden shadow-card hover:shadow-medical transition-all duration-300 border-0 bg-background h-full">
                          <div className="aspect-[4/3] overflow-hidden bg-muted">
                            <LazyImage
                              src={equipment.image}
                              alt={equipment.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              width={400}
                              height={300}
                            />
                          </div>
                          <CardContent className="p-6">
                            <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full mb-3">
                              <span className="text-xs font-medium text-primary">
                                {equipment.category}
                              </span>
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                              {equipment.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {equipment.description}
                            </p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </Carousel>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contato">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medical group"
                >
                  Solicitar Catálogo Completo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Equipamentos;
