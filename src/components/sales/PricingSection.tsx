import React, { useState } from 'react';
import {
  BASIC_PLAN,
  COMPLETE_PLAN,
  CHECKOUT_COMPLETO_URL,
  PLAN_BASIC_IMAGE,
  PLAN_COMPLETE_IMAGE,
  buildCheckoutUrl,
} from '../../data/salesPageConfig';
import { UpgradeModal } from './UpgradeModal';
import { Check } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const handleCompleteCheckout = () => {
    const url = buildCheckoutUrl(CHECKOUT_COMPLETO_URL);
    window.location.href = url;
  };

  return (
    <>
      <section id="oferta" className="py-14 sm:py-16 px-4 sm:px-6 bg-white text-center border-t border-[#e4ede8] scroll-mt-12">
        <div className="max-w-[1080px] mx-auto">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2417] tracking-tight mb-2">
            Escolha a opção ideal para você
          </h2>

          {/* Social Proof Subtitle */}
          <p className="text-sm sm:text-base font-extrabold text-[#0f766e] mb-10 max-w-xl mx-auto">
            92% das professoras escolhem o Plano Completo
          </p>

          {/* 2 Plans Side-by-Side: Plano Completo on top on mobile, side-by-side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-6 lg:gap-8 items-start max-w-[880px] mx-auto text-left">
            {/* PLANO BÁSICO - Aparece em baixo no mobile, à esquerda no desktop */}
            <div className="order-2 md:order-1 bg-white rounded-[20px] p-6 sm:p-7 border-2 border-[#e4ede8] shadow-xs flex flex-col justify-between h-full">
              <div>
                {/* Image */}
                <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto mb-4 overflow-hidden rounded-[12px] bg-[#f8faf8]">
                  <img
                    src={PLAN_BASIC_IMAGE}
                    alt="Plano Básico"
                    className="w-full h-auto object-contain rounded-[12px] block mx-auto transition-transform hover:scale-102 duration-300"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#0f2417] text-center mb-4">
                  {BASIC_PLAN.name}
                </h3>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6 text-sm text-[#0f2417]">
                  {BASIC_PLAN.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-semibold">
                      <span className="text-[#16a34a] font-black text-sm shrink-0 leading-none mt-1">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="pt-4 border-t border-[#e4ede8] text-center">
                <p className="text-sm text-[#4b5d54] mb-1">
                  de <s className="text-slate-400">{BASIC_PLAN.originalPrice}</s> por:
                </p>
                <div className="text-4xl sm:text-[44px] font-black text-[#15803d] leading-none my-1 tracking-tight">
                  {BASIC_PLAN.price}
                </div>
                <div className="my-2">
                  <span className="inline-block bg-[#dcfce7] text-[#15803d] font-extrabold text-xs sm:text-sm px-3.5 py-1 rounded-full">
                    {BASIC_PLAN.saveBadge}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsUpgradeModalOpen(true)}
                  className="w-full mt-4 bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.99] text-white font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-4 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  {BASIC_PLAN.cta}
                </button>
              </div>
            </div>

            {/* PLANO COMPLETO - Aparece em cima no mobile (order-1), à direita no desktop (md:order-2) */}
            <div className="order-1 md:order-2 bg-white rounded-[20px] p-6 sm:p-7 border-2 border-[#16a34a] shadow-[0_16px_40px_rgba(22,163,74,0.18)] flex flex-col justify-between h-full relative">
              {/* Floating Badge */}
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#16a34a] text-white font-black text-xs sm:text-sm px-4.5 py-1.5 rounded-full shadow-md whitespace-nowrap">
                {COMPLETE_PLAN.badge}
              </span>

              <div>
                {/* Image */}
                <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto mb-4 mt-2 overflow-hidden rounded-[12px] bg-[#f8faf8]">
                  <img
                    src={PLAN_COMPLETE_IMAGE}
                    alt="Plano Completo"
                    className="w-full h-auto object-contain rounded-[12px] block mx-auto transition-transform hover:scale-102 duration-300"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#0f2417] text-center mb-4">
                  {COMPLETE_PLAN.name}
                </h3>

                {/* Bullets */}
                <ul className="space-y-2 mb-6 text-sm text-[#0f2417]">
                  {COMPLETE_PLAN.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-semibold">
                      <span className="text-[#16a34a] font-black text-sm shrink-0 leading-none mt-1">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                      <span className={idx >= 5 ? 'font-bold text-[#15803d]' : 'font-semibold'}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="pt-4 border-t border-[#e4ede8] text-center">
                <p className="text-sm text-[#4b5d54] mb-1">
                  de <s className="text-slate-400">{COMPLETE_PLAN.originalPrice}</s> por:
                </p>
                <div className="text-4xl sm:text-[44px] font-black text-[#15803d] leading-none my-1 tracking-tight">
                  {COMPLETE_PLAN.price}
                </div>
                <div className="my-2">
                  <span className="inline-block bg-[#dcfce7] text-[#15803d] font-extrabold text-xs sm:text-sm px-3.5 py-1 rounded-full">
                    {COMPLETE_PLAN.saveBadge}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCompleteCheckout}
                  className="w-full mt-4 bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.99] text-white font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-4 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  {COMPLETE_PLAN.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
      />
    </>
  );
};
