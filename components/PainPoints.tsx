import React from 'react';
import { AlertCircle, Clock, HeartCrack, BatteryWarning } from 'lucide-react';
import Button from './Button';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <AlertCircle className="w-8 h-8 text-moss-700" />,
      title: "Opressão Constante",
      text: "Vive em \"estado de alerta\", com uma ansiedade que não passa, mesmo quando tudo parece bem externamente."
    },
    {
      icon: <Clock className="w-8 h-8 text-moss-700" />,
      title: "Prisioneira do Passado",
      text: "Sente que traumas antigos ainda governam suas escolhas, seus relacionamentos e suas reações hoje."
    },
    {
      icon: <HeartCrack className="w-8 h-8 text-moss-700" />,
      title: "Vazio Existencial",
      text: "Ama a Deus, frequenta a igreja, mas sente um buraco na alma que a religiosidade superficial não preenche."
    },
    {
      icon: <BatteryWarning className="w-8 h-8 text-moss-700" />,
      title: "Exaustão da \"Forte\"",
      text: "Cansou de carregar o mundo nas costas e sente que, se parar, tudo desmorona."
    }
  ];

  return (
    <section id="dor" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
            Você sente que perdeu o protagonismo da própria história?
          </h2>
          <p className="text-lg text-stone-600">
            Muitas vezes, a dor se torna tão familiar que esquecemos como é viver em paz. Se você chegou até aqui, provavelmente se identifica com um destes cenários:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="bg-stone-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-stone-100"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4 bg-moss-50 w-16 h-16 rounded-full flex items-center justify-center">
                {point.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-800 mb-3">{point.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16" data-aos="zoom-in">
          <div className="bg-moss-50 border-l-4 border-moss-700 p-8 rounded-r-xl">
            <p className="text-xl md:text-2xl text-moss-900 font-serif italic text-center">
              "Não é falta de fé, nem frescura. É um pedido de socorro da sua alma que precisa ser ouvida, e não julgada."
            </p>
          </div>
        </div>

        <div className="mt-8 text-center" data-aos="fade-up">
          <Button onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}>
            QUERO ENTENDER COMO SUPERAR ISSO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;