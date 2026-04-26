import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import logo from "@/assets/LogoastatoPNG.png";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS, CONTACT_PHONES, CONTACT_EMAIL } from "@/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmpresaDropdownOpen, setIsEmpresaDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Usar constantes compartilhadas
  const navigationItems = NAVIGATION_ITEMS;

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsEmpresaDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleClickHome(event) {
    event.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }

  function handleNavigationClick(item: any) {
    if (item.href === "/") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(item.href);
    }
    setIsMenuOpen(false);
    setIsEmpresaDropdownOpen(false);
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
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  onClick={() => handleNavigationClick(item)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-smooth relative min-h-[44px] flex items-center group-hover:mb-2"
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                </Link>

                {/* Dropdown Overlay */}
                {item.dropdown && (
                  <div
                    ref={dropdownRef}
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-3 px-4",
                      isEmpresaDropdownOpen && "opacity-100 visible"
                    )}
                    role="menu"
                    aria-label="Submenu Empresa"
                  >
                    <div className="space-y-1">
                      {item.subItems?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => handleNavigationClick(subItem)}
                          className="block w-full text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 px-4 py-3 rounded-xl transition-all duration-200 flex items-center group/subitem"
                        >
                          {subItem.name}
                          <span className="ml-auto w-2 h-2 bg-primary rounded-full opacity-0 group-hover/subitem:opacity-100 transition-opacity ml-3" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link to="/contato" className="hidden lg:flex">
            <Button
              variant="default"
              size="lg"
              className="shadow-medical min-h-[48px]"
              aria-label="Solicitar orçamento"
            >
              Solicitar Orçamento
            </Button>
          </Link>

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
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => handleNavigationClick(item)}
                    className="text-base font-medium text-foreground hover:text-primary transition-smooth py-3 px-2 min-h-[48px] flex items-center active:bg-muted/50 rounded-md"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-6 mt-2 space-y-2 pb-4 border-l-2 border-muted">
                      {item.subItems?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => handleNavigationClick(subItem)}
                          className="text-sm text-muted-foreground hover:text-primary pl-4 py-2 block transition-all duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full shadow-medical min-h-[52px]"
                    aria-label="Solicitar orçamento"
                  >
                    Solicitar Orçamento
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
