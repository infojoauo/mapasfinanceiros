import React, { useState, useEffect } from 'react';

interface HoursComparisonSectionProps {
  onScrollToPricing: () => void;
}

export const HoursComparisonSection: React.FC<HoursComparisonSectionProps> = ({
  onScrollToPricing,
}) => {
  // Evergreen 15-minute countdown matching competitor
  const [secondsLeft, setSecondsLeft] = useState(14 * 60 + 58);

  useEffect(() => {
    const KEY = 'cienciasvisuais_deadline_v1';
    const DUR = 15 * 60 * 1000;
    let end = parseInt(localStorage.getItem(KEY) || '0', 10);
    if (!end || isNaN(end) || end < Date.now()) {
      end = Date.now() + DUR;
      localStorage.setItem(KEY, String(end));
    }

    const updateTimer = () => {
      const left = end - Date.now();
      if (left <= 0) {
        end = Date.now() + DUR;
        localStorage.setItem(KEY, String(end));
        setSecondsLeft(Math.floor(DUR / 1000));
      } else {
        setSecondsLeft(Math.floor(left / 1000));
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 bg-white text-center border-t border-[#e4ede8]">
      <div className="max-w-[1080px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2417] tracking-tight mb-4 max-w-2xl mx-auto leading-tight">
          Quantas horas você ainda vai perder procurando atividades de Ciências?
        </h2>

        <p className="text-base sm:text-lg text-[#4b5d54] leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          Este material foi criado para você ter <strong className="text-[#0f2417] font-bold">120 atividades prontas</strong>, organizadas por série, com visual bonito e conteúdos variados para aplicar durante o ano letivo. Aproveite a oferta enquanto o tempo abaixo estiver correndo.
        </p>

        {/* 3 Dark Boxes Countdown */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 my-6">
          <div className="bg-[#0f2417] text-white rounded-[12px] py-3 px-3 sm:px-4 min-w-[74px] sm:min-w-[80px] text-center shadow-xs">
            <b className="text-2xl sm:text-[30px] font-black block leading-none">{hours}</b>
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-300 block mt-1">
              horas
            </span>
          </div>

          <div className="bg-[#0f2417] text-white rounded-[12px] py-3 px-3 sm:px-4 min-w-[74px] sm:min-w-[80px] text-center shadow-xs">
            <b className="text-2xl sm:text-[30px] font-black block leading-none">{minutes}</b>
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-300 block mt-1">
              min
            </span>
          </div>

          <div className="bg-[#0f2417] text-white rounded-[12px] py-3 px-3 sm:px-4 min-w-[74px] sm:min-w-[80px] text-center shadow-xs">
            <b className="text-2xl sm:text-[30px] font-black block leading-none">{seconds}</b>
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-300 block mt-1">
              seg
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="max-w-[520px] mx-auto mt-6">
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
