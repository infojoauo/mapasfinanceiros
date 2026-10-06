import React from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import {
  UPGRADE_PLAN,
  CHECKOUT_UPGRADE_URL,
  CHECKOUT_BASICO_URL,
  buildCheckoutUrl,
} from '../../data/quizConfig';

interface BasicPlanUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BasicPlanUpgradeModal: React.FC<BasicPlanUpgradeModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleUpgradeClick = () => {
    const finalUrl = buildCheckoutUrl(CHECKOUT_UPGRADE_URL);
    if (finalUrl && finalUrl !== '#') {
      window.location.href = finalUrl;
    } else {
      console.log('Checkout Upgrade URL configurável em src/data/quizConfig.ts (CHECKOUT_UPGRADE_URL)');
    }
  };

  const handleDeclineClick = () => {
    const finalUrl = buildCheckoutUrl(CHECKOUT_BASICO_URL);
    if (finalUrl && finalUrl !== '#') {
      window.location.href = finalUrl;
    } else {
      console.log('Checkout Básico URL configurável em src/data/quizConfig.ts (CHECKOUT_BASICO_URL)');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl border-2 border-[#10B981] relative overflow-y-auto max-h-[92vh] text-center animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 text-[#94A3B8] hover:text-[#0F172A] p-1.5 rounded-full hover:bg-[#F1F5F9] transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Attention Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
          <span>{UPGRADE_PLAN.alertBadge}</span>
        </div>

        {/* Modal Main Headline */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight mb-2">
          {UPGRADE_PLAN.headline}
        </h3>

        <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed mb-4 max-w-xs mx-auto">
          {UPGRADE_PLAN.subheadline}
        </p>

        {/* Price Difference & Savings Badge */}
        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-3.5 mb-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <span className="text-xs text-[#64748B] line-through font-semibold">
              DE {UPGRADE_PLAN.originalPrice}
            </span>
            <span className="text-2xl sm:text-3xl font-black text-[#065F46] tracking-tight">
              POR {UPGRADE_PLAN.price}
            </span>
            <span className="text-[11px] font-bold text-[#059669]">à vista</span>
          </div>

          <span className="inline-block bg-[#059669] text-white text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-2xs">
            {UPGRADE_PLAN.savingsBadge}
          </span>
        </div>

        {/* What Upgrade Includes */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 text-left mb-5">
          <span className="text-[11px] font-bold text-[#065F46] uppercase tracking-wider block mb-2">
            O que você desbloqueia nesta oferta:
          </span>
          <ul className="space-y-2 text-xs text-[#1E293B]">
            {UPGRADE_PLAN.features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-[#059669] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="leading-tight font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Big Upgrade Button - R$ 19 */}
        <button
          type="button"
          onClick={handleUpgradeClick}
          className="w-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] hover:from-[#059669] hover:to-[#047857] active:scale-[0.99] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-4 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-t border-white/30 mb-3 flex items-center justify-center gap-1.5 text-center"
        >
          <span>{UPGRADE_PLAN.cta}</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </button>

        {/* Decline Upgrade Link - Continues to Basic R$ 12 */}
        <button
          type="button"
          onClick={handleDeclineClick}
          className="text-xs text-[#64748B] hover:text-[#0F172A] underline decoration-[#CBD5E1] hover:decoration-[#0F172A] py-1 cursor-pointer transition-colors block mx-auto text-center font-medium"
        >
          {UPGRADE_PLAN.declineCta}
        </button>
      </div>
    </div>
  );
};
