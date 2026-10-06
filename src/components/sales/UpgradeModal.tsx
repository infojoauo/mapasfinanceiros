import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import {
  UPGRADE_PLAN,
  CHECKOUT_UPGRADE_URL,
  CHECKOUT_BASICO_URL,
  buildCheckoutUrl,
} from '../../data/salesPageConfig';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAcceptUpgrade = () => {
    const url = buildCheckoutUrl(CHECKOUT_UPGRADE_URL);
    window.location.href = url;
  };

  const handleDeclineUpgrade = () => {
    const url = buildCheckoutUrl(CHECKOUT_BASICO_URL);
    window.location.href = url;
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-[#0f2417]/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[480px] max-h-[92vh] overflow-y-auto bg-white border-2 border-[#d8f5de] rounded-[24px] shadow-2xl p-6 sm:p-8 text-center"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="upgradeTitle"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar oferta"
          className="absolute top-3.5 right-3.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f2f4f3] hover:bg-[#e2e6e4] text-[#53645b] flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Exclusive Tag */}
        <span className="inline-block bg-[#eef2ff] text-[#6d4bd1] text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full mb-2">
          {UPGRADE_PLAN.tag}
        </span>

        {/* Title */}
        <h3 id="upgradeTitle" className="text-2xl sm:text-[30px] font-black text-[#0f2417] leading-tight mb-1">
          {UPGRADE_PLAN.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm sm:text-base font-extrabold text-[#0f2417] mb-1.5 leading-snug">
          {UPGRADE_PLAN.sub}
        </p>

        {/* Copy */}
        <p className="text-xs sm:text-[13px] text-[#4b5d54] max-w-sm mx-auto mb-4 font-normal leading-relaxed">
          {UPGRADE_PLAN.copy}
        </p>

        {/* Price Box */}
        <div className="bg-[#eff9f1] border border-[#d5eedb] rounded-[18px] p-3 sm:p-4 mb-4 text-center">
          <span className="text-xs sm:text-[13px] text-[#8a9991] line-through font-extrabold block">
            De {UPGRADE_PLAN.originalPrice}
          </span>
          <span className="text-4xl sm:text-[46px] font-black text-[#15803d] leading-none my-1 block tracking-tight">
            {UPGRADE_PLAN.price}
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#65766d] font-black uppercase tracking-wider block">
            {UPGRADE_PLAN.priceOnce}
          </span>
        </div>

        {/* List Title */}
        <div className="text-left text-[11px] sm:text-xs text-[#6c7b73] font-black tracking-wider uppercase mb-2">
          {UPGRADE_PLAN.listTitle}
        </div>

        {/* Features List */}
        <ul className="space-y-1.5 text-left mb-5">
          {UPGRADE_PLAN.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] font-bold text-[#0f2417]">
              <span className="text-[#16a34a] font-black text-sm shrink-0 leading-none mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Yes Button */}
        <button
          type="button"
          onClick={handleAcceptUpgrade}
          className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer block text-center"
        >
          {UPGRADE_PLAN.ctaYes}
        </button>

        {/* No Button */}
        <button
          type="button"
          onClick={handleDeclineUpgrade}
          className="mt-3 inline-block text-xs text-[#718078] hover:text-[#0f2417] underline font-bold cursor-pointer transition-colors bg-transparent border-0"
        >
          {UPGRADE_PLAN.ctaNo}
        </button>
      </div>
    </div>
  );
};
