import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import ServicesSection from "@/components/ui/ServicesSection";
import NewsSection from "@/components/ui/NewsSection";
import ContactSection from "@/components/ui/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <NewsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
