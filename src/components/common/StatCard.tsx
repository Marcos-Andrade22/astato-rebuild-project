/**
 * Componente de card de estatística reutilizável
 * Usado na página Empresa e AboutSection
 */

import { Card, CardContent } from "@/components/ui/card";
import CountUpNumber from "@/components/ui/CountUpNumber";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: LucideIcon;
  value?: number;
  displayValue?: string;
  suffix?: string;
  label: string;
  description?: string;
  duration?: number;
  className?: string;
}

const StatCard = ({
  icon: Icon,
  value,
  displayValue,
  suffix = "",
  label,
  description,
  duration = 2000,
  className,
}: StatCardProps) => {
  return (
    <Card className={cn(
      "text-center p-6 hover:shadow-medical transition-all duration-300 border-0 bg-muted/30",
      className
    )}>
      <CardContent className="space-y-4 p-0">
        <div className="p-4 bg-primary/10 rounded-2xl w-fit mx-auto">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <div className="text-3xl font-heading font-bold text-foreground">
            {value !== undefined && value !== null ? (
              <CountUpNumber end={value} duration={duration} suffix={suffix} />
            ) : (
              displayValue || "-"
            )}
          </div>
          <div className="font-medium text-foreground">{label}</div>
          {description && (
            <div className="text-sm text-muted-foreground">{description}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
