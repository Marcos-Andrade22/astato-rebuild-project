/**
 * Componente de card de feature/benefício reutilizável
 * Usado em várias seções do site
 */

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "horizontal" | "compact";
  className?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  variant = "default",
  className,
}: FeatureCardProps) => {
  if (variant === "horizontal") {
    return (
      <div className={cn(
        "flex items-center space-x-4 p-4 bg-muted/30 rounded-xl text-left",
        className
      )}>
        <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={cn(
        "flex space-x-4 p-6 rounded-2xl hover:bg-muted/50 hover:shadow-card-hover hover:-translate-y-1 hover:scale-[1.02] group transition-all duration-300 ease-out border border-border/50 hover:border-primary/30",
        className
      )}>
        <div className="p-3 bg-primary/10 rounded-xl h-fit flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  }

  // Default variant - card style
  return (
    <div className={cn(
      "p-6 bg-muted/30 rounded-xl text-center hover:shadow-card transition-all duration-300",
      className
    )}>
      <div className="p-4 bg-primary/10 rounded-2xl w-fit mx-auto mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h4 className="font-heading font-semibold text-foreground mb-2">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
