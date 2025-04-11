import React from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { 
  BadgeCheck,
  Calendar,
  FilePlus,
  MessageSquare,
  TrendingUp,
  Users,
  Clock,
  Bell,
  ShieldCheck,
  FileText,
  ClipboardList,
  BarChart,
  Settings,
  Database,
  Server,
  UserCheck,
  GraduationCap,
  FileQuestion,
  Briefcase,
  UserPlus,
  CreditCard,
  Receipt,
  Calculator,
  Wallet,
  PiggyBank,
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactDialog } from "@/hooks/use-contact-dialog";
import { useIsMobile } from "@/hooks/use-mobile";

interface AgentCapabilityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const AgentCapability = ({ icon, title, description, index }: AgentCapabilityProps) => {
  const animationDelay = `${index * 100}ms`;

  return (
    <div 
      className="flex flex-col p-4 rounded-lg bg-gradient-to-br from-guio-darkgray/70 to-black/70 border border-guio-lightgray/20 hover:border-guio-red/30 transition-all duration-300 opacity-0 animate-fade-in shadow-md hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay }}
    >
      <div className="flex items-center mb-3">
        <div className="mr-3 p-1.5 bg-black/60 rounded-full border border-guio-red/20 flex items-center justify-center">
          <div className="text-guio-red">
            {icon}
          </div>
        </div>
        <h4 className="text-base font-bold text-guio-white leading-tight">{title}</h4>
      </div>
      <p className="text-xs sm:text-sm text-guio-white/70 pl-10">{description}</p>
    </div>
  );
};

const agentTypes = [
  {
    id: "vendas",
    name: "VENDAS",
    icon: <TrendingUp size={24} />,
    description: "Automatize sua força de vendas com agentes inteligentes que trabalham 24/7",
    capabilities: [
      {
        icon: <Users size={20} />,
        title: "Qualificação de leads 24/7",
        description: "Identifica e qualifica leads em tempo real, mesmo fora do horário comercial"
      },
      {
        icon: <Calendar size={20} />,
        title: "Agendamento automático",
        description: "Agenda reuniões diretamente no calendário dos seus vendedores"
      },
      {
        icon: <FilePlus size={20} />,
        title: "Criação e envio de propostas",
        description: "Gera propostas personalizadas baseadas nas conversas com clientes"
      },
      {
        icon: <TrendingUp size={20} />,
        title: "Follow-up inteligente",
        description: "Envia lembretes e follow-ups no momento ideal para maior conversão"
      },
      {
        icon: <BadgeCheck size={20} />,
        title: "Análise preditiva",
        description: "Identifica quais leads têm maior probabilidade de conversão"
      }
    ]
  },
  {
    id: "atendimento",
    name: "ATENDIMENTO",
    icon: <MessageSquare size={24} />,
    description: "Eleve a experiência do cliente com atendimento instantâneo e personalizado",
    capabilities: [
      {
        icon: <Clock size={20} />,
        title: "Resposta instantânea 24/7",
        description: "Atende seus clientes a qualquer hora com respostas precisas e contextuais"
      },
      {
        icon: <Users size={20} />,
        title: "Escalonamento inteligente",
        description: "Transfere automaticamente para humanos quando necessário"
      },
      {
        icon: <ShieldCheck size={20} />,
        title: "Resolução proativa",
        description: "Identifica e resolve problemas antes que os clientes percebam"
      },
      {
        icon: <Bell size={20} />,
        title: "Acompanhamento personalizado",
        description: "Envia comunicações baseadas no histórico e preferências do cliente"
      },
      {
        icon: <BadgeCheck size={20} />,
        title: "Omnicanalidade perfeita",
        description: "Mantém contexto em todos os canais de atendimento (chat, email, telefone)"
      }
    ]
  },
  {
    id: "operacoes",
    name: "OPERAÇÕES",
    icon: <Settings size={24} />,
    description: "Otimize processos internos e aumente a eficiência operacional",
    capabilities: [
      {
        icon: <Database size={20} />,
        title: "Processamento automático",
        description: "Processa documentos, formulários e dados sem intervenção humana"
      },
      {
        icon: <Server size={20} />,
        title: "Gerenciamento inteligente",
        description: "Coordena tarefas e processos com priorização dinâmica"
      },
      {
        icon: <FileText size={20} />,
        title: "Criação de relatórios",
        description: "Gera relatórios detalhados e insights acionáveis automaticamente"
      },
      {
        icon: <ClipboardList size={20} />,
        title: "Controle de qualidade",
        description: "Monitora e garante conformidade com padrões estabelecidos"
      },
      {
        icon: <BarChart size={20} />,
        title: "Otimização de recursos",
        description: "Identifica gargalos e sugere melhorias para máxima eficiência"
      }
    ]
  },
  {
    id: "rh",
    name: "RH",
    icon: <Users size={24} />,
    description: "Transforme seu departamento de RH com automação inteligente e personalizada",
    capabilities: [
      {
        icon: <UserCheck size={20} />,
        title: "Pré-seleção de candidatos",
        description: "Analisa currículos e realiza triagem inicial com perguntas personalizadas"
      },
      {
        icon: <UserPlus size={20} />,
        title: "Onboarding automatizado",
        description: "Guia novos colaboradores com processos personalizados e documentação"
      },
      {
        icon: <FileQuestion size={20} />,
        title: "Resposta a dúvidas",
        description: "Esclarece questões sobre benefícios, políticas e procedimentos"
      },
      {
        icon: <GraduationCap size={20} />,
        title: "Treinamento contínuo",
        description: "Recomenda e fornece materiais de aprendizado personalizados"
      },
      {
        icon: <Briefcase size={20} />,
        title: "Gestão de desempenho",
        description: "Acompanha objetivos e oferece feedback regular aos colaboradores"
      }
    ]
  },
  {
    id: "financeiro",
    name: "FINANCEIRO",
    icon: <PiggyBank size={24} />,
    description: "Automatize processos financeiros críticos com precisão e segurança",
    capabilities: [
      {
        icon: <AlertCircle size={20} />,
        title: "Verificação automática",
        description: "Identifica e alerta sobre anomalias em transações e relatórios"
      },
      {
        icon: <Bell size={20} />,
        title: "Lembretes personalizados",
        description: "Alerta sobre pagamentos, vencimentos e oportunidades"
      },
      {
        icon: <Receipt size={20} />,
        title: "Reconciliação bancária",
        description: "Compara e concilia automaticamente registros financeiros"
      },
      {
        icon: <Calculator size={20} />,
        title: "Análise de fluxo de caixa",
        description: "Projeta e analisa fluxos de caixa com precisão"
      },
      {
        icon: <CreditCard size={20} />,
        title: "Processamento de despesas",
        description: "Verifica e processa solicitações de reembolso e despesas"
      }
    ]
  }
];

const AgentsSection = () => {
  const { setOpen, setButtonText } = useContactDialog();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = React.useState("vendas");
  
  // Atualiza o índice atual com base na aba selecionada
  const currentAgentIndex = React.useMemo(() => {
    return agentTypes.findIndex(agent => agent.id === activeTab);
  }, [activeTab]);

  // Função para navegar para o próximo/anterior agente
  const navigateAgent = (direction: 'next' | 'prev') => {
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentAgentIndex + 1) % agentTypes.length;
    } else {
      newIndex = (currentAgentIndex - 1 + agentTypes.length) % agentTypes.length;
    }
    
    setActiveTab(agentTypes[newIndex].id);
  };

  const handleContactClick = (agentType: string) => {
    setButtonText(`Quero saber mais sobre agentes de ${agentType.toLowerCase()}`);
    setOpen(true);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-guio-red/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-guio-red/10 blur-3xl"></div>
        
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <div className="absolute top-20 right-20 w-1 h-1 bg-guio-red rounded-full shadow-[0_0_40px_20px_rgba(255,0,48,0.2)]"></div>
        <div className="absolute bottom-40 left-40 w-1 h-1 bg-guio-red rounded-full shadow-[0_0_40px_20px_rgba(255,0,48,0.2)]"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gradient text-center px-4">
          O que nossos agentes de IA podem fazer pela sua empresa
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-guio-white/70 max-w-3xl mx-auto text-center mb-8 sm:mb-16 px-4">
          Muito além de chatbots simples ou automações básicas.
        </p>
        
        <Tabs 
          defaultValue="vendas" 
          value={activeTab}
          className="w-full max-w-5xl mx-auto px-2 sm:px-4"
          onValueChange={setActiveTab}
        >
          {/* Interface para desktop */}
          <div className="relative mb-8 sm:mb-10 hidden sm:block">
            <div className="absolute inset-0 rounded-xl bg-black/40 border border-guio-lightgray/30 blur-[1px] -z-10"></div>
            
            <TabsList className="w-full bg-guio-black/70 p-1.5 rounded-xl grid grid-cols-5 gap-1 shadow-inner">
              {agentTypes.map((agent) => (
                <TabsTrigger 
                  key={agent.id} 
                  value={agent.id}
                  className={cn(
                    "relative data-[state=active]:bg-guio-red data-[state=active]:text-guio-white data-[state=active]:shadow-md",
                    "flex flex-col items-center justify-center py-2 px-1 rounded-lg",
                    "transition-all duration-300",
                    "data-[state=inactive]:bg-guio-darkgray/20 data-[state=inactive]:hover:bg-guio-darkgray/40"
                  )}
                >
                  <div className="absolute top-0 left-0 w-full h-full rounded-lg data-[state=active]:bg-gradient-to-b data-[state=active]:from-guio-red/80 data-[state=active]:to-guio-red/90 -z-10"></div>
                  
                  <div className="flex flex-col items-center gap-1">
                    <div className={cn(
                      "p-1 rounded-full transition-all",
                      "data-[state=active]:bg-white/10",
                    )}>
                      {React.cloneElement(agent.icon as React.ReactElement, { className: "w-5 h-5" })}
                    </div>
                    <span className="text-xs font-medium leading-tight text-center">{agent.name}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {/* Interface para mobile - botões simplificados */}
          <div className="relative mb-10 sm:hidden">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md mb-3">
                <div className="flex items-center justify-between p-2 bg-guio-black/70 rounded-xl shadow-md border border-guio-lightgray/20">
                  <button 
                    onClick={() => navigateAgent('prev')}
                    className="p-2 rounded-full bg-guio-darkgray/30 text-guio-white/80 hover:bg-guio-red/20 focus:outline-none transition-colors active:scale-95"
                    aria-label="Categoria anterior"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <div className="flex-1 px-3">
                    <div className="w-full relative bg-guio-red text-guio-white shadow-md flex items-center justify-center py-3 px-3 rounded-lg">
                      <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-b from-guio-red/80 to-guio-red/90 -z-10"></div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-full bg-white/10">
                          {React.cloneElement(agentTypes[currentAgentIndex].icon as React.ReactElement, { className: "w-6 h-6" })}
                        </div>
                        <span className="text-base font-bold leading-tight text-center">{agentTypes[currentAgentIndex].name}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => navigateAgent('next')}
                    className="p-2 rounded-full bg-guio-darkgray/30 text-guio-white/80 hover:bg-guio-red/20 focus:outline-none transition-colors active:scale-95"
                    aria-label="Próxima categoria"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              
              {/* Indicadores de navegação - visíveis apenas em mobile */}
              <div className="flex justify-center gap-1.5 mb-3">
                {agentTypes.map((agent, index) => (
                  <button
                    key={`indicator-${agent.id}`}
                    onClick={() => setActiveTab(agent.id)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300 ease-in-out",
                      agent.id === activeTab
                        ? "w-6 bg-guio-red scale-110" 
                        : "w-4 bg-guio-lightgray/30 hover:bg-guio-lightgray/50"
                    )}
                    aria-label={`Navegar para ${agent.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {agentTypes.map((agent) => (
            <TabsContent 
              key={agent.id} 
              value={agent.id}
              className="focus-visible:outline-none focus-visible:ring-0 animate-fade-in transition-all duration-300"
            >
              <div className="glass-card p-5 sm:p-6 md:p-8 rounded-xl border border-guio-red/20 mb-6 sm:mb-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gradient-red mb-3 sm:mb-4 flex items-center">
                  <div className="mr-3 p-2 bg-black/50 rounded-full border border-guio-red/30 flex items-center justify-center">
                    {agent.icon}
                  </div>
                  {agent.name}
                </h3>
                <p className="text-sm sm:text-base text-guio-white/80 mb-5 sm:mb-8 pl-12">
                  {agent.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {agent.capabilities.map((capability, index) => (
                    <AgentCapability
                      key={index}
                      icon={capability.icon}
                      title={capability.title}
                      description={capability.description}
                      index={index}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="relative h-12 w-12 sm:h-16 sm:w-16">
                  <div className="absolute inset-0 rounded-full bg-guio-red/10 animate-pulse"></div>
                  <div className="absolute inset-2 rounded-full bg-guio-red/20 animate-pulse" style={{ animationDelay: '300ms' }}></div>
                  <div className="absolute inset-4 rounded-full bg-guio-red/30 animate-pulse" style={{ animationDelay: '600ms' }}></div>
                  <div className="absolute inset-6 rounded-full bg-guio-red/40 animate-pulse" style={{ animationDelay: '900ms' }}></div>
                </div>
              </div>

              <div className="text-center px-4">
                <Button 
                  className="bg-guio-red hover:bg-guio-red/80 text-white font-bold text-sm sm:text-base py-3 sm:py-4 px-5 sm:px-8 rounded-lg tech-button group transition-all shadow-lg"
                  onClick={() => handleContactClick(agent.name)}
                >
                  {isMobile ? `Saber mais sobre ${agent.name.toLowerCase()}` : `Quero saber mais sobre agentes de ${agent.name.toLowerCase()}`}
                  <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default AgentsSection;
