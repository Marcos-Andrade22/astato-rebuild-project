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
  Sparkles,
  Heart,
  Eye,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";

const Diferenciais = () => {
  const principles = [
    {
      icon: Heart,
      title: "Responsabilidade",
      description:
        "Porque cada detalhe impacta diretamente pacientes e equipes médicas."
    },
    {
      icon: Eye,
      title: "Transparência",
      description:
        "Porque confiança se constrói com clareza, verdade e informação."
    },
    {
      icon: Target,
      title: "Excelência técnica",
      description:
        "Porque a saúde exige sempre o mais alto padrão."
    }
  ];

  const differentials = [
    {
      icon: Award,
      title: "Experiência Comprovada",
      description:
        "Mais de 14 anos atuando exclusivamente em manutenção de equipamentos de videocirurgia."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Técnicos certificados e em constante atualização."
    },
    {
      icon: FileText,
      title: "Laudos Técnicos Completos",
      description:
        "Informações claras, detalhadas e rastreáveis para auditorias e decisões clínicas."
    },
    {
      icon: Shield,
      title: "Garantia de Qualidade",
      description: "Padrão de fábrica, sem improvisos."
    },
    {
      icon: Microscope,
      title: "Laboratório Próprio",
      description:
        "Controle completo dos processos e maior agilidade na entrega."
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
      description:
        "Avaliação inicial para entender se o cliente precisa de manutenção ou aquisição de equipamento."
    },
    {
      step: "02",
      title: "Envio do Equipamento ou Seleção do Produto",
      description:
        "<strong>Manutenção:</strong> o cliente envia o equipamento para diagnóstico.<br/> <strong>Vendas:</strong> ajudamos o cliente a escolher o equipamento ideal."
    },
    {
      step: "03",
      title: "Análise Técnica e Orçamento Detalhado",
      description:
        "Realizamos diagnóstico preciso e elaboramos um orçamento transparente, com prazos claros e condições bem definidas."
    },
    {
      step: "04",
      title: "Execução e Testes de Qualidade",
      description:
        "<strong>Manutenção:</strong> serviço realizado com peças padrão de fábrica e técnicos especializados.<br/> <strong>Vendas:</strong> equipamento testado, certificado e preparado para envio."
    },
    {
      step: "05",
      title: "Entrega e Suporte",
      description:
        "Enviamos o equipamento, acompanhamos a entrega e oferecemos suporte contínuo após o recebimento."
    }
  ];

  const faqItems = [
    {
      question: "1. Como funciona o processo de manutenção na Astato?",
      answer:
        "Assim que recebemos o equipamento, realizamos uma análise técnica completa e enviamos um orçamento detalhado. Após aprovação, executamos o serviço e realizamos testes rigorosos antes da entrega."
    },
    {
      question: "2. Vocês atendem quais tipos de equipamentos?",
      answer:
        "Somos especializados em óticas rígidas, óticas semirrígidas, óticas flexíveis, instrumentais de videocirurgia e aparelhos eletrônicos."
    },
    {
      question: "3. A Astato também vende equipamentos médicos?",
      answer:
        "Sim. Hoje oferecemos equipamentos selecionados com curadoria técnica, todos testados e certificados pelo nosso laboratório."
    },
    {
      question: "4. Os equipamentos vendidos têm garantia?",
      answer:
        "Sim. Cada equipamento é testado, validado e entregue com garantia e documentação completa."
    },
    {
      question: "5. Qual o prazo para manutenção?",
      answer:
        "O prazo varia conforme o equipamento e o tipo de intervenção. A estimativa é informada no orçamento, com total transparência."
    },
    {
      question: "6. Como posso solicitar um orçamento?",
      answer:
        "Você pode enviar uma solicitação pela página de Contato, WhatsApp, telefone ou pelo formulário do site."
    },
    {
      question: "7. Atendem somente hospitais grandes?",
      answer:
        "Não. Atendemos hospitais públicos, privados, clínicas e profissionais de diferentes tamanhos em todo o Brasil."
    },
    {
      question: "8. Posso enviar equipamentos mesmo sem contrato ativo?",
      answer:
        "Sim. Não é necessário contrato prévio para solicitar manutenção ou comprar equipamentos."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Nosso Jeito de Atuar | Diferenciais Astato",
    description:
      "Na Astato, cada equipamento é uma ponte entre o cuidado humano e a vida. Conheça nossos princípios de responsabilidade, transparência e excelência técnica.",
    url: "https://astato.com.br/diferenciais"
  };

  return (
    <>
      <SEOHead
        title="Nosso Jeito de Atuar | Diferenciais Astato"
        description="Na Astato, acreditamos que cada equipamento é mais do que tecnologia. Ele é uma ponte entre o cuidado humano e a vida. Conheça nosso jeito de atuar."
        keywords="diferenciais astato, nosso jeito de atuar, responsabilidade, transparência, excelência técnica, manutenção videocirurgia"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-muted/20">
        {/* Breadcrumb */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                {
                  label: "Diferenciais",
                  current: true
                }
              ]}
            />
          </div>
        </section>

        {/* Hero Section */}
        <header className="bg-gradient-medical text-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              <Sparkles className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Nosso Jeito Astato</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
              Nosso jeito de atuar
            </h1>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Na Astato, acreditamos que cada equipamento é mais do que tecnologia.{" "}
              <strong>Ele é uma ponte entre o cuidado humano e a vida.</strong>
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            {/* Princípios Essenciais - Layout responsivo (2 em 2 no mobile/tablet) */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Nossos três princípios essenciais
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Nossa atuação é guiada por valores que colocam a vida em primeiro lugar.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {principles.map((principle, index) => (
                  <Card
                    key={index}
                    className="group border-0 shadow-card hover:shadow-medical transition-all duration-500 overflow-hidden bg-gradient-to-br from-background to-muted/30 hover:bg-primary/5 h-full"
                  >
                    <CardContent className="p-8 lg:p-10 h-full flex flex-col">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 mx-auto">
                        <principle.icon className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-700" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-4 text-center group-hover:text-primary transition-colors">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed flex-1 text-center group-hover:text-foreground/90 transition-colors">
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Compromisso */}
            <section className="bg-background/50 rounded-3xl p-12 lg:p-20 mb-20 shadow-card text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-8">
                  Nosso compromisso
                </h2>
                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                  <p>
                    Ao longo dos anos, evoluímos não apenas em estrutura, mas também em propósito.
                  </p>
                  <p>
                    Nosso compromisso é garantir que hospitais e clínicas operem com{" "}
                    <strong>equipamentos seguros, confiáveis e com máxima eficiência</strong>{" "}
                    em cada procedimento.
                  </p>
                </div>

                {/* Banners 2x2 / mobile-friendly */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
                    <h4 className="font-heading text-xl font-bold text-primary mb-3 flex items-center justify-center gap-2 text-center">
                      <Shield className="w-6 h-6" />
                      Acabar com a cicatriz da cirurgia aberta
                    </h4>
                    <p className="text-primary/80 text-sm">
                      Videocirurgia minimamente invasiva para procedimentos mais seguros,
                      com menos dor e recuperação mais rápida.
                    </p>
                  </div>
                  <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
                    <h4 className="font-heading text-xl font-bold text-primary mb-3 flex items-center justify-center gap-2 text-center">
                      <CheckCircle className="w-6 h-6" />
                      Somos movidos por um propósito
                    </h4>
                    <p className="text-primary/80 text-sm">
                      Manter equipamentos em condição ideal para que o cuidado chegue ao paciente com a máxima qualidade.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Diferenciais Técnicos */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Diferenciais técnicos
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Como colocamos nossos princípios em prática todos os dias.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </section>

            {/* Processo de Atendimento com possível rolagem horizontal em telas menores */}
            <section className="bg-background rounded-3xl p-8 lg:p-12 shadow-card mb-20">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Nosso processo de atendimento
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Seguimos um fluxo claro e transparente para garantir segurança, agilidade e excelência em cada etapa.
                </p>
              </div>

              <div className="overflow-x-auto pb-4">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 min-w-[700px] lg:min-w-0">
                  {processSteps.map((process, index) => (
                    <div key={index} className="text-center group">
                      <div className="relative mb-6">
                        <div className="relative w-16 h-16 mx-auto mb-4">
                          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg transition-all duration-700 shadow-medical">
                            <span className="text-2xl font-heading font-bold text-white">
                              {process.step}
                            </span>
                          </div>
                          <div className="absolute inset-0 rounded-2xl bg-primary/30 scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-500 -z-10" />
                        </div>

                        {index < processSteps.length - 1 && (
                          <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-x-2 group-hover:bg-primary/30 transition-colors duration-300" />
                        )}
                      </div>

                      <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {process.title}
                      </h3>

                      <div className="relative">
                        <div className="text-sm text-muted-foreground transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:absolute group-hover:inset-0">
                          <span className="inline-flex items-center gap-1.5 text-primary/60">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
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
              </div>

              {/* CTA */}
              <div className="text-center mt-4">
                <Link to="/contato">
                  <Button size="lg" className="shadow-medical group text-lg px-12">
                    Experimente nosso jeito de atuar
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </section>

            {/* FAQ — Dúvidas Frequentes */}
            <section className="bg-background rounded-3xl p-8 lg:p-12 shadow-card">
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  FAQ — Dúvidas Frequentes
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Respondemos às principais dúvidas sobre nosso processo de manutenção e fornecimento de equipamentos.
                </p>
              </div>

              <div className="space-y-4 max-w-3xl mx-auto">
                {faqItems.map((item, index) => (
                  <details
                    key={index}
                    className="group border border-border/60 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 bg-muted/30"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="font-heading font-semibold text-foreground text-sm sm:text-base pr-4">
                        {item.question}
                      </span>
                      <span className="ml-2 flex-shrink-0 w-6 h-6 rounded-full border border-primary/40 flex items-center justify-center text-primary text-xs transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Diferenciais;
