
import { cn } from "@/lib/utils";
import { X, Check } from "lucide-react";
import React from "react";

interface MythRealityCardProps {
  myth: string;
  reality: string;
  index: number;
}

const MythRealityCard = ({ myth, reality, index }: MythRealityCardProps) => {
  return (
    <div 
      className="bg-guio-darkgray border border-guio-lightgray/30 rounded-xl overflow-hidden tech-card opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Myth Section */}
        <div className="p-6 border-b md:border-b-0 md:border-r border-guio-lightgray/30 relative">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-guio-red/5 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-guio-red/20 flex items-center justify-center mr-3">
                <X className="w-5 h-5 text-guio-red" />
              </div>
              <h3 className="text-xl font-bold text-guio-white">MITO</h3>
            </div>
            <p className="text-guio-white/80">{myth}</p>
          </div>
        </div>
        
        {/* Reality Section */}
        <div className="p-6 relative">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-500/5 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                <Check className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-guio-white">REALIDADE</h3>
            </div>
            <p className="text-guio-white/80">{reality}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MythRealityCard;
