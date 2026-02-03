import { Link } from "react-router-dom";
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
import { 
  QUICK_LINKS, 
  SERVICES_LIST, 
  CONTACT_PHONES, 
  CONTACT_EMAIL, 
  CONTACT_ADDRESS, 
  CONTACT_HOURS,
  SOCIAL_LINKS,
  COMPANY_DESCRIPTION,
  COMPANY_INFO
} from "@/constants";

const Footer = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefones",
      values: CONTACT_PHONES.map(p => p.label)
    },
    {
      icon: Mail,
      label: "E-mail",
      values: [CONTACT_EMAIL.label]
    },
    {
      icon: MapPin,
      label: "Endereço",
      values: [CONTACT_ADDRESS.street, CONTACT_ADDRESS.neighborhood, CONTACT_ADDRESS.zipCode]
    },
    {
      icon: Clock,
      label: "Horário",
      values: [CONTACT_HOURS]
    }
  ];


  return (
    <footer 
      className="bg-primary text-white"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-10 sm:py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src={logo} 
                  alt="Astato Equipamentos Médicos" 
                  className="h-10 w-auto object-contain" 
                />
              </div>

              <p className="text-white/80 leading-relaxed text-base">
                {COMPANY_DESCRIPTION}
              </p>

              {/* Social Media */}
              <nav className="flex space-x-3" aria-label="Redes sociais">
                <a 
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
                  aria-label="Siga-nos no Facebook"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
                <a 
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
                  aria-label="Siga-nos no Instagram"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
                <a 
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
                  aria-label="Siga-nos no LinkedIn"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
              </nav>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-heading text-lg sm:text-xl font-semibold">Links Rápidos</h3>
              <nav className="space-y-1" aria-label="Links de navegação rápida">
                {QUICK_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="block text-white/80 hover:text-white transition-colors py-2 min-h-[44px] flex items-center hover:translate-x-1 duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-heading text-lg sm:text-xl font-semibold">Nossos Serviços</h3>
              <ul className="space-y-2" aria-label="Lista de serviços">
                {SERVICES_LIST.map((service, index) => (
                  <li key={index} className="flex items-start space-x-2 py-1">
                    <ArrowRight className="w-4 h-4 text-astato-light-green flex-shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-white/80 text-sm leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-heading text-lg sm:text-xl font-semibold">Contato</h3>
              <address className="space-y-4 not-italic">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex space-x-3">
                    <div 
                      className="p-2.5 bg-white/10 rounded-lg flex-shrink-0 flex items-center justify-center min-w-[40px] min-h-[40px]"
                      aria-hidden="true"
                    >
                      <info.icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium text-sm">{info.label}</div>
                      {info.values.map((value, valueIndex) => (
                        <div key={valueIndex} className="text-white/80 text-sm leading-relaxed">
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </address>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Bar */}
        <div className="py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} {COMPANY_INFO.legalName}. Todos os direitos reservados.
            </div>
            <div className="text-white/60 text-sm">
              CNPJ: {COMPANY_INFO.cnpj}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
