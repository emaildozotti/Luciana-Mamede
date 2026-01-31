import React from 'react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer id="agendar" className="bg-moss-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl text-center">

        <div data-aos="zoom-in" className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            Vamos escrever o próximo capítulo da sua história?
          </h2>
          <p className="text-xl text-moss-100 mb-10 font-light">
            A liberdade começa quando você decide encarar sua história de frente. Eu estou pronta para te receber.
          </p>
          <a
            href="https://wa.me/5511980197788?text=Ola%20Luciana%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold bg-white text-moss-900 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            QUERO AGENDAR AGORA
          </a>
        </div>

        <div className="border-t border-moss-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-moss-400 gap-4">
          <p>&copy; {new Date().getFullYear()} Luciana Mamede Psicanálise. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Política de Privacidade</span>
            <span className="cursor-pointer hover:text-white transition-colors">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;