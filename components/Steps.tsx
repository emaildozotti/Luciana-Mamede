import React from 'react';
import Button from './Button';
import { Calendar, Video, Hammer } from 'lucide-react';

const Steps: React.FC = () => {
  return (
    <section id="passos" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-4xl text-stone-900 mb-4">Como funciona o seu processo de cura</h2>
        </div>

        <div className="relative space-y-12">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-stone-200 hidden md:block"></div>

          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row gap-8 items-start" data-aos="fade-up" data-aos-delay="0">
            <div className="bg-moss-700 w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg z-10 mx-auto md:mx-0">
              <Calendar className="text-white w-8 h-8" />
            </div>
            <div className="flex-1 bg-stone-50 p-8 rounded-xl border border-stone-100 text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-3">O Agendamento</h3>
              <p className="text-stone-600">
                Você escolhe o melhor horário na minha agenda digital. É simples, rápido e seguro.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col md:flex-row gap-8 items-start" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-moss-700 w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg z-10 mx-auto md:mx-0">
              <Video className="text-white w-8 h-8" />
            </div>
            <div className="flex-1 bg-stone-50 p-8 rounded-xl border border-stone-100 text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-3">Sessão Online</h3>
              <p className="text-stone-600">
                Nos encontramos por vídeo chamada. Você no conforto e privacidade da sua casa, eu no meu consultório. A distância física não impede a conexão profunda.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row gap-8 items-start" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-moss-700 w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg z-10 mx-auto md:mx-0">
              <Hammer className="text-white w-8 h-8" />
            </div>
            <div className="flex-1 bg-stone-50 p-8 rounded-xl border border-stone-100 text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-3">A Construção</h3>
              <p className="text-stone-600">
                Não vendo milagres, vendo processo. Sessão após sessão, vamos desatar os nós que te prendem e construir sua estabilidade emocional.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <Button variant="secondary" onClick={() => document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' })}>
            VERIFICAR HORÁRIOS DISPONÍVEIS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Steps;