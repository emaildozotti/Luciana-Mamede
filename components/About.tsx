import React from 'react';
import Button from './Button';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-earth-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-16">

          {/* Image */}
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-stone-300 transform translate-x-4 translate-y-4 rounded-xl"></div>
              <img
                src="https://i.imgur.com/lk0AJ00.jpeg"
                alt="Luciana Mamede - Psicanalista"
                className="relative rounded-xl shadow-lg w-full object-cover aspect-[4/5] hover:scale-[1.02] transition-all duration-700"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <h2 className="font-serif text-4xl text-stone-900 mb-4">Muito prazer, eu sou Luciana Mamede.</h2>
            <h3 className="text-moss-700 font-bold text-lg mb-6 italic">
              "Eu não guio ninguém por caminhos que eu mesma não tenha trilhado."
            </h3>

            <div className="space-y-6 text-stone-700 leading-relaxed">
              <p>
                Sou Psicanalista Cristã especialista em Saúde Emocional. Mas, antes de todos os diplomas, sou alguém que venceu o abismo.
              </p>
              <p>
                Eu conheço a dor da Ansiedade Generalizada (TAG) e do Pânico. Sei o que é sentir que vai morrer e não ter para onde correr. Foi transformando meu trauma em combustível que descobri minha missão: ser a mão estendida que eu gostaria de ter encontrado.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-moss-600 my-8">
                <p className="font-medium text-stone-800">
                  Meu consultório não é um tribunal. É uma "Casa Segura".
                </p>
              </div>
              <p>
                Tenho o estômago clínico para ouvir suas dores mais profundas sem me assustar e a firmeza necessária para te ajudar a organizar o caos.
              </p>
              <p className="font-bold text-stone-900">
                Minha missão é simples: te tirar do lugar de opressão e te conduzir à liberdade plena.
              </p>
            </div>
          </div>

        </div>

        <div className="text-center" data-aos="fade-up">
          <Button onClick={() => document.getElementById('passos')?.scrollIntoView({ behavior: 'smooth' })}>
            VER COMO FUNCIONA O ATENDIMENTO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;