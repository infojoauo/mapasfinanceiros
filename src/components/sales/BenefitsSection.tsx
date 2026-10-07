import React from 'react';

interface BenefitsSectionProps {
  onScrollToPricing: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onScrollToPricing }) => {
  const cards = [
    {
      title: 'Atividades prontas para imprimir',
      desc: 'Você não precisa criar nada do zero. Basta baixar, imprimir e aplicar.',
      iconUrl: '/assets/icons/laser.png',
      fallbackUrl: 'https://atividadesprontas.online/wp-content/uploads/2026/05/laser.png',
      alt: 'Ícone Atividades prontas para imprimir',
    },
    {
      title: 'Conteúdos do 6º ao 9º ano',
      desc: 'Atividades organizadas por ano escolar, com temas essenciais dos Anos Finais.',
      iconUrl: '/assets/icons/scale.png',
      fallbackUrl: 'https://atividadesprontas.online/wp-content/uploads/2026/05/scale.png',
      alt: 'Ícone Conteúdos do 6º ao 9º ano',
    },
    {
      title: 'Visual didático e atrativo',
      desc: 'Páginas com ilustrações, esquemas, tabelas, gráficos, experimentos e questões variadas.',
      iconUrl: '/assets/icons/manual-book.png',
      fallbackUrl: 'https://atividadesprontas.online/wp-content/uploads/2026/05/manual-book.png',
      alt: 'Ícone Visual didático e atrativo',
    },
    {
      title: 'Cabeçalho completo',
      desc: 'Todas as páginas possuem espaço para escola, aluno, turma, série, data e professor.',
      iconUrl: '/assets/icons/folders-1.png',
      fallbackUrl: 'https://atividadesprontas.online/wp-content/uploads/2026/05/folders-1.png',
      alt: 'Ícone Cabeçalho completo',
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white text-center border-t border-[#e4ede8]">
      <div className="max-w-[1080px] mx-auto">
        {/* Title identical to reference image */}
        <h2 className="text-[24px] sm:text-[30px] md:text-[34px] font-[900] text-[#0f2417] tracking-tight mb-7 sm:mb-8">
          As 120 Atividades Visuais de Ciências possuem:
        </h2>

        {/* 2x2 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-[18px] max-w-[900px] mx-auto mb-7 sm:mb-8 text-center">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-6 sm:p-7 border border-[#e4ede8] shadow-[0_8px_28px_rgba(15,118,110,0.10)] flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-0.5 duration-200"
            >
              {/* Mint/Green Icon Container */}
              <div className="w-[46px] h-[46px] rounded-[12px] bg-[#dcfce7] flex items-center justify-center mb-3 mx-auto shrink-0">
                <img
                  src={card.iconUrl}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== card.fallbackUrl) {
                      target.src = card.fallbackUrl;
                    }
                  }}
                  alt={card.alt}
                  className="w-7 h-7 object-contain"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              {/* Card Title */}
              <h3 className="text-[17px] sm:text-[18px] font-[900] text-[#0f2417] mb-1.5 leading-snug">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-[14px] sm:text-[15px] text-[#4b5d54] leading-[1.5] font-[600] max-w-[360px]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button matching image.png */}
        <div className="max-w-[520px] mx-auto">
          <button
            type="button"
            onClick={onScrollToPricing}
            className="w-full bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.99] text-white font-[900] text-[16px] sm:text-[18px] uppercase tracking-wide py-4 sm:py-[17px] px-8 rounded-full shadow-[0_8px_20px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer block text-center"
          >
            QUERO AS ATIVIDADES DE CIÊNCIAS
          </button>
        </div>
      </div>
    </section>
  );
};
