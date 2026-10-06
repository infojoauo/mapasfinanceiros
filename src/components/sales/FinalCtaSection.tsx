import React from 'react';
import { HERO_MOCKUP_IMAGE } from '../../data/salesPageConfig';
import { MockupBundle } from './VisualMockups';
import { ArrowDown, Sparkles, Download, ShieldCheck, Check } from 'lucide-react';

interface FinalCtaSectionProps {
  onScrollToPricing: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onScrollToPricing }) => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FAFDFB] via-[#F0FDF4] to-[#FAFDFB] border-b border-slate-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          <span>GARANTA SEU ACESSO HOJE</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          Tenha um banco completo de atividades de Ciências pronto para usar
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Chega de perder horas montando folhas de atividades. Tenha 120 materiais visuais em PDF para transformar suas aulas do 6º ao 9º ano.
        </p>

        {/* Mockup */}
        <div className="w-full max-w-sm mx-auto mb-8">
          {HERO_MOCKUP_IMAGE ? (
            <img
              src={HERO_MOCKUP_IMAGE}
              alt="Kit 120 Atividades Visuais de Ciências"
              className="w-full h-auto rounded-2xl shadow-xl border border-emerald-100 object-cover"
            />
          ) : (
            <MockupBundle />
          )}
        </div>

        {/* Primary CTA */}
        <div className="max-w-md mx-auto space-y-3">
          <button
            type="button"
            onClick={onScrollToPricing}
            className="w-full bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 hover:from-emerald-700 hover:to-teal-900 active:scale-[0.99] text-white font-black text-base sm:text-lg uppercase tracking-wider py-4 sm:py-4.5 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer border-t border-emerald-400/50 flex items-center justify-center gap-2 group"
          >
            <span>QUERO AS 120 ATIVIDADES</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <p className="text-xs text-slate-500 font-semibold flex items-center justify-center gap-3">
            <span className="flex items-center gap-1">
              <Download className="w-3.5 h-3.5 text-emerald-600" /> Liberação imediata
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 15 dias de garantia
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
