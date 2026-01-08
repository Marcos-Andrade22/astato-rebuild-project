import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/Logoastato.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { name: "Home", href: "/", scrollOffset: -80 },     // Ajuste aqui para compensar header sticky
    { name: "Empresa", href: "/#empresa", scrollOffset: -80 },
    { name: "Diferenciais", href: "/#diferenciais", scrollOffset: -80 },
    { name: "Serviços", href: "/#servicos", scrollOffset: -80 },
    { name: "Notícias", href: "/blog" },
    { name: "Contato", href: "/#contato", scrollOffset: -80 },
  ];

  function handleClickHome(event) {
    event.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        // scrollToSection("presentation", 0);
        setIsMenuOpen(false);
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }

  function handleNavigationClick(event, item) {
    event.preventDefault();
    const currentPath = location.pathname;

    if (item.href === "/") {
      handleClickHome(event);
      return;
    }

    if (item.href === "/blog") {
      if (currentPath !== "/blog") {
        navigate("/blog");
      }
      setIsMenuOpen(false);
      return;
    }

    if (item.href.startsWith("/#")) {
      const id = item.href.replace("/#", "");

      if (currentPath !== "/") {
        navigate("/");
        setTimeout(() => {
          scrollToSection(id, item.scrollOffset || 0);
          setIsMenuOpen(false);
        }, 200);
      } else {
        scrollToSection(id, item.scrollOffset || 0);
        setIsMenuOpen(false);
      }
      return;
    }
  }

  function scrollToSection(id, offset = 0) {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <header 
      role="banner"
      className="bg-background/95 backdrop-blur-md border-b border-border fixed top-0 left-0 right-0 z-50 shadow-card w-full"
    >
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 border-b border-border/50">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a 
              href="tel:+553231848474" 
              className="flex items-center space-x-2 hover:text-primary transition-smooth min-h-[44px]"
              aria-label="Ligar para (32) 3031-8474"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>(32) 3031-8474</span>
            </a>
            <a 
              href="tel:+5532999629076" 
              className="flex items-center space-x-2 hover:text-primary transition-smooth min-h-[44px]"
              aria-label="Ligar para (32) 99962-9076"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>(32) 99962-9076</span>
            </a>
            <a 
              href="mailto:contato@astato.com.br" 
              className="flex items-center space-x-2 hover:text-primary transition-smooth min-h-[44px]"
              aria-label="Enviar e-mail para contato@astato.com.br"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>contato@astato.com.br</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Mais de 14 anos de experiência</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              onClick={handleClickHome}
              aria-label="Astato - Página inicial"
            >
              <img 
                src={logo} 
                alt="Astato Equipamentos Médicos" 
                className="h-10 w-auto object-contain" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
            aria-label="Navegação principal"
          >
            {navigationItems.map((item) =>
              item.name === "Home" ? (
                <a
                  key={item.name}
                  href="/"
                  onClick={handleClickHome}
                  className="text-sm font-medium text-foreground hover:text-primary transition-smooth relative group min-h-[44px] flex items-center"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                </a>
              ) : item.href.startsWith("/#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigationClick(e, item)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-smooth relative group min-h-[44px] flex items-center"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-smooth relative group min-h-[44px] flex items-center"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <a
            href="/#contato"
            onClick={e => handleNavigationClick(e, { name: "Contato", href: "/#contato", scrollOffset: -80 })}
          >
            <div className="hidden lg:flex">
              <Button 
                variant="default" 
                size="lg" 
                className="shadow-medical min-h-[48px]"
                aria-label="Solicitar orçamento"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-foreground hover:text-primary transition-smooth min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu"
            className="lg:hidden py-4 border-t border-border"
            role="navigation"
            aria-label="Navegação mobile"
          >
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) =>
                item.name === "Home" ? (
                  <a
                    key={item.name}
                    href="/"
                    onClick={handleClickHome}
                    className="text-base font-medium text-foreground hover:text-primary transition-smooth py-3 px-2 min-h-[48px] flex items-center active:bg-muted/50 rounded-md"
                  >
                    {item.name}
                  </a>
                ) : item.href.startsWith("/#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavigationClick(e, item)}
                    className="text-base font-medium text-foreground hover:text-primary transition-smooth py-3 px-2 min-h-[48px] flex items-center active:bg-muted/50 rounded-md"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary transition-smooth py-3 px-2 min-h-[48px] flex items-center active:bg-muted/50 rounded-md"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-4 border-t border-border">
                <a 
                  href="/#contato"
                  onClick={(e) => handleNavigationClick(e, { name: "Contato", href: "/#contato", scrollOffset: -80 })}
                >
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-full shadow-medical min-h-[52px]"
                    aria-label="Solicitar orçamento"
                  >
                    Solicitar Orçamento
                  </Button>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
