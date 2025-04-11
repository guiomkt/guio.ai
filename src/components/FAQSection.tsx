import React from "react";
import { InfoIcon, Users, Zap, Headphones, Plug, Shield, Clock } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Section from "./Section";
import { Button } from "@/components/ui/button";
import { useContactDialog } from "@/hooks/use-contact-dialog";
import { useIsMobile } from "@/hooks/use-mobile";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "Em quanto tempo verei resultados?",
    answer: "Os primeiros resultados são visíveis em 7-14 dias após a implementação. O ROI completo é tipicamente alcançado entre 30-90 dias, dependendo da complexidade dos processos automatizados.",
    icon: <Clock className="text-guio-red" />
  },
  {
    question: "Minha equipe vai precisar aprender IA?",
    answer: "Não. Nossa abordagem é \"chave na mão\" - implementamos tudo e treinamos sua equipe para interagir com os agentes de forma intuitiva. Não é necessário conhecimento técnico.",
    icon: <Users className="text-guio-red" />
  },
  {
    question: "Já tentamos automação antes, por que agora daria certo?",
    answer: "Automações tradicionais são rígidas e limitadas. Nossa IA agêntica aprende continuamente, toma decisões autônomas e se adapta ao seu contexto específico, usando tecnologia que não existia até recentemente.",
    icon: <Zap className="text-guio-red" />
  },
  {
    question: "Como funciona o suporte?",
    answer: "Oferecemos suporte premium por especialistas certificados. Você terá um gerente de sucesso dedicado e acesso a nossa equipe técnica para ajustes, melhorias e solução de problemas.",
    icon: <Headphones className="text-guio-red" />
  },
  {
    question: "Preciso trocar meus sistemas atuais?",
    answer: "Absolutamente não. Nossos agentes se integram via API com seus sistemas existentes, sejam eles CRMs, ERPs, plataformas de e-commerce ou ferramentas proprietárias.",
    icon: <Plug className="text-guio-red" />
  },
  {
    question: "A IA vai ter acesso a dados sensíveis da minha empresa?",
    answer: "Seguimos os mais rigorosos protocolos de segurança e LGPD. Todos os dados são processados com criptografia avançada e você mantém controle total sobre quais informações são acessíveis.",
    icon: <Shield className="text-guio-red" />
  }
];

const FAQSection = () => {
  const { setOpen, setButtonText } = useContactDialog();
  const isMobile = useIsMobile();

  const handleContactClick = () => {
    setButtonText("Fale Conosco");
    setOpen(true);
  };

  return (
    <Section id="faq" className="py-12 sm:py-16 md:py-24">
      <div className="relative z-10 px-4 sm:px-6 md:px-0">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Respostas para as dúvidas mais comuns sobre nossa solução."
        />
        
        <div className="max-w-4xl mx-auto glass-card p-4 sm:p-6 md:p-8 rounded-xl backdrop-blur-md relative overflow-hidden">
          {/* Tech lines background effect */}
          <div className="absolute inset-0 tech-lines opacity-10"></div>
          
          {/* Glow effect in background */}
          <div className="absolute -bottom-20 -right-20 w-40 sm:w-64 h-40 sm:h-64 bg-guio-red/5 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-28 sm:w-40 h-28 sm:h-40 bg-guio-red/5 rounded-full blur-3xl"></div>
          
          <Accordion type="single" collapsible className="w-full relative z-10">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-guio-red/20 last:border-b-0 mb-2 sm:mb-4"
              >
                <AccordionTrigger className="text-left py-3 sm:py-5">
                  <div className="flex items-center w-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 mr-3 sm:mr-4 flex items-center justify-center rounded-full bg-guio-darkgray/80 border border-guio-red/30 group-hover:border-guio-red/70 transition-all duration-300">
                      {isMobile ? 
                        React.cloneElement(item.icon as React.ReactElement, { size: 16 }) : 
                        item.icon
                      }
                    </div>
                    <span className="text-base sm:text-lg font-semibold text-guio-white group-hover:text-guio-red transition-colors duration-300">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-guio-white/80 pl-11 sm:pl-14">
                  <div className="py-2 sm:py-4 relative text-sm sm:text-base">
                    <div className="absolute left-[-32px] sm:left-[-40px] top-0 bottom-0 w-px bg-gradient-to-b from-guio-red/0 via-guio-red/30 to-guio-red/0"></div>
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-guio-red/20 text-center">
            <div className="flex items-center justify-center space-x-2 text-guio-white/70 text-sm sm:text-base">
              <InfoIcon size={isMobile ? 16 : 18} className="text-guio-red" />
              <p>Tem mais perguntas? Entre em contato com nosso time.</p>
            </div>
            <div className="mt-3 sm:mt-4">
              <Button 
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-guio-darkgray hover:bg-guio-darkgray/80 text-guio-white rounded-lg border border-guio-red/30 hover:border-guio-red transition-all duration-300 group text-sm sm:text-base w-full sm:w-auto"
                onClick={handleContactClick}
              >
                <span>Fale Conosco</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;
