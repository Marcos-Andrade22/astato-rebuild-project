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
      {/* Fundo com gradiente mais vibrante */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#3D6695] via-[#2A4F7A]/95 to-[#1A365D]/90"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start text-white">
          {/* Conteúdo principal à esquerda */}
          <div className="lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left">
            {/* Badge seguindo a estética da hero */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
              <span className="text-sm font-medium">Licitações e Compras Públicas</span>
            </div>

            {/* H1 / Título principal - branco */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
              Suporte técnico
              <span className="block text-[#FFF]">
                para compras públicas na área da saúde
              </span>
            </h2>

            {/* Texto principal */}
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 max-w-lg">
              Atuamos como apoio técnico para hospitais públicos e órgãos da administração pública, contribuindo
              para processos de compra mais seguros, claros e alinhados às exigências do setor da saúde.
            </p>

            {/* CTA alinhado com a hero (botão branco com texto primário) */}
            <div className="flex justify-center lg:justify-start">
              <Link to="/contato">
                <Button
                  size="lg"
                  className="bg-[#3D6695] text-white hover:bg-[#2A4F7A] shadow-medical group min-h-[48px] border-0"
                >
                  Saiba mais
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Cards de serviços movidos para a direita no desktop */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6 max-w-xl lg:max-w-none">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 hover:bg-white/20 hover:border-astato-light-green/50 transition-all duration-300 shadow-card flex flex-col items-center text-center"
              >
                <div className="p-3 bg-astato-light-green/20 rounded-xl mb-3 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-astato-light-green" />
                </div>
                <span className="text-sm sm:text-base font-medium text-white leading-snug">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicFundsSection;
