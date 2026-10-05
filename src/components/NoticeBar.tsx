import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface NoticeBarProps {
  onScrollToPlans: () => void;
}

export const NoticeBar: React.FC<NoticeBarProps> = ({ onScrollToPlans }) => {
  return (
    <div className="bg-gradient-to-r from-[#8E2848] via-[#B83E63] to-[#8E2848] text-white py-2.5 px-3 sm:px-4 text-center text-xs sm:text-[13px] font-medium tracking-wide shadow-xs relative z-30">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        <span className="inline-flex items-center gap-1.5 font-bold tracking-wider uppercase text-[11px] sm:text-xs bg-white/20 px-2 py-0.5 rounded-full border border-white/30">
          <Sparkles className="w-3 h-3 text-amber-200" />
          LANÇAMENTO EXCLUSIVO
        </span>
        <span className="text-white/95">
          Vagas abertas com valor promocional • Acesso imediato à Área de Membros
        </span>
        <button
          onClick={onScrollToPlans}
          className="underline decoration-white/70 hover:decoration-white font-bold cursor-pointer inline-flex items-center gap-1 hover:text-amber-100 transition-colors ml-1"
        >
          <span>Garantir minha vaga</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
