import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps {
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  className,
  align = "center" 
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-12", 
      {
        "text-left": align === "left",
        "text-center": align === "center",
        "text-right": align === "right"
      },
      className
    )}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-guio-white/70 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
