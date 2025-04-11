
import React from "react";
import { cn } from "@/lib/utils";

interface SolutionCardProps {
  title: string;
  description: string;
  icons: React.ReactNode[];
  index: number;
  className?: string;
}

const SolutionCard = ({ 
  title, 
  description, 
  icons,
  index,
  className
}: SolutionCardProps) => {
  // Calculate animation delay based on index
  const animationDelay = `${index * 200}ms`;

  return (
    <div 
      className={cn(
        "glass-card p-6 rounded-xl border border-guio-lightgray/30 hover:border-guio-red/50 transition-all duration-300",
        "opacity-0 animate-fade-in",
        className
      )}
      style={{ animationDelay }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        {/* Icons container */}
        <div className="flex -space-x-2 md:space-x-1 mr-4">
          {icons.map((icon, i) => (
            <div 
              key={i}
              className="w-12 h-12 rounded-full bg-guio-darkgray/50 flex items-center justify-center text-guio-red border border-guio-red/30"
            >
              {icon}
            </div>
          ))}
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gradient-red mb-1">{title}</h3>
          <p className="text-guio-white/70">{description}</p>
        </div>
        
        {/* Decorative element */}
        <div className="hidden md:block w-16 h-16 relative">
          <div className="absolute inset-0 bg-guio-red/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-guio-red rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
