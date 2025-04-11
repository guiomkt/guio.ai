import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, ShieldCheck, ShieldAlert, ShieldPlus, Clock, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/SectionTitle";
import { useContactDialog } from "@/hooks/use-contact-dialog";

const OfertaSection = () => {
  const { setOpen, setButtonText } = useContactDialog();

  const handleContactClick = (buttonText: string) => {
    setButtonText(buttonText);
    setOpen(true);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-64 h-64 bg-guio-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-guio-red/5 rounded-full blur-3xl"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-guio-red rounded-full shadow-[0_0_40px_20px_rgba(255,0,48,0.3)]"></div>
      </div>
      
      <div className="relative z-10">
        <SectionTitle 
          title="Programa Elite 90" 
          subtitle="Implantação completa de IA Agêntica para sua empresa"
        />
        
        {/* Programa Elite 90 */}
        <div className="max-w-4xl mx-auto bg-guio-darkgray/80 backdrop-blur-md border border-guio-lightgray/30 rounded-xl p-5 sm:p-8 md:p-12 shadow-[0_5px_30px_rgba(255,0,48,0.15)] mb-10 sm:mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '150ms' }}>
          <h3 className="text-xl sm:text-2xl font-bold text-guio-white mb-4 sm:mb-6 text-center">O QUE VOCÊ RECEBE:</h3>
          
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            {[
              "Diagnóstico completo dos seus processos",
              "Desenvolvimento de agentes de IA sob medida",
              "Integração via API com seus sistemas existentes",
              "Setup completo em até 30 dias",
              "Treinamento da equipe para maximizar resultados",
              "Dashboard com métricas e ROI em tempo real",
              "Suporte premium por especialistas certificados"
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 opacity-0 animate-fade-in"
                style={{ animationDelay: `${150 + index * 100}ms` }}
              >
                <div className="mt-1 w-6 h-6 rounded-full bg-guio-red/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(255,0,48,0.5)]">
                  <Check className="w-4 h-4 text-guio-red" />
                </div>
                <p className="text-guio-white/90 text-lg">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-3 sm:gap-5 mt-6 sm:mt-8 px-2 sm:px-0">
            <Button 
              className="bg-guio-red hover:bg-guio-red/80 text-white font-bold text-sm sm:text-base md:text-lg py-5 sm:py-6 px-4 sm:px-8 rounded-lg tech-button group shadow-[0_0_20px_rgba(255,0,48,0.3)] w-full md:w-auto"
              onClick={() => handleContactClick("QUERO GARANTIR MINHA VAGA AGORA")}
            >
              <span className="hidden sm:inline">QUERO GARANTIR MINHA VAGA AGORA</span>
              <span className="sm:hidden">GARANTIR MINHA VAGA</span>
              <ArrowRight className="hidden sm:inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <div className="flex items-center gap-2 text-guio-white/70 text-xs sm:text-sm text-center flex-wrap justify-center">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-guio-red animate-pulse" />
              <span>Vagas limitadas - Novos projetos apenas mediante agendamento</span>
            </div>
          </div>
        </div>
        
        {/* Garantia Tripla */}
        <div className="max-w-5xl mx-auto mt-20 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gradient">
            GARANTIA TRIPLA DE RESULTADOS
          </h2>
          <p className="text-xl text-guio-white/70 text-center mb-12">
            Sem riscos para o seu negócio
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Garantia de Performance",
                description: "Se não entregarmos os resultados prometidos em 30 dias após a implementação, devolvemos 100% do seu investimento.",
                icon: <ShieldCheck className="w-8 h-8 text-guio-red" />,
                delay: 400
              },
              {
                title: "Garantia de Satisfação",
                description: "Acompanhamento semanal do projeto com possibilidade de ajustes e melhorias conforme necessário.",
                icon: <ShieldAlert className="w-8 h-8 text-guio-red" />,
                delay: 500
              },
              {
                title: "Garantia de Continuidade",
                description: "Suporte técnico especializado 24/7 e atualizações constantes dos agentes.",
                icon: <ShieldPlus className="w-8 h-8 text-guio-red" />,
                delay: 600
              }
            ].map((guarantee, index) => (
              <div 
                key={index} 
                className="bg-guio-darkgray border border-guio-lightgray/30 rounded-xl p-6 tech-card opacity-0 animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${guarantee.delay}ms` }}
              >
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-guio-red/5 to-transparent opacity-50"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-guio-darkgray/80 border border-guio-red/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,0,48,0.2)]">
                    {guarantee.icon}
                  </div>
                  <h3 className="text-xl font-bold text-guio-white mb-3">{guarantee.title}</h3>
                  <p className="text-guio-white/80">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="glass-card rounded-xl p-8 max-w-3xl mx-auto my-12 relative overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: '700ms' }}>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-guio-red/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-guio-red animate-pulse" />
                <h3 className="text-2xl font-bold text-guio-white">VAGAS LIMITADAS!</h3>
              </div>
              
              <p className="text-guio-white/80 text-center mb-4">
                Para garantir qualidade e atenção personalizada, aceitamos apenas 5 novas implementações por mês.
              </p>
              
              <p className="text-guio-red font-bold text-center text-xl mb-6">
                Atualmente restam apenas 3 vagas para este mês.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-guio-darkgray to-guio-darkgray/80 border border-guio-red/20 rounded-xl p-5 sm:p-8 max-w-3xl mx-auto relative overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,0,48,0.15),_transparent_70%)]"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gradient-red text-center mb-3 sm:mb-4">
                Não perca a oportunidade
              </h3>
              
              <p className="text-guio-white/90 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                As empresas que implementam IA agêntica hoje estarão anos à frente da concorrência amanhã.
              </p>
              
              <div className="flex justify-center px-2 sm:px-0">
                <Button 
                  className="bg-guio-red hover:bg-guio-red/80 text-white font-bold text-sm sm:text-base md:text-lg py-5 sm:py-6 px-4 sm:px-8 rounded-lg tech-button group shadow-[0_0_20px_rgba(255,0,48,0.3)] w-full sm:w-auto"
                  onClick={() => handleContactClick("QUERO GARANTIR MINHA VAGA")}
                >
                  <span className="hidden sm:inline">QUERO GARANTIR MINHA VAGA</span>
                  <span className="sm:hidden">GARANTIR VAGA</span>
                  <Zap className="hidden sm:inline-block ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfertaSection;
