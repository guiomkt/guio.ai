
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  ArrowDown,
  ArrowUp,
  Users, 
  TrendingUp, 
  CheckCircle,
  DollarSign,
  Percent
} from "lucide-react";

interface ResultCardProps {
  industry: string;
  company: string;
  beforeTitle: string;
  beforeContent: string;
  afterTitle: string;
  afterContent: string;
  results: { text: string }[];
  index: number;
  className?: string;
}

const ResultCard = ({ 
  industry,
  company,
  beforeTitle,
  beforeContent,
  afterTitle,
  afterContent,
  results,
  index,
  className 
}: ResultCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Calculate animation delay based on index
  const animationDelay = `${index * 200}ms`;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={cn(
        "overflow-hidden rounded-xl border border-guio-red/30 bg-guio-black/80",
        "opacity-0 animate-fade-in",
        className
      )}
      style={{ animationDelay }}
    >
      {/* Card Header with toggle */}
      <div 
        className="bg-guio-darkgray/80 p-5 border-b border-guio-red/30 flex justify-between items-center cursor-pointer"
        onClick={toggleExpanded}
      >
        <div>
          <h3 className="text-xl font-bold text-guio-white">{company}</h3>
          <p className="text-guio-red text-sm">{industry}</p>
        </div>
        <button 
          className="w-8 h-8 flex items-center justify-center text-guio-white/70 hover:text-guio-white transition-colors"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
        </button>
      </div>
      
      {/* Expandable Content */}
      {isExpanded && (
        <div className="p-0">
          {/* Before/After displays */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-4 bg-guio-black/70 border-r border-b border-guio-red/30">
              <h4 className="uppercase text-guio-white/70 mb-2 font-medium">{beforeTitle}</h4>
              <p className="text-guio-white/90">{beforeContent}</p>
            </div>
            <div className="p-4 bg-guio-black/60 border-b border-guio-red/30">
              <h4 className="uppercase text-guio-red mb-2 font-medium">{afterTitle}</h4>
              <p className="text-guio-white/90">{afterContent}</p>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="p-5 bg-guio-black/90">
            <h4 className="text-lg font-bold text-guio-white mb-4">Resultados:</h4>
            <ul className="space-y-2">
              {results.map((result, i) => (
                <li key={i} className="flex items-start text-guio-white/80">
                  <span className="text-guio-red mr-2">•</span>
                  <span>{result.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
