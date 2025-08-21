import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-heading text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Página Não Encontrada
          </h2>
          <p className="text-muted-foreground mb-8">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="shadow-medical">
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Voltar ao Início
            </a>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Página Anterior
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-muted-foreground">
          <p>Se você acredita que isto é um erro, entre em contato conosco:</p>
          <a href="mailto:contato@astato.com.br" className="text-primary hover:underline">
            contato@astato.com.br
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
