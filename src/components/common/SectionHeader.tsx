/**
 * Componente de cabeçalho de seção reutilizável
 * Usado em várias seções da landing page e páginas internas
 */

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      centered ? "text-center" : "text-center lg:text-left",
      className
    )}>
      {badge && (
        <div className={cn(
          "inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6",
          centered && "mx-auto"
        )}>
          {BadgeIcon && <BadgeIcon className="w-5 h-5 mr-2 text-primary" />}
          <span className="text-sm font-medium text-primary">{badge}</span>
        </div>
      )}
      
      <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
        {title}
        {titleHighlight && (
          <span className="block text-primary">{titleHighlight}</span>
        )}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "text-muted-foreground",
          centered ? "max-w-2xl mx-auto" : "max-w-2xl"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
