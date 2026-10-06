import React, { useState } from 'react';
import { ArrowRight, Scale } from 'lucide-react';

interface QuestionCurrentWeightProps {
  initialWeight?: number;
  onNext: (weight: number) => void;
}

export const QuestionCurrentWeight: React.FC<QuestionCurrentWeightProps> = ({
  initialWeight = 75,
  onNext,
}) => {
  const [weight, setWeight] = useState<number>(initialWeight || 75);

  const handleIncrement = (delta: number) => {
    setWeight((prev) => Math.min(150, Math.max(40, prev + delta)));
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4 animate-in fade-in duration-200 text-center">
      <div className="w-12 h-12 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center mx-auto mb-3 text-[#059669]">
        <Scale className="w-6 h-6" />
      </div>

      <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-2 leading-snug">
        Qual é o seu peso atual?
      </h2>
      <p className="text-xs text-[#64748B] mb-6">
        Arraste o controle abaixo para definir seu peso aproximado:
      </p>

      {/* Weight Display Card */}
      <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs mb-6">
        <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block mb-1">
          Seu peso atual
        </span>
        <div className="flex items-baseline justify-center gap-1.5 mb-5">
          <span className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            {weight}
          </span>
          <span className="text-lg font-bold text-[#059669]">kg</span>
        </div>

        {/* Interactive Slider */}
        <input
          type="range"
          min="40"
          max="150"
          step="1"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="w-full h-3 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#059669]"
        />

        <div className="flex items-center justify-between text-[11px] text-[#94A3B8] font-bold mt-2">
          <span>40 kg</span>
          <span>95 kg</span>
          <span>150 kg</span>
        </div>

        {/* Quick Stepper Buttons */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <button
            type="button"
            onClick={() => handleIncrement(-1)}
            className="w-10 h-10 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#1E293B] font-bold text-lg flex items-center justify-center active:scale-95 transition-all cursor-pointer"
          >
            -
          </button>
          <span className="text-xs text-[#64748B] font-medium">Ajuste fino</span>
          <button
            type="button"
            onClick={() => handleIncrement(1)}
            className="w-10 h-10 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#1E293B] font-bold text-lg flex items-center justify-center active:scale-95 transition-all cursor-pointer"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onNext(weight)}
        className="w-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] hover:from-[#059669] hover:to-[#047857] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-white/30"
      >
        <span>AVANÇAR</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
