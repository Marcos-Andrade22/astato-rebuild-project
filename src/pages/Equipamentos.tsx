import { useState, useEffect } from "react";
import { History, TrendingUp, Anchor } from "lucide-react";
import fornecimentoImg from "@/assets/fornecimento-equipamentos-videocirurgia-hospitalar.webp";
import { AnimatePresence, motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";

const tabs = [
  {
    icon: History,
    title: "O que nos trouxe até aqui?",
    content: [
      "Após anos atuando exclusivamente na manutenção de equipamentos de videocirurgia, acumulamos conhecimento técnico profundo sobre desempenho, durabilidade e padrões de qualidade exigidos no dia a dia hospitalar.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Por que essa ampliação?",
    content: [
      "Percebemos que muitos clientes buscavam orientação técnica também no momento da aquisição de equipamentos.",
    ],
  },
  {
    icon: Anchor,
    title: "O que continua igual?",
    content: [
      "Nossa essência permanece a mesma: responsabilidade técnica, transparência e compromisso com o funcionamento seguro dos equipamentos.",
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
    }, 5000);
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

      <div className="min-h-screen bg-muted/20">
        {/* Breadcrumb */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Equipamentos", current: true }]} />
          </div>
        </section>

        {/* Hero Section with auto-slide overlay */}
        <header className="relative w-full h-52 sm:h-72 md:h-auto md:aspect-[3/1] overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src={fornecimentoImg}
              alt="Sistemas de videocirurgia - equipamentos médicos"
              className="w-full h-full object-cover object-left sm:object-left-top md:object-center"
              width={1920}
              height={640}
              loading="eager"
            />
          </div>

          {/* Gradient overlay */}
          <div
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Auto-rotating content bar */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center pb-5 px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold text-base sm:text-lg whitespace-nowrap">
                    {currentTab.title}
                  </span>
                </div>

                {/* Divider + Text (hidden on mobile) */}
                <div className="hidden sm:flex items-center gap-4 sm:gap-6">
                  <div className="w-px h-8 bg-white/40 flex-shrink-0" />
                  <p className="text-sm sm:text-base font-light max-w-xl text-white/90">
                    {currentTab.content[0]}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex gap-2 mt-3">
              {tabs.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    i === activeSlide ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </header>

        {/* Main Content (placeholder for future sections) */}
        <main className="py-16 lg:py-20">
          <div className="container mx-auto px-4" />
        </main>
      </div>
    </>
  );
};

export default Equipamentos;
