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
      title: "Cotações e Pesquisas de Preços",
      description:
        "Elaboramos cotações detalhadas e pesquisas de preços de mercado para fundamentar processos licitatórios na área da saúde.",
      features: [
        "Levantamento de preços praticados no mercado",
        "Documentação completa para processos de compra",
        "Comparativos técnicos entre fabricantes",
        "Relatórios fundamentados e atualizados",
      ],
    },
    {
      icon: FileSearch,
      title: "Análise Técnica de Editais",
      description:
        "Revisamos editais de licitação para garantir que as especificações técnicas estejam corretas e adequadas às necessidades do órgão.",
      features: [
        "Verificação de especificações técnicas",
        "Identificação de inconsistências",
        "Sugestões de adequação normativa",
        "Parecer técnico detalhado",
      ],
    },
    {
      icon: Settings2,
      title: "Definição de Especificações",
      description:
        "Auxiliamos na definição de especificações técnicas para equipamentos médicos, garantindo clareza e precisão nos editais.",
      features: [
        "Especificações alinhadas às normas vigentes",
        "Descrições técnicas padronizadas",
        "Adequação às necessidades clínicas",
        "Prevenção de direcionamento",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Demandas Urgentes e Compras Diretas",
      description:
        "Atendemos demandas emergenciais com agilidade, oferecendo suporte técnico para compras diretas e dispensas de licitação.",
      features: [
        "Atendimento ágil para situações emergenciais",
        "Suporte para dispensas de licitação",
        "Documentação técnica para justificativas",
        "Acompanhamento do processo",
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
      description:
        "Profissionais com experiência no setor público de saúde.",
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

        {/* Hero Section - estilo PublicFundsSection */}
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

              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                Suporte técnico para compras públicas na área da saúde
              </h1>

              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                Atuamos como apoio técnico para hospitais públicos e órgãos da
                administração pública, contribuindo para processos de compra
                mais seguros, claros e alinhados às exigências do setor da
                saúde.
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
        <main className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Como podemos ajudar
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Oferecemos suporte técnico completo em todas as etapas do
                processo de compras públicas para equipamentos médicos.
              </p>
            </div>

            <div className="space-y-8 mb-16">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-card hover:shadow-medical transition-all duration-300 border-0 bg-background"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div
                      className={`p-8 lg:p-12 flex flex-col justify-center ${
                        index % 2 === 1 ? "lg:order-2" : ""
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
                      className={`bg-gradient-to-br from-[#3D6695] via-[#2A4F7A]/95 to-[#1A365D]/90 p-8 lg:p-12 flex items-center justify-center ${
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
