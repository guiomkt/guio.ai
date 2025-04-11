
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn("py-20 min-h-[50vh]", className)}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
