import React from 'react';

export const AudienceSection: React.FC = () => {
  const cards = [
    {
      title: 'Ganhar tempo na preparação',
      desc: 'Atividades prontas para imprimir e aplicar, sem montar tudo manualmente.',
    },
    {
      title: 'Material organizado por série',
      desc: 'Conteúdos separados para 6º, 7º, 8º e 9º ano.',
    },
    {
      title: 'Facilitar a aprendizagem',
      desc: 'Páginas visuais, com esquemas, imagens e perguntas de interpretação.',
    },
    {
      title: 'Usar em vários momentos',
      desc: 'Aula, revisão, reforço, recuperação, tarefa de casa e atividades extras.',
    },
    {
      title: 'Ciências de forma prática',
      desc: 'Com temas atuais, atividades investigativas e propostas de observação.',
    },
    {
      title: 'Mais segurança na correção',
      desc: 'O plano completo inclui gabarito para facilitar o uso do material.',
    },
  ];

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 bg-[#f3faf6] text-center border-t border-[#e4ede8]">
      <div className="max-w-[1080px] mx-auto">
        <h2 className="text-[24px] sm:text-[30px] md:text-[34px] font-[900] text-[#0f2417] tracking-tight mb-8 sm:mb-10 max-w-2xl mx-auto leading-tight">
          Este material é ideal para você que deseja
        </h2>

        {/* 3 Columns Grid matching competitor */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5 sm:gap-5 max-w-[1000px] mx-auto text-center">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-6 border border-[#e4ede8] shadow-[0_8px_28px_rgba(15,118,110,0.10)] flex flex-col items-center justify-start text-center transition-transform hover:-translate-y-0.5 duration-200"
            >
              {/* Icon Container with check-mark */}
              <div className="w-[46px] h-[46px] rounded-[12px] bg-[#dcfce7] flex items-center justify-center mb-3.5 mx-auto shrink-0">
                <img
                  src="/assets/icons/check-mark.png"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== 'https://atividadesprontas.online/wp-content/uploads/2026/05/check-mark.png') {
                      target.src = 'https://atividadesprontas.online/wp-content/uploads/2026/05/check-mark.png';
                    }
                  }}
                  alt="Check"
                  className="w-6 h-6 object-contain"
                  loading="lazy"
                />
              </div>

              <h3 className="text-[17px] sm:text-[18px] font-[900] text-[#0f2417] mb-1.5 leading-snug">
                {card.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#4b5d54] leading-[1.5] font-[600]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
