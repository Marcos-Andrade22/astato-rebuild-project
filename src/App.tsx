import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";
import AppRoutes from "./routes/AppRoutes"; // importar as rotas consolidadas
import ScrollToTopOnRouteChange from "./components/ui/ScrollToTopOnRouteChange";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <div className="min-h-screen flex flex-col overflow-x-hidden w-full max-w-[100vw]">
          {/* Skip link for keyboard accessibility */}
          <a 
            href="#main-content" 
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2"
          >
            Pular para o conteúdo principal
          </a>
          <Header />
          {/* ARIA landmark: main content */}
          <main 
            id="main-content"
            role="main"
            className="flex-1 pt-[72px] md:pt-[76px]"
            tabIndex={-1}
          >
            <AppRoutes />
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
