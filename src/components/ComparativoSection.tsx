import React from "react";
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Clock,
  Users,
  DollarSign,
  Clock3,
  TrendingUp,
  AlertTriangle,
  Database,
  CheckCircle,
  Clock4,
  UserCheck,
  Percent,
  Zap,
  LineChart,
  ShieldCheck
} from "lucide-react";
import { useInView } from "react-intersection-observer";

interface ComparativoItem {
  aspecto: string;
  icon: React.ReactNode;
  antes: string;
  depois: string;
}

const ComparativoSection = () => {
  const [tableRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const comparativoItems: ComparativoItem[] = [
    {
      aspecto: "Atendimento",
      icon: <Clock className="w-5 h-5" />,
      antes: "Apenas em horário comercial",
      depois: "24/7 com IA agêntica personalizada"
    },
    {
      aspecto: "Equipe",
      icon: <Users className="w-5 h-5" />,
      antes: "Desmotivada e sobrecarregada",
      depois: "Realocada para atividades estratégicas"
    },
    {
      aspecto: "Custos Operacionais",
      icon: <DollarSign className="w-5 h-5" />,
      antes: "Elevados com tarefas manuais",
      depois: "50% de economia com automação inteligente"
    },
    {
      aspecto: "Tempo de Resposta",
      icon: <Clock3 className="w-5 h-5" />,
      antes: "Até 48h para qualificar leads",
      depois: "Instantâneo, com follow-ups automáticos"
    },
    {
      aspecto: "Capacidade de Crescimento",
      icon: <TrendingUp className="w-5 h-5" />,
      antes: "Limitada por processos manuais",
      depois: "Escalável sem aumento proporcional de custos"
    },
    {
      aspecto: "Erros Operacionais",
      icon: <AlertTriangle className="w-5 h-5" />,
      antes: "Frequentes por fadiga humana",
      depois: "Virtualmente eliminados com precisão da IA"
    },
    {
      aspecto: "Análise de Dados",
      icon: <Database className="w-5 h-5" />,
      antes: "Superficial e atrasada",
      depois: "Em tempo real com insights acionáveis"
    }
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-40 right-20 w-64 h-64 bg-guio-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-guio-red/5 rounded-full blur-3xl"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-guio-red rounded-full shadow-[0_0_40px_20px_rgba(255,0,48,0.3)]"></div>
      </div>

      <div className="relative z-10">
        <SectionTitle
          title="Transformação tangível: Antes vs. Depois do Programa Elite 90"
          subtitle="Veja as mudanças reais que nossos clientes experimentam após a implementação"
        />

        <div className="hidden md:block overflow-hidden rounded-xl border border-guio-red/30 bg-gradient-to-b from-guio-black/80 to-guio-darkgray/30 backdrop-blur-sm">
          <div 
            ref={tableRef}
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <Table>
              <TableHeader>
                <TableRow className="border-b border-guio-red/30">
                  <TableHead className="w-[200px] text-guio-white">Aspecto</TableHead>
                  <TableHead className="text-guio-white/70 bg-guio-darkgray/50">
                    <span className="flex items-center">
                      Antes da GUIO
                    </span>
                  </TableHead>
                  <TableHead className="text-guio-red bg-guio-darkgray/30">
                    <span className="flex items-center">
                      Depois do Elite 90
                      <span className="ml-2 inline-block w-2 h-2 bg-guio-red rounded-full animate-pulse"></span>
                    </span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparativoItems.map((item, index) => (
                  <TableRow 
                    key={index}
                    className={cn(
                      "border-b border-guio-red/10 hover:bg-guio-red/5 transition-colors",
                      "opacity-0 animate-fade-in"
                    )}
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <div className="text-guio-red">{item.icon}</div>
                        <span>{item.aspecto}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-guio-white/70 bg-guio-darkgray/50">
                      {item.antes}
                    </TableCell>
                    <TableCell className="text-guio-white bg-guio-darkgray/30 relative">
                      <div className="relative z-10">{item.depois}</div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-guio-red/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="md:hidden space-y-12">
          {comparativoItems.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "opacity-0 animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Título destacado do tópico com número */}
              <div className="mb-4 relative">
                <div className="absolute w-1 h-full bg-gradient-to-b from-transparent via-guio-red to-transparent left-5 top-14 opacity-30"></div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-guio-red rounded-full shadow-[0_0_15px_rgba(255,0,48,0.4)]">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-guio-white/50 uppercase mb-0.5">Comparativo</div>
                    <h3 className="text-xl font-bold text-guio-white leading-tight">{item.aspecto}</h3>
                  </div>
                </div>
              </div>
              
              {/* Card de comparação */}
              <div className="rounded-xl border border-guio-red/30 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                {/* Container para antes e depois */}
                <div className="flex flex-col">
                  
                  {/* ANTES */}
                  <div className="p-4 bg-guio-darkgray relative">
                    <div className="absolute top-0 left-0 w-2 h-full bg-guio-white/20"></div>
                    <h4 className="text-xs uppercase font-semibold text-guio-white/70 mb-3 flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1.5 text-guio-white/50" />
                      Antes da GUIO
                    </h4>
                    <div className="flex items-start">
                      <div className="w-1 h-[30px] bg-guio-white/20 mr-4 mt-1"></div>
                      <p className="text-guio-white/80">{item.antes}</p>
                    </div>
                  </div>
                  
                  {/* Divisor/Transição */}
                  <div className="h-6 bg-gradient-to-b from-guio-darkgray to-black relative overflow-hidden">
                    <div className="absolute inset-y-0 left-[calc(50%-12px)] w-24 h-6 bg-guio-red/20 blur-md"></div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-guio-red bg-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-guio-red rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* DEPOIS */}
                  <div className="p-4 bg-black relative">
                    <div className="absolute top-0 left-0 w-2 h-full bg-guio-red"></div>
                    <h4 className="text-xs uppercase font-semibold text-guio-red mb-3 flex items-center">
                      <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-guio-red" />
                      Depois do Elite 90
                      <span className="ml-2 inline-block w-1.5 h-1.5 bg-guio-red rounded-full animate-pulse"></span>
                    </h4>
                    <div className="flex items-start">
                      <div className="w-1 h-[30px] bg-guio-red mr-4 mt-1"></div>
                      <p className="text-guio-white font-medium">{item.depois}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Separador visual entre os blocos */}
              {index < comparativoItems.length - 1 && (
                <div className="h-6 mt-6 flex justify-center relative">
                  <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-guio-red/30 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparativoSection;
