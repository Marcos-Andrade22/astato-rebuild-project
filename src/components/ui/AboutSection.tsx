import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Award,
  MapPin,
  Calendar,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import medicalProfessionals from "@/assets/medical-professionals.jpg";
import CountUpNumber from "./CountUpNumber";

const AboutSection = () => {
  const companyStats = [
    {
      icon: Calendar,
      value: 14,
      suffix: "+",
      label: "Anos de Experiência",
      description: "Tradição no mercado médico"
    },
    {
      icon: Award,
      value: 35000,
      suffix: "+",
      label: "Equipamentos Atendidos",
      description: "Histórico de excelência"
    },
    {
      icon: Users,
      value: 1000,
      suffix: "+",
      label: "Hospitais Atendidos",
      description: "Confiança dos profissionais"
    },
    {
      icon: MapPin,
      value: null,
      displayValue: "Nacional",
      label: "Cobertura",
      description: "Atendimento em todo Brasil"
    }
  ];


  return (
    <section id="empresa" className="relative py-20 overflow-hidden">
      {/* Background similar to hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
          <span className="text-sm font-medium text-primary">Empresa</span>
        </div>
        {/* Section Header - Left aligned, no subtitle */}
        <div className="mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            Especialistas em restaurar<br className="hidden sm:block" /> a qualidade original dos equipamentos
          </h2>
        </div>

        {/* Main Content Grid - Compact Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com mais de 34 anos de experiência na área da saúde, e a 14 anos trabalhando exclusivamente com manutenção de equipamentos médicos e videocirurgia. Nossa prioridade é garantir que cada equipamento volte a funcionar com a confiabilidade de fábrica, reduzindo riscos, evitando retrabalhos e prolongando sua vida útil.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Agora, ampliamos nossa atuação com a oferta de equipamentos médicos de vídeo cirurgia selecionados com curadoria técnica, mantendo o compromisso com segurança, qualidade e transparência.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link to="/empresa">
                <Button size="lg" className="shadow-medical group">
                  Conheça Nossa História
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-3xl overflow-hidden shadow-medical">
              <img
                src={medicalProfessionals}
                alt="Equipe médica profissional trabalhando com equipamentos de videocirurgia"
                className="w-full h-[300px] lg:h-[350px] object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-4 lg:-bottom-6 lg:-right-6 lg:left-auto bg-primary rounded-2xl p-4 lg:p-5 shadow-medical text-white">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-heading font-bold">
                  <CountUpNumber end={14} duration={2000} suffix="+" />
                </div>
                <div className="text-xs lg:text-sm opacity-90">Anos de</div>
                <div className="text-xs lg:text-sm opacity-90">Experiência</div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats - 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-16">
          {companyStats.map((stat, index) => (
            <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-medical transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm">
              <CardContent className="space-y-3 sm:space-y-4 p-0">
                <div className="p-3 sm:p-4 bg-primary/10 rounded-2xl w-fit mx-auto">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                    {stat.value !== null ? (
                      <CountUpNumber end={stat.value} duration={2000} suffix={stat.suffix} />
                    ) : (
                      stat.displayValue
                    )}
                  </div>
                  <div className="font-medium text-foreground text-sm sm:text-base">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
