import React, { useState } from 'react';
import { ArrowRight, Target, AlertCircle } from 'lucide-react';

interface QuestionTargetWeightProps {
  currentWeight: number;
  initialTarget?: number;
  onNext: (target: number) => void;
}

export const QuestionTargetWeight: React.FC<QuestionTargetWeightProps> = ({
  currentWeight,
  initialTarget,
  onNext,
}) => {
  // Default target is either 8kg less or 65kg
  const defaultTarget = initialTarget || Math.max(40, currentWeight - 8);
  const [targetWeight, setTargetWeight] = useState<number>(defaultTarget);

  const diff = currentWeight - targetWeight;
  const isValidGoal = diff > 0;

  const handleIncrement = (delta: number) => {
    setTargetWeight((prev) => Math.min(currentWeight, Math.max(40, prev + delta)));
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4 animate-in fade-in duration-200 text-center">
      <div className="w-12 h-12 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center mx-auto mb-3 text-[#059669]">
        <Target className="w-6 h-6" />
      </div>

      <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-2 leading-snug">
        E qual peso você gostaria de alcançar?
      </h2>
      <p className="text-xs text-[#64748B] mb-6">
        Defina a sua meta de peso desejada:
      </p>

      {/* Target Weight Card */}
      <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs mb-6">
        <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block mb-1">
          Peso desejado
        </span>
        <div className="flex items-baseline justify-center gap-1.5 mb-3">
          <span className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            {targetWeight}
          </span>
          <span className="text-lg font-bold text-[#059669]">kg</span>
        </div>

        {/* Dynamic Goal Badge */}
        {isValidGoal ? (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs font-bold mb-4 border border-[#A7F3D0]">
            <span>Meta:</span>
            <span className="text-[#059669] font-black">perder {diff} kg</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FEF2F2] text-[#991B1B] text-xs font-semibold mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Defina um peso menor que seu peso atual ({currentWeight} kg)</span>
          </div>
        )}

        {/* Interactive Slider */}
        <input
          type="range"
          min="40"
          max={Math.max(45, currentWeight)}
          step="1"
          value={targetWeight}
          onChange={(e) => setTargetWeight(Number(e.target.value))}
          className="w-full h-3 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#059669]"
        />

        <div className="flex items-center justify-between text-[11px] text-[#94A3B8] font-bold mt-2">
          <span>40 kg</span>
          <span>{Math.round((40 + currentWeight) / 2)} kg</span>
          <span>{currentWeight} kg</span>
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
        disabled={!isValidGoal}
        onClick={() => onNext(targetWeight)}
        className="w-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] hover:from-[#059669] hover:to-[#047857] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-white/30"
      >
        <span>AVANÇAR</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
