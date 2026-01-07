import { MapPin } from "lucide-react";
import { Button } from "./button";
import { Card } from "@/components/ui/card";
import MapComponent from "./MapComponent";

const MapSection = () => {
  const abrirEnderecoNoMapa = () => {
    const endereco = "MG Rodovia BR 040 Número 64, 13B, Bairro Empresarial Park Sul Matias Barbosa MG";
    const url = `https://maps.app.goo.gl/gtkbyBUobo5rxoWX9`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-16">
      <Card className="overflow-hidden shadow-medical border-0">
        <div className="bg-muted/50 p-6 border-b text-center">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Nossa Localização</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nosso laboratório está localizado no Empresarial Park Sul, com estrutura completa para receber equipamentos de hospitais e clínicas de todas as regiões do país.
          </p>
        </div>
        <div className="h-96 bg-muted/30 flex items-center justify-center">
          <div className="sticky top-[calc(altura-do-header)] h-96 w-full rounded-lg overflow-hidden z-40">
            <MapComponent />
          </div>
        </div>
        <div className="p-6 border-t bg-muted/50 flex flex-col items-center gap-4">
          <Button onClick={abrirEnderecoNoMapa}>Abrir no Google Maps</Button>
        </div>
      </Card>
    </div>
  );
};

export default MapSection;
