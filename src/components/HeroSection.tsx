import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import TypewriterEffect from "./TypewriterEffect";
import { useContactDialog } from "@/hooks/use-contact-dialog";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const aiVisualizationRef = useRef<HTMLDivElement>(null);
  const { setOpen, setButtonText } = useContactDialog();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 
      Math.min(50, Math.floor(window.innerWidth / 15)) : 
      Math.min(100, Math.floor(window.innerWidth / 10));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (window.innerWidth < 768 ? 1.5 : 2) + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    // Otimização: Agrupar todas as leituras do DOM no início do frame
    // Isso evita reflow forçado (layout thrashing)
    const animate = () => {
      // FASE 1: TODAS as leituras do DOM primeiro (evita reflow)
      const width = canvas.width;
      const height = canvas.height;
      
      // FASE 2: Cálculos e atualizações de estado
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Usar as variáveis cacheadas ao invés de canvas.width/height
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
      });
      
      // FASE 3: TODAS as escritas/renderizações depois
      ctx.clearRect(0, 0, width, height);
      
      // Desenhar partículas
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 48, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Desenhar conexões entre partículas
      particles.forEach((particleA) => {
        particles.forEach((particleB) => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 0, 48, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  const handleContactClick = () => {
    setButtonText("QUERO AUTOMATIZAR AGORA");
    setOpen(true);
  };
  
  return (
    <div className="relative w-full overflow-hidden min-h-screen flex flex-col justify-center pt-12 pb-6 md:py-0">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
        style={{ willChange: 'contents' }}
      />
      
      <div className="absolute top-[15%] right-[10%] w-48 sm:w-64 h-48 sm:h-64 bg-guio-red/20 rounded-full blur-3xl animate-pulse-slow z-0"></div>
      <div className="absolute bottom-[15%] left-[10%] w-24 sm:w-32 h-24 sm:h-32 bg-guio-red/10 rounded-full blur-2xl animate-pulse-slow z-0"></div>
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-0 md:py-16 flex-1 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block">
                <Badge className="border-guio-red text-guio-white mb-2 md:mb-4 py-1 md:py-1.5 animate-fade-in text-xs sm:text-sm">
                  PROGRAMA ELITE 90
                </Badge>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-guio-white">Aumente suas </span>
                <span className="text-guio-white block mt-1 sm:mt-2">vendas com </span>
                <span className="text-gradient-red block">
                  <TypewriterEffect text="agentes de IA" delay={100} />
                </span>
                <span className="text-guio-white block">que trabalham 24/7</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-xl text-guio-white/80 max-w-lg animate-fade-in delay-300">
                Transforme tarefas manuais e repetitivas em processos inteligentes automatizados.
              </p>
              
              <div className="flex flex-wrap gap-2.5 md:gap-4 mt-4 md:mt-6 animate-fade-in delay-500">
                <div className="flex items-center gap-1.5 md:gap-2 bg-guio-darkgray/80 backdrop-blur-sm px-2.5 py-1.5 md:px-3 md:py-2 rounded-full">
                  <Rocket className="text-guio-red h-3 w-3 md:h-5 md:w-5 animate-pulse" />
                  <span className="text-xs sm:text-sm">Implementação rápida</span>
                </div>
                
                <div className="flex items-center gap-1.5 md:gap-2 bg-guio-darkgray/80 backdrop-blur-sm px-2.5 py-1.5 md:px-3 md:py-2 rounded-full">
                  <BarChart3 className="text-guio-red h-3 w-3 md:h-5 md:w-5" />
                  <span className="text-xs sm:text-sm">ROI no primeiro trimestre</span>
                </div>
                
                <div className="flex items-center gap-1.5 md:gap-2 bg-guio-darkgray/80 backdrop-blur-sm px-2.5 py-1.5 md:px-3 md:py-2 rounded-full">
                  <ShieldCheck className="text-guio-red h-3 w-3 md:h-5 md:w-5" />
                  <span className="text-xs sm:text-sm">Garantia ou seu dinheiro de volta</span>
                </div>
              </div>
              
              <div className="mt-6 md:mt-8 animate-fade-in delay-700">
                <Button 
                  className="tech-button bg-guio-red hover:bg-guio-red/90 text-white font-bold text-sm md:text-lg py-3 md:py-6 px-5 md:px-8 rounded-md group w-full sm:w-auto"
                  onClick={handleContactClick}
                >
                  QUERO AUTOMATIZAR AGORA
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center my-4 pt-6 pb-4 md:pt-0 md:pb-0 md:my-0 order-1 md:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md animate-float">
              <div className="absolute inset-0 bg-guio-red/20 blur-3xl rounded-full"></div>
              
              {/* Elemento de visualização da IA */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div ref={aiVisualizationRef} className="w-full h-full flex items-center justify-center">
                  {/* AI Visualization */}
                  <div className="relative w-[150px] h-[150px] xs:w-[180px] xs:h-[180px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px]">
                    {/* Outer circles */}
                    <div className="absolute inset-0 rounded-full border border-guio-red/30 animate-pulse-slower"></div>
                    <div className="absolute inset-[15%] rounded-full border border-guio-red/40 animate-pulse-slow"></div>
                    <div className="absolute inset-[30%] rounded-full border border-guio-red/50 animate-pulse-medium"></div>
                    <div className="absolute inset-[45%] rounded-full border border-guio-red/60"></div>
                    
                    {/* Central AI text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-guio-red text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold red-glow">AI</div>
                    </div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute w-full h-full animate-spin-slow">
                      <div className="absolute top-4 sm:top-5 left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full border border-guio-red flex items-center justify-center">
                        <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-guio-red rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="absolute w-full h-full animate-spin-slow-reverse">
                      <div className="absolute bottom-4 sm:bottom-5 left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full border border-guio-red flex items-center justify-center">
                        <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-guio-red rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="absolute w-full h-full animate-spin-medium">
                      <div className="absolute top-1/2 left-3 sm:left-4 md:left-5 transform -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full border border-guio-red flex items-center justify-center">
                        <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-guio-red rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="absolute w-full h-full animate-spin-medium-reverse">
                      <div className="absolute top-1/2 right-3 sm:right-4 md:right-5 transform -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full border border-guio-red flex items-center justify-center">
                        <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-guio-red rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Inner glow effect */}
                    <div className="absolute inset-[40%] rounded-full bg-guio-red/15 blur-md animate-pulse-slow"></div>
                    <div className="absolute inset-[42%] rounded-full bg-guio-red/10 blur-lg animate-pulse-slow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default HeroSection;
