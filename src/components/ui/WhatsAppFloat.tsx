import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappNumber = "5532999148039"; // Número da Astato
  const message = "Olá! Gostaria de saber mais sobre os serviços de manutenção em equipamentos de videocirurgia.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:animate-pulse" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-primary text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-medical">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary"></div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;