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
      values: [CONTACT_ADDRESS.street, CONTACT_ADDRESS.neighborhood, CONTACT_ADDRESS.zipCode, CONTACT_ADDRESS.city]
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
            <div className="sm:col-span-2 lg:col-span-1 space-y-5">
              <img
                src={logo}
                alt="Astato Equipamentos Médicos"
                className="h-10 w-auto object-contain"
              />

              <p className="text-white/80 leading-relaxed text-sm max-w-xs">
                {COMPANY_DESCRIPTION}
              </p>

              {/* Social Media */}
              <nav className="flex space-x-3" aria-label="Redes sociais">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Siga-nos no Facebook"
                >
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Siga-nos no Instagram"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Siga-nos no LinkedIn"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </a>
              </nav>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-heading text-base font-semibold tracking-wide uppercase text-white/90">Links Rápidos</h3>
              <nav className="space-y-0.5" aria-label="Links de navegação rápida">
                {QUICK_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors py-2 min-h-[44px] flex items-center text-sm hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-heading text-base font-semibold tracking-wide uppercase text-white/90">Nossos Serviços</h3>
              <ul className="space-y-1.5" aria-label="Lista de serviços">
                {SERVICES_LIST.map((service, index) => (
                  <li key={index} className="flex items-start space-x-2 py-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-astato-light-green flex-shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-white/70 text-sm leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="font-heading text-base font-semibold tracking-wide uppercase text-white/90">Contato</h3>
              <address className="space-y-3 not-italic">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div
                      className="p-2 bg-white/10 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                      aria-hidden="true"
                    >
                      <info.icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-medium text-xs text-white/50 uppercase tracking-wider mb-0.5">{info.label}</div>
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

        <Separator className="bg-white/10" />

        {/* Bottom Bar */}
        <div className="py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-center sm:text-left">
            <div className="text-white/50 text-xs">
              © {new Date().getFullYear()} {COMPANY_INFO.legalName}. Todos os direitos reservados.
            </div>
            <div className="text-white/50 text-xs">
              CNPJ: {COMPANY_INFO.cnpj}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
