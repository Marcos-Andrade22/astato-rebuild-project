import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Wrench,
  Cpu,
  ArrowRight,
  CheckCircle,
  Settings,
  Stethoscope,
  Camera,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";
import heroImage from "@/assets/hero-medical-equipment.jpg";

const Servicos = () => {
  const mainServices = [
    {
      id: "oticas",
      icon: Eye,
      title: "Manutenção de Óticas Rígidas, Semirrígidas e Flexíveis",
      description: "Restauramos a qualidade óptica original de endoscópios, laparoscópios e artroscópios com precisão de fábrica.",
      features: [
        "Limpeza e polimento de lentes",
        "Substituição de fibras ópticas danificadas",
        "Reparo de sistemas de foco",
        "Teste de transmissão de luz",
        "Calibração e certificação"
      ]
    },
    {
      id: "instrumentais",
      icon: Wrench,
      title: "Manutenção de Instrumentais de Videocirurgia",
      description: "Reparo e manutenção de pinças, tesouras, trocárteres e demais instrumentos cirúrgicos.",
      features: [
        "Afiação de lâminas e tesouras",
        "Reparo de articulações e mecanismos",
        "Substituição de componentes desgastados",
        "Limpeza ultrassônica",
        "Teste funcional completo"
      ]
    },
    {
      id: "eletronicos",
      icon: Cpu,
      title: "Manutenção de Aparelhos Eletrônicos",
      description: "Serviço especializado em câmeras, fontes de luz, processadores de vídeo e monitores.",
      features: [
        "Diagnóstico e reparo de placas",
        "Calibração de cores e imagem",
        "Substituição de componentes eletrônicos",
        "Atualização de software quando aplicável",
        "Teste de segurança elétrica"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Camera,
      title: "Câmeras HD/4K",
      description: "Manutenção de sistemas de câmera de alta definição"
    },
    {
      icon: Lightbulb,
      title: "Fontes de Luz LED",
      description: "Reparo e calibração de fontes de luz LED e xenon"
    },
    {
      icon: Stethoscope,
      title: "Endoscópios",
      description: "Manutenção completa de endoscópios rígidos e flexíveis"
    },
    {
      icon: Settings,
      title: "Processadores",
      description: "Reparo de processadores de vídeo e imagem"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Manutenção de Equipamentos de Videocirurgia",
    "provider": {
      "@type": "Organization",
      "name": "Astato Equipamentos Médicos"
    },
    "description": "Serviços especializados de manutenção em óticas, instrumentais e equipamentos eletrônicos de videocirurgia",
    "areaServed": "Brasil"
  };

  return (
    <>
      <SEOHead
        title="Serviços de Manutenção | Astato - Equipamentos de Videocirurgia"
        description="Serviços especializados de manutenção em óticas rígidas, semirrígidas, flexíveis, instrumentais e aparelhos eletrônicos de videocirurgia."
        keywords="manutenção óticas, reparo endoscópios, manutenção instrumentais videocirurgia, assistência técnica equipamentos médicos"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-muted/20">
        {/* Breadcrumb */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                { label: "Serviços", current: true }
              ]}
            />
          </div>
        </section>

        {/* Hero Section */}
        <header className="relative bg-primary text-white py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Manutenção de equipamentos médicos"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
                <Wrench className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Nossos Serviços</span>
              </div>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                Manutenção em Equipamentos de Videocirurgia
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Restauração de equipamentos médicos com padrão de fábrica, qualidade e segurança para hospitais e clínicas em todo o Brasil.
              </p>
            </div>
          </div>
        </header>

        {/* Main Services */}
        <main className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Serviços Especializados
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Oferecemos manutenção completa em três categorias principais de equipamentos médicos.
              </p>
            </div>

            <div className="space-y-8 mb-16">
              {mainServices.map((service, index) => (
                <Card
                  key={service.id}
                  id={service.id}
                  className="overflow-hidden shadow-card hover:shadow-medical transition-all duration-300 border-0 bg-background scroll-mt-32"
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-primary/10 rounded-2xl">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`bg-gradient-medical p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="p-8 bg-white/10 rounded-3xl backdrop-blur-sm">
                        <service.icon className="w-32 h-32 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Services */}
            <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-card">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Equipamentos Atendidos
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Além dos serviços principais, atendemos diversos tipos de equipamentos.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {additionalServices.map((service, index) => (
                  <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 border-0 bg-muted/30 text-center">
                    <div className="p-4 bg-primary/10 rounded-2xl w-fit mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Link to="/contato">
                  <Button size="lg" className="shadow-medical group">
                    Entre em Contato
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Servicos;
