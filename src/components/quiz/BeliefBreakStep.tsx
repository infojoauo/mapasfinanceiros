import React from 'react';
import { ArrowRight, Lightbulb } from 'lucide-react';

interface BeliefBreakStepProps {
  onNext: () => void;
  userName?: string;
}

export const BeliefBreakStep: React.FC<BeliefBreakStepProps> = ({ onNext, userName }) => {
  const namePrefix = userName?.trim()
    ? `${userName.trim().toUpperCase()}, `
    : '';

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4 animate-in fade-in duration-300 text-center">
      {/* Insight Icon */}
      <div className="w-12 h-12 rounded-full bg-[#FEF3C7] border border-[#FDE68A] flex items-center justify-center mx-auto mb-3 text-[#D97706]">
        <Lightbulb className="w-6 h-6" />
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-3 leading-snug">
        {namePrefix}TALVEZ O PROBLEMA NÃO SEJA FALTA DE FORÇA DE VONTADE.
      </h2>

      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
        Quando você tenta várias estratégias e o resultado nunca se mantém, pode ser necessário olhar para outros fatores da rotina e para a forma como o seu corpo responde ao processo.
      </p>

      {/* Highlight Box */}
      <div className="bg-[#FAFDFB] rounded-2xl p-4 sm:p-5 border border-[#DCFCE7] shadow-xs mb-6 text-left">
        <p className="text-xs sm:text-[13px] text-[#065F46] font-medium leading-relaxed">
          É por isso que estamos analisando o seu perfil antes de mostrar a estratégia.
        </p>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="w-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] hover:from-[#059669] hover:to-[#047857] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-white/30"
      >
        <span>QUERO DESCOBRIR O QUE PODE ESTAR ACONTECENDO</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
