import { Button } from "@/components/ui/button";
import { Shield, Wrench, ShoppingCart } from "lucide-react";

const SalesSection = () => {
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
    <section
      id="vendas"
      className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center py-12 sm:py-16 lg:py-20 bg-muted/30 border-y border-border/50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text and CTA */}
          <div className="text-center lg:text-left space-y-6 order-first">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-0 w-fit mx-auto lg:mx-0">
              <span className="text-sm font-medium text-primary">Vendas de Equipamentos</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
              Equipamentos de Vídeo Cirurgia
            </h2>
            <p className="text-lg text-muted-foreground mx-auto lg:mx-0 max-w-lg">
              <b>Em breve</b>, equipamentos selecionados por quem entende de manutenção hospitalar. Nossa expertise técnica garante que você receba apenas produtos de alta qualidade e procedência.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <span
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-md font-bold text-#f5f8f8 bg-slate-500/40 rounded-xl border border-slate-400/30 cursor-not-allowed opacity-80"
                aria-disabled="true"
              >
                Em breve
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
              </span>
            </div>
          </div>

          {/* Right Column - Benefits Cards */}
          <div className="flex flex-col justify-center gap-4 order-last h-full lg:h-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-muted/30 rounded-xl text-left hover:bg-muted/50 transition-colors"
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
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
