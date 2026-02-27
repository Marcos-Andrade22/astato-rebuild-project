import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Award,
  MapPin,
  Calendar,
  ArrowRight,
  Building,
  Target,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import equipeAstato from "@/assets/equipe-astato-manutencao-videocirurgia.png";
import estruturaEquipe from "@/assets/estrutura-e-equipe-astato.png";
import fernandoDielle from "@/assets/fernando-dielle-especialista-manutencao-equipamentos-videocirurgia.webp";
import CountUpNumber from "@/components/ui/CountUpNumber";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";

const Empresa = () => {
  const companyStats = [
    {
      icon: Calendar,
      value: 14,
      prefix: "+",
      label: "Anos de Experiência",
      description: "Tradição no mercado médico"
    },
    {
      icon: Award,
      value: 35000,
      prefix: "+",
      label: "Equipamentos Atendidos",
      description: "Histórico de excelência"
    },
    {
      icon: Users,
      value: 1000,
      prefix: "+",
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
              items={[{ label: "Empresa", current: true }]}
            />
          </div>
        </section>

        {/* Hero Section - GRADIENTE VERDE→BRANCO NA IMAGEM [file:2] */}
        {/* Hero Section - Fundo cinza clean */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#005757]">
          {/* Removido o overlay bg-muted/40 - agora transparente na imagem */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex flex-col justify-center px-2 lg:px-4">
                {/* Tag em cinza */}
                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 w-fit">
                  <span className="text-sm font-medium text-gray-300">Sobre a Astato</span>
                </div>
                {/* Título em cinza claro */}
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 drop-shadow-xl tracking-tight text-gray-200">
                  A Astato nasceu com um propósito claro: elevar o padrão da manutenção de equipamentos médicos no Brasil
                </h1>
              </div>

              {/* Right - Imagem integrada ao fundo */}
              <div className="relative flex items-center justify-center">
                <img
                  src={equipeAstato}
                  alt="Equipe Astato"
                  className="w-full h-auto object-cover"  // opcional: "max-w-[480px]" etc.
                />
              </div>

            </div>
          </div>
        </section>



        {/* Resto do código permanece IDENTICO */}
        {/* Conheça Nossa História + Stats */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8 text-center">
                Conheça Nossa História
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-center">
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
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {companyStats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-medical transition-all duration-300 border-0 bg-muted/30">
                  <CardContent className="space-y-4 p-0">
                    <div className="p-4 bg-primary/10 rounded-2xl w-fit mx-auto">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold text-foreground">
                        {stat.value !== undefined && stat.value !== null ? (
                          <CountUpNumber end={stat.value} duration={2000} prefix={stat.prefix} />
                        ) : (
                          stat.displayValue || "-"
                        )}
                      </div>
                      <div className="font-medium text-foreground">{stat.label}</div>
                      {stat.description && (
                        <div className="text-sm text-muted-foreground">{stat.description}</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Banner estrutura e equipe */}
            <div className="rounded-3xl overflow-hidden">
              <img
                src={estruturaEquipe}
                alt="Estrutura e equipe Astato - Laboratório próprio e profissionais especializados"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="container mx-auto px-4">

            {/* Quem Conduz a Astato (ORIGINAL) */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Quem Conduz a Astato
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Texto + subtítulo (inspirado na referência) */}
                <div className="space-y-6">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                    Fernando Dielle
                  </h3>
                  <p className="text-muted-foreground text-lg">Fundador & Diretor</p>
                  <p className="text-lg text-muted-foreground">
                    À frente da Astato está Fernando Dielle, profissional com
                    mais de 30 anos de experiência em vendas de equipamentos
                    para a área médica e mais de 15 anos de atuação direta na
                    manutenção de equipamentos de videocirurgia.
                  </p>
                  <p className="text-lg text-muted-foreground">
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
                {/* Right - Foto do Fernando (estilo da referência: imagem grande, sem moldura pesada) */}
                <div className="relative flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-md">
                    <img
                      src={fernandoDielle}
                      alt="Fernando Dielle - Fundador e especialista em manutenção de equipamentos de videocirurgia"
                      className="w-full h-auto object-cover rounded-3xl shadow-medical"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Nossos Pilares */}
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
