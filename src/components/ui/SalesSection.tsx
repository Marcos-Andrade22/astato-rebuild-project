import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Wrench, ShoppingCart } from "lucide-react";
import LazyImage from "./LazyImage";

// Import equipment images
import test1 from "@/assets/test1.jpg";
import test2 from "@/assets/test2.jpg";
import test3 from "@/assets/test3.png";
import test4 from "@/assets/test4.jpg";
import test5 from "@/assets/test5.jpg";

const SalesSection = () => {
  const equipments = [
    {
      id: 1,
      name: "Ótica Rígida 0°",
      category: "Óticas",
      image: test1,
      description: "Ótica de alta definição para procedimentos laparoscópicos",
    },
    {
      id: 2,
      name: "Pinça Laparoscópica",
      category: "Instrumentais",
      image: test2,
      description: "Instrumental cirúrgico de precisão para videocirurgia",
    },
    {
      id: 3,
      name: "Fonte de Luz LED",
      category: "Iluminação",
      image: test3,
      description: "Fonte de luz LED de alta potência e durabilidade",
    },
    {
      id: 4,
      name: "Câmera Full HD",
      category: "Câmeras",
      image: test4,
      description: "Sistema de câmera com resolução Full HD para cirurgias",
    },
    {
      id: 5,
      name: "Trocárter 10mm",
      category: "Instrumentais",
      image: test5,
      description: "Trocárter reutilizável com válvula de segurança",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Garantia de Qualidade",
      description: "Todos os equipamentos passam por rigoroso controle de qualidade",
    },
    {
      icon: Wrench,
      title: "Suporte Técnico",
      description: "Assistência técnica especializada incluída",
    },
    {
      icon: ShoppingCart,
      title: "Condições Especiais",
      description: "Preços competitivos e condições de pagamento flexíveis",
    },
  ];

  return (
    <section id="vendas" className="py-12 sm:py-16 lg:py-20 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text and Benefits */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-2">
              <span className="text-sm font-medium text-primary">Vendas de Equipamentos</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
              Equipamentos de Vídeo Cirurgia
            </h2>
            <p className="text-lg text-muted-foreground mb-8 mx-auto lg:mx-0">
              <b>Em breve</b>, equipamentos selecionados por quem entende de manutenção hospitalar. Nossa expertise técnica garante que você receba apenas produtos de alta qualidade e procedência.
            </p>

            {/* Benefits Cards */}
            <div className="flex flex-col gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-muted/30 rounded-xl text-left"
                >
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              disabled={true}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medical group disabled:bg-slate-400 disabled:text-slate-700 disabled:cursor-not-allowed"
            >
              Em breve
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5 h-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
            </Button>
          </div>

          {/* Right Column - Equipment Cards Grid */}
          <div className="flex flex-col gap-4">
            {equipments.slice(0, 3).map((equipment) => (
              <Card key={equipment.id} className="overflow-hidden shadow-card border-0 bg-background">
                <div className="flex flex-row items-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden bg-muted">
                    <LazyImage
                      src={equipment.image}
                      alt={equipment.name}
                      className="w-full h-full object-cover"
                      width={128}
                      height={128}
                    />
                  </div>
                  <CardContent className="p-4 flex-1">
                    <div className="inline-flex items-center px-2.5 py-0.5 bg-primary/10 rounded-full mb-2">
                      <span className="text-xs font-medium text-primary">
                        {equipment.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-sm sm:text-base font-semibold text-foreground mb-1">
                      {equipment.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {equipment.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
