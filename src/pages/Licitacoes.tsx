import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  ClipboardList,
  FileSearch,
  Settings2,
  AlertTriangle,
  CheckCircle,
  FileText,
  ShieldCheck,
  Users,
  Landmark,
} from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";
import bannerDesktop from "@/assets/novas-imagens-astato/banner-licitacoes-desktop.webp";
import bannerMobile from "@/assets/novas-imagens-astato/banner-licitacoes-mobile.webp";

const Licitacoes = () => {
  const services = [
    {
      icon: ClipboardList,
      title: "Cotações técnicas e pesquisa de mercado",
      description:
        "Produzimos cotações técnicas detalhadas e levantamentos de preços de mercado para equipamentos de videocirurgia.",
      features: [
        "Comparativos entre fabricantes",
        "Documentação para instrução de processo",
        "Relatórios atualizados e fundamentados",
      ],
    },
    {
      icon: FileSearch,
      title: "Análise técnica",
      description:
        "Atuamos durante o Estudo Técnico Preliminar e demais fases internas do processo, com foco na elaboração e aprimoramento de descritivos técnicos para serviços de manutenção, garantindo clareza, precisão e aderência às necessidades da instituição.",
      features: [
        "Estruturação de descritivos para manutenção especializada",
        "Análise de compatibilidade e desempenho",
        "Emissão de parecer fundamentado",
        "Apoio técnico na definição de escopo",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Suporte técnico em demandas emergenciais",
      description:
        "Oferecemos suporte técnico em demandas emergenciais relacionadas a equipamentos de videocirurgia, contribuindo com documentação para decisões rápidas no setor público.",
      features: [
        "Atendimento prioritário",
        "Documentação estruturada",
        "Apoio em compras diretas",
      ],
    },
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Conformidade Legal",
      description:
        "Processos alinhados à legislação vigente e às normas de compras públicas.",
    },
    {
      icon: FileText,
      title: "Documentação Completa",
      description:
        "Relatórios técnicos e pareceres detalhados para fundamentar decisões.",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais com experiência no setor público de saúde.",
    },
    {
      icon: Landmark,
      title: "Experiência com Órgãos Públicos",
      description:
        "Atuação junto a hospitais públicos e órgãos da administração em todo o Brasil.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Apoio Técnico para Licitações e Compras Públicas",
    provider: {
      "@type": "Organization",
      name: "Astato Equipamentos Médicos",
    },
    description:
      "Suporte técnico especializado para processos licitatórios e compras públicas na área da saúde.",
    areaServed: "Brasil",
  };

  return (
    <>
      <SEOHead
        title="Licitações e Compras Públicas | Astato - Suporte Técnico"
        description="Apoio técnico especializado para hospitais públicos e órgãos da administração pública em processos licitatórios na área da saúde."
        keywords="licitações equipamentos médicos, compras públicas saúde, cotações equipamentos hospitalares, análise técnica editais"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-muted/20">
        {/* Breadcrumb */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Licitações", current: true }]} />
          </div>
        </section>

        {/* Banner Hero */}
        <header className="relative w-full h-52 sm:h-72 md:h-auto md:aspect-[3/1] overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <picture className="block w-full h-full">
              <source
                media="(min-width: 768px)"
                srcSet={bannerDesktop}
                width={1920}
                height={600}
              />
              <img
                src={bannerMobile}
                alt="Licitações e compras públicas para equipamentos de videocirurgia"
                className="w-full h-full object-cover object-center"
                width={800}
                height={600}
                loading="eager"
              />
            </picture>
          </div>

          {/* Gradiente para legibilidade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 40%, rgba(0,0,0,0.05) 70%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* H1 alinhado à esquerda, padrão das demais páginas */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6">
              <h1
                className="font-heading font-extrabold leading-tight tracking-tight
                   text-2xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl"
                style={{ color: "#E8F1F0" }}
              >
                Atendimento a hospitais públicos em manutenção e fornecimento de equipamentos de videocirurgia
              </h1>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-10 sm:py-14 lg:py-20">
          <div className="container mx-auto px-4">

            {/* Cards de serviços */}
            <div className="space-y-6 sm:space-y-8 mb-16">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-card hover:shadow-medical transition-all duration-300 border-0 bg-background"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div
                      className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="p-3 sm:p-4 bg-accent/10 rounded-2xl flex-shrink-0">
                          <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                        </div>
                        <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-2 sm:space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm sm:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`hidden lg:flex bg-gradient-to-br from-[#3D6695] via-[#2A4F7A]/95 to-[#1A365D]/90 p-8 lg:p-12 items-center justify-center ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <div className="p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20">
                        <service.icon className="w-24 h-24 lg:w-32 lg:h-32 text-white/80" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Benefícios */}
            <div className="bg-background rounded-3xl p-6 sm:p-8 lg:p-12 shadow-card">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Por que contar com a Astato
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                  Nossa experiência no setor público de saúde garante processos
                  mais seguros e eficientes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="p-5 sm:p-6 hover:shadow-card transition-all duration-300 border-0 bg-muted/30 text-center"
                  >
                    <div className="p-3 sm:p-4 bg-accent/10 rounded-2xl w-fit mx-auto mb-3 sm:mb-4">
                      <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground mb-2 text-sm sm:text-base">
                      {benefit.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Link to="/contato">
                  <Button size="lg" className="shadow-medical group w-full sm:w-auto">
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

export default Licitacoes;
