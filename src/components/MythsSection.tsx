
import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import MythRealityCard from "./MythRealityCard";
import { Button } from "@/components/ui/button";
import { useContactDialog } from "@/hooks/use-contact-dialog";

const MythsSection = () => {
  const { setOpen, setButtonText } = useContactDialog();

  const handleContactClick = () => {
    setButtonText("Quero saber mais sobre IA agêntica");
    setOpen(true);
  };

  const mythsAndRealities = [
    {
      myth: "IA vai substituir meus funcionários",
      reality: "Ela liberta seu time do tédio. 95% dos nossos clientes realocam seus colaboradores para funções estratégicas, aumentando a satisfação e retenção de talentos."
    },
    {
      myth: "É muito caro implementar IA",
      reality: "Com o Programa Elite 90, o retorno sobre investimento médio é de 310% no primeiro trimestre. Nosso modelo de implementação elimina custos de desenvolvimento e infraestrutura."
    },
    {
      myth: "Minha equipe vai resistir à mudança",
      reality: "Nossa metodologia inclui um programa de gestão de mudança que garante 90% de adoção nos primeiros 30 dias. Focamos em capacitar, não substituir."
    },
    {
      myth: "Já tentei automação e não funcionou",
      reality: "Automação tradicional ≠ IA Agêntica. Nossa tecnologia aprende e se adapta continuamente, superando as limitações das automações rígidas do passado."
    },
    {
      myth: "Meu negócio é muito específico para IA",
      reality: "Nossos agentes são treinados especificamente para seu negócio e setor. Já implementamos com sucesso em 12 setores diferentes, de manufatura a saúde."
    }
  ];

  return (
    <Section id="mitos" className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-guio-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <SectionTitle 
          title="Desconstruindo mitos: a verdade sobre IA agêntica" 
          subtitle="Separamos fato de ficção para que você tome decisões baseadas em evidências, não em medos."
        />
        
        <div className="space-y-6 max-w-5xl mx-auto">
          {mythsAndRealities.map((item, index) => (
            <MythRealityCard 
              key={index}
              myth={item.myth}
              reality={item.reality}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 glass-card rounded-xl p-8 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <h3 className="text-2xl font-bold text-gradient-red mb-6 text-center">
            A IA não é o futuro. É o presente que impulsiona quem age agora.
          </h3>
          <p className="text-center text-guio-white/80 mb-8">
            Empresas que implementaram nossos agentes reportam, em média, economia de 30% em custos operacionais e aumento de 25% em produtividade nos primeiros 60 dias.
          </p>
          
          <div className="flex justify-center">
            <Button 
              className="bg-guio-red hover:bg-guio-red/80 text-white font-bold py-3 px-6 rounded-lg"
              onClick={handleContactClick}
            >
              Quero saber mais sobre IA agêntica
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MythsSection;
