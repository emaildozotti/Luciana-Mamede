import React from 'react';
import Button from './Button';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-12" data-aos="fade-up">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
            Você não precisa caminhar sozinha.
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Assista ao vídeo abaixo e entenda como podemos, juntas, desatar os nós que prendem sua alma e encontrar o caminho para sua paz interior.
          </p>
        </div>

        <div
          className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden border-8 border-white mb-12"
          data-aos="zoom-in"
        >
          {/* @ts-ignore - custom element */}
          <wistia-player media-id="iuuchy5r3c" aspect="0.75">
            <div className="wistia_preload_transcript_outer_wrapper" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-133.33%' }}>
              <div className="wistia_preload_transcript_inner_wrapper" style={{ overflow: 'auto' }}>
                <p className="wistia_preload_transcript_text" aria-hidden="true" tabIndex={-1} style={{ textAlign: 'justify', fontSize: '5px' }}>
                  Olá, se você chegou até esta página eu imagino como o seu coração está agora, provavelmente cansada de carregar o mundo nas costas, vivendo em estado de alerta constante e com aquela sensação de que por mais que você olhe a paz parece não ficar, e eu quero que você saiba de uma coisa, eu sei exatamente o que é isso, eu não falo apenas de teorias que li nos livros, eu falo de caminho que eu mesma trilhei, eu conheço a dor do pânico, da ansiedade e o medo de perder o controle, mas eu também conheço o caminho de volta e foi transformando o meu trauma em força que eu descobri a minha missão. Hoje o meu consultório é uma casa segura, lugar onde unimos a ciência para tratar a mente e a fé pra alinhar o espírito, aqui não existe julgamentos, existe escuta, técnica e acolhimento. Você já deu passo enorme chegando até aqui. Falta apenas o passo final para iniciarmos o seu processo de liberdade, aqui embaixo tem botão para agendarmos o seu horário, vamos escrever o próximo capítulo da sua história juntas? Te espero na sessão.
                </p>
              </div>
            </div>
          </wistia-player>
        </div>

        <div className="text-center" data-aos="fade-up">
          <Button onClick={() => document.getElementById('metodo')?.scrollIntoView({ behavior: 'smooth' })}>
            QUERO CONHECER O MÉTODO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;