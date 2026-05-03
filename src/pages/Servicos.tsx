import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Wrench,
  Cpu,
  ArrowRight,
  Camera,
  Lightbulb,
  Cable,
  Monitor,
  Wind,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";
import heroImage from "@/assets/servicos/novo-banner-servicos-desktop.webp";
import heroImage4x3 from "@/assets/servicos/novo-banner-servicos-mobile.webp";
import imgOticasRigidas from "@/assets/servicos/manutencao-otica-rigida-videocirurgia.webp";
import imgOticasSemirrígidas from "@/assets/servicos/manutencao-otica-semirrigida-videocirurgia.webp";
import imgOticasFlexíveis from "@/assets/servicos/manutencao-otica-flexivel-videocirurgia.webp";
import imgInstrumentais from "@/assets/servicos/manutencao-instrumentais-videocirurgia-hospitalar.webp";
import imgCâmeras from "@/assets/servicos/manutencao-aparelhos-eletronicos/manutencao-camera-videocirurgia-hospitalar.webp";
import imgFontesDeLuz from "@/assets/servicos/manutencao-aparelhos-eletronicos/manutencao-fonte-de-luz-videocirurgia.webp";
import imgCabosDeCâmera from "@/assets/servicos/manutencao-aparelhos-eletronicos/manutencao-cabos-de-camera-videocirurgia.webp";
import imgProcessadoresDeVideo from "@/assets/servicos/manutencao-aparelhos-eletronicos/manutencao-processadores-de-video-videocirurgia-.webp";
import imgInsuflador from "@/assets/servicos/manutencao-aparelhos-eletronicos/manutencao-insuflador-videocirurgia.webp";
import imgGravadoresCirúrgicos from "@/assets/servicos/manutencao-aparelhos-eletronicos/manutencao-gravador-cirurgico-videocirurgia.webp";
import CrossfadeImage from "@/components/ui/Crossfade";

/* ── Data ───────────────────────────────────────────────── */

interface SubService {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  image?: string;
}

interface ServiceCategory {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortTitle: string;
  description: string;
  image?: string;
  subServices: SubService[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "manutencao-oticas",
    icon: Eye,
    title: "Manutenção de Óticas",
    shortTitle: "Óticas",
    image: undefined,
    description:
      "Restauramos a qualidade óptica original de endoscópios, laparoscópios e artroscópios com precisão técnica.",
    subServices: [
      {
        title: "Óticas Rígidas",
        image: imgOticasRigidas,
        description:
          "As óticas rígidas são dispositivos ópticos compostos por lentes, hastes metálicas e sistema de transmissão de luz, responsáveis por garantir imagem nítida e fiel durante procedimentos cirúrgicos. Pequenos impactos, manuseio inadequado, desgaste natural ou desalinhamentos internos comprometem a qualidade da visualização no centro cirúrgico. Realizamos manutenção corretiva com inspeção do sistema óptico, reparo de lentes e objetiva, além de troca de tubos e sistema de fibra e iluminação. Fornecemos relatório técnicos  antes e depois do serviço sob demanda. ",
      },
      {
        title: "Óticas Semirrígidas",
        image: imgOticasSemirrígidas,
        description:
          "As óticas Semirrígidas possuem estrutura interna delicada, composta por fibras ópticas de iluminação e imagem, que demandam precisão técnica e procedimentos controlados durante a manutenção. Entre os problemas mais recorrentes estão perda parcial de imagem e infiltração. Executamos diagnóstico detalhado do feixe óptico, testes de vedação, substituição técnica de componentes comprometidos e validação final de imagem e mobilidade.",
      },
      {
        title: "Óticas Flexíveis",
        image: imgOticasFlexíveis,
        description:
          "As óticas flexíveis possuem estrutura interna delicada, composta por fibras ópticas e sistema de articulação, que demandam precisão técnica e procedimentos controlados durante a manutenção. Entre os problemas mais recorrentes estão perda parcial de imagem, pontos escuros, desgaste do revestimento externo e dificuldades na flexão do sistema. Executamos diagnóstico detalhado do feixe óptico, avaliação do mecanismo de flexão, testes de vedação, substituição técnica de componentes comprometidos e validação final de imagem e mobilidade.",
      },
    ],
  },
  {
    id: "manutencao-instrumentais",
    icon: Wrench,
    title: "Manutenção de Instrumentais",
    shortTitle: "Instrumentais",
    image: undefined,
    description: "",
    subServices: [
      {
        title: "Instrumentais de Videocirurgia",
        image: imgInstrumentais,
        description:
          "Os instrumentais de videocirurgia, como pinças, tesouras, trocateres, manipuladores, dessecadores e curetas, são dispositivos mecânicos de alta precisão utilizados para corte, preensão, dissecação e acesso cirúrgico. Com o uso frequente e os ciclos repetidos de esterilização, podem apresentar perda de corte, folgas articulares, desalinhamento de mandíbulas, desgaste de revestimentos, falhas no mecanismo de transmissão de movimento e comprometimento da vedação em trocateres. Realizamos análise estrutural completa, ajustes de articulações, alinhamento de componentes, afiação controlada de lâminas, substituição de peças desgastadas, limpeza ultrassônica especializada e teste funcional final, restabelecendo o desempenho mecânico necessário ao uso seguro na videocirurgia.",
      },
    ],
  },
  {
    id: "manutencao-eletronicos",
    icon: Cpu,
    title: "Manutenção de Aparelhos Eletrônicos",
    shortTitle: "Eletrônicos",
    image: undefined,
    description:
      "Serviço especializado em câmeras, fontes de luz, processadores de vídeo, cabos, insufladores e gravadores cirúrgicos.",
    subServices: [
      {
        title: "Câmeras",
        icon: Camera,
        image: imgCâmeras,
        description:
          "As câmeras cirúrgicas captam e transmitem a imagem do procedimento para o monitor, sendo elemento central na qualidade visual da videocirurgia.\n\nEntre as falhas mais recorrentes estão perda de definição, interferências de sinal, instabilidade de imagem, falhas em sensores, problemas de conexão e danos em componentes internos. Executamos diagnóstico eletrônico detalhado, testes de sinal e qualidade de imagem, verificação de sensores e conectores, correção técnica de falhas e validação final de desempenho para garantir nitidez, estabilidade e confiabilidade clínica.",
      },
      {
        title: "Fontes de Luz",
        icon: Lightbulb,
        image: imgFontesDeLuz,
        description:
          "As fontes de luz são responsáveis por fornecer iluminação adequada ao campo cirúrgico por meio das óticas e cabos de fibra, garantindo visibilidade e fidelidade de imagem durante o procedimento.\n\nCom o uso contínuo, podem apresentar instabilidade luminosa, perda de intensidade, falhas no módulo de potência, superaquecimento, problemas em conectores ou desgaste interno de componentes eletrônicos. Realizamos diagnóstico eletrônico completo, testes de intensidade e estabilidade luminosa, verificação de módulos internos, avaliação de conectores e substituição técnica de componentes comprometidos, finalizando com validação funcional para assegurar iluminação estável e segura.",
      },
      {
        title: "Cabos de Câmera",
        icon: Cable,
        image: imgCabosDeCâmera,
        description:
          "Os cabos de câmera são responsáveis pela transmissão de imagem entre os equipamentos do sistema de videocirurgia. Com o uso e manuseio frequente, podem apresentar rompimento interno, falhas de sinal, pontos escuros, aquecimento excessivo, desgaste de conectores e perda de eficiência na transmissão da imagem. Realizamos inspeção estrutural completa, testes de continuidade e transmissão, avaliação de conectores, substituição de componentes danificados e validação funcional para assegurar estabilidade e integridade do sistema.",
      },
      {
        title: "Processadores de Vídeo",
        icon: Monitor,
        image: imgProcessadoresDeVideo,
        description:
          "Os processadores de vídeo são responsáveis por converter e tratar o sinal captado pela câmera, garantindo qualidade, contraste e fidelidade da imagem exibida no monitor.\n\nPodem apresentar falhas eletrônicas internas, instabilidade de processamento, perda de sinal, problemas em placas eletrônicas ou incompatibilidade com sistemas conectados. Executamos diagnóstico eletrônico avançado, testes de processamento de imagem, verificação de placas e módulos internos, correção técnica de falhas e validação completa do desempenho operacional.",
      },
      {
        title: "Insuflador",
        icon: Wind,
        image: imgInsuflador,
        description:
          "Os insufladores controlam o fluxo e a pressão de gás utilizados para criar o espaço cirúrgico em procedimentos minimamente invasivos.\n\nEntre os problemas mais comuns estão variações de pressão, falhas em sensores, imprecisão no controle de fluxo, obstruções internas e desgaste de válvulas e componentes reguladores. Realizamos avaliação técnica do sistema de controle, testes de pressão e fluxo, verificação de sensores e válvulas, substituição de componentes comprometidos e validação final de funcionamento seguro e estável.",
      },
      {
        title: "Gravadores Cirúrgicos",
        icon: Video,
        image: imgGravadoresCirúrgicos,
        description:
          "Os gravadores cirúrgicos registram imagens e vídeos dos procedimentos, sendo utilizados para documentação clínica, ensino e auditoria.\n\nCom o tempo, podem apresentar falhas de gravação, perda de qualidade de imagem, instabilidade de armazenamento, problemas de conexão ou falhas em módulos internos. Executamos diagnóstico eletrônico completo, testes de gravação e reprodução, verificação de interfaces e conectividade, correção técnica de falhas e validação final para garantir registro seguro e confiável.",
      },
    ],
  },
];

/* ── Component ──────────────────────────────────────────── */

const Servicos = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSubService, setActiveSubService] = useState(0);

  const safeActiveCategory = Math.max(0, Math.min(activeCategory, serviceCategories.length - 1));
  const currentCategory = serviceCategories[safeActiveCategory];
  const currentSubServices = currentCategory.subServices || [];
  const safeActiveSubService = Math.max(0, Math.min(activeSubService, currentSubServices.length - 1));
  const currentSub = currentSubServices[safeActiveSubService];

  useEffect(() => {
    setActiveSubService(0);
  }, [safeActiveCategory]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const catIndex = serviceCategories.findIndex((c) => c.id === id);
      if (catIndex !== -1) {
        setActiveCategory(catIndex);
        setTimeout(() => {
          document
            .getElementById("servicos-tabs")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  useEffect(() => {
    const imageSources = new Set<string>();
    serviceCategories.forEach((category) => {
      if (category.image) imageSources.add(category.image);
      category.subServices.forEach((subService) => {
        if (subService.image) imageSources.add(subService.image);
      });
    });
    imageSources.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Manutenção de Equipamentos de Videocirurgia",
    provider: {
      "@type": "Organization",
      name: "Astato Equipamentos Médicos",
    },
    description:
      "Diagnóstico, reparo e calibração realizados conforme padrões técnicos de fábrica, com laudo e garantia para hospitais e clínicas em todo o Brasil.",
    areaServed: "Brasil",
  };

  return (
    <>
      <SEOHead
        title="Serviços de Manutenção | Astato - Equipamentos de Videocirurgia"
        description="Diagnóstico, reparo e calibração realizados conforme padrões técnicos de fábrica, com laudo e garantia para hospitais e clínicas em todo o Brasil."
        keywords="manutenção óticas, reparo endoscópios, manutenção instrumentais videocirurgia, assistência técnica equipamentos médicos"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-muted/20">
        {/* Breadcrumb */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Serviços", current: true }]} />
          </div>
        </section>

        {/* Hero Section — novo banner */}
        <header className="relative w-full h-52 sm:h-72 md:h-auto md:aspect-[3/1] overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <picture className="block w-full h-full">
              <source
                media="(min-width: 768px)"
                srcSet={heroImage}
                width={1920}
                height={600}
              />
              <img
                src={heroImage4x3}
                alt="Manutenção especializada de equipamentos de videocirurgia"
                className="w-full h-full object-cover object-left sm:object-left-top md:object-center"
                width={800}
                height={600}
                loading="eager"
              />
            </picture>
          </div>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.28) 35%, rgba(0,0,0,0.05) 65%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div
            className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full">
            <div className="flex items-center h-full">
              <div className="max-w-lg py-10 sm:py-14 md:py-20">

                <span className="text-[10px] sm:text-sm font-medium text-white/60 mb-1 sm:mb-3 block">
                  Nossos Serviços
                </span>
                <h1 className="font-heading text-[15px] sm:text-2xl lg:text-4xl tracking-tight leading-[1.2]">
                  {/* Linha 1 */}
                  <span className="block font-bold text-white mb-0.5">
                    Assistência{" "}
                    <span className="text-white/50">técnica</span>
                  </span>

                  {/* Linha 2 — whitespace-nowrap impede quebra */}
                  <span className="block font-bold whitespace-nowrap">
                    <span className="text-white/50">Especializada em </span>
                    <span
                      className="text-white px-1"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.18) 100%)",
                      }}
                    >
                      videocirurgia
                    </span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </header>

        {/* ── Category Tabs ── */}
        <section id="servicos-tabs" className="py-12 lg:py-16 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Serviços Especializados
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Selecione a categoria para explorar nossos serviços de
                manutenção.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-nowrap justify-center gap-3 mb-8 overflow-x-auto lg:flex-wrap lg:gap-6 lg:mb-16">
              {serviceCategories.map((cat, index) => {
                const Icon = cat.icon;
                const isActive = activeCategory === index;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(index)}
                    className={`group flex flex-col items-center gap-2 px-4 py-4 rounded-2xl border-2 transition-all duration-300 min-w-[110px] lg:min-w-[180px] ${isActive
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-border/50 bg-background hover:border-primary/30 hover:shadow-md"
                      }`}
                  >
                    <div
                      className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 ${isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary group-hover:bg-primary/20"
                        }`}
                    >
                      <Icon className="w-6 h-6 lg:w-8 lg:h-8" />
                    </div>
                    <span
                      className={`font-heading text-xs lg:text-base font-semibold text-center transition-colors duration-300 ${isActive
                        ? "text-primary"
                        : "text-foreground group-hover:text-primary"
                        }`}
                    >
                      {cat.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Content */}
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  {currentCategory.title}
                </h3>
              </div>

              {/* Sub-service tabs */}
              {currentCategory.subServices.length > 1 && (
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {currentCategory.subServices.map((sub, idx) => {
                    const isSubActive = safeActiveSubService === idx;
                    const SubIcon = sub.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveSubService(idx)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm lg:text-base font-medium border transition-all duration-300 ${isSubActive
                          ? "bg-primary text-primary-foreground border-primary shadow-md"
                          : "bg-background text-foreground border-border/50 hover:border-primary/40 hover:bg-primary/5"
                          }`}
                      >
                        {SubIcon && <SubIcon className="w-4 h-4 lg:w-5 lg:h-5" />}
                        {sub.title}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Content */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-background rounded-3xl p-8 lg:p-12 shadow-card border border-border/30">
                {/* Text side */}
                <div className={safeActiveSubService % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                      {currentSub?.icon ? (
                        <currentSub.icon className="w-6 h-6 text-primary" />
                      ) : (
                        <currentCategory.icon className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <h4 className="font-heading text-xl lg:text-2xl font-bold text-foreground">
                      {currentSub?.title || currentCategory.title}
                    </h4>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {currentSub?.description || currentCategory.description}
                  </p>
                </div>

                {/* Visual side */}
                <div className={`flex items-center justify-center ${safeActiveSubService % 2 === 1 ? "lg:order-1" : ""
                  }`}>
                  {(() => {
                    const imageSrc = currentSub?.image ?? currentCategory.image;
                    const FallbackIcon = currentSub?.icon ?? currentCategory.icon;

                    return imageSrc ? (
                      <CrossfadeImage
                        src={imageSrc}
                        alt={currentSub?.title ?? currentCategory.title}
                        className="w-full aspect-[4/3] rounded-2xl border border-border/20 shadow-sm"
                      />
                    ) : (
                      <div className="w-full aspect-[4/3] bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl flex items-center justify-center border border-border/20">
                        <div className="p-8 bg-primary/5 rounded-3xl">
                          <FallbackIcon className="w-24 h-24 lg:w-32 lg:h-32 text-primary/40" />
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center mt-16">
              <Link to="/contato">
                <Button size="lg" className="shadow-medical group">
                  Entre em Contato
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Servicos;
