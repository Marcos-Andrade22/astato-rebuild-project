/**
 * Constantes de navegação compartilhadas entre Header e Footer
 */

export interface NavItem {
  name: string;
  href: string;
  dropdown?: boolean;
  subItems?: NavItem[];
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Empresa",
    href: "/empresa",
    dropdown: true,
    subItems: [
      { name: "Sobre a Astato", href: "/empresa" },
      { name: "Diferenciais", href: "/diferenciais" },
    ],
  },
  { name: "Serviços", href: "/servicos" },
  // { name: "Equipamentos", href: "/equipamentos" },
  { name: "Licitações", href: "/licitacoes" },
  { name: "Notícias", href: "/noticias" },
  { name: "Contato", href: "/contato" },
];

export const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "Empresa", href: "/empresa" },
  { name: "Diferenciais", href: "/diferenciais" },
  { name: "Licitações", href: "/licitacoes" },
  { name: "Serviços", href: "/servicos" },
  // { name: "Equipamentos", href: "/equipamentos" },
  { name: "Notícias", href: "/noticias" },
  { name: "Contato", href: "/contato" },
];
