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
  Eye,
  User
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
      description:
        "Oferecer soluções em manutenção e fornecimento de equipamentos para videocirurgia, garantindo confiança, eficiência e alto padrão técnico, proporcionando conforto e segurança aos pacientes, cirurgiões e a toda a equipe envolvida."
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser reconhecida pelos clientes como a melhor e mais confiável solução em manutenção e fornecimento de equipamentos médicos no Brasil."
    },
    {
      icon: Building,
      title: "Valores",
      description:
        "Ética, compromisso, transparência com os clientes e colaboradores."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Astato Equipamentos Médicos",
    url: "https://astato.com.br",
    description:
      "Especialistas em manutenção de equipamentos de videocirurgia há mais de 14 anos",
    foundingDate: "2011",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rodovia BR 040 Número 64, 13B",
      addressLocality: "Matias Barbosa",
      addressRegion: "MG",
      postalCode: "36120-000",
      addressCountry: "BR"
    },
    founder: {
      "@type": "Person",
      name: "Fernando Dielle"
    }
  };

  return (
    <>
      <SEOHead
        title="Sobre a Empresa | Astato - Manutenção de Equipamentos Médicos"
        description="Conheça a história da Astato: nascida em 2011 com um propósito claro de elevar o padrão da manutenção de equipamentos médicos no Brasil, com mais de 14 anos de trajetória."
        keywords="sobre astato, empresa manutenção equipamentos médicos, história astato, videocirurgia, Fernando Dielle"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-muted/20">
        {/* Breadcrumb */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                {
                  label: "Empresa",
                  current: true
                }
              ]}
            />
          </div>
        </section>

        {/* Hero Section - Grid com texto solto + imagem (mesma altura) */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="container mx-auto px-4 relative z-10">

            {/* Grid: Texto solto + Imagem (altura exata, fonte MAIOR) */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">
              {/* Left - Texto SOLTO com fonte MAIOR */}
              <div className="h-[300px] sm:h-[400px] lg:h-[480px] flex items-center justify-center px-4 lg:px-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-primary leading-tight max-w-lg mx-auto text-center lg:text-left tracking-tight">
                  A Astato nasceu com um propósito claro: elevar o padrão da manutenção de equipamentos médicos no Brasil
                </h2>
              </div>

              {/* Right - Image */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-[480px]">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-medical">
                  <img
                    src={medicalProfessionals}
                    alt="Equipe médica profissional trabalhando com equipamentos de videocirurgia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 lg:-bottom-6 lg:-right-6 lg:left-auto bg-primary rounded-2xl p-4 lg:p-5 shadow-medical text-white">
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-heading font-bold">
                      <CountUpNumber end={14} duration={2000} suffix="+" />
                    </div>
                    <div className="text-xs lg:text-sm opacity-90">Anos de</div>
                    <div className="text-xs lg:text-sm opacity-90">Experiência</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conheça a nossa história centralizado ABAIXO dos dois */}
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
                Conheça Nossa História
              </h1>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed px-4">
                <p>
                  Nossa história é marcada por evolução constante,
                  responsabilidade técnica e respeito a cada cliente que confia
                  seu equipamento à Astato.
                </p>
                <p>
                  Iniciamos nossa atuação com a manutenção de óticas rígidas e
                  instrumentais de videocirurgia e, ao longo dos anos,
                  evoluímos para atender todo o ecossistema da videocirurgia,
                  incluindo óticas semirrígidas e flexíveis, aparelhos
                  eletrônicos e instrumentais de diversas especialidades.
                </p>
                <p>
                  Hoje, com mais de 14 anos de trajetória, seguimos guiados por
                  um princípio inegociável:{" "}
                  <strong className="text-foreground">
                    cada equipamento importa, porque cada vida importa
                  </strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-12 justify-center">
                {/* <Link to="/diferenciais">
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
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="container mx-auto px-4">

            {/* Quem Conduz a Astato */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Quem Conduz a Astato
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground mb-6">
                    À frente da Astato está Fernando Dielle, profissional com
                    mais de 30 anos de experiência em vendas de equipamentos
                    para a área médica e mais de 15 anos de atuação direta na
                    manutenção de equipamentos de videocirurgia.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Com visão de longo prazo e profundo conhecimento técnico,
                    Fernando liderou a expansão da empresa, estruturou processos,
                    formou equipes qualificadas e consolidou a empresa como
                    referência nacional em manutenção especializada de
                    equipamentos de videocirurgia.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80">
                    "Excelência técnica é obrigação, e cuidado é princípio."
                  </blockquote>
                </div>
                <div className="relative lg:ml-auto">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 lg:p-12 shadow-medical">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                        Fernando Dielle
                      </h3>
                      <div className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        14+ anos de experiência
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>

            {/* Mission, Vision, Values - Nossos Pilares */}
            <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-card">
              <div className="text-center mb-12">
                <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Nossos Pilares
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Os valores que guiam nossa atuação no mercado de equipamentos
                  médicos.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((item, index) => (
                  <Card
                    key={index}
                    className="border-l-4 border-l-primary bg-primary/5 p-6"
                  >
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
