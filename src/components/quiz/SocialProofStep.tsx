import React from 'react';
import { ArrowRight, MessageSquareHeart, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/quizConfig';
import { ConfigImage } from '../common/ConfigImage';

interface SocialProofStepProps {
  onNext: () => void;
}

export const SocialProofStep: React.FC<SocialProofStepProps> = ({ onNext }) => {
  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 animate-in fade-in duration-300 text-center">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
        <MessageSquareHeart className="w-3.5 h-3.5 text-[#059669]" />
        <span>EXPERIÊNCIAS REAIS</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-2 leading-snug">
        Mulheres que decidiram dar o primeiro passo
      </h2>
      <p className="text-xs text-[#64748B] mb-6">
        Veja como organizar a rotina em 21 dias transformou a relação de outras mulheres com o próprio corpo:
      </p>

      {/* 3 Testimonials Cards */}
      <div className="space-y-4 mb-6 text-left">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-3xl p-5 border border-[#E2E8F0] shadow-xs flex flex-col justify-between"
          >
            {/* Image Placeholder */}
            <div className="w-full mb-3">
              <ConfigImage
                src={t.imageUrl}
                alt={`Depoimento ${t.id}`}
                placeholderKey={t.imageKey}
                aspect="aspect-[16/10]"
                subtext="Espaço reservado para o print real do depoimento ou antes/depois da aluna"
              />
            </div>

            <div className="flex items-center gap-1 mb-2 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>

            <p className="text-xs sm:text-[13px] italic text-[#334155] leading-relaxed mb-3">
              "{t.quote}"
            </p>

            <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#64748B]">
              <div>
                <strong className="text-[#0F172A] block">{t.name}</strong>
                <span>{t.age}</span>
              </div>
              <span className="font-semibold text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-full">
                {t.result}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        className="w-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] hover:from-[#059669] hover:to-[#047857] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-white/30"
      >
        <span>AVANÇAR</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
