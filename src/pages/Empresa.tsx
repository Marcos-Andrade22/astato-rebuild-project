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
        "Oferecer soluções em manutenção e fornecimento de equipamentos médicos com confiança, eficiência e alto padrão técnico, proporcionando segurança e conforto aos pacientes, cirurgiões e equipes envolvidas."
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
        "Qualidade, transparência, compromisso com o cliente, excelência técnica e responsabilidade com a saúde."
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

        {/* Hero Section - Texto à esquerda, imagem à direita */}
        <header className="relative bg-[hsl(var(--primary))] text-white overflow-hidden">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Text */}
              <div className="space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full">
                  <Building className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Sobre a Astato</span>
                </div>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Conheça Nossa História
                </h1>
                <p className="text-lg lg:text-xl text-white/85 max-w-xl mx-auto lg:mx-0">
                  A Astato nasceu em 2011 com um propósito claro: elevar o padrão da
                  manutenção de equipamentos médicos no Brasil.
                </p>
              </div>

              {/* Right - Image with organic shape mask */}
              <div className="relative flex justify-center lg:justify-end">
                <div
                  className="w-[320px] h-[360px] sm:w-[400px] sm:h-[440px] lg:w-[460px] lg:h-[500px] overflow-hidden"
                  style={{ borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%" }}
                >
                  <img
                    src={medicalProfessionals}
                    alt="Equipe médica profissional trabalhando com equipamentos de videocirurgia"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative glow */}
                <div
                  className="absolute -z-10 inset-0 scale-110 opacity-30 bg-white/10 blur-3xl"
                  style={{ borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            {/* About Grid - Evolução */}
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

              {/* Content - Nossa Evolução */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    Nossa Evolução
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Nossa história é marcada por evolução constante,
                    responsabilidade técnica e respeito a cada cliente que confia
                    seu equipamento à Astato.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Iniciamos nossa atuação com a manutenção de óticas rígidas e
                    instrumentais de videocirurgia e, ao longo dos anos,
                    evoluímos para atender todo o ecossistema da videocirurgia,
                    incluindo óticas semirrígidas e flexíveis, aparelhos
                    eletrônicos e instrumentais de diversas especialidades. Esse
                    crescimento foi acompanhado por expansão de estrutura,
                    aprimoramento técnico e incorporação de novas tecnologias.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Hoje, com mais de 14 anos de trajetória, seguimos guiados por
                    um princípio inegociável:{" "}
                    <strong>cada equipamento importa, porque cada vida importa</strong>.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Esse compromisso nos levou a dar um novo passo, ampliando
                    nossa atuação para oferecer também equipamentos médicos
                    selecionados e validados por especialistas, unindo
                    manutenção e fornecimento em um único lugar.
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
                    <Button
                      size="lg"
                      variant="outline"
                      className="group"
                    >
                      Fale Conosco
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quem Conduz a Astato */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Quem Conduz a Astato
                </h1>
                <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full font-semibold mb-8">
                  <User className="w-5 h-5 mr-2" />
                  Fernando Dielle - 14+ anos de experiência
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="font-heading text-3xl font-bold text-foreground">
                    Liderança com Experiência Incomparável
                  </h2>
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
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          30+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Anos em Vendas Médicas
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          15+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Anos em Manutenção
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {companyStats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-medical transition-all duration-300 border-0 bg-muted/30"
                >
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-primary/10 rounded-2xl w-fit mx-auto">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold text-foreground">
                        {stat.value !== null ? (
                          <CountUpNumber
                            end={stat.value}
                            duration={2000}
                            suffix={stat.suffix}
                          />
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
