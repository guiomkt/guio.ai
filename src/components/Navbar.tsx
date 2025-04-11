import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { MessageCircle, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useContactDialog } from "@/hooks/use-contact-dialog";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { setOpen, setButtonText } = useContactDialog();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fecha o menu quando mudar de dispositivo móvel para desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  // Impede rolagem quando o menu móvel está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleContactClick = () => {
    setButtonText("Conversar com agente GUIO.AI");
    setOpen(true);
    
    // Fechar o menu móvel se estiver aberto
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: "Problema", href: "#problema" },
    { label: "Solução", href: "#solucao" },
    { label: "Empresa", href: "#empresa" },
    { label: "Agentes", href: "#agentes" },
    { label: "Comparativo", href: "#comparativo" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleMenuItemClick = (href: string) => {
    // Scroll suave para a seção
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    // Fechar o menu após clicar
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-guio-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Menu para desktop - escondido em dispositivos móveis */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="text-guio-white hover:text-guio-red transition-colors duration-200 font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleMenuItemClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          
          <Button 
            className="bg-guio-red hover:bg-guio-red/80 text-white" 
            onClick={handleContactClick}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Converse com um agente GUIO
          </Button>
        </div>
        
        {/* Botão de toggle do menu - visível apenas em dispositivos móveis */}
        <div className="flex md:hidden items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-guio-white hover:text-guio-red"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Menu móvel - visível apenas quando aberto em dispositivos móveis */}
      <div className={cn(
        "fixed inset-0 bg-guio-black/95 backdrop-blur-lg z-40 pt-20 px-4 transition-transform duration-300 transform md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col space-y-6 items-center h-full">
          {/* Botão de fechar o menu */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-guio-white hover:text-guio-red transition-colors duration-200 p-2 rounded-full hover:bg-guio-black/50"
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col space-y-8 items-center justify-center h-full">
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="text-guio-white hover:text-guio-red transition-colors duration-200 text-xl font-medium py-2 px-4 rounded-lg hover:bg-guio-black/50"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuItemClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            
            <Button 
              className="bg-guio-red hover:bg-guio-red/80 text-white w-full mt-4 max-w-xs" 
              onClick={handleContactClick}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Converse com um agente GUIO
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
