import React from 'react';
import { Activity, Brain, Sun } from 'lucide-react';
import Button from './Button';

const Method: React.FC = () => {
  return (
    <section id="metodo" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-earth-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-moss-700 font-bold tracking-widest text-sm uppercase mb-2 block">A Visão Tripartida</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
            Por que a Psicanálise Integrativa é diferente?
          </h2>
          <p className="text-xl text-stone-600 font-light">
            Não tratamos apenas o sintoma. Tratamos a raiz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Pillar 1 */}
          <div className="flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay="0">
            <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-moss-100 transition-colors duration-500">
              <Activity className="w-10 h-10 text-stone-600 group-hover:text-moss-700 transition-colors" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4">O Corpo (Biológico)</h3>
            <p className="text-stone-600 leading-relaxed">
              A ciência explica o funcionamento. Entendemos como a ansiedade e o trauma afetam sua fisiologia e como retomar o controle físico.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay="200">
            <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-moss-100 transition-colors duration-500">
              <Brain className="w-10 h-10 text-stone-600 group-hover:text-moss-700 transition-colors" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4">A Alma (Psíquico)</h3>
            <p className="text-stone-600 leading-relaxed">
              O lugar das emoções, da vontade e da mente. Aqui, ressignificamos sua história, confrontamos padrões e curamos feridas da infância.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay="400">
            <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-moss-100 transition-colors duration-500">
              <Sun className="w-10 h-10 text-stone-600 group-hover:text-moss-700 transition-colors" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4">O Espírito (Soberania)</h3>
            <p className="text-stone-600 leading-relaxed">
              A conexão com o Criador. Reconhecemos a dependência de Deus e a atuação do Espírito Santo como o agente cooperador da sua liberdade.
            </p>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up">
          <Button onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}>
            QUERO SABER QUEM VAI ME GUIAR
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Method;