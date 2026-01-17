import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, FileCheck, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

const PublicFundsSection = () => {
  const features = [
    {
      icon: Landmark,
      title: "Verbas Estaduais, Municipais e Federais",
    },
    {
      icon: FileCheck,
      title: "Estruturação de Propostas",
    },
    {
      icon: Building2,
      title: "Plataforma +Brasil, FNS e Sistemas Oficiais",
    },
  ];

  return (
    <section id="apoio-verbas" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Apoio em Verbas Públicas</span>
          </div>

          {/* Title */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            APOIO EM VERBAS PÚBLICAS
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 px-6 sm:px-12 lg:px-16 mx-auto max-w-3xl">
            Se você precisa equipar seu hospital ou unidade de saúde com recursos públicos, nós podemos ajudar.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <div className="p-3 bg-primary/10 rounded-xl mb-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed mx-auto max-w-3xl">
            Nosso time especializado orienta e acompanha projetos que envolvem verbas estaduais, municipais e federais, desde a estruturação da proposta até a execução, incluindo cadastros e movimentações na Plataforma +Brasil, FNS e outros sistemas oficiais.
          </p>

          {/* Closing text */}
          <p className="text-lg font-medium text-foreground mb-8 mx-auto max-w-3xl">
            Conte com nosso apoio para transformar seu projeto em realidade com segurança, agilidade e eficiência.
          </p>

          {/* CTA */}
          <Link to="/contato">
            <Button size="lg" className="shadow-medical group">
              Fale Conosco
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PublicFundsSection;
