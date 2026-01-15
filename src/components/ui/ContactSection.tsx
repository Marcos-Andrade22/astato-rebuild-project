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
  const whatsappNumber = "5532999629076"; // Número da Astato
  const message = "Olá! Gostaria de saber mais sobre os serviços de manutenção em equipamentos de videocirurgia.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', "noopener,noreferrer");
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      description: "Atendimento por telefone em horário comercial.",
      values: ["(32) 3031-8474", "(32) 99962-9076"],
      action: "Ligar Agora",
      onClick: () => window.location.href = "tel:+5532999629076",
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Atendimento por e-mail para dúvidas e solicitações.",
      values: ["contato@astato.com.br"],
      action: "Enviar E-mail",
      onClick: () => window.location.href = "mailto:contato@astato.com.br"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Canal rápido para atendimento e solicitações.",
      values: ["(32) 99962-9076"],
      action: "Abrir WhatsApp",
      onClick: handleWhatsAppClick
    }
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "8h às 18h" },
    { day: "Sábado", hours: "Fechado" },
    { day: "Domingo", hours: "Fechado" },
  ];

  return (
    <section 
      id="contato" 
      className="py-12 sm:py-16 lg:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-right mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4 sm:mb-6">
            <span className="text-sm font-medium text-primary">Contato</span>
          </div>
          <h2 
            id="contact-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
          >
            Fale Conosco
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl ml-auto text-right">
            Entre em contato para solicitar um orçamento, esclarecer dúvidas ou falar com nossa equipe.
          </p>
        </header>

        {/* Contact Form - Full Width */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;