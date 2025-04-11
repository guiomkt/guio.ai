import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { useContactDialog } from "@/hooks/use-contact-dialog";

const FinalCTA = () => {
  const { setOpen, setButtonText } = useContactDialog();

  const handleContactClick = () => {
    setButtonText("QUERO MINHA VAGA NO PROGRAMA ELITE 90");
    setOpen(true);
  };

  return (
    <div className="relative overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-guio-darkgray to-guio-black z-0"></div>
      <div className="absolute inset-0 tech-lines opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-guio-red/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-guio-red/50 to-transparent"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-guio-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-guio-red/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle 
            title="Está pronto para eliminar a Paralisia Operacional e escalar sua empresa com IA?"
            subtitle="A transformação digital não é mais uma opção - é uma necessidade para sobreviver no mercado atual. A diferença está em quem implementa primeiro e de forma mais eficiente."
          />
          
          <div className="glass-card p-5 sm:p-8 md:p-10 rounded-xl backdrop-blur-sm my-8 sm:my-12 border border-guio-red/20 relative overflow-hidden">
            {/* Card inner glow */}
            <div className="absolute -top-40 left-1/2 w-1 h-1 bg-guio-red rounded-full shadow-[0_0_150px_80px_rgba(255,0,48,0.15)]"></div>
            
            <div className="grid gap-4 sm:gap-6 mb-6 sm:mb-8">
              {[
                "Seja o CEO que revolucionou sua empresa.",
                "Seja o diretor que trouxe inovação que gera resultados.",
                "Seja o líder que eliminou o desperdício de talento humano."
              ].map((text, index) => (
                <div 
                  key={index} 
                  className="text-lg sm:text-xl md:text-2xl font-space text-guio-white opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {text}
                </div>
              ))}
            </div>
            
            <p className="text-guio-white/80 text-base sm:text-lg my-6 sm:my-8 leading-relaxed">
              O futuro pertence às empresas que automatizam o operacional para focar no estratégico. 
              <span className="text-guio-red font-bold block mt-2">
                Apenas 5 empresas serão aceitas neste mês. A próxima pode ser a sua.
              </span>
            </p>
          </div>
          
          <div className="mt-8 sm:mt-12 relative px-2 sm:px-0">
            {/* Button highlight effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-guio-red/5 rounded-full blur-3xl"></div>
            </div>
            
            <Button 
              className="bg-guio-red hover:bg-guio-red/80 text-white font-bold text-base sm:text-base md:text-lg py-5 sm:py-6 px-3 sm:px-6 rounded-lg tech-button group relative z-10 animate-pulse-slow w-full sm:w-auto shadow-lg"
              onClick={handleContactClick}
            >
              <Zap className="hidden sm:inline mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">QUERO MINHA VAGA NO PROGRAMA ELITE 90</span>
              <span className="sm:hidden tracking-wide text-center mx-auto uppercase font-bold">Quero minha vaga no programa</span>
              <ArrowRight className="hidden sm:inline ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
