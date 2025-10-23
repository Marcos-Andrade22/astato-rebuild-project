import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wrench,
  Microscope,
  CheckCircle2,
  Stethoscope,
  Settings,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: "Manutenção Preventiva",
      description: "Inspeções regulares e manutenções programadas para garantir o funcionamento ideal dos equipamentos.",
      features: [
        "Cronograma personalizado",
        "Relatórios técnicos detalhados",
        "Certificados de calibração",
        "Garantia estendida"
      ]
    },
    {
      icon: Settings,
      title: "Manutenção Corretiva",
      description: "Reparo rápido e eficiente de equipamentos com defeito, utilizando peças originais e técnicas especializadas.",
      features: [
        "Diagnóstico preciso",
        "Peças originais garantidas",
        "Técnicos certificados",
        "Atendimento emergencial"
      ]
    },
    {
      icon: Microscope,
      title: "Calibração de Óticas",
      description: "Calibração precisa de sistemas óticos para videocirurgia, garantindo imagens nítidas e procedimentos seguros.",
      features: [
        "Equipamentos de alta precisão",
        "Certificação metrológica",
        "Padrões internacionais",
        "Documentação completa"
      ]
    },
    {
      icon: Stethoscope,
      title: "Consultoria Técnica",
      description: "Orientação especializada para otimização do uso e vida útil dos equipamentos médicos.",
      features: [
        "Análise de performance",
        "Treinamento de equipes",
        "Planos de melhoria",
        "Suporte contínuo"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Análise Inicial",
      description: "Avaliação completa do equipamento e diagnóstico preciso"
    },
    {
      step: "02",
      title: "Orçamento Detalhado",
      description: "Proposta transparente com prazos e custos bem definidos"
    },
    {
      step: "03",
      title: "Execução",
      description: "Manutenção realizada por técnicos especializados"
    },
    {
      step: "04",
      title: "Entrega & Garantia",
      description: "Equipamento testado, certificado e com garantia de qualidade"
    }
  ];

  return (
    <>
      <section id="servicos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 min-w-full overflow-x-hidden">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">Nossos Serviços</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Manutenção Especializada em
              <span className="block text-primary">Equipamentos de Videocirurgia</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Você pode contar com uma empresa com mais de 14 anos de tradição no mercado médico,
              reconhecida pela qualidade dos serviços prestados e transparência.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-medical transition-all duration-300 border-0 bg-background">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-card">
            <div className="text-center mb-12">
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                Nosso Processo de Atendimento
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Seguimos um protocolo rigoroso para garantir a excelência em cada etapa do serviço
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-medical">
                      <span className="text-2xl font-heading font-bold text-white">{process.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-x-2"></div>
                    )}
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {process.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;