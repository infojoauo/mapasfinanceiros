import React from 'react';
import {
  PRICING_PLANS,
  OFFER_MOCKUP_IMAGE,
  PRODUCT_NAME,
  buildCheckoutUrl,
  PricingPlan,
} from '../../data/salesPageConfig';
import { ImageSlot } from '../common/ImageSlot';
import { Check, ShieldCheck, Zap, Sparkles, Gift, Star } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const handlePlanCheckout = (plan: PricingPlan) => {
    if (plan.checkoutUrl && plan.checkoutUrl.trim().length > 0) {
      window.location.href = buildCheckoutUrl(plan.checkoutUrl);
    } else {
      alert(
        `Para configurar o link de compra do "${plan.name}", adicione a URL em salesPageConfig.ts (${
          plan.id === 'basico' ? 'CHECKOUT_URL' : 'CHECKOUT_COMPLETO_URL'
        })!`
      );
    }
  };

  const basicPlan = PRICING_PLANS.find((p) => p.id === 'basico') || PRICING_PLANS[0];
  const completePlan = PRICING_PLANS.find((p) => p.id === 'completo') || PRICING_PLANS[1];

  return (
    <section
      id="oferta"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-[#081226] text-white text-center scroll-mt-12 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1140px] mx-auto relative z-10">
        {/* Title */}
        <span className="text-xs font-black uppercase tracking-widest text-blue-400 bg-blue-950/80 border border-blue-800 px-4 py-1.5 rounded-full inline-block mb-4">
          Escolha o Plano Ideal para Você
        </span>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
          Garanta o seu {PRODUCT_NAME} hoje
        </h2>

        <p className="text-sm sm:text-lg text-slate-300 mb-12 sm:mb-16 max-w-2xl mx-auto font-medium">
          Comece com o material essencial ou garanta o pacote completo com todos os bônus exclusivos inclusos.
        </p>

        {/* 2 Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 max-w-5xl mx-auto items-stretch text-left">
          {/* ======================================================== */}
          {/* OFERTA 1: PLANO BÁSICO (R$ 10,00) - SOMENTE PRINCIPAL   */}
          {/* ======================================================== */}
          <div className="bg-slate-900/90 text-slate-100 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-xl flex flex-col justify-between relative hover:border-slate-500 transition-all">
            <div>
              {/* Badge */}
              <div className="mb-4">
                <span className="bg-slate-800 text-slate-300 border border-slate-700 font-extrabold text-[11px] sm:text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                  <span>{basicPlan.badge}</span>
                </span>
              </div>

              {/* Header */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">
                {basicPlan.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mb-6">
                {basicPlan.tagline}
              </p>

              {/* Price Block */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800 mb-6 text-center">
                <p className="text-xs text-slate-400 mb-0.5">
                  De <s className="text-slate-500">{basicPlan.originalPrice}</s> por apenas:
                </p>
                <div className="text-4xl sm:text-5xl font-black text-white leading-none my-1 tracking-tight">
                  {basicPlan.currentPrice}
                </div>
                <span className="inline-block text-xs font-semibold text-slate-400 mt-1">
                  {basicPlan.installments} • acesso vitalício
                </span>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3">
                  O que está incluído no Plano Básico:
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {basicPlan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span className="font-medium text-slate-200">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA & Trust */}
            <div className="pt-4 mt-auto border-t border-slate-800">
              <button
                type="button"
                onClick={() => handlePlanCheckout(basicPlan)}
                className="w-full bg-slate-800 hover:bg-slate-700 active:scale-[0.99] text-white font-black text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-2xl border border-slate-600 transition-all cursor-pointer text-center block shadow-md"
              >
                {basicPlan.cta}
              </button>

              <div className="flex items-center justify-center gap-3 mt-3 text-[11px] font-bold text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Compra Segura
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-blue-400" />
                  Acesso Imediato
                </span>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* OFERTA 2: PLANO COMPLETO (R$ 26,90) - OFERTA COMPLETA    */}
          {/* ======================================================== */}
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-blue-500 shadow-[0_20px_60px_rgba(37,99,235,0.30)] flex flex-col justify-between relative transform lg:-translate-y-2">
            {/* Ribbon Badge */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs sm:text-[13px] px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span>{completePlan.badge}</span>
            </span>

            <div>
              {/* Header */}
              <div className="mt-2 mb-4">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {completePlan.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
                  {completePlan.tagline}
                </p>
              </div>

              {/* Slot de Imagem do Kit Completo na Oferta */}
              <div className="mb-5">
                <ImageSlot
                  src={OFFER_MOCKUP_IMAGE}
                  alt="Kit Speaking Completo com Bônus"
                  label="MOCKUP DO PACOTE COMPLETO COM BÔNUS"
                  aspect="aspect-[16/9]"
                  className="bg-slate-50 border border-slate-200"
                />
              </div>

              {/* Price Block */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200 mb-6 text-center">
                <p className="text-xs text-slate-500 mb-0.5">
                  De <s className="text-slate-400">{completePlan.originalPrice}</s> por apenas:
                </p>
                <div className="text-4xl sm:text-5xl font-black text-blue-700 leading-none my-1 tracking-tight">
                  {completePlan.currentPrice}
                </div>
                <span className="inline-block text-xs font-bold text-slate-600 mt-1">
                  {completePlan.installments} • pagamento único
                </span>
              </div>

              {/* Features & Bonus List */}
              <div className="mb-6">
                <p className="text-[11px] font-black uppercase tracking-wider text-blue-700 mb-3 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-blue-700" />
                  <span>Tudo o que você recebe no Plano Completo:</span>
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {completePlan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-2.5 p-1.5 rounded-lg transition-colors ${
                        feature.isBonus
                          ? 'bg-amber-50/90 border border-amber-200/80 text-amber-950 font-bold'
                          : feature.isHighlight
                          ? 'bg-blue-50/60 font-bold text-blue-950'
                          : ''
                      }`}
                    >
                      {feature.isBonus ? (
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Gift className="w-3 h-3" />
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                      )}
                      <span className="leading-snug">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA & Trust */}
            <div className="pt-4 mt-auto border-t border-slate-100">
              <button
                type="button"
                onClick={() => handlePlanCheckout(completePlan)}
                className="w-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-[0.99] text-white font-black text-sm sm:text-base uppercase tracking-wider py-4 sm:py-4.5 px-6 rounded-2xl shadow-[0_12px_28px_rgba(220,38,38,0.38)] hover:shadow-[0_16px_34px_rgba(220,38,38,0.48)] transition-all cursor-pointer transform hover:-translate-y-0.5 flex items-center justify-center gap-2 animate-pulse-cta"
              >
                <Sparkles className="w-4 h-4" />
                <span>{completePlan.cta}</span>
              </button>

              <div className="flex items-center justify-center gap-3 mt-3 text-[11px] font-bold text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Pagamento 100% Seguro
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-blue-600" />
                  Entrega Imediata
                </span>
                <span>•</span>
                <span className="text-slate-500">Garantia 7 Dias</span>
              </div>
            </div>
          </div>
        </div>

        {/* Informação adicional de segurança e suporte */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-xl mx-auto">
          <p>
            🔒 Pagamento processado com criptografia de ponta a ponta. Você recebe o acesso imediatamente após a aprovação no seu e-mail cadastrado.
          </p>
        </div>
      </div>
    </section>
  );
};
