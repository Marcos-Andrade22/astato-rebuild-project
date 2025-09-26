import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import medicalProfessionals from "@/assets/medical-professionals.jpg";

const AboutSection = () => {
  const companyStats = [
    {
      icon: Calendar,
      value: "14+",
      label: "Anos de Experiência",
      description: "Tradição no mercado médico"
    },
    {
      icon: Award,
      value: "35000+",
      label: "Equipamentos Atendidos",
      description: "Histórico de excelência"
    },
    {
      icon: Users,
      value: "100+",
      label: "Hospitais Atendidos",
      description: "Confiança dos profissionais"
    },
    {
      icon: MapPin,
      value: "Nacional",
      label: "Cobertura",
      description: "Atendimento em todo Brasil"
    }
  ];

  const differentials = [
    {
      title: "Experiência Comprovada",
      description: "Mais de 10 anos atuando exclusivamente no setor médico-hospitalar"
    },
    {
      title: "Equipe Especializada",
      description: "Técnicos certificados e constantemente atualizados nas últimas tecnologias"
    },
    {
      title: "Atendimento Personalizado",
      description: "Soluções customizadas para cada tipo de equipamento e necessidade"
    },
    {
      title: "Garantia de Qualidade",
      description: "Todos os serviços acompanhados de certificação e garantia estendida"
    },
    {
      title: "Peças Originais",
      description: "Utilizamos apenas componentes originais e de alta qualidade"
    },
    {
      title: "Suporte 24/7",
      description: "Atendimento de emergência para casos críticos em hospitais"
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
            Especialista em restaurar a qualidade original dos equipamentos
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
                <div className="text-3xl font-heading font-bold">14+</div>
                <div className="text-sm opacity-90">Anos de</div>
                <div className="text-sm opacity-90">Experiência</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-6">
                Compromisso com a Excelência Médica
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Com mais de 14 anos de experiência no setor, a Astato oferece soluções completas em manutenção de equipamentos médicos e de videocirurgia.
                Nossa prioridade é clara: garantir que cada equipamento volte a funcionar com a confiabilidade de fábrica, reduzindo riscos, evitando retrabalho e prolongando sua vida útil.
                Somos reconhecidos por unir excelência técnica, transparência e compromisso real com quem mais importa: a vida.
              </p>
              {/* <p className="text-lg text-muted-foreground">
                Nossa missão é garantir que cada equipamento funcione com a precisão necessária
                para procedimentos médicos seguros e eficientes, contribuindo diretamente para
                o sucesso dos tratamentos e a segurança dos pacientes.
              </p> */}
            </div>

            {/* Mission & Vision Cards */}
            <div className="space-y-4">
              <Card className="border-l-4 border-l-primary bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Nossa Missão
                  </h4>
                  <p className="text-muted-foreground">
                    Oferecer soluções em manutenção de equipamentos para vídeo cirurgia, garantindo confiança, eficiência e alto padrão técnico,
                    proporcionando conforto e segurança aos pacientes, cirurgiões e a toda a equipe envolvida.

                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent bg-accent/5">
                <CardContent className="p-6">
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Nossa Visão
                  </h4>
                  <p className="text-muted-foreground">
                    Ser reconhecida pelos clientes como a melhor e mais confiável solução em manutenção de vídeo cirurgia no Brasil.
                  </p>
                </CardContent>
              </Card>
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
                    {stat.value}
                  </div>
                  <div className="font-medium text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Differentials Section */}
        <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-card">
          <div className="text-center mb-12">
            <h3 id="diferenciais" className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Por que escolher a Astato?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossos diferenciais garantem a qualidade e confiabilidade que seu equipamento médico precisa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {differentials.map((differential, index) => (
              <div key={index} className="flex space-x-4 p-4 rounded-2xl hover:bg-muted/30 transition-colors">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {differential.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {differential.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center">
            <Button size="lg" className="shadow-medical group">
              Conhecer Mais Sobre Nós
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;