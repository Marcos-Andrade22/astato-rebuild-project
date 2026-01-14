import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Wrench, Cpu } from "lucide-react";
import heroImage from "@/assets/hero-medical-equipment.jpg";
import LazyImage from "./LazyImage";

const HeroSection = () => {
  const services = [
    {
      icon: Eye,
      title: "Manutenção de Óticas Rígidas, Semirrígidas e Flexíveis",
      href: "/servicos#manutencao-oticas",
    },
    {
      icon: Wrench,
      title: "Manutenção de Instrumentais de Videocirurgia",
      href: "/servicos#manutencao-instrumentais",
    },
    {
      icon: Cpu,
      title: "Manutenção de Aparelhos Eletrônicos",
      href: "/servicos#manutencao-aparelhos",
    },
  ];

  return (
    <section 
      id="servicos" 
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0" aria-hidden="true">
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-16">
          {/* Left Column - Main Content */}
          <div className="text-white text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium">Líder em Manutenção Médica</span>
              </div>

              {/* Main Heading - Responsive typography with proper hierarchy */}
              <h1 
                id="hero-heading"
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="block">Manutenção em Equipamentos</span>
                <span className="block text-astato-light-green">de Videocirurgia</span>
              </h1>

              {/* Subtitle - Optimized line height and max-width */}
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Restauração de equipamentos médicos com padrão de fábrica, qualidade e segurança para hospitais e clínicas em todo o Brasil.
              </p>

              {/* CTA Buttons - Touch-friendly with proper spacing */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
                <a href="/#contato" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-medical group min-h-[48px]"
                    aria-label="Solicitar orçamento para manutenção de equipamentos"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </a>
                <a href="/#servicos" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-medical group min-h-[48px]"
                    aria-label="Ver nossos serviços de manutenção"
                  >
                    Nossos Serviços
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Service Cards (Vertical) - Interactive Buttons */}
          <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
            <div className="flex flex-col gap-3 sm:gap-4" role="list" aria-label="Serviços principais">
              {services.map((service, index) => (
                <a 
                  key={index}
                  href={service.href}
                  role="listitem"
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 hover:bg-white/20 hover:border-astato-light-green/50 transition-all duration-300 shadow-card group cursor-pointer"
                  aria-label={`Ver detalhes: ${service.title}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2.5 sm:p-3 bg-astato-light-green/20 rounded-xl shrink-0 group-hover:bg-astato-light-green/30 transition-colors" aria-hidden="true">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-astato-light-green" />
                    </div>
                    <h2 className="text-white font-heading font-semibold text-sm sm:text-base leading-tight flex-1">
                      {service.title}
                    </h2>
                    <ArrowRight className="w-5 h-5 text-astato-light-green opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;