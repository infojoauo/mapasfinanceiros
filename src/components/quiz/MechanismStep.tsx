import React from 'react';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { MECHANISM_IMAGE } from '../../data/quizConfig';
import { ConfigImage } from '../common/ConfigImage';

interface MechanismStepProps {
  onNext: () => void;
}

export const MechanismStep: React.FC<MechanismStepProps> = ({ onNext }) => {
  return (
    <div className="w-full max-w-md mx-auto px-4 py-4 animate-in fade-in duration-300 text-center">
      <div className="w-12 h-12 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center mx-auto mb-3 text-[#059669]">
        <Layers className="w-6 h-6" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
        <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
        <span>O MECANISMO OCULTO</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-3 leading-snug">
        EXISTE UM DETALHE QUE MUITA GENTE IGNORA
      </h2>

      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
        Não é apenas sobre comer menos ou fazer mais exercícios.
      </p>

      {/* Mechanism Box */}
      <div className="bg-[#FAFDFB] rounded-2xl p-4 sm:p-5 border border-[#DCFCE7] shadow-xs mb-5 text-left space-y-3">
        <p className="text-xs sm:text-[13px] text-[#1E293B] leading-relaxed">
          Existem fatores relacionados à <strong>saciedade, rotina alimentar, sono, organização das refeições e resposta individual</strong> que podem influenciar a dificuldade de manter resultados.
        </p>
        <p className="text-xs sm:text-[13px] text-[#065F46] font-semibold leading-relaxed border-t border-[#DCFCE7] pt-2.5">
          É justamente por isso que o nosso método começa identificando o seu perfil.
        </p>
      </div>

      {/* Mechanism Image Space */}
      <div className="w-full mb-6">
        <ConfigImage
          src={MECHANISM_IMAGE}
          alt="Mecanismo Individual do Método"
          placeholderKey="MECHANISM_IMAGE"
          aspect="aspect-[16/9]"
          subtext="Espaço reservado para infográfico ou imagem visual do mecanismo"
        />
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
