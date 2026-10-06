import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, Clock, Zap } from 'lucide-react';
import { HERO_IMAGE } from '../../data/quizConfig';
import { ConfigImage } from '../common/ConfigImage';

interface HeroStepProps {
  onStartQuiz: (name: string) => void;
  initialName?: string;
}

export const HeroStep: React.FC<HeroStepProps> = ({ onStartQuiz, initialName = '' }) => {
  const [name, setName] = useState<string>(initialName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartQuiz(name.trim());
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 sm:py-8 flex flex-col items-center text-center animate-in fade-in duration-300">
      {/* Personalized Indicator */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
        <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
        <span>Análise personalizada</span>
      </div>

      {/* Direct Response Headline */}
      <h1 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#0F172A] leading-[1.3] tracking-tight mb-3">
        DESCUBRA O QUE PODE ESTAR ATRAPALHANDO SEUS RESULTADOS DE EMAGRECIMENTO
      </h1>

      {/* Subheadline */}
      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 max-w-sm">
        Responda algumas perguntas e descubra qual estratégia pode fazer mais sentido para o seu perfil.
      </p>

      {/* Hero Image in prominent spotlight */}
      <div className="w-full mb-6">
        <ConfigImage
          src={HERO_IMAGE}
          alt="Descoberta de Perfil"
          placeholderKey="HERO_IMAGE"
          aspect="aspect-[16/11]"
          subtext="Espaço reservado para a foto ou mockup principal da avaliação"
        />
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        {/* Optional Name Field for Dynamic Personalization */}
        <div className="w-full mb-4 text-left">
          <label className="block text-xs font-bold text-[#065F46] uppercase tracking-wider mb-1.5 text-center">
            Como devemos te chamar? (opcional)
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu primeiro nome (ex: Flávia)"
            className="w-full text-center py-3 px-4 rounded-2xl border border-[#A7F3D0] focus:border-[#059669] focus:ring-2 focus:ring-[#10B981]/25 bg-white text-sm font-semibold text-[#0F172A] outline-none shadow-2xs placeholder:text-[#94A3B8] placeholder:font-normal"
          />
        </div>

        {/* Indication above CTA */}
        <p className="text-[11px] text-[#059669] font-bold uppercase tracking-wider mb-2">
          Análise personalizada
        </p>

        {/* Primary CTA */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] hover:from-[#059669] hover:to-[#047857] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-white/30 group"
        >
          <span>QUERO DESCOBRIR MINHA VERSÃO</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </form>

      {/* Trust Badges */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 text-[11px] text-[#475569] mt-4 font-medium flex-wrap">
        <span className="flex items-center gap-1">
          <Check className="w-3.5 h-3.5 text-[#059669] stroke-[2.5]" />
          Gratuito
        </span>
        <span className="text-[#CBD5E1]">•</span>
        <span className="flex items-center gap-1">
          <Zap className="w-3.5 h-3.5 text-[#059669]" />
          Resultado na hora
        </span>
        <span className="text-[#CBD5E1]">•</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#059669]" />
          Leva menos de 2 minutos
        </span>
      </div>
    </div>
  );
};
