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
import { useRef, useState } from "react";

const Diferenciais = () => {

  const [openCard, setOpenCard] = useState<number | null>(null);
  const touchStartY = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent, index: number) => {
    const delta = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (delta < 10) { // tap (não scroll)
      setOpenCard(openCard === index ? null : index);
    }
  };


  const differentials = [
    {
      icon: Award,
      title: "Experiência Comprovada",
      id: "experiencia-comprovada",
      description:
        "Mais de 14 anos de atuação exclusiva em manutenção corretiva de equipamentos de videocirurgia, com um volume expressivo de equipamentos avaliados e atendimentos realizados em hospitais e clínicas em todo o Brasil. Nossa experiência nacional, aliada ao conhecimento técnico aplicado às principais marcas do mercado como Karl Storz, Stryker, Richard Wolf e Olympus. Reforça nossa autoridade e consistência técnica no segmento."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      id: "equipe-especializada",
      description:
        "Trabalhamos com processos padronizados, atualização técnica periódica e foco absoluto em qualidade — refletido em uma taxa de retrabalho inferior a 1%, indicador que demonstra controle técnico e confiabilidade operacional. Esse compromisso garante segurança e previsibilidade para hospitais e clínicas que dependem do funcionamento pleno de seus equipamentos."
    },
    {
      icon: FileText,
      title: "Laudos Técnicos Completos",
      id: "laudos-tecnicos",
      description:
        "Emitimos laudos técnicos detalhados que contemplam checklist estruturado de verificação, rastreabilidade por ordem de serviço, relatório fotográfico completo, registro formal do diagnóstico e dos serviços executados, além da emissão de ART quando aplicável. Essa documentação técnica contribui para o controle interno dos equipamentos, organização da engenharia clínica e suporte a processos regulatórios e auditorias hospitalares, garantindo transparência e segurança nas informações apresentadas."
    },
    {
      icon: Shield,
      title: "Garantia de Qualidade",
      id: "garantia-qualidade",
      description:
        "Oferecemos garantia formal mínima de 90 dias sobre os serviços realizados, reforçando nosso compromisso com a confiabilidade técnica. Antes da liberação, cada equipamento é submetido a validação criteriosa e testes funcionais completos, realizados conforme especificações técnicas de fábrica e protocolos definidos. Esse padrão de execução assegura previsibilidade no desempenho, reduz riscos operacionais e contribui para a segurança do ambiente hospitalar."
    },
    {
      icon: Microscope,
      title: "Laboratório Próprio",
      id: "laboratorio-proprio",
      description:
        "Contamos com laboratório próprio equipado com ferramentas apropriadas, o que nos permite manter maior controle técnico sobre as etapas realizadas internamente e contribuir para a otimização dos prazos de execução."
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Durante Todo o Processo",
      id: "suporte-process",
      description:
        "Mantemos comunicação ativa com o cliente desde a avaliação inicial até a finalização do serviço. O atendimento é realizado por telefone, e-mail e WhatsApp, com atualização do status sempre que necessário, garantindo transparência e acompanhamento contínuo. Nosso compromisso é oferecer clareza, previsibilidade e segurança em cada etapa da assistência técnica."
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
        "Realizamos diagnóstico preciso e elaboramos um orçamento transparente, com informações técnicas, prazos claros e condições bem definidas."
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
        "Somos especializados em óticas rígidas, óticas semirrígidas, óticas flexíveis, instrumentais de videocirurgia, processadores de câmera de vídeo, fonte de luz, insufladores e gravadores."
    },
    {
      question: "3. Qual o prazo para manutenção?",
      answer:
        "O prazo varia conforme o equipamento e o tipo de intervenção. A estimativa é informada no orçamento, com total transparência."
    },
    {
      question: "4. A Astato também vende equipamentos médicos?",
      answer:
        "A venda de equipamentos de vídeo cirurgia faz parte da ampliação do nosso portfólio e será disponibilizada em breve, mantendo os mesmos critérios técnicos e padrões de qualidade aplicados aos nossos serviços."
    },
    {
      question: "5. Como posso solicitar um orçamento?",
      answer: (
        <>
          O orçamento pode ser solicitado pela página de Contato, formulário do
          site,{" "}
          <a
            href="https://wa.me/5532999629076"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
          >
            WhatsApp
          </a>
          ,{" "}
          <a
            href="tel:+5532999629076"
            className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
          >
            telefone
          </a>{" "}
          ou{" "}
          <a
            href="mailto:contato@astato.com.br"
            className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
          >
            e-mail
          </a>
          . Após o envio, nossa equipe retornará com as orientações e próximos
          passos.
        </>
      )
    },
    {
      question: "6. A Astato atende hospitais e clínicas de quais portes?",
      answer:
        "Atuamos com hospitais públicos e privados, clínicas e profissionais da saúde de diferentes tamanhos, em todo o Brasil."
    },
    {
      question: "Como faço para enviar equipamentos para avaliação?",
      answer:
        "Entre em contato com nossa equipe que vamos auxiliar na melhor e mais segura forma de envio."
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
        {/* Hero Banner - Full width, colado no header */}
        <header className="relative overflow-hidden -mt-[1px]">
          <img
            src={bannerDiferenciais}
            alt="Atuação técnica em equipamentos de videocirurgia - Nosso jeito de atuar"
            className="w-full h-auto object-cover block"
          />
        </header>


        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="container mx-auto px-4">

            {/* Diferenciais Técnicos - Text Reveal Card */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Diferenciais técnicos
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Como colocamos nossos princípios em prática todos os dias.
                </p>
              </div>

              {/* Grid 2x3 desktop, 2 colunas mobile */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {differentials.map((differential, index) => {
                  const isOpenMobile = openCard === index;
                  return (
                    <div
                      key={differential.id}
                      onTouchStart={handleTouchStart}
                      onTouchEnd={(e) => handleTouchEnd(e, index)}
                      className={`group relative bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 
                   hover:border-primary/30 hover:shadow-medical overflow-hidden transition-all duration-700 
                   h-56 sm:h-64 lg:h-80 hover:min-h-[280px] sm:hover:min-h-[320px] lg:hover:min-h-[380px] cursor-pointer
                   ${isOpenMobile ? 'min-h-[320px] sm:min-h-[360px] border-primary/30' : ''}`}
                    >
                      {/* Estado padrão: ícone + título (centralizado) - IDÊNTICO AO ORIGINAL */}
                      <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 
                        group-hover:opacity-0 group-hover:-translate-y-4
                        ${isOpenMobile ? 'opacity-0 -translate-y-4 pointer-events-none' : ''}`}>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-4 lg:mb-5">
                          <differential.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
                        </div>
                        <h3 className="font-heading text-sm sm:text-base lg:text-xl font-bold text-foreground text-center">
                          {differential.title}
                        </h3>
                      </div>

                      {/* Estado aberto: título topo (mobile) / centralizado (desktop hover) */}
                      <div className={`absolute inset-0 flex flex-col p-4 sm:p-5 lg:p-7 opacity-0 translate-y-4 transition-all duration-500 
                        group-hover:opacity-100 group-hover:translate-y-0 
                        bg-gradient-to-br from-primary/5 to-background overflow-y-auto
                        justify-start lg:justify-center
                        ${isOpenMobile ? 'opacity-100 translate-y-0' : ''}`}>
                        {/* Título fixo no topo (mobile) / centralizado (desktop) */}
                        <h3 className={`font-heading text-sm sm:text-base lg:text-lg font-bold text-primary text-center
                         ${isOpenMobile ? 'mb-3 pb-3 border-b border-border/30' : 'mb-2 lg:mb-3'}`}>
                          {differential.title}
                        </h3>
                        {/* Área de drag grande: ocupa todo espaço restante */}
                        <div className="flex-1 overflow-y-auto">
                          <p className="text-[11px] sm:text-xs lg:text-base text-muted-foreground leading-relaxed text-center">
                            {differential.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
                  <Button
                    // Remove size="lg" ← Libera altura!
                    className="shadow-medical group text-lg px-10 py-4 max-w-full w-full sm:w-auto max-w-[95vw] mx-auto text-wrap sm:text-nowrap h-auto min-h-[52px] rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 [&_svg]:size-5 flex-shrink-0"
                  >
                    Experimente nosso jeito de atuar
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
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
