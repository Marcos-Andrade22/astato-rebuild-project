import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Award,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle,
  Building,
  Target,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import medicalProfessionals from "@/assets/medical-professionals.jpg";
import CountUpNumber from "@/components/ui/CountUpNumber";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";

const Empresa = () => {
  const companyStats = [
    {
      icon: Calendar,
      value: 14,
      suffix: "+",
      label: "Anos de Experiência",
      description: "Tradição no mercado médico"
    },
    {
      icon: Award,
      value: 35000,
      suffix: "+",
      label: "Equipamentos Atendidos",
      description: "Histórico de excelência"
    },
    {
      icon: Users,
      value: 100,
      suffix: "+",
      label: "Hospitais Atendidos",
      description: "Confiança dos profissionais"
    },
    {
      icon: MapPin,
      value: null,
      displayValue: "Nacional",
      label: "Cobertura",
      description: "Atendimento em todo Brasil"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Oferecer soluções em manutenção e fornecimento de equipamentos médicos com confiança, eficiência e alto padrão técnico, proporcionando segurança e conforto aos pacientes, cirurgiões e equipes envolvidas."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser reconhecida pelos clientes como a melhor e mais confiável solução em manutenção e fornecimento de equipamentos médicos no Brasil."
    },
    {
      icon: Building,
      title: "Valores",
      description: "Qualidade, transparência, compromisso com o cliente, excelência técnica e responsabilidade com a saúde."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Astato Equipamentos Médicos",
    "url": "https://astato.com.br",
    "description": "Especialistas em manutenção de equipamentos de videocirurgia há mais de 14 anos",
    "foundingDate": "2010",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rodovia BR 040 Número 64, 13B",
      "addressLocality": "Matias Barbosa",
      "addressRegion": "MG",
      "postalCode": "36120-000",
      "addressCountry": "BR"
    }
  };

  return (
    <>
      <SEOHead
        title="Sobre a Empresa | Astato - Manutenção de Equipamentos Médicos"
        description="Conheça a história da Astato: mais de 14 anos de experiência em manutenção de equipamentos de videocirurgia, atendendo hospitais e clínicas em todo o Brasil."
        keywords="sobre astato, empresa manutenção equipamentos médicos, história astato, videocirurgia"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-muted/20">
        {/* Breadcrumb */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                { label: "Empresa", current: true }
              ]}
            />
          </div>
        </section>

        {/* Hero Section */}
        <header className="bg-gradient-medical text-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              <Building className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Sobre a Astato</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
              Conheça Nossa História
            </h1>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
              Especialistas em restaurar a qualidade original dos equipamentos médicos de videocirurgia.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            {/* About Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              {/* Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-medical">
                  <img
                    src={medicalProfessionals}
                    alt="Equipe médica profissional trabalhando com equipamentos de videocirurgia"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-primary rounded-2xl p-6 shadow-medical text-white">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold">
                      <CountUpNumber end={14} duration={2000} suffix="+" />
                    </div>
                    <div className="text-sm opacity-90">Anos de</div>
                    <div className="text-sm opacity-90">Experiência</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    Especialistas em restaurar a qualidade original dos equipamentos
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Com mais de 34 anos de experiência na área da saúde, e a 14 anos trabalhando exclusivamente com manutenção de equipamentos médicos e videocirurgia. Nossa prioridade é garantir que cada equipamento volte a funcionar com a confiabilidade de fábrica, reduzindo riscos, evitando retrabalhos e prolongando sua vida útil.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Agora, ampliamos nossa atuação com a oferta de equipamentos médicos de vídeo cirurgia selecionados com curadoria técnica, mantendo o compromisso com segurança, qualidade e transparência.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/diferenciais">
                    <Button size="lg" className="shadow-medical group">
                      Nossos Diferenciais
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contato">
                    <Button size="lg" variant="outline" className="group">
                      Fale Conosco
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {companyStats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-medical transition-all duration-300 border-0 bg-muted/30">
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-primary/10 rounded-2xl w-fit mx-auto">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold text-foreground">
                        {stat.value !== null ? (
                          <CountUpNumber end={stat.value} duration={2000} suffix={stat.suffix} />
                        ) : (
                          stat.displayValue
                        )}
                      </div>
                      <div className="font-medium text-foreground">
                        {stat.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission, Vision, Values */}
            <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-card">
              <div className="text-center mb-12">
                <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Nossos Pilares
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Os valores que guiam nossa atuação no mercado de equipamentos médicos.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-primary bg-primary/5 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-heading font-semibold text-xl text-foreground">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Empresa;
