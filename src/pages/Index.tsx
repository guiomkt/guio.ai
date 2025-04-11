import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import HeroSection from "@/components/HeroSection";
import ProblemCard from "@/components/ProblemCard";
import { Button } from "@/components/ui/button";
import TypewriterEffect from "@/components/TypewriterEffect";
import ResultCard from "@/components/ResultCard";
import AgentsSection from "@/components/AgentsSection";
import MythsSection from "@/components/MythsSection";
import OfertaSection from "@/components/OfertaSection";
import AboutSection from "@/components/AboutSection";
import ComparativoSection from "@/components/ComparativoSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import { 
  Users, 
  UserMinus, 
  AlertTriangle, 
  Clock, 
  TrendingUp,
  Search,
  FileText,
  Lightbulb,
  UserCog,
  Code,
  CheckCircle,
  Calendar,
  Rocket,
  Link2,
  Database,
  BarChart,
  ArrowRight,
  DollarSign,
  Percent,
  Clock3,
  Dumbbell,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";
import SolutionCard from "@/components/SolutionCard";
import { useContactDialog } from "@/hooks/use-contact-dialog";

const Index = () => {
  const { setOpen, setButtonText } = useContactDialog();

  const handleContactClick = (buttonText = "QUERO UM DIAGNÓSTICO GRATUITO") => {
    setButtonText(buttonText);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-guio-black text-guio-white">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Section */}
      <Section id="problema" className="bg-grid-pattern relative">
        <div className="tech-lines absolute inset-0"></div>
        <div className="relative z-10">
          <SectionTitle 
            title="Sua empresa sofre de Paralisia Operacional?" 
            subtitle="Processos manuais estão sugando recursos valiosos do seu negócio enquanto você lê esta página."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <ProblemCard 
              icon={<Users />}
              title="Excesso de Mão de Obra Manual"
              description="Folha de pagamento com funcionários em tarefas que poderiam ser automatizadas."
              hoverContent="Até 40% das tarefas administrativas em empresas podem ser automatizadas, liberando sua equipe para trabalhos de maior valor."
              index={0}
            />
            
            <ProblemCard 
              icon={<UserMinus />}
              title="Alta Rotatividade"
              description="Colaboradores desmotivados com trabalho repetitivo abandonam a empresa."
              hoverContent="Funcionários que passam mais de 30% do tempo em tarefas repetitivas têm 3x mais chances de pedir demissão em até 12 meses."
              index={1}
            />
            
            <ProblemCard 
              icon={<AlertTriangle />}
              title="Erros Humanos Constantes"
              description="Retrabalho e insatisfação gerados por falhas em processos manuais."
              hoverContent="Processos manuais têm taxa de erro média de 4%, enquanto processos automatizados reduzem esse índice para menos de 0,5%."
              index={2}
            />
            
            <ProblemCard 
              icon={<Clock />}
              title="Atendimento Limitado"
              description="Operando apenas em horário comercial, perdendo 65% das oportunidades."
              hoverContent="Empresas que implementam automação no atendimento aumentam em média 73% a captura de leads fora do horário comercial."
              index={3}
            />
            
            <ProblemCard 
              icon={<TrendingUp />}
              title="Dificuldade de Escalar"
              description="Impossibilidade de crescer sem aumentar dramaticamente os custos."
              hoverContent="Negócios que automatizam operações conseguem escalar em até 4x com apenas 20% de aumento em custos operacionais."
              index={4}
              className="md:col-span-2 lg:col-span-1"
            />
          </div>
          
          <div className="glass-card rounded-xl p-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '750ms' }}>
            <h3 className="text-2xl font-bold text-gradient-red mb-6 text-center">
              Não é falta de equipe. É excesso de trabalho manual.
            </h3>
            
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              <div className="flex-1">
                <div className="relative h-32 w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-guio-red/20 to-transparent rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-guio-red/30 animate-pulse-slow flex items-center justify-center">
                      <Rocket size={40} className="text-guio-red" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-guio-white/70 mt-3">
                  É como ter uma Ferrari sendo usada apenas para ir até a padaria.
                </p>
              </div>
              
              <div className="flex-1">
                <div className="relative h-32 w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-guio-red/20 to-transparent rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-guio-red/30 animate-pulse-slow flex items-center justify-center">
                      <Dumbbell size={40} className="text-guio-red" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-guio-white/70 mt-3">
                  Ou um atleta olímpico carregando caixas o dia todo.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-block">
                <TypewriterEffect 
                  text="Sua empresa está desperdiçando potencial."
                  delay={70}
                  className="text-xl md:text-2xl text-guio-white/90"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Solution Section */}
      <Section id="solucao" className="bg-gradient-to-b from-guio-black to-guio-darkgray relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-guio-red/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-guio-red/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <SectionTitle 
            title="O Programa Elite 90: Agentes de IA que trabalham 24/7 pela sua empresa" 
            subtitle="Nossa metodologia exclusiva de Orquestração Fluida transforma processos manuais em fluxos inteligentes e automatizados:"
          />
          
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-10 text-gradient-red">
              Nossa metodologia exclusiva de<br className="md:hidden" /> Orquestração Fluida
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 gap-y-12 md:gap-2 mb-16 relative px-2 md:px-4">
              {/* Linha visual para desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-guio-red/20 via-guio-red to-guio-red/20 transform -translate-y-1/2 z-0"></div>
              
              {/* Overlay de fluxo para mobile */}
              <div className="md:hidden absolute w-full h-full z-0">
                {/* Linha 1: Diagnóstico → Desenvolvimento */}
                <div className="absolute top-[25px] left-[25%] right-[25%] h-[2px] bg-guio-red shadow-[0_0_5px_rgba(255,0,48,0.7)]"></div>
                
                {/* Linha 2: Desenvolvimento → Implementação */}
                <div className="absolute top-[25px] right-[25%] w-[2px] h-[calc(50%-25px)] bg-guio-red shadow-[0_0_5px_rgba(255,0,48,0.7)]"></div>
                
                {/* Linha 3: Implementação → Integração */}
                <div className="absolute top-[50%] left-[25%] right-[25%] h-[2px] bg-guio-red shadow-[0_0_5px_rgba(255,0,48,0.7)] -translate-y-px"></div>
                
                {/* Linha 4: Integração → Monitoramento */}
                <div className="absolute top-[50%] left-[25%] w-[2px] h-[calc(50%-25px)] bg-guio-red shadow-[0_0_5px_rgba(255,0,48,0.7)]"></div>
                
                {/* Pontos de conexão */}
                <div className="absolute top-[25px] left-[25%] w-[6px] h-[6px] rounded-full bg-guio-red shadow-[0_0_7px_rgba(255,0,48,0.9)] -translate-x-[3px] -translate-y-[3px]"></div>
                <div className="absolute top-[25px] right-[25%] w-[6px] h-[6px] rounded-full bg-guio-red shadow-[0_0_7px_rgba(255,0,48,0.9)] -translate-x-[3px] -translate-y-[3px]"></div>
                <div className="absolute top-[50%] right-[25%] w-[6px] h-[6px] rounded-full bg-guio-red shadow-[0_0_7px_rgba(255,0,48,0.9)] -translate-x-[3px] -translate-y-[3px]"></div>
                <div className="absolute top-[50%] left-[25%] w-[6px] h-[6px] rounded-full bg-guio-red shadow-[0_0_7px_rgba(255,0,48,0.9)] -translate-x-[3px] -translate-y-[3px]"></div>
                <div className="absolute bottom-[25px] left-[25%] w-[6px] h-[6px] rounded-full bg-guio-red shadow-[0_0_7px_rgba(255,0,48,0.9)] -translate-x-[3px] -translate-y-[3px]"></div>
              </div>
              
              {[
                { icon: <Search className="text-guio-red" />, label: "Diagnóstico" },
                { icon: <Code className="text-guio-red" />, label: "Desenvolvimento" },
                { icon: <Rocket className="text-guio-red" />, label: "Implementação" },
                { icon: <Link2 className="text-guio-red" />, label: "Integração" },
                { icon: <BarChart className="text-guio-red" />, label: "Monitoramento" }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "flex flex-col items-center relative z-10 opacity-0 animate-fade-in",
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-[50px] h-[50px] md:w-16 md:h-16 rounded-full bg-guio-darkgray border-2 border-guio-red flex items-center justify-center mb-2 md:mb-3 shadow-[0_0_15px_rgba(255,0,48,0.3)]">
                    {React.cloneElement(step.icon, { className: "w-5 h-5 md:w-7 md:h-7" })}
                  </div>
                  <p className="text-xs md:text-sm text-guio-white/90 text-center font-medium">{step.label}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-6 mb-12">
              <SolutionCard
                title="DIAGNÓSTICO ESTRATÉGICO COMPLETO"
                description="Mapeamento detalhado dos processos e identificação de oportunidades"
                icons={[<Search key="search" />, <FileText key="fileText" />, <Lightbulb key="lightbulb" />]}
                index={0}
              />
              
              <SolutionCard
                title="DESENVOLVIMENTO DE AGENTES PERSONALIZADOS"
                description="Criação de até 3 agentes de IA sob medida"
                icons={[<UserCog key="userCog" />, <Code key="code" />]}
                index={1}
              />
              
              <SolutionCard
                title="IMPLEMENTAÇÃO TURN-KEY"
                description="Setup completo sem exigir conhecimento técnico"
                icons={[<CheckCircle key="checkCircle" />, <Calendar key="calendar" />, <Rocket key="rocket" />]}
                index={2}
              />
              
              <SolutionCard
                title="INTEGRAÇÃO PERFEITA COM SEUS SISTEMAS"
                description="Conexão via API com todas as ferramentas atuais"
                icons={[<Link2 key="link2" />, <Database key="database" />]}
                index={3}
              />
              
              <SolutionCard
                title="MONITORAMENTO E OTIMIZAÇÃO CONTÍNUA"
                description="Dashboard em tempo real com métricas"
                icons={[<BarChart key="barChart" />]}
                index={4}
              />
            </div>
            
            <div className="flex justify-center mt-14 opacity-0 animate-fade-in" style={{ animationDelay: '750ms' }}>
              <Button 
                className="bg-guio-red hover:bg-guio-red/80 text-white font-bold text-lg py-6 px-8 rounded-lg tech-button group"
                onClick={() => handleContactClick("QUERO UM DIAGNÓSTICO GRATUITO")}
              >
                QUERO UM DIAGNÓSTICO GRATUITO
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </Section>
      
      {/* About Company Section */}
      <Section id="empresa" className="relative">
        <AboutSection />
      </Section>
      
      {/* Comparison Section - Garantindo que está com id correto */}
      <Section id="comparativo" className="bg-guio-black relative py-24">
        <ComparativoSection />
      </Section>
      
      {/* Results Section */}
      <Section id="resultados" className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 right-20 w-64 h-64 bg-guio-red/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-guio-red/5 rounded-full blur-3xl"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-guio-red rounded-full shadow-[0_0_40px_20px_rgba(255,0,48,0.3)]"></div>
        </div>
        
        <div className="relative z-10">
          <SectionTitle 
            title="Resultados reais que transformaram empresas como a sua" 
            subtitle="Cases de sucesso com empresas que implementaram o Programa Elite 90"
          />
          
          <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
            <ResultCard
              company="Empresa de SaaS"
              industry="Tecnologia"
              beforeTitle="ANTES"
              beforeContent="4 SDRs trabalhando em horário comercial com taxa de conversão de 40%"
              afterTitle="DEPOIS"
              afterContent="1 Agente SDR atuando 24/7, qualificando leads e agendando reuniões automaticamente"
              results={[
                { text: "Substituição completa de 4 SDRs (realocados para prospecção ativa)" },
                { text: "Aumento de 35% na taxa de conversão" },
                { text: "Economia significativa em custos operacionais" },
                { text: "Zero leads perdidos fora do horário comercial" }
              ]}
              index={0}
            />
            
            <ResultCard
              company="Empresa de Energia"
              industry="Energia"
              beforeTitle="ANTES"
              beforeContent="Produção manual de conteúdo limitada pela capacidade humana"
              afterTitle="DEPOIS"
              afterContent="Agente de IA criando conteúdo otimizado para SEO 24 horas por dia"
              results={[
                { text: "Aumento de 300% no tráfego orgânico" },
                { text: "Crescimento exponencial na geração de leads" },
                { text: "Conteúdo sempre atualizado e alinhado com algoritmos de busca" }
              ]}
              index={1}
            />
            
            <ResultCard
              company="Multinacional de Petróleo e Gás"
              industry="Petróleo e Gás"
              beforeTitle="ANTES"
              beforeContent="Semanas para análise completa de contratos complexos"
              afterTitle="DEPOIS"
              afterContent="Agente de IA processando e analisando documentos em minutos"
              results={[
                { text: "Redução de 97% no tempo de análise" },
                { text: "Organização impecável de documentos para consulta" },
                { text: "Precisão superior à análise humana" }
              ]}
              index={2}
            />
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto p-10 border border-guio-red/30 rounded-xl bg-guio-black/50 opacity-0 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="text-6xl text-guio-red/20 absolute left-6">"</div>
            <blockquote className="text-xl italic text-guio-white/90 text-center relative z-10 px-8">
              "A implementação do Agente de IA para pesquisa de mercado me fez economizar 2 semanas por mês de coleta de dados e análises, além de me permitir conversar com uma IA que possui todos os dados atualizados, aumentando ainda mais minha produtividade."
              <footer className="mt-4 text-base text-right">
                <strong className="text-guio-red block">Gerente Financeiro</strong>
                <span className="text-guio-white/70">Multinacional de Petróleo e Gás</span>
              </footer>
            </blockquote>
          </div>
          
          <div className="mt-16 glass-card rounded-xl p-4 sm:p-8 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <h3 className="text-xl sm:text-2xl font-bold text-gradient-red mb-4 sm:mb-6 text-center">
              Resultados médios do Programa Elite 90
            </h3>
            
            {/* Layout para desktop */}
            <div className="hidden sm:grid grid-cols-3 gap-6 text-center mb-8">
              <div>
                <div className="text-5xl font-bold text-guio-red mb-2">90%</div>
                <p className="text-sm text-guio-white/70">Redução em<br />custos operacionais</p>
              </div>
              
              <div>
                <div className="text-5xl font-bold text-guio-red mb-2">24/7</div>
                <p className="text-sm text-guio-white/70">Operação contínua<br />sem pausas</p>
              </div>
              
              <div>
                <div className="text-5xl font-bold text-guio-red mb-2">3.1x</div>
                <p className="text-sm text-guio-white/70">ROI médio no<br />primeiro trimestre</p>
              </div>
            </div>
            
            {/* Layout otimizado para mobile */}
            <div className="sm:hidden space-y-5 mb-6">
              {/* Separador decorativo superior */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-guio-red/40 to-transparent mx-auto mb-2"></div>
              
              {/* 90% - Redução em custos */}
              <div className="flex items-center pb-4 relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-guio-red/20 rounded-full"></div>
                <div className="flex-shrink-0 w-24 text-center bg-black/40 py-2 rounded-md border border-guio-red/20">
                  <div className="text-4xl font-bold text-guio-red">90%</div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 text-guio-red mr-1.5" />
                    <p className="text-sm font-medium text-guio-white">Redução em custos</p>
                  </div>
                  <p className="text-xs text-guio-white/60 mt-1 pl-6">Economia imediata após implementação</p>
                </div>
              </div>
              
              {/* 24/7 - Operação contínua */}
              <div className="flex items-center pb-4 relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-guio-red/20 rounded-full"></div>
                <div className="flex-shrink-0 w-24 text-center bg-black/40 py-2 rounded-md border border-guio-red/20">
                  <div className="text-4xl font-bold text-guio-red">24/7</div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-guio-red mr-1.5" />
                    <p className="text-sm font-medium text-guio-white">Operação contínua</p>
                  </div>
                  <p className="text-xs text-guio-white/60 mt-1 pl-6">Atendimento e processamento ininterrupto</p>
                </div>
              </div>
              
              {/* 3.1x - ROI médio */}
              <div className="flex items-center pb-2 relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-guio-red/20 rounded-full"></div>
                <div className="flex-shrink-0 w-24 text-center bg-black/40 py-2 rounded-md border border-guio-red/20">
                  <div className="text-4xl font-bold text-guio-red">3.1x</div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-guio-red mr-1.5" />
                    <p className="text-sm font-medium text-guio-white">ROI no 1º trimestre</p>
                  </div>
                  <p className="text-xs text-guio-white/60 mt-1 pl-6">Retorno sobre investimento comprovado</p>
                </div>
              </div>
              
              {/* Separador decorativo inferior */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-guio-red/40 to-transparent mx-auto mt-2"></div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                className="bg-guio-red hover:bg-guio-red/80 text-white font-bold text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-lg tech-button group w-full max-w-md"
                onClick={() => handleContactClick("QUERO RESULTADOS ASSIM")}
              >
                QUERO RESULTADOS ASSIM
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Agents Section */}
      <Section id="agentes" className="bg-gradient-to-b from-guio-black to-guio-darkgray/80 relative">
        <AgentsSection />
      </Section>
      
      {/* Myths Section */}
      <MythsSection />
      
      {/* Offer Section */}
      <Section id="oferta" className="bg-guio-darkgray py-24">
        <OfertaSection />
      </Section>
      
      {/* Final CTA Section - New section added before FAQ */}
      <Section id="cta-final" className="bg-guio-black relative pt-0 pb-0">
        <FinalCTA />
      </Section>
      
      {/* FAQ Section */}
      <Section id="faq" className="bg-guio-black relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-40 w-72 h-72 bg-guio-red/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-guio-red/5 rounded-full blur-3xl"></div>
        </div>
        <FAQSection />
      </Section>
      
      <Footer />
    </div>
  );
};

export default Index;
