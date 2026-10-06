import React from 'react';

interface TimeSavingSectionProps {
  onScrollToPricing: () => void;
}

export const TimeSavingSection: React.FC<TimeSavingSectionProps> = ({ onScrollToPricing }) => {
  const bullets = [
    'Chega de procurar atividades soltas na internet',
    'Tenha uma sequência completa de Ciências para usar durante o ano',
    'Trabalhe conteúdos essenciais com páginas visuais e organizadas',
    'Use em sala, reforço, recuperação, tarefa e revisão',
    'Aplique atividades com mais praticidade e segurança',
  ];

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 bg-[#f3faf6] text-center border-t border-[#e4ede8]">
      <div className="max-w-[1080px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2417] tracking-tight mb-8 max-w-2xl mx-auto leading-tight">
          Economize tempo e leve aulas mais visuais para seus alunos
        </h2>

        {/* Checks List */}
        <div className="max-w-[640px] mx-auto space-y-2.5 mb-8 text-left">
          {bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#0f2417] font-bold">
              <span className="w-6 h-6 rounded-full bg-[#dcfce7] text-[#15803d] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✔
              </span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="max-w-[520px] mx-auto">
          <button
            type="button"
            onClick={onScrollToPricing}
            className="w-full bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.99] text-white font-black text-base sm:text-[19px] uppercase tracking-wider py-4 sm:py-4.5 px-8 rounded-full shadow-[0_8px_20px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer block text-center"
          >
            QUERO ACESSAR AGORA E USAR HOJE
          </button>
        </div>
      </div>
    </section>
  );
};
