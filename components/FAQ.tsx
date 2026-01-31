import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';
import Button from './Button';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Preciso ser cristã para fazer terapia com você?",
      answer: "Não. A base é cristã, o que significa que meus valores são inegociáveis (ética, verdade, amor), mas a técnica psicanalítica acolhe qualquer ser humano, independente de religião."
    },
    {
      question: "Terapia Online funciona mesmo?",
      answer: "Sim. A psicanálise ocorre pela fala e pela escuta. O ambiente online permite que você esteja no seu lugar de segurança, o que muitas vezes acelera o processo de abertura."
    },
    {
      question: "Aceita convênio?",
      answer: "Não atendo por convênios, pois acredito que o modelo de \"alta rotatividade\" dos planos impede o aprofundamento necessário que meu método exige."
    },
    {
      question: "E se eu tiver vergonha de falar?",
      answer: "O consultório é o lugar do \"não-julgamento\". Tudo o que é dito fica entre nós (sigilo absoluto). Vamos no seu tempo, respeitando seus limites."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-earth-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-4xl text-stone-900 mb-4">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none hover:bg-stone-50 transition-colors"
                onClick={() => toggleFAQ(idx)}
              >
                <span className="font-serif font-bold text-lg text-stone-800 pr-8">{faq.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-6 h-6 text-moss-700 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-stone-400 flex-shrink-0" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-8 pb-8 pt-0 text-stone-600 leading-relaxed border-t border-stone-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <Button onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })}>
            QUERO AGENDAR MINHA SESSÃO AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;