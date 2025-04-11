
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  hoverContent: string;
  className?: string;
  index: number;
}

const ProblemCard = ({ 
  icon, 
  title, 
  description,
  hoverContent,
  className,
  index
}: ProblemCardProps) => {
  // Calculate animation delay based on index
  const animationDelay = `${index * 150}ms`;

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card 
          className={cn(
            "tech-card cursor-pointer h-full bg-guio-darkgray border-guio-lightgray/20 hover:border-guio-red/50 transition-all duration-300",
            "opacity-0 animate-fade-in",
            className
          )}
          style={{ animationDelay }}
        >
          <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
            <div className="text-guio-red text-3xl mb-2">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-gradient">{title}</h3>
            <p className="text-guio-white/70">{description}</p>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-guio-darkgray/90 backdrop-blur-lg border border-guio-red/30 text-guio-white p-4">
        <p>{hoverContent}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProblemCard;
