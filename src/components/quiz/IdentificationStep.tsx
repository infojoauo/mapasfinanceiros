import React from 'react';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { PROOF_IMAGE } from '../../data/quizConfig';
import { ConfigImage } from '../common/ConfigImage';

interface IdentificationStepProps {
  onNext: () => void;
}

export const IdentificationStep: React.FC<IdentificationStepProps> = ({ onNext }) => {
  return (
    <div className="w-full max-w-md mx-auto px-4 py-4 animate-in fade-in duration-300 text-center">
      {/* Empathy Icon */}
      <div className="w-12 h-12 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center mx-auto mb-3 text-[#059669]">
        <HeartHandshake className="w-6 h-6" />
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-3 leading-snug">
        VOCÊ NÃO ESTÁ SOZINHA
      </h2>

      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
        Muitas mulheres fazem dieta, cortam alimentos, começam uma rotina nova e, mesmo assim, sentem que o corpo não responde como esperavam.
      </p>

      {/* Proof / Identification Image Space */}
      <div className="w-full mb-4">
        <ConfigImage
          src={PROOF_IMAGE}
          alt="Você não está sozinha"
          placeholderKey="PROOF_IMAGE"
          aspect="aspect-[16/9]"
          subtext="Espaço reservado para imagem de acolhimento ou prova visual"
        />
      </div>

      <div className="bg-[#F0FDF4] rounded-2xl p-4 border border-[#DCFCE7] mb-6 text-left">
        <p className="text-xs sm:text-[13px] text-[#065F46] font-medium leading-relaxed">
          Mas existe uma diferença importante entre simplesmente tentar emagrecer e entender o que pode estar dificultando seus resultados.
        </p>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="w-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] hover:from-[#059669] hover:to-[#047857] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-white/30"
      >
        <span>CONTINUAR MINHA ANÁLISE</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
