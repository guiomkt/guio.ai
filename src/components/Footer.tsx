import React from "react";
import Logo from "./Logo";
import { Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-guio-lightgray/20 py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 tech-lines opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-guio-red/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <Logo className="text-glow" />
            <p className="text-guio-white/60 max-w-xs">
              Acelerando a transformação digital com IA agêntica avançada para empresas modernas.
            </p>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-lg font-bold text-guio-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:rafael@2be.com.br" className="text-guio-white/60 hover:text-guio-white transition-colors duration-300 flex items-center">
                  <Mail size={16} className="text-guio-red mr-2" />
                  rafael@2be.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5531986830483" className="text-guio-white/60 hover:text-guio-white transition-colors duration-300 flex items-center">
                  <Phone size={16} className="text-guio-red mr-2" />
                  +55 31 98683-0483
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social media */}
          <div>
            <h4 className="text-lg font-bold text-guio-white mb-4">Redes Sociais</h4>
            <div className="flex flex-col gap-2">
              <a 
                href="https://www.instagram.com/rafael.riedel/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-4 rounded-lg bg-guio-darkgray hover:bg-guio-red/30 border border-guio-red/30 hover:border-guio-red text-guio-white/80 hover:text-guio-white transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                aria-label="Instagram do Rafael Riedel"
              >
                <Instagram size={24} className="text-guio-red" />
                <span>@rafael.riedel</span>
              </a>
              <p className="text-xs text-guio-white/50">Siga-nos para novidades</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-guio-lightgray/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-guio-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} GUIO.AI. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-guio-white/60 hover:text-guio-white transition-colors text-sm">
              Termos
            </a>
            <a href="#" className="text-guio-white/60 hover:text-guio-white transition-colors text-sm">
              Privacidade
            </a>
            <a href="#" className="text-guio-white/60 hover:text-guio-white transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
