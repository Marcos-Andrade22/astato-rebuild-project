import { Card } from "@/components/ui/card";
import {
  Building,
  Target,
  Eye,
} from "lucide-react";
import banner4x3 from "@/assets/empresa/empresa-referencia-de-manutencao-videocirurgia-4x3.webp";
import banner from "@/assets/empresa/empresa-referencia-de-manutencao-videocirurgia-1920x600.webp";
import divisoriaEmpresaMobile from '@/assets/general/nova-divisoria-mobile.webp'
import divisoriaEmpresaDesktop from "@/assets/general/nova-divisoria-desktop.webp"
import fernandoSemBg from "@/assets/empresa/fernando-sem-bg.webp"
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";


const Empresa = () => {

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
        "Ser reconhecida pelos clientes como a melhor e mais confiável solução em manutenção e fornecimento de equipamentos de vídeo cirurgia no Brasil."
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
            <Breadcrumb items={[{ label: "Empresa", current: true }]} />
          </div>
        </section>

        {/* Hero Section — full width, imagem de fundo, texto à esquerda */}
        <header className="relative w-full overflow-hidden min-h-[220px] sm:min-h-[320px] md:min-h-[500px]">

          {/* Imagem de fundo responsiva */}
          <picture>
            <source media="(min-width: 768px)" srcSet={banner} width={1920} height={600} />
            <img
              src={banner4x3}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center"
              width={800}
              height={600}
              loading="eager"
            />
          </picture>

          {/* Gradiente para legibilidade do texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3f7e80]/90 via-[#3f7e80]/55 to-transparent" />

          {/* Texto à esquerda */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6">
            <div className="flex items-center min-h-[220px] sm:min-h-[320px] md:min-h-[500px]">
              <div className="max-w-lg py-10 sm:py-14 md:py-20">

                <span className="text-[10px] sm:text-sm font-medium text-white/60 mb-1 sm:mb-3 block">
                  Sobre a Astato
                </span>

                <h1 className="font-heading text-[15px] sm:text-2xl lg:text-4xl tracking-tight">
                  <span className="block font-bold text-white/55 mb-1 sm:mb-1.5">
                    A Astato nasceu com um
                  </span>
                  <span className="block font-bold text-white/55 mb-1 sm:mb-1.5">
                    propósito claro:{" "}
                    <span className="text-white font-semibold">elevar o</span>
                  </span>
                  <span className="block mb-1 sm:mb-2.5">
                    <span
                      className="font-bold text-white py-0.5"
                      style={{ background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.08) 100%)" }}
                    >
                      padrão da manutenção
                    </span>
                  </span>
                  <span className="block mb-1 sm:mb-2.5">
                    <span
                      className="font-bold text-white py-0.5"
                      style={{ background: "linear-gradient(to right, transparent 50%, rgba(255,255,255,0.14) 100%)" }}
                    >
                      de equipamentos
                    </span>
                  </span>
                  <span className="block">
                    <span
                      className="font-bold text-white py-0.5"
                      style={{ background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.22) 100%)" }}
                    >
                      de video cirurgia
                    </span>
                    <span className="font-semibold text-white"> no Brasil</span>
                  </span>
                </h1>

              </div>
            </div>
          </div>

        </header>

        {/* Conheça Nossa História */}
        <section className="pt-16 lg:pt-20 pb-0">

          {/* Texto — dentro do container */}
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto mb-0">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3f7e80] leading-tight mb-8 text-center">
                Conheça Nossa História
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-center">
                <p>
                  Nossa história é marcada por evolução constante, responsabilidade técnica e respeito a cada cliente que confia seu equipamento à Astato.
                </p>
                <p>
                  Iniciamos nossa atuação com a manutenção de óticas rígidas de videocirurgia e, ao longo dos anos, evoluímos para atender todo o ecossistema da videocirurgia, incluindo óticas semirrígidas e flexíveis, aparelhos eletrônicos e instrumentais de diversas especialidades.
                </p>
                <p>
                  Hoje, com mais de 14 anos de trajetória, seguimos guiados por um princípio inegociável:{" "}
                  <strong className="text-[#3f7e80]">
                    cada equipamento importa, porque cada vida importa
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Divisória nova — FORA do container, full-width real */}
          <div className="w-full overflow-hidden">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={divisoriaEmpresaDesktop}
                width={1920}
                height={450}
              />
              <img
                src={divisoriaEmpresaMobile}
                alt="Estrutura e equipe especializada Astato em manutenção de equipamentos de videocirurgia"
                className="w-full object-cover object-bottom h-[240px] sm:h-[300px] md:h-auto"
                width={800}
                height={600}
                loading="lazy"
              />
            </picture>
          </div>

        </section>

        {/* Main Content */}
        <main>
          <div className="container mx-auto px-4">

            {/* Quem Conduz a Astato */}
            <section className="pt-16 lg:pt-20 pb-0">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Quem Conduz a Astato
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                {/* Texto */}
                <div className="space-y-5 pt-2 lg:pt-6">
                  <div className="space-y-2">
                    <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                      Fernando Dielle
                    </h3>
                    <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-muted-foreground/70">
                      Fundador & Diretor
                    </p>
                  </div>

                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    À frente da Astato está Fernando Dielle, profissional com
                    mais de 30 anos de experiência em vendas de equipamentos
                    para a área médica e mais de 15 anos de atuação direta na
                    manutenção de equipamentos de videocirurgia.
                  </p>

                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Com visão de longo prazo e profundo conhecimento técnico,
                    Fernando liderou a expansão da empresa, estruturou processos,
                    formou equipes qualificadas e consolidou a empresa como
                    referência nacional em manutenção especializada de
                    equipamentos de videocirurgia.
                  </p>

                  <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 text-base lg:text-lg">
                    "Excelência técnica é obrigação, e cuidado é princípio."
                  </blockquote>
                </div>

                {/* Foto — altura reduzida no mobile para melhorar fluidez */}
                <div className="flex justify-center lg:justify-end items-end">
                  <img
                    src={fernandoSemBg}
                    alt="Fernando Dielle - Fundador e especialista em manutenção de equipamentos de videocirurgia"
                    className="w-auto max-h-[380px] sm:max-h-[480px] lg:max-h-[720px] object-contain object-bottom"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>

            {/* Nossos Pilares */}
            <div
              className="relative z-10 -mt-16 sm:-mt-24 lg:-mt-40 mb-16 lg:mb-20
                rounded-2xl px-6 py-8 lg:px-10 lg:py-10
                bg-white/85 dark:bg-background/85
                border border-white/60 dark:border-white/15
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                  Nossos Pilares
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {values.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/60 dark:bg-white/5 rounded-xl p-5"
                  >
                    <item.icon className="w-6 h-6 text-primary mb-3" />
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
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
