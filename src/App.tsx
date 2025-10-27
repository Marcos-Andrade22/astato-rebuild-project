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
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <Header />
          <main className="flex-1 pt-[140px] md:pt-[120px]">
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
