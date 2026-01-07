import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Wrench, Cpu } from "lucide-react";
import heroImage from "@/assets/hero-medical-equipment.jpg";
import LazyImage from "./LazyImage";

const HeroSection = () => {
  const services = [
    {
      icon: Eye,
      title: "Manutenção de Óticas Rígidas, Semirrígidas e Flexíveis",
    },
    {
      icon: Wrench,
      title: "Manutenção de Instrumentais de Videocirurgia",
    },
    {
      icon: Cpu,
      title: "Manutenção de Aparelhos Eletrônicos",
    },
  ];

  return (
    <section id="servicos" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <LazyImage
          src={heroImage}
          alt="Manutenção especializada de equipamentos médicos de videocirurgia - Técnicos certificados em endoscopia"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Main Content */}
          <div className="text-white">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium">Líder em Manutenção Médica</span>
              </div>

              {/* Main Heading - Otimizado para SEO */}
              <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Manutenção de Equipamentos Médicos</span>
                <span className="block text-astato-light-green">Óticas e Instrumentais de Videocirurgia</span>
              </h1>

              {/* Subtitle - Otimizada com palavras-chave */}
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Restauração de equipamentos médicos com padrão de fábrica, qualidade e segurança para hospitais e clínicas em todo o Brasil.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="/#contato">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-medical group"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="/#servicos">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-medical group"
                  >
                    Nossos Serviços
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Service Cards (Vertical) */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="flex flex-col gap-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-card"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-astato-light-green/20 rounded-xl shrink-0">
                      <service.icon className="w-6 h-6 text-astato-light-green" />
                    </div>
                    <h3 className="text-white font-heading font-semibold text-sm leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;