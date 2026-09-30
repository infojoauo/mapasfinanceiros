import React, { useState, useEffect } from 'react';
import { Users, Clock } from 'lucide-react';

interface CountdownSectionProps {
  onScrollToPlans: () => void;
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({ onScrollToPlans }) => {
  // 15 hours, 44 mins, 32 secs initial countdown
  const [timeLeft, setTimeLeft] = useState({
    hours: 15,
    minutes: 44,
    seconds: 32,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 15, minutes: 44, seconds: 32 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 bg-[#EFECE3] border-t border-[#DFD9CD] text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#14261E] font-serif mb-6 leading-snug">
          Até quando você vai adiar organizar sua vida financeira?
        </h2>

        {/* 15 / 44 / 32 Countdown Display matching original */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
          <div className="w-18 h-18 sm:w-20 sm:h-20 bg-[#0E2017] rounded-xl flex flex-col items-center justify-center text-white shadow-md border border-[#1E3B2E]">
            <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-[#E5A83B]">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#A3C7B5]">
              HORAS
            </span>
          </div>

          <div className="w-18 h-18 sm:w-20 sm:h-20 bg-[#0E2017] rounded-xl flex flex-col items-center justify-center text-white shadow-md border border-[#1E3B2E]">
            <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-[#E5A83B]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#A3C7B5]">
              MIN
            </span>
          </div>

          <div className="w-18 h-18 sm:w-20 sm:h-20 bg-[#0E2017] rounded-xl flex flex-col items-center justify-center text-white shadow-md border border-[#1E3B2E]">
            <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-[#E5A83B]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#A3C7B5]">
              SEG
            </span>
          </div>
        </div>

        {/* Text required by instructions */}
        <p className="text-xs sm:text-sm text-[#475E52] max-w-lg mx-auto leading-relaxed mb-6 font-medium">
          O preço promocional com os 5 bônus inclusos é válido apenas por tempo limitado. Quando o contador zerar, os bônus saem da oferta e o valor volta ao normal. <strong className="text-[#132B20]">Casais que já compraram veem o resultado em poucos dias!</strong>
        </p>

        {/* CTA Button */}
        <div className="max-w-md mx-auto">
          <button
            onClick={onScrollToPlans}
            className="w-full bg-[#E5A83B] hover:bg-[#D4982B] active:scale-[0.99] text-[#15231B] font-bold text-base sm:text-lg uppercase tracking-wide py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer border-t border-[#FEE199]"
          >
            <span>QUERO ME ORGANIZAR AGORA</span>
          </button>
        </div>
      </div>
    </section>
  );
};
