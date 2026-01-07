import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Eye, Wrench, Cpu } from "lucide-react";
import heroImage from "@/assets/hero-medical-equipment.jpg";
import LazyImage from "./LazyImage";
import CountUpNumber from "./CountUpNumber";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HeroSection = () => {
  const stats = [
    { icon: Shield, label: "Anos de Experiência", value: 14, suffix: "+" },
    { icon: Award, label: "Equipamentos Atendidos", value: 35000, suffix: "+" },
  ];

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

          {/* Right Column - Stats Cards */}
          <div className="lg:justify-self-end">
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-card">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-astato-light-green/20 rounded-xl">
                      <stat.icon className="w-6 h-6 text-astato-light-green" />
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-bold text-white">
                        <CountUpNumber end={stat.value} suffix={stat.suffix} duration={2500} />
                      </div>
                      <div className="text-white/80 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Cards - Inside Hero */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 bg-astato-light-green/20 rounded-xl">
                    <service.icon className="w-10 h-10 text-astato-light-green" />
                  </div>
                  <CardTitle className="text-lg font-heading leading-tight text-white">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;