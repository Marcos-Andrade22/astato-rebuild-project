import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, FileSearch, Settings2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const PublicFundsSection = () => {
  const features = [
    {
      icon: ClipboardList,
      title: "Cotações e pesquisas de preços",
    },
    {
      icon: FileSearch,
      title: "Análise técnica de editais",
    },
    {
      icon: Settings2,
      title: "Definição de especificações",
    },
    {
      icon: AlertTriangle,
      title: "Demandas urgentes e compras diretas",
    },
  ];

  return (
    <section
      id="apoio-verbas"
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Fundo com gradiente similar à hero (sem imagem) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/95 to-primary" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left text-white">
          {/* Badge seguindo a estética da hero */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <span className="text-sm font-medium">Licitações e Compras Públicas</span>
          </div>

          {/* H1 / Título principal */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Suporte técnico
            <span className="block text-[#87BABA]">
              para compras públicas na área da saúde
            </span>
          </h2>

          {/* Texto principal */}
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto lg:mx-0">
            Atuamos como apoio técnico para hospitais públicos e órgãos da administração pública, contribuindo
            para processos de compra mais seguros, claros e alinhados às exigências do setor da saúde.
          </p>

          {/* Cards de serviços, espelhando o estilo das cards da hero (sem ser idêntico) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 hover:bg-white/20 hover:border-astato-light-green/50 transition-all duration-300 shadow-card flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="p-3 bg-astato-light-green/20 rounded-xl mb-3">
                  <feature.icon className="w-6 h-6 text-astato-light-green" />
                </div>
                <span className="text-sm sm:text-base font-medium text-white leading-snug">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>

          {/* CTA alinhado com a hero (botão branco com texto primário) */}
          <div className="flex justify-center lg:justify-start">
            <Link to="/contato">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-medical group min-h-[48px]"
              >
                Saiba mais
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicFundsSection;
