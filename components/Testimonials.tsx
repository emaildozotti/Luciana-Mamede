import React from 'react';
import { Quote } from 'lucide-react';
import Button from './Button';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "Eu achava que precisava orar mais, mas precisava tratar meus traumas. A Luciana me ajudou a ver onde eu estava travada."
    },
    {
      text: "A sensação de acolhimento é real. Pela primeira vez me senti ouvida sem julgamentos."
    },
    {
      text: "Minha ansiedade não sumiu magicamente, mas hoje eu quem governo ela, e não ela a mim."
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-stone-900 text-stone-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-4xl mb-4">O que dizem quem já caminhou comigo</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-stone-800 p-8 rounded-xl relative group hover:bg-stone-700 transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-moss-500 opacity-30 group-hover:opacity-100 transition-opacity" />
              <p className="text-stone-300 leading-relaxed italic mt-6 mb-6 relative z-10">
                "{review.text}"
              </p>
              <div className="w-12 h-1 bg-moss-600 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <Button variant="outline" className="text-white border-white hover:bg-stone-800" onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}>
            TENHO ALGUMAS DÚVIDAS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;