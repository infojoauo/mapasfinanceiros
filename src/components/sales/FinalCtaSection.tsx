import React from 'react';
import {
  PRODUCT_NAME,
  CHECKOUT_URL,
  PRICING_CONFIG,
  buildCheckoutUrl,
} from '../../data/salesPageConfig';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';

interface FinalCtaSectionProps {
  onScrollToPricing: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onScrollToPricing }) => {
  const handleClick = () => {
    onScrollToPricing();
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-blue-50/70 via-blue-50/40 to-white text-center">
      <div className="max-w-[760px] mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-blue-200/80 shadow-xl">
        <span className="text-xs font-bold text-blue-700 bg-blue-100/80 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
          Comece a Usar na Próxima Aula
        </span>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Pronto para ver seus alunos conversando em inglês de verdade?
        </h2>

        <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-lg mx-auto font-normal leading-relaxed">
          Garanta o {PRODUCT_NAME} hoje a partir de apenas <strong className="text-blue-700 font-black">{PRICING_CONFIG.basicPrice}</strong> (ou o Plano Completo com todos os bônus por <strong className="text-blue-700 font-black">{PRICING_CONFIG.currentPrice}</strong>) e tenha em mãos o material ideal para destravar a fala da sua turma com zero tempo perdido.
        </p>

        {/* CTA Button */}
        <div className="max-w-md mx-auto">
          <button
            type="button"
            onClick={handleClick}
            className="w-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-[0.99] text-white font-black text-base sm:text-lg uppercase tracking-wide py-4.5 px-8 rounded-full shadow-[0_12px_30px_rgba(220,38,38,0.35)] hover:shadow-[0_16px_36px_rgba(220,38,38,0.45)] transition-all cursor-pointer transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>ESCOLHER MEU PLANO AGORA</span>
          </button>

          <div className="flex items-center justify-center gap-4 mt-4 text-[11px] font-bold text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Compra 100% Segura
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              Acesso Imediato
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
