/**
 * Componente de cabeçalho de página reutilizável
 * Usado nas páginas internas (Empresa, Serviços, Diferenciais, etc.)
 */

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
}

const PageHeader = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  backgroundImage,
  className,
  children,
}: PageHeaderProps) => {
  return (
    <header className={cn(
      "relative bg-gradient-medical text-foreground py-16 lg:py-20 overflow-hidden",
      className
    )}>
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              {BadgeIcon && <BadgeIcon className="w-5 h-5 mr-2" />}
              <span className="text-sm font-medium">{badge}</span>
            </div>
          )}
          
          <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          
          {children}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
