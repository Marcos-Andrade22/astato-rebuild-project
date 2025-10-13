import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import ServicesSection from "@/components/ui/ServicesSection";
import NewsSection from "@/components/ui/NewsSection";
import ContactSection from "@/components/ui/ContactSection";
import SEOHead from "@/components/seo/SEOHead";
import CarouselSection from "@/components/ui/CarouselSection";

const Index = () => {
  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://astato.com.br/#webpage",
    "url": "https://astato.com.br/",
    "name": "Manutenção Equipamentos Videocirurgia | Astato",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://astato.com.br/#website",
      "url": "https://astato.com.br/",
      "name": "Astato Equipamentos Médicos"
    },
    "about": {
      "@type": "Service",
      "name": "Manutenção de Equipamentos Médicos",
      "description": "Serviços especializados em manutenção de equipamentos de videocirurgia"
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": "main"
    }
  };

  return (
    <>
      <SEOHead
        title="Manutenção Equipamentos Videocirurgia | Astato - Referência Nacional"
        description="Manutenção especializada em equipamentos de videocirurgia. 14+ anos de experiência, técnicos certificados, atendimento nacional."
        keywords="manutenção equipamentos videocirurgia, reparo endoscópios, assistência técnica equipamentos médicos, manutenção óticas cirúrgicas, Juiz de Fora MG"
        structuredData={homePageStructuredData}
      />
      <main className="min-h-screen" id="home">
        <CarouselSection />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <NewsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
