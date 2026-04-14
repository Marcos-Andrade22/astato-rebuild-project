import { Card } from "@/components/ui/card";
import {
  Building,
  Target,
  Eye,
} from "lucide-react";
import equipeAstato from "@/assets/empresa/corrigida-plus-equipe-astato-manutencao-videocirurgia.webp";
import divisoriaEmpresaMobile from '@/assets/empresa/divisoria-empresa-astato-4x3.webp'
import divisoriaEmpresaDesktop from "@/assets/empresa/divisoria-empresa-astato-1920x450.webp"
import fernandoDielle from "@/assets/empresa/fernando-dielle-especialista-manutencao-equipamentos-videocirurgia.png"
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
            <Breadcrumb
              items={[{ label: "Empresa", current: true }]}
            />
          </div>
        </section>

        {/* Hero Section - Teal background with text left, image right */}
        <header className="relative w-full bg-[#3f7e80] py-4 overflow-hidden">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-[45fr_55fr] items-center min-h-[180px] sm:min-h-[280px] md:min-h-[400px]">

              {/* Left - Text */}
              <div className="py-3 sm:py-10 md:py-16 order-1 text-left">
                <span className="text-[10px] sm:text-sm font-medium text-white/60 mb-1 sm:mb-3 block">
                  Sobre a Astato
                </span>
                <h1 className="font-heading text-[13px] sm:text-2xl lg:text-4xl tracking-tight">

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
                      style={{
                        background:
                          "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.08) 100%)",
                      }}
                    >
                      padrão da manutenção
                    </span>
                  </span>

                  <span className="block mb-1 sm:mb-2.5">
                    <span
                      className="font-bold text-white py-0.5"
                      style={{
                        background:
                          "linear-gradient(to right, transparent 50%, rgba(255,255,255,0.14) 100%)",
                      }}
                    >
                      de equipamentos
                    </span>
                  </span>

                  <span className="block">
                    <span
                      className="font-bold text-white py-0.5"
                      style={{
                        background:
                          "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.22) 100%)",
                      }}
                    >
                      de video cirurgia
                    </span>
                    <span className="font-semibold text-white"> no Brasil</span>
                  </span>

                </h1>
              </div>

              {/* Right - Image */}
              <div className="order-2 flex items-end justify-end py-6 h-full">
                <img
                  src={equipeAstato}
                  alt="Equipe Astato - Especialistas em manutenção de equipamentos de videocirurgia"
                  className="w-full h-auto max-h-[170px] sm:max-h-[280px] md:max-h-[380px] object-contain object-bottom"
                  width={1920}
                  height={640}
                  loading="eager"
                />
              </div>

            </div>
          </div>
        </header>

        {/* Conheça Nossa História */}
        <section className="py-16 lg:py-20">

          {/* Texto — dentro do container */}
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto mb-16">
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

          {/* Divisória — FORA do container, full-width real */}
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
                className="w-full h-auto md:h-[350px] md:object-cover lg:h-[450px] object-center"
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

                {/* ✅ Foto com altura máxima controlada para mostrar corpo inteiro + braços */}
                <div className="flex justify-center lg:justify-end items-end">
                  <img
                    src={fernandoDielle}
                    alt="Fernando Dielle - Fundador e especialista em manutenção de equipamentos de videocirurgia"
                    className="w-auto max-h-[620px] lg:max-h-[720px] object-contain object-bottom"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>

            {/* ✅ Nossos Pilares — compacto, sem borda nos cards, ícone acima do título */}
            <div
              className="relative z-10 -mt-48 lg:-mt-64 mb-16 lg:mb-20
              rounded-2xl px-6 py-8 lg:px-10 lg:py-10
              bg-white/20 dark:bg-white/5
              backdrop-blur-lg
              border border-white/40 dark:border-white/15
              shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                  Nossos Pilares
                </h3>
                {/* subtítulo removido */}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {values.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/30 dark:bg-white/5
                    backdrop-blur-sm
                    rounded-xl p-5"
                  >
                    {/* ✅ Ícone acima, sem círculo de fundo */}
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
