import React, { useEffect, useState } from 'react';
import { Check, Loader2 } from 'lucide-react';

interface AnalysisLoadingStepProps {
  onComplete: () => void;
  userName?: string;
}

export const AnalysisLoadingStep: React.FC<AnalysisLoadingStepProps> = ({
  onComplete,
  userName,
}) => {
  const [progress, setProgress] = useState(12);

  const checklistItems = [
    { label: 'Avaliando seu perfil', minProgress: 18 },
    { label: 'Cruzando suas respostas', minProgress: 36 },
    { label: 'Analisando seus hábitos', minProgress: 54 },
    { label: 'Identificando seus principais obstáculos', minProgress: 72 },
    { label: 'Personalizando sua estratégia', minProgress: 88 },
    { label: 'Preparando seu resultado', minProgress: 98 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Increment smoothly to reach 100 in ~3.5 seconds
        const inc = Math.floor(Math.random() * 6) + 4;
        return Math.min(100, prev + inc);
      });
    }, 140);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const finishTimeout = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(finishTimeout);
    }
  }, [progress, onComplete]);

  const nameSuffix = userName?.trim()
    ? `, ${userName.trim().toLowerCase()}`
    : '';

  return (
    <div className="w-full max-w-md mx-auto px-4 py-8 animate-in fade-in duration-300 text-center">
      {/* Animated Spinner Icon */}
      <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center mx-auto mb-4 text-[#059669]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-1 leading-snug">
        Preparando sua análise{nameSuffix}...
      </h2>
      <p className="text-xs text-[#64748B] mb-6">
        Processando seus dados e montando a recomendação personalizada:
      </p>

      {/* Progress Bar & Percentage */}
      <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs mb-6 text-left">
        <div className="flex items-center justify-between text-xs font-bold text-[#065F46] uppercase mb-2">
          <span>Processamento</span>
          <span className="font-mono text-sm">{progress}%</span>
        </div>
        <div className="w-full h-3 bg-[#E2E8F0] rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic Checklist */}
        <div className="space-y-3">
          {checklistItems.map((item, idx) => {
            const isDone = progress >= item.minProgress;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 text-xs sm:text-[13px] transition-all duration-300 ${
                  isDone ? 'text-[#0F172A] font-medium' : 'text-[#94A3B8]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isDone
                      ? 'bg-[#059669] text-white shadow-2xs'
                      : 'bg-[#F1F5F9] text-[#CBD5E1]'
                  }`}
                >
                  {isDone ? (
                    <Check className="w-3 h-3 stroke-[3]" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
                  )}
                </div>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
