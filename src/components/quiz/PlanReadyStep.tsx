import React from 'react';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

interface PlanReadyStepProps {
  onNext: () => void;
  userName?: string;
}

export const PlanReadyStep: React.FC<PlanReadyStepProps> = ({ onNext, userName }) => {
  const namePrefix = userName?.trim()
    ? `${userName.trim().toUpperCase()}, `
    : '';

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 animate-in fade-in duration-300 text-center">
      <div className="w-12 h-12 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center mx-auto mb-3 text-[#059669]">
        <BookOpen className="w-6 h-6" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
        <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
        <span>PASSO FINAL</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-3 leading-snug">
        {namePrefix}SUA ROTINA DE 21 DIAS ESTÁ PRONTA.
      </h2>

      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 max-w-sm mx-auto">
        Com base nas respostas que você acabou de dar, organizamos o caminho para você começar.
      </p>

      {/* Visual Box */}
      <div className="bg-[#FAFDFB] rounded-3xl p-5 border border-[#DCFCE7] shadow-xs mb-6 text-left">
        <span className="text-[11px] font-bold text-[#059669] uppercase tracking-wider block mb-2">
          Resumo da sua jornada:
        </span>
        <p className="text-xs text-[#334155] leading-relaxed">
          Tudo foi estruturado em um passo a passo descomplicado para você aplicar no seu dia a dia, com orientações diretas, receitas simples e acompanhamento diário.
        </p>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="w-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] hover:from-[#059669] hover:to-[#047857] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-white/30"
      >
        <span>QUERO VER MINHA ROTINA</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
