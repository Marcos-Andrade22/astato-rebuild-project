import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Clock,
  MessageSquare,
  MapPin
} from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import MapComponent from "@/components/ui/MapComponent";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";

const Contato = () => {
  const whatsappNumber = "5532999629076";
  const message = "Olá! Gostaria de saber mais sobre os serviços de manutenção em equipamentos de videocirurgia.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', "noopener,noreferrer");
  };

  const abrirEnderecoNoMapa = () => {
    const url = `https://maps.app.goo.gl/gtkbyBUobo5rxoWX9`;
    window.open(url, "_blank", "noopener,noreferrer");
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contato - Astato Equipamentos Médicos",
    "description": "Entre em contato com a Astato para solicitar orçamentos de manutenção de equipamentos médicos",
    "url": "https://astato.com.br/contato",
    "mainEntity": {
      "@type": "Organization",
      "name": "Astato Equipamentos Médicos",
      "telephone": "+55-32-3031-8474",
      "email": "contato@astato.com.br",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rodovia BR 040 Número 64, 13B",
        "addressLocality": "Matias Barbosa",
        "addressRegion": "MG",
        "postalCode": "36120-000",
        "addressCountry": "BR"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Contato | Astato - Solicite um Orçamento"
        description="Entre em contato com a Astato para solicitar orçamentos de manutenção de equipamentos médicos de videocirurgia. Atendemos hospitais e clínicas em todo o Brasil."
        keywords="contato astato, orçamento manutenção, equipamentos médicos, telefone astato, email astato"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-muted/20">
        {/* Breadcrumb */}
        <section className="py-4 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                { label: "Contato", current: true }
              ]}
            />
          </div>
        </section>

        {/* Hero Section */}
        <header className="bg-gradient-medical text-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              <MessageSquare className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Contato</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
              Fale Conosco
            </h1>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
              Entre em contato para solicitar um orçamento, esclarecer dúvidas ou falar com nossa equipe.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16" id="formulario">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Information */}
              <aside className="space-y-4 sm:space-y-6" aria-label="Informações de contato">
                {/* Contact Methods */}
                <div className="space-y-3 sm:space-y-4">
                  {contactMethods.map((method, index) => (
                    <Card 
                      key={index} 
                      className="p-4 sm:p-6 hover:shadow-card transition-all duration-300 border-0 bg-muted/30"
                    >
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="p-2.5 sm:p-3 bg-primary/10 rounded-xl flex-shrink-0" aria-hidden="true">
                          <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading font-semibold text-foreground mb-1 text-base">
                            {method.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                            {method.description}
                          </p>
                          <div className="space-y-1 mb-3">
                            {method.values.map((value, valueIndex) => (
                              <div key={valueIndex} className="text-sm font-medium text-foreground">
                                {value}
                              </div>
                            ))}
                          </div>
                          <Button 
                            onClick={method.onClick} 
                            variant="link" 
                            size="sm" 
                            className="text-primary hover:text-primary/80 p-0 h-auto min-h-[44px] flex items-center"
                            aria-label={`${method.action} - ${method.title}`}
                          >
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Business Hours */}
                <Card className="p-4 sm:p-6 border-0 bg-background shadow-card">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
                    <h3 className="font-heading text-base sm:text-lg font-semibold">Horário de Funcionamento</h3>
                  </div>
                  <dl className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <dt className="text-sm text-muted-foreground">{schedule.day}</dt>
                        <dd className="text-sm font-medium text-foreground">{schedule.hours}</dd>
                      </div>
                    ))}
                  </dl>
                </Card>
              </aside>
            </div>

            {/* Map Section */}
            <Card className="overflow-hidden shadow-medical border-0">
              <div className="bg-muted/50 p-6 border-b text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">Nossa Localização</h2>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nosso laboratório está localizado no Empresarial Park Sul, com estrutura completa para receber equipamentos de hospitais e clínicas de todas as regiões do país.
                </p>
              </div>
              <div className="h-96 bg-muted/30">
                <MapComponent />
              </div>
              <div className="p-6 border-t bg-muted/50 flex flex-col items-center gap-4">
                <div className="text-center">
                  <p className="text-foreground font-medium">Rodovia BR 040 Número 64, 13B</p>
                  <p className="text-muted-foreground">Bairro: Empresarial Park Sul - Matias Barbosa/MG</p>
                  <p className="text-muted-foreground">CEP: 36.120-000</p>
                </div>
                <Button onClick={abrirEnderecoNoMapa}>Abrir no Google Maps</Button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contato;
