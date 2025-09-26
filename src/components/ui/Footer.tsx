import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/Logoastato.jpg";
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
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Empresa", href: "#empresa" },
    { name: "Serviços", href: "#servicos" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Contato", href: "#contato" }
  ];

  const services = [
    "Manutenção Preventiva",
    "Manutenção Corretiva",
    "Calibração de Óticas",
    "Consultoria Técnica",
    "Atendimento Emergencial"
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
      // Matias Barbosa | MG Rodovia BR 040 Número 64 , 13B Bairro: Empresarial Park Sul Matias Barbosa - MG CEP: 36.120-000

      values: ["MG Rodovia BR 040 Número 64 , 13B", "Bairro: Empresarial Park Sul - Matias Barbosa/MG", "CEP: 36.120-000"]
    },
    {
      icon: Clock,
      label: "Horário",
      values: ["Segunda a Sexta: 8h às 18h"]
    }
  ];

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
                <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
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
                    className="block text-white/80 hover:text-white transition-colors hover:translate-x-1 duration-300"
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

        {/* Newsletter Section */}
        {/* <div className="py-12 border-t border-white/20">
          <div className="bg-white/10 rounded-3xl p-8 text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Mantenha-se Atualizado
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Receba dicas importantes sobre manutenção de equipamentos médicos e novidades do setor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail profissional"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button className="bg-white text-primary hover:bg-white/90 px-6">
                Inscrever
              </Button>
            </div>
          </div>
        </div> */}

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
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Certificações
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;