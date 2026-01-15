import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Award,
  Microscope,
  FileText,
  HeadphonesIcon,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";

const Diferenciais = () => {
  const differentials = [
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Mais de 14 anos atuando exclusivamente em manutenção de equipamentos de vídeo cirurgia."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Técnicos certificados e em constante atualização."
    },
    {
      icon: FileText,
      title: "Laudos Técnicos Completos",
      description: "Informações claras, detalhadas e rastreáveis para auditorias e decisões clínicas."
    },
    {
      icon: Shield,
      title: "Garantia de Qualidade",
      description: "Padrão de fábrica, sem improvisos."
    },
    {
      icon: Microscope,
      title: "Laboratório Próprio",
      description: "Controle completo dos processos e maior agilidade na entrega."
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Durante Todo o Processo",
      description: "Atendimento de qualidade do início ao fim."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Contato e Identificação da Necessidade",
      description: "Avaliação inicial para entender se o cliente precisa de manutenção ou aquisição de equipamento."
    },
    {
      step: "02",
      title: "Envio do Equipamento ou Seleção do Produto",
      description: "<strong>Manutenção:</strong> o cliente envia o equipamento para diagnóstico.<br/> <strong>Vendas:</strong> ajudamos o cliente a escolher o equipamento ideal."
    },
    {
      step: "03",
      title: "Análise Técnica e Orçamento Detalhado",
      description: "Realizamos diagnóstico preciso e elaboramos um orçamento transparente, com prazos claros e condições bem definidas."
    },
    {
      step: "04",
      title: "Execução e Testes de Qualidade",
      description: "<strong>Manutenção:</strong> serviço realizado com peças padrão de fábrica e técnicos especializados. <br/> <strong>Vendas:</strong> equipamento testado, certificado e preparado para envio."
    },
    {
      step: "05",
      title: "Entrega e Suporte",
      description: "Enviamos o equipamento, acompanhamos a entrega e oferecemos suporte contínuo após o recebimento."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Diferenciais Astato - Por que nos escolher",
    "description": "Conheça os diferenciais da Astato: experiência comprovada, equipe especializada, laudos técnicos completos e garantia de qualidade.",
    "url": "https://astato.com.br/diferenciais"
  };

  return (
    <>
      <SEOHead
        title="Diferenciais | Astato - Por que Confiar em Nós"
        description="Descubra por que a Astato é referência em manutenção de equipamentos médicos: experiência comprovada, equipe especializada e processo transparente."
        keywords="diferenciais astato, qualidade manutenção médica, processo atendimento, garantia equipamentos"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-muted/20">
        {/* Breadcrumb */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                { label: "Diferenciais", current: true }
              ]}
            />
          </div>
        </section>

        {/* Hero Section */}
        <header className="bg-gradient-medical text-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              <Sparkles className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Nossos Diferenciais</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
              Por que Confiar na Astato?
            </h1>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
              Nossos diferenciais garantem a qualidade e confiabilidade que seu equipamento médico precisa.
            </p>
          </div>
        </header>

        {/* Differentials Section */}
        <main className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            {/* Por que confiar na Astato - Movido da Home */}
            <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-card mb-16">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Por que confiar na Astato?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nossos diferenciais garantem a <span className="font-semibold text-primary">qualidade</span> e <span className="font-semibold text-primary">confiabilidade</span> que seu equipamento médico precisa.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {differentials.map((differential, index) => (
                  <div
                    key={index}
                    className="flex space-x-4 p-6 rounded-2xl hover:bg-muted/50 hover:shadow-card-hover hover:-translate-y-1 hover:scale-[1.02] group transition-all duration-300 ease-out border border-border/50 hover:border-primary/30"
                  >
                    <div className="p-3 bg-primary/10 rounded-xl h-fit flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <differential.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {differential.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {differential.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-card">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Nosso Processo de Atendimento
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Seguimos um fluxo claro e transparente para garantir segurança, agilidade e excelência em cada etapa.
                </p>
                <p className="text-sm text-primary/70 mt-3 flex items-center justify-center gap-2">
                  <span className="inline-block w-2 h-2 bg-primary/50 rounded-full animate-pulse"></span>
                  Passe o mouse sobre cada etapa para mais detalhes
                </p>
              </div>

              {/* Process Steps */}
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                {processSteps.map((process, index) => (
                  <div key={index} className="text-center group">
                    <div className="relative mb-6">
                      <div className="relative w-16 h-16 mx-auto mb-4">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg transition-all duration-700 shadow-medical">
                          <span className="text-2xl font-heading font-bold text-white">{process.step}</span>
                        </div>
                        <div className="absolute inset-0 rounded-2xl bg-primary/30 scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                      </div>

                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-x-2 group-hover:bg-primary/30 transition-colors duration-300"></div>
                      )}
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {process.title}
                    </h3>

                    <div className="relative">
                      <div className="text-sm text-muted-foreground transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:absolute group-hover:inset-0">
                        <span className="inline-flex items-center gap-1.5 text-primary/60">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Ver detalhes
                        </span>
                      </div>

                      <div
                        className="text-sm text-muted-foreground leading-relaxed opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out bg-muted/40 p-4 rounded-xl border border-transparent group-hover:border-primary/15 absolute inset-x-0 top-0 group-hover:relative"
                        dangerouslySetInnerHTML={{ __html: process.description }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link to="/contato">
                  <Button size="lg" className="shadow-medical group">
                    Solicitar Orçamento
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

export default Diferenciais;
