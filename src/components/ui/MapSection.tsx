import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./button";
import { Card } from "@/components/ui/card";
import Snackbar from "./Snackbar";

const MapSection = () => {
  const [snackbar, setSnackbar] = useState<{ message: string; type?: string } | null>(null);

  const abrirEnderecoNoMapa = () => {
    const endereco = "MG Rodovia BR 040 Número 64, 13B, Bairro Empresarial Park Sul Matias Barbosa MG";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
    try {
      window.open(url, "_blank", "noopener,noreferrer"); // abre em nova aba
      setSnackbar({ message: "Mapa aberto com sucesso!", type: "success" });
    } catch (error) {
      setSnackbar({ message: "Não foi possível abrir o mapa.", type: "error" });
    }
  };

  return (
    <>
      {snackbar && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type as "success" | "error" | "info"}
          onClose={() => setSnackbar(null)}
        />
      )}
      <div className="mt-16">
        <Card className="overflow-hidden shadow-medical border-0">
          <div className="bg-muted/50 p-6 border-b">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
              Nossa Localização
            </h3>
            <p className="text-muted-foreground">
              Venha nos conhecer pessoalmente em nosso escritório em Juiz de Fora
            </p>
          </div>
          <div className="h-96 bg-muted/30 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="w-12 h-12 text-primary mx-auto" />
              <div>
                <p className="font-medium text-foreground">
                  MG Rodovia BR 040 Número 64 , 13B, Bairro: Empresarial Park Sul
                </p>
                <p className="text-muted-foreground">Matias Barbosa/MG</p>
              </div>
              <Button onClick={abrirEnderecoNoMapa}>
                Abrir no Google Maps
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default MapSection;
