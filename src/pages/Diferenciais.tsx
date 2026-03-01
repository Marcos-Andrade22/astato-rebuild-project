import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Users,
  Award,
  Microscope,
  FileText,
  HeadphonesIcon,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";
import bannerDiferenciais from "@/assets/atuacao-tecnica-equipamentos-videocirurgia.webp";

const Diferenciais = () => {
  const differentials = [
    {
      icon: Award,
      title: "Experiência Comprovada",
      description:
        "Mais de 14 anos de atuação exclusiva em manutenção preventiva e corretiva de equipamentos de videocirurgia, com um volume expressivo de equipamentos avaliados e atendimentos realizados em hospitais e clínicas em todo o Brasil. Nossa experiência nacional, aliada ao conhecimento técnico aplicado às principais marcas do mercado — como Karl Storz, Stryker, Richard Wolf e Olympus — reforça nossa autoridade e consistência técnica no segmento."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description:
        "Trabalhamos com processos padronizados, atualização técnica periódica e foco absoluto em qualidade — refletido em uma taxa de retrabalho inferior a 1%, indicador que demonstra controle técnico e confiabilidade operacional. Esse compromisso garante segurança e previsibilidade para hospitais e clínicas que dependem do funcionamento pleno de seus equipamentos."
    },
    {
      icon: FileText,
      title: "Laudos Técnicos Completos",
      description:
        "Emitimos laudos técnicos detalhados que contemplam checklist estruturado de verificação, rastreabilidade por ordem de serviço, relatório fotográfico completo, registro formal do diagnóstico e dos serviços executados, além da emissão de ART quando aplicável. Essa documentação técnica contribui para o controle interno dos equipamentos, organização da engenharia clínica e suporte a processos regulatórios e auditorias hospitalares, garantindo transparência e segurança nas informações apresentadas."
    },
    {
      icon: Shield,
      title: "Garantia de Qualidade",
      description:
        "Oferecemos garantia formal mínima de 90 dias sobre os serviços realizados, reforçando nosso compromisso com a confiabilidade técnica. Antes da liberação, cada equipamento é submetido a validação criteriosa e testes funcionais completos, realizados conforme especificações técnicas de fábrica e protocolos definidos. Esse padrão de execução assegura previsibilidade no desempenho, reduz riscos operacionais e contribui para a segurança do ambiente hospitalar."
    },
    {
      icon: Microscope,
      title: "Laboratório Próprio",
      description:
        "Contamos com laboratório próprio equipado com ferramentas apropriadas, o que nos permite manter maior controle técnico sobre as etapas realizadas internamente e contribuir para a otimização dos prazos de execução."
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Durante Todo o Processo",
      description:
        "Mantemos comunicação ativa com o cliente desde a avaliação inicial até a finalização do serviço. O atendimento é realizado por telefone e WhatsApp, com atualização do status sempre que necessário, garantindo transparência e acompanhamento contínuo. Nosso compromisso é oferecer clareza, previsibilidade e segurança em cada etapa da assistência técnica."
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
        "A venda de equipamentos médicos faz parte da ampliação do nosso portfólio e será disponibilizada em breve, mantendo os mesmos critérios técnicos e padrões de qualidade aplicados aos nossos serviços."
    },
    {
      question: "4. Qual o prazo para manutenção?",
      answer:
        "O prazo varia conforme o equipamento e o tipo de intervenção. A estimativa é informada no orçamento, com total transparência."
    },
    {
      question: "5. Como posso solicitar um orçamento?",
      answer:
        "O orçamento pode ser solicitado pela página de Contato, formulário do site, WhatsApp, telefone ou e-mail. Após o envio, nossa equipe retornará com as orientações e próximos passos."
    },
    {
      question: "6. A Astato atende hospitais de quais portes?",
      answer:
        "Atuamos com hospitais públicos e privados, clínicas e profissionais da saúde de diferentes tamanhos, em todo o Brasil."
    },
    {
      question: "7. Posso enviar equipamentos mesmo sem contrato ativo?",
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
              items={[{ label: "Diferenciais", current: true }]}
            />
          </div>
        </section>

        {/* Hero Banner - Imagem com texto sobreposto */}
        <header className="relative overflow-hidden bg-[#f9fafa]">
          <div className="relative w-full h-[500px] lg:h-[600px] bg-[#f9fafa]">  {/* ← Fundo no div */}
            <img
              src={bannerDiferenciais}
              alt="Atuação técnica em equipamentos de videocirurgia - Nosso jeito de atuar"
              className="absolute inset-0 w-full h-full object-cover border-0"  // ← absolute pra cobrir tudo
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="container mx-auto px-4">

            {/* Diferenciais Técnicos - Layout inspirado no Riole (ícone + título + descrição expandível) */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Diferenciais técnicos
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Como colocamos nossos princípios em prática todos os dias.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {differentials.map((differential, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-background/80 to-muted/50 rounded-2xl p-6 lg:p-8 h-72 border border-border/50 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden transition-all duration-1500 ease-in-out"
                  >
                    <div className="flex flex-col items-center h-full w-full relative h-full">

                      {/* Ícone */}
                      <div className="w-20 h-20 mb-6 bg-primary/10 rounded-3xl flex items-center justify-center opacity-100 group-hover:opacity-0 transform scale-100 group-hover:scale-75 transition-all duration-1500 absolute inset-0 flex items-center justify-center z-20 top-4">
                        <differential.icon className="w-10 h-10 text-primary drop-shadow-md group-hover:rotate-90" />
                      </div>

                      {/* Título */}
                      <h3 className="font-heading text-xl font-bold text-center opacity-100 group-hover:opacity-0 transform translate-y-0 group-hover:-translate-y-6 transition-all duration-1500 absolute left-1/2 -translate-x-1/2 z-10 top-24 lg:top-28">
                        {differential.title}
                      </h3>

                      {/* Texto expandível */}
                      <div className="opacity-0 group-hover:opacity-100 h-0 group-hover:h-40 lg:group-hover:h-48 p-4 transition-all duration-1500 absolute inset-0 flex items-end justify-center px-4 z-10">
                        <p className="text-muted-foreground leading-relaxed text-center text-base max-w-md">
                          {differential.description}
                        </p>
                      </div>

                    </div>

                    {/* Overlay suave */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1500 pointer-events-none" />
                  </div>
                ))}
              </div>
            </section>


            {/* Processo de Atendimento - Timeline Alternada */}
            <section className="bg-background rounded-3xl p-8 lg:p-12 shadow-card mb-20">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Nosso processo de atendimento
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Seguimos um fluxo claro e transparente para garantir segurança, agilidade e excelência em cada etapa.
                </p>
              </div>

              {/* Timeline vertical */}
              <div className="relative max-w-4xl mx-auto">
                {/* Linha central - desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2" />

                {/* Linha lateral - mobile */}
                <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

                {processSteps.map((process, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={index} className="relative mb-10 last:mb-0 group">
                      {/* Layout mobile: sempre à direita da linha */}
                      <div className="md:hidden flex items-start gap-4 pl-0">
                        {/* Número/círculo */}
                        <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-medical group-hover:scale-110 transition-transform duration-500">
                          <span className="text-lg font-heading font-bold text-primary-foreground">{process.step}</span>
                        </div>
                        {/* Conteúdo */}
                        <div className="flex-1 bg-muted/40 rounded-2xl p-4 border border-border/40 group-hover:border-primary/20 group-hover:shadow-md transition-all duration-500">
                          <h3 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {process.title}
                          </h3>
                          <div
                            className="text-sm text-muted-foreground leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: process.description }}
                          />
                        </div>
                      </div>

                      {/* Layout desktop: alternado esquerda/direita */}
                      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 items-center">
                        {/* Coluna esquerda */}
                        <div className={isEven ? "" : "order-3"}>
                          {isEven && (
                            <div className="bg-muted/40 rounded-2xl p-6 border border-border/40 group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-500 ml-auto max-w-sm text-right">
                              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                {process.title}
                              </h3>
                              <div
                                className="text-sm text-muted-foreground leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: process.description }}
                              />
                            </div>
                          )}
                          {!isEven && (
                            <div className="bg-muted/40 rounded-2xl p-6 border border-border/40 group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-500 mr-auto max-w-sm text-left">
                              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                {process.title}
                              </h3>
                              <div
                                className="text-sm text-muted-foreground leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: process.description }}
                              />
                            </div>
                          )}
                        </div>

                        {/* Número central */}
                        <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-medical group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 order-2">
                          <span className="text-xl font-heading font-bold text-primary-foreground">{process.step}</span>
                          <div className="absolute inset-0 rounded-2xl bg-primary/30 scale-100 opacity-0 group-hover:scale-[1.3] group-hover:opacity-100 transition-all duration-500 -z-10" />
                        </div>

                        {/* Coluna direita (vazia no lado oposto ao conteúdo) */}
                        <div className={isEven ? "order-3" : ""} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <Link to="/contato">
                  <Button size="lg" className="shadow-medical group text-lg px-12">
                    Experimente nosso jeito de atuar
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </section>

            {/* FAQ */}
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
