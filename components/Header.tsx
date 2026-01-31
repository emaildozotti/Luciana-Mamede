import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
        {/* Logo / Name */}
        <div className="flex items-center">
          <span className={`font-serif text-xl md:text-2xl font-bold tracking-tight ${isScrolled ? 'text-moss-900' : 'text-moss-900'}`}>
            Luciana Mamede
            <span className="block text-xs font-sans font-normal tracking-widest text-earth-600">PSICANÁLISE INTEGRATIVA</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('metodo')} className="text-stone-600 hover:text-moss-700 transition-colors font-medium">O Método</button>
          <button onClick={() => scrollToSection('sobre')} className="text-stone-600 hover:text-moss-700 transition-colors font-medium">Sobre Mim</button>
          <button onClick={() => scrollToSection('faq')} className="text-stone-600 hover:text-moss-700 transition-colors font-medium">Dúvidas</button>
          <button
            onClick={() => scrollToSection('agendar')}
            className="px-6 py-2 bg-moss-700 text-white rounded-full text-sm font-bold hover:bg-moss-800 transition-all shadow-md"
          >
            Agendar Sessão
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-stone-800 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-200 p-6 flex flex-col gap-4 md:hidden shadow-lg animate-fade-in">
          <button onClick={() => scrollToSection('metodo')} className="text-stone-700 font-medium py-2">O Método</button>
          <button onClick={() => scrollToSection('sobre')} className="text-stone-700 font-medium py-2">Sobre Mim</button>
          <button onClick={() => scrollToSection('faq')} className="text-stone-700 font-medium py-2">Dúvidas</button>
          <button
            onClick={() => scrollToSection('agendar')}
            className="w-full py-3 bg-moss-700 text-white rounded-lg font-bold"
          >
            Agendar Sessão
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;