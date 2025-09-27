import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/astato_branca.png";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { name: "Home", href: "#home", scrollOffset: -80 },
    { name: "Empresa", href: "#empresa", scrollOffset: -80 },
    { name: "Diferenciais", href: "#diferenciais", scrollOffset: -80 },
    { name: "Serviços", href: "#servicos", scrollOffset: -80 },
    { name: "Contato", href: "#contato", scrollOffset: -80 }
  ];

  const services = [
    "Manutenção Preventiva",
    "Manutenção Corretiva",
    "Calibração de Óticas",
    "Consultoria Técnica",
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefones",
      values: ["(32) 3031-8474", "(32) 99962-9076"]
    },
    {
      icon: Mail,
      label: "E-mail",
      values: ["contato@astato.com.br"]
    },
    {
      icon: MapPin,
      label: "Endereço",
      values: ["MG Rodovia BR 040 Número 64 , 13B", "Bairro: Empresarial Park Sul - Matias Barbosa/MG", "CEP: 36.120-000"]
    },
    {
      icon: Clock,
      label: "Horário",
      values: ["Segunda a Sexta: 8h às 18h"]
    }
  ];

  function handleFooterLinkClick(event, href, offset = 0) {
    event.preventDefault();

    // Estamos na home? (rota '/')
    const isHome = location.pathname === "/";

    // href sem '#' = id da seção
    const id = href.startsWith("#") ? href.substring(1) : null;

    if (id) {
      // Se estiver fora da home, navega para '/' antes do scroll
      if (!isHome) {
        navigate("/");
        setTimeout(() => {
          scrollToSection(id, offset);
        }, 200);
      } else {
        scrollToSection(id, offset);
      }
    } else {
      // Caso href sem âncora (ex: rotas completas), navega diretamente
      navigate(href);
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
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="Astato Logo" className="h-10 w-auto object-contain" />
              </div>

              <p className="text-white/80 leading-relaxed">
                Mais de 14 anos de experiência em manutenção especializada de equipamentos
                de videocirurgia. Qualidade, compromisso e confiabilidade.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/AstatoManutencao/">
                  <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                    <Facebook className="w-5 h-5" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/astatomanutencao/">
                  <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                    <Instagram className="w-5 h-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/company/astato-equipamentos-m%C3%A9dicos-ltda/">
                  <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-semibold">Links Rápidos</h3>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleFooterLinkClick(e, link.href, link.scrollOffset)}
                    className="block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-semibold">Nossos Serviços</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-astato-light-green flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-semibold">Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="p-2 bg-white/10 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <info.icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium text-sm">{info.label}</div>
                      {info.values.map((value, valueIndex) => (
                        <div key={valueIndex} className="text-white/80 text-sm">
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} Astato Assistência Técnica Ltda. Todos os direitos reservados.
            </div>
            <div className="text-white/60 text-sm">
              CNPJ: 41.742.717/0001-96
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
