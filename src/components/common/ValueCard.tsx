/**
 * Componente de card de valor/pilar reutilizável
 * Usado nas páginas Empresa e Diferenciais
 */

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "highlighted";
  className?: string;
}

const ValueCard = ({
  icon: Icon,
  title,
  description,
  variant = "default",
  className,
}: ValueCardProps) => {
  if (variant === "highlighted") {
    return (
      <Card className={cn(
        "group border-0 shadow-card hover:shadow-medical transition-all duration-500 overflow-hidden bg-gradient-to-br from-background to-muted/30 hover:bg-primary/5 h-full",
        className
      )}>
        <div className="p-8 lg:p-10 h-full flex flex-col">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 mx-auto">
            <Icon className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-700" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4 text-center group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed flex-1 text-center group-hover:text-foreground/90 transition-colors">
            {description}
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn(
      "border-l-4 border-l-primary bg-primary/5 p-6",
      className
    )}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h4 className="font-heading font-semibold text-xl text-foreground">
          {title}
        </h4>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};

export default ValueCard;
