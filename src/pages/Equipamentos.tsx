import { useState, useEffect } from "react";
import { History, TrendingUp, Anchor } from "lucide-react";
import heroEquipamentosDesktop from "@/assets/equipamentos/hero-equipamentos-astato-1920x600.webp";
import heroEquipamentosMobile from "@/assets/equipamentos/hero-equipamentos-astato-4x3.webp";
import { AnimatePresence, motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";

const tabs = [
  {
    icon: History,
    title: "O que nos trouxe até aqui?",
    content: [
      "Após anos atuando exclusivamente na manutenção de equipamentos de videocirurgia, acumulamos um conhecimento técnico profundo sobre desempenho, durabilidade e os padrões de qualidade exigidos no dia a dia hospitalar.Essa experiência prática nos permitiu dar um novo passo.Firmamos parceria com um dos principais fabricantes de endoscópios e equipamentos de videocirurgia do mercado, uma marca com a qual já trabalhamos há mais de 10 anos em manutenção.Ou seja, são equipamentos que conhecemos a fundo: testados na prática, com alta durabilidade, desempenho confiável e a qualidade que sempre acompanhamos de perto.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Por que essa ampliação?",
    content: [
      "Percebemos que muitos clientes buscavam orientação técnica também no momento da aquisição de equipamentos. A ampliação para comercialização surge como extensão natural da nossa atuação técnica, oferecendo mais segurança na escolha e maior alinhamento entre manutenção e fornecimento.",
    ],
  },
  {
    icon: Anchor,
    title: "O que continua igual?",
    content: [
      "Nossa essência permanece a mesma: responsabilidade técnica, transparência e compromisso com o funcionamento seguro dos equipamentos. A base continua sendo a manutenção especializada. A comercialização é um complemento estruturado, não uma mudança de foco.",
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Equipamentos de Videocirurgia",
  description:
    "Equipamentos médicos de videocirurgia selecionados com curadoria técnica especializada",
  brand: {
    "@type": "Organization",
    name: "Astato Equipamentos Médicos",
  },
  offers: {
    "@type": "AggregateOffer",
    availability: "https://schema.org/InStock",
    priceCurrency: "BRL",
  },
};

const Equipamentos = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % tabs.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentTab = tabs[activeSlide];
  const IconComponent = currentTab.icon;

  return (
    <>
      <SEOHead
        title="Equipamentos de Videocirurgia | Astato - Vendas"
        description="Equipamentos de videocirurgia selecionados por especialistas em manutenção. Óticas, instrumentais, câmeras e fontes de luz com garantia e suporte técnico."
        keywords="equipamentos videocirurgia, óticas cirúrgicas, instrumentais laparoscópicos, câmeras médicas, fonte de luz LED"
        structuredData={structuredData}
      />

      <div className="bg-muted/20">
        {/* Breadcrumb */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Equipamentos", current: true }]} />
          </div>
        </section>

        {/* Hero Section with auto-slide overlay */}
        <header className="relative w-full h-52 sm:h-72 md:h-auto md:aspect-[3/1] overflow-hidden">

          <div className="absolute inset-0" aria-hidden="true">
            <picture className="block w-full h-full">
              <source
                media="(min-width: 768px)"
                srcSet={heroEquipamentosDesktop}
                width={1920}
                height={600}
              />
              <img
                src={heroEquipamentosMobile}
                alt="Comercialização de equipamentos de videocirurgia - Em breve"
                className="w-full h-full object-cover object-left sm:object-left-top md:object-center"
                width={800}
                height={1000}
                loading="eager"
              />
            </picture>
          </div>

          {/* Overlay lateral */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.28) 35%, rgba(0,0,0,0.05) 65%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Overlay inferior — faz transição suave para a seção abaixo */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* H1 */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-[48%] sm:max-w-sm lg:max-w-lg">
                <h1
                  className="font-heading font-extrabold leading-tight tracking-tight
                     text-lg sm:text-4xl md:text-5xl lg:text-6xl mb-1 sm:mb-3"
                  style={{ color: "#E4E5E7" }}
                >
                  EM BREVE:
                </h1>
                <p
                  className="font-light leading-snug
                     text-sm sm:text-3xl md:text-4xl lg:text-5xl"
                  style={{ color: "#F8FFFE" }}
                >
                  Comercialização de Equipamentos de Videocirurgia
                </p>
              </div>
            </div>
          </div>

        </header>

        {/* Tabs — colada ao banner via bg-gray-900, sem margin/padding top */}
        <section className="bg-gray-900 pt-0 pb-8 sm:pb-12">
          <div className="container mx-auto px-4 sm:px-6">

            {/* Navegação dos tabs */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-8 border-b border-white/10 pb-4">
              {tabs.map((tab, i) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-left
              ${activeSlide === i
                        ? "bg-white/10 text-white"
                        : "text-white/50 hover:text-white/80 hover:bg-white/5"
                      }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{tab.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Conteúdo do tab ativo */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeSlide}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="text-white/75 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl"
              >
                {tabs[activeSlide].content[0]}
              </motion.p>
            </AnimatePresence>

          </div>
        </section>


        {/* Main Content (placeholder for future sections) */}
        {/* <main className="py-16 lg:py-20">
          <div className="container mx-auto px-4" />
        </main> */}
      </div>
    </>
  );
};

export default Equipamentos;
