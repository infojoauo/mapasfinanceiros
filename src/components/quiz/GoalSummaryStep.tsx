import React from 'react';
import { ArrowRight, Flag } from 'lucide-react';

interface GoalSummaryStepProps {
  currentWeight: number;
  targetWeight: number;
  onNext: () => void;
  userName?: string;
}

export const GoalSummaryStep: React.FC<GoalSummaryStepProps> = ({
  currentWeight,
  targetWeight,
  onNext,
  userName,
}) => {
  const diff = Math.max(0, currentWeight - targetWeight);

  const namePrefix = userName?.trim()
    ? `${userName.trim().toUpperCase()}, `
    : '';

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4 animate-in fade-in duration-300 text-center">
      <div className="w-12 h-12 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center mx-auto mb-3 text-[#059669]">
        <Flag className="w-6 h-6" />
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-2 leading-snug">
        {namePrefix}AGORA CONSEGUIMOS ENTENDER MELHOR O SEU OBJETIVO.
      </h2>

      <p className="text-xs sm:text-sm text-[#475569] mb-6">
        Veja a projeção comparativa da sua meta definida:
      </p>

      {/* Visual Weight Transition Card */}
      <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs mb-6">
        <div className="grid grid-cols-3 gap-2 items-center mb-4">
          <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]/80">
            <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-0.5">
              Peso atual
            </span>
            <span className="text-xl sm:text-2xl font-black text-[#1E293B]">
              {currentWeight} <span className="text-xs font-bold text-[#64748B]">kg</span>
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0]">
            <span className="text-[10px] font-bold text-[#065F46] uppercase tracking-wider block mb-0.5">
              Objetivo
            </span>
            <span className="text-xl sm:text-2xl font-black text-[#065F46]">
              {targetWeight} <span className="text-xs font-bold text-[#059669]">kg</span>
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-[#F0FDF4] border border-[#86EFAC]">
            <span className="text-[10px] font-bold text-[#15803D] uppercase tracking-wider block mb-0.5">
              Meta
            </span>
            <span className="text-xl sm:text-2xl font-black text-[#15803D]">
              -{diff} <span className="text-xs font-bold text-[#15803D]">kg</span>
            </span>
          </div>
        </div>

        <div className="p-3.5 bg-[#FAFDFB] rounded-2xl border border-[#DCFCE7] text-left">
          <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed">
            Agora vamos cruzar suas respostas para identificar o perfil da sua rotina e mostrar qual estratégia pode fazer mais sentido para você.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="w-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] hover:from-[#059669] hover:to-[#047857] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-white/30"
      >
        <span>CONTINUAR ANÁLISE</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
