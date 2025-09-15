import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
} from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {



  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      description: "Ligue para nós durante o horário comercial",
      values: ["(32) 3031-8474", "(32) 99914-8039"],
      action: "Ligar Agora"
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Envie sua mensagem e responderemos em até 24h",
      values: ["contato@astato.com.br"],
      action: "Enviar E-mail"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Atendimento direto via WhatsApp",
      values: ["(32) 99914-8039"],
      action: "Abrir WhatsApp"
    }
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "8h às 18h" },
    { day: "Sábado", hours: "Fechado" },
    { day: "Domingo", hours: "Fechado" },
  ];

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Contato</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fale Conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco para solicitar um orçamento, tirar dúvidas ou
            agendar uma manutenção. Nossa equipe está pronta para atendê-lo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 border-0 bg-muted/30">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {method.description}
                      </p>
                      <div className="space-y-1 mb-3">
                        {method.values.map((value, valueIndex) => (
                          <div key={valueIndex} className="text-sm font-medium text-foreground">
                            {value}
                          </div>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto">
                        {method.action}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="p-6 border-0 bg-background shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="font-heading text-lg font-semibold">Horário de Funcionamento</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{schedule.day}</span>
                    <span className="text-sm font-medium text-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;