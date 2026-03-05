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

        {/* Hero Section */}
        <header className="relative py-16 lg:py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#3D6695] via-[#2A4F7A]/95 to-[#1A365D]/90"
            aria-hidden="true"
          />

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
                <Landmark className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">
                  Licitações e Compras Públicas
                </span>
              </div>

              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6 text-center">
                Atendimento a hospitais públicos em manutenção e fornecimento de equipamentos de videocirurgia
              </h1>

              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                Assistência técnica especializada e suporte técnico estruturado para atender às exigências do setor público da saúde.
              </p>

              <Link to="/contato">
                <Button
                  size="lg"
                  className="bg-white text-[#2A4F7A] hover:bg-white/90 shadow-medical group min-h-[48px] border-0 font-semibold"
                >
                  Fale com nossa equipe
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Serviços */}
        <main className="pb-12 sm:pb-16 lg:pb-20">

          {/* Faixa cinza full-width — FORA do container, igual ao header azul */}
          <div className="w-full bg-slate-100 py-16 mb-12">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Como estruturamos nossa atuação
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  No ambiente público da saúde, trabalhamos com responsabilidade e
                  clareza quanto às nossas atribuições. Nosso foco está na
                  manutenção de equipamentos de videocirurgia e no suporte técnico
                  relacionado à avaliação e, em breve, ao fornecimento desses
                  equipamentos. Quando necessário, disponibilizamos documentação
                  estruturada e laudos que auxiliam os setores internos do hospital
                  na tomada de decisão, mantendo sempre uma postura profissional
                  alinhada às exigências desse contexto.
                </p>
              </div>
            </div>
          </div>

          {/* Resto do conteúdo — container separado */}
          <div className="container mx-auto px-4">

            {/* H3 — Cards de serviços */}
            <div className="text-center mb-10">
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                Apoio técnico para decisões no setor público
              </h3>
            </div>

            <div className="space-y-8 mb-16">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-card hover:shadow-medical transition-all duration-300 border-0 bg-background"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div
                      className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-2" : ""
                        }`}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-accent/10 rounded-2xl">
                          <service.icon className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`bg-gradient-to-br from-[#3D6695] via-[#2A4F7A]/95 to-[#1A365D]/90 p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""
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
            <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-card">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Por que contar com a Astato
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nossa experiência no setor público de saúde garante processos
                  mais seguros e eficientes.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-card transition-all duration-300 border-0 bg-muted/30 text-center"
                  >
                    <div className="p-4 bg-accent/10 rounded-2xl w-fit mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
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

export default Licitacoes;
