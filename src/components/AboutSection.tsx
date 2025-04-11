
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Wrench,
  Code,
  DollarSign,
  TrendingUp,
  Target,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/SectionTitle";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  index: number;
}

const StatCard = ({ icon, value, label, index }: StatCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className="bg-guio-darkgray/80 backdrop-blur-sm border border-guio-lightgray/30 rounded-xl p-6 opacity-0 animate-fade-in tech-card relative overflow-hidden"
      style={{ animationDelay: `${100 * index}ms`, animationPlayState: inView ? 'running' : 'paused' }}
    >
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-guio-red/5 to-transparent opacity-50"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-guio-darkgray/80 border border-guio-red/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,0,48,0.2)]">
          {icon}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gradient-red mb-2">
          {inView ? (
            <CountUp
              end={parseInt(value.replace(/[^0-9]/g, ''))}
              prefix={value.startsWith("+") ? "+ de " : ""}
              suffix={value.includes("M") ? "M+" : "+"}
              duration={2.5}
              separator=" "
            />
          ) : (
            value
          )}
        </h3>
        <p className="text-guio-white/80">{label}</p>
      </div>
    </div>
  );
};

interface CheckItemProps {
  text: string;
  icon: React.ReactNode;
  index: number;
}

const CheckItem = ({ text, icon, index }: CheckItemProps) => {
  return (
    <div 
      className="flex items-start gap-3 mt-3 opacity-0 animate-fade-in"
      style={{ animationDelay: `${300 + (index * 100)}ms` }}
    >
      <div className="mt-1 w-6 h-6 rounded-full bg-guio-red/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(255,0,48,0.5)]">
        {icon}
      </div>
      <p className="text-guio-white/90">{text}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="relative z-10">
      <SectionTitle 
        title={<>Porque a <span className="text-guio-red">GUIO</span> é a sua <span className="text-guio-red">melhor escolha</span> para esse serviço?</>} 
        subtitle="A GUIO é um hub de inovação reconhecido pela capacidade única de combinar modelos de IA de última geração com profundo entendimento de negócios."
      />
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <StatCard 
          icon={<Users className="w-8 h-8 text-guio-red" />}
          value="300+"
          label="Empresas transformadas"
          index={0}
        />
        
        <StatCard 
          icon={<Wrench className="w-8 h-8 text-guio-red" />}
          value="de 30"
          label="Ferramentas já utilizadas"
          index={1}
        />
        
        <StatCard 
          icon={<Code className="w-8 h-8 text-guio-red" />}
          value="de 15"
          label="Especialistas de marketing a programadores"
          index={2}
        />
        
        <StatCard 
          icon={<DollarSign className="w-8 h-8 text-guio-red" />}
          value="R$20M+"
          label="Gerenciados em campanhas digitais"
          index={3}
        />
      </div>
      
      {/* Content Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Expertise Column */}
        <div className="glass-card rounded-xl p-8 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h3 className="text-2xl font-bold text-gradient mb-6">Expertise que transforma negócios</h3>
          
          <p className="text-guio-white/90 mb-8">
            Liderada por Rafael Riedel, especialista em Soluções Empresariais de Inteligência Artificial e fundador da GUIO, nossa empresa desenvolve soluções que não apenas implementam tecnologia, mas efetivamente resolvem problemas reais.
          </p>
          
          <h4 className="text-xl font-bold text-guio-white mb-4">Nossa Abordagem:</h4>
          
          <div className="space-y-2">
            <CheckItem 
              icon={<TrendingUp className="w-4 h-4 text-guio-red" />}
              text="Combinamos IA avançada com análise profunda de processos empresariais"
              index={0}
            />
            
            <CheckItem 
              icon={<Target className="w-4 h-4 text-guio-red" />}
              text="Focamos em ROI mensurável e transformações reais de negócio"
              index={1}
            />
            
            <CheckItem 
              icon={<Settings className="w-4 h-4 text-guio-red" />}
              text="Desenvolvemos soluções customizadas para cada contexto específico"
              index={2}
            />
          </div>
        </div>
        
        {/* Partners Column */}
        <div className="glass-card rounded-xl p-8 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <h3 className="text-2xl font-bold text-gradient mb-6">Parceiros Oficiais</h3>
          
          <p className="text-guio-white/90 mb-8">
            Trabalhamos com os maiores nomes da tecnologia global para oferecer soluções de ponta em IA agêntica.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {['OpenAI', 'Google', 'NVIDIA', 'Microsoft', 'Meta'].map((partner, index) => (
              <div 
                key={index}
                className="w-24 h-24 rounded-full bg-guio-darkgray/80 border border-guio-red/20 flex items-center justify-center mb-4 opacity-0 animate-fade-in"
                style={{ animationDelay: `${400 + (index * 100)}ms` }}
              >
                <span className="text-gradient-red font-bold">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Quote */}
      <div className="max-w-4xl mx-auto bg-guio-darkgray/80 backdrop-blur-md border border-guio-red/30 rounded-xl p-8 md:p-12 shadow-[0_5px_30px_rgba(255,0,48,0.15)] mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
        <div className="text-6xl text-guio-red/20 absolute left-6">"</div>
        <blockquote className="text-xl italic text-guio-white/90 text-center relative z-10 px-8">
          "Nossa missão é democratizar o acesso à IA de última geração, tornando-a acessível e aplicável para empresas de todos os portes, com foco em resultados reais e tangíveis."
          <footer className="mt-6 text-right">
            <strong className="text-guio-red block">Rafael Motta</strong>
            <span className="text-guio-white/70">CEO da GUIO.AI</span>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default AboutSection;
