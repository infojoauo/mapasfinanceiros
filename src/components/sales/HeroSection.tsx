import React from 'react';
import {
  HERO_MOCKUP_IMAGE,
  PRODUCT_NAME,
  HERO_HEADLINE,
  PRODUCT_SUBTITLE,
  CHECKOUT_URL,
  buildCheckoutUrl,
} from '../../data/salesPageConfig';
import { ImageSlot } from '../common/ImageSlot';
import { Users, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onScrollToPricing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPricing }) => {
  const handleCtaClick = () => {
    onScrollToPricing();
  };

  return (
    <section className="pt-8 pb-12 sm:pt-10 sm:pb-16 px-4 flex flex-col items-center text-center max-w-5xl mx-auto">
      {/* Teacher satisfaction badge */}
      <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-xs sm:text-sm font-bold shadow-xs">
        <Users className="w-4 h-4 stroke-[2.5]" />
        <span>Join +2.347 Teachers satisfeitos</span>
      </div>

      {/* Main Title / Headline & Subtitle */}
      <div className="max-w-4xl mx-auto mb-6 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#072753] tracking-tight leading-tight mb-4">
          {HERO_HEADLINE}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          {PRODUCT_SUBTITLE}
        </p>
      </div>

      {/* Mockup Showcase Slot - Empty image slot as requested */}
      <div className="relative w-full max-w-4xl mb-6">
        <ImageSlot
          src={HERO_MOCKUP_IMAGE}
          alt={PRODUCT_NAME}
          label="MOCKUP PRINCIPAL DO KIT SPEAKING"
          aspect="aspect-[16/10]"
          className="w-full shadow-2xl rounded-2xl border border-slate-200"
        />
      </div>

      {/* CTA Button */}
      <button
        onClick={handleCtaClick}
        className="bg-[#CE2225] text-white font-black text-lg md:text-xl py-3.5 px-8 rounded-xl shadow-lg shadow-red-500/30 hover:brightness-110 active:scale-95 transition-all w-full max-w-md uppercase tracking-wide animate-pulse-cta text-center cursor-pointer"
      >
        QUERO AGORA
      </button>

      {/* Trust Badges under CTA */}
      <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest flex-wrap">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Compra Segura</span>
        </span>
        <span className="flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-blue-500" />
          <span>Acesso Imediato</span>
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-purple-500" />
          <span>Garantia de 7 Dias</span>
        </span>
      </div>
    </section>
  );
};
