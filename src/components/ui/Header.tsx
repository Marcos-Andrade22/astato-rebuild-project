import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/Logoastato.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/#home" },
    { name: "Empresa", href: "/#empresa" },
    { name: "Serviços", href: "/#servicos" },
    { name: "Diferenciais", href: "/#diferenciais" },
    { name: "Notícias", href: "/blog" },
    { name: "Contato", href: "/#contato" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 border-b border-border/50">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="tel:+553231848474" className="flex items-center space-x-2 hover:text-primary transition-smooth">
              <Phone className="w-4 h-4" />
              <span>(32) 3031-8474</span>
            </a>
            <a href="tel:+5532999629076" className="flex items-center space-x-2 hover:text-primary transition-smooth">
              <Phone className="w-4 h-4" />
              <span>(32) 99962-9076</span>
            </a>
            <a href="mailto:contato@astato.com.br" className="flex items-center space-x-2 hover:text-primary transition-smooth">
              <Mail className="w-4 h-4" />
              <span>contato@astato.com.br</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Mais de 14 anos de experiência</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <a href="/">
                <img src={logo} alt="Astato Logo" className="h-10 w-auto object-contain" />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-smooth relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a href="/#contato">
            <div className="hidden lg:flex">
              <Button variant="default" size="lg" className="shadow-medical">
                Solicitar Orçamento
              </Button>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-foreground hover:text-primary transition-smooth"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <a href="/#contato">
                  <Button variant="default" size="lg" className="w-full shadow-medical">
                    Solicitar Orçamento
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;