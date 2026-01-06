import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Award,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle
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
      value: 100,
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

  const differentials = [
    {
      title: "Experiência Comprovada",
      description: "Mais de 14 anos atuando exclusivamente em manutenção de equipamentos de vídeo cirurgia."
    },
    {
      title: "Equipe Especializada",
      description: "Técnicos certificados e em constante atualização."
    },
    {
      title: "Laudos Técnicos Completos",
      description: "Informações claras, detalhadas e rastreáveis para auditorias e decisões clínicas."
    },
    {
      title: "Garantia de Qualidade",
      description: "Padrão de fábrica, sem improvisos."
    },
    {
      title: "Laboratório Próprio",
      description: "Controle completo dos processos e maior agilidade na entrega."
    },
    {
      title: "Suporte Durante Todo o Processo",
      description: "Atendimento de qualidade do início ao fim."
    }
  ];


  return (
    <section id="empresa" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Sobre a Astato</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Especialistas em restaurar a qualidade original dos equipamentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Para que hospitais públicos, privados, clínicas e pacientes tenham procedimentos seguros e de alto padrão, é essencial que os equipamentos médicos passem por manutenção hospitalar de qualidade, realizada com precisão técnica e cuidado.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-medical">
              <img
                src={medicalProfessionals}
                alt="Equipe médica profissional trabalhando com equipamentos de videocirurgia"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary rounded-2xl p-6 shadow-medical text-white">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold">
                  <CountUpNumber end={14} duration={2000} suffix="+" />
                </div>
                <div className="text-sm opacity-90">Anos de</div>
                <div className="text-sm opacity-90">Experiência</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Com mais de 34 anos de experiência na área da saúde, e a 14 anos trabalhando exclusivamente com manutenção de equipamentos médicos e videocirurgia. Nossa prioridade é garantir que cada equipamento volte a funcionar com a confiabilidade de fábrica, reduzindo riscos, evitando retrabalhos e prolongando sua vida útil.
              </p>
              <p className="text-lg text-muted-foreground">
                Agora, ampliamos nossa atuação com a oferta de equipamentos médicos de vídeo cirurgia selecionados com curadoria técnica, mantendo o compromisso com segurança, qualidade e transparência.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="space-y-4">
              <Card className="border-l-4 border-l-primary bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Nossa Missão
                  </h4>
                  <p className="text-muted-foreground">
                    Oferecer soluções em manutenção e fornecimento de equipamentos médicos com confiança, eficiência e alto padrão técnico, proporcionando segurança e conforto aos pacientes, cirurgiões e equipes envolvidas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent bg-accent/5">
                <CardContent className="p-6">
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Nossa Visão
                  </h4>
                  <p className="text-muted-foreground">
                    Ser reconhecida pelos clientes como a melhor e mais confiável solução em manutenção e fornecimento de equipamentos médicos no Brasil.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Button */}
            <div>
              <Link to="/sobre-nos">
                <Button size="lg" className="shadow-medical group">
                  Conheça Nossa História
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {companyStats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-medical transition-all duration-300 border-0 bg-muted/30">
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-2xl w-fit mx-auto">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-foreground">
                    {stat.value !== null ? (
                      <CountUpNumber end={stat.value} duration={2000} suffix={stat.suffix} />
                    ) : (
                      stat.displayValue
                    )}
                  </div>
                  <div className="font-medium text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </CardContent>
              <div id="diferenciais" />
            </Card>
          ))}
        </div>

        {/* Differentials Section */}
        <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-card">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Por que confiar na Astato?  {/* ← Mudança solicitada */}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossos diferenciais garantem a <span className="font-semibold text-primary">qualidade</span> e <span className="font-semibold text-primary">confiabilidade</span> que seu equipamento médico precisa.  {/* ← Destaque */}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {differentials.map((differential, index) => (
              <div
                key={index}
                className="flex space-x-4 p-6 rounded-2xl hover:bg-muted/50 hover:shadow-card-hover hover:-translate-y-1 hover:scale-[1.02] group transition-all duration-300 ease-out border border-border/50 hover:border-primary/30"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {differential.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {differential.description}
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

export default AboutSection;
