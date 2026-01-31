import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-earth-50">
      {/* Decorative minimalist element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/50 -skew-x-12 transform translate-x-1/4 z-0"></div>


      <div className="container mx-auto px-4 z-10 relative max-w-6xl flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">

          {/* Text Content */}
          <div className="space-y-8 text-center md:text-left flex flex-col items-center md:items-start justify-center" data-aos="fade-up" data-aos-duration="1000">
            <span className="inline-block py-1 px-3 border border-moss-300 rounded-full text-xs font-bold tracking-widest text-moss-800 uppercase bg-moss-50">
              Psicanálise Cristã & Saúde Emocional
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-tight">
              A verdade que você descobre é a mesma que <span className="text-moss-700 italic">liberta.</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
              Chega de viver refém da ansiedade e do passado. Alinhe corpo, alma e espírito através de uma terapia que une rigor técnico e princípios cristãos.
            </p>

            <div className="flex flex-col gap-3 items-center md:items-start">
              <Button onClick={() => document.getElementById('dor')?.scrollIntoView({ behavior: 'smooth' })}>
                AGENDAR MINHA SESSÃO AGORA
              </Button>
              <span className="text-xs text-stone-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Atendimento 100% Online e Sigiloso.
              </span>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] md:aspect-[4/5] max-w-md mx-auto">
              <img
                src="https://i.imgur.com/lk0AJ00.jpeg"
                alt="Psicanalista Luciana Mamede"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -z-10 top-10 -right-6 w-full h-full border-2 border-moss-200 rounded-2xl hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;