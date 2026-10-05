import React from 'react';
import { Sparkles, ShieldCheck, ArrowRight, Heart } from 'lucide-react';

interface FinalCtaSectionProps {
  onScrollToPlans: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onScrollToPlans }) => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FFFDFE] via-[#FAF3F5] to-[#F5E8EC] border-t border-[#F0DCE2] relative overflow-hidden text-center">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCE8ED] border border-[#F5C7D3] text-[#A63152] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C44369]" />
          <span>SUA PELE MERECE ESSE CUIDADO</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A161E] font-serif tracking-tight mb-4">
          Comece hoje sua jornada de 21 dias
        </h2>

        <p className="text-sm sm:text-base text-[#573D47] max-w-xl mx-auto leading-relaxed mb-8">
          Dê o primeiro passo para ter uma rotina prática, leve e organizada. Sinta o orgulho de se olhar no espelho todos os dias e ver uma pele viçosa, macia e bem tratada.
        </p>

        {/* Benefits reminder */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#664B55] mb-8 font-medium">
          <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#EED7DE] shadow-xs">
            ✨ Acesso digital imediato
          </span>
          <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#EED7DE] shadow-xs">
            🌸 Menos de 5 min por dia
          </span>
          <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#EED7DE] shadow-xs">
            🛡️ 7 dias de garantia
          </span>
        </div>

        {/* Big Action Button */}
        <div className="max-w-md mx-auto">
          <button
            onClick={onScrollToPlans}
            className="w-full bg-gradient-to-r from-[#C24168] via-[#D64E76] to-[#C24168] hover:from-[#B1355A] hover:to-[#B1355A] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg uppercase tracking-wide py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-white/30"
          >
            <span>QUERO COMEÇAR AGORA</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-[#7A5C66] mt-3 font-medium">
            🔒 Compra 100% segura via Zuptos • Liberação imediata
          </p>
        </div>
      </div>
    </section>
  );
};
