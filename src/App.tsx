import React from 'react';
import { NoticeBar } from './components/sales/NoticeBar';
import { HeroSection } from './components/sales/HeroSection';
import { ProductPreviewSection } from './components/sales/ProductPreviewSection';
import { BenefitsSection } from './components/sales/BenefitsSection';
import { TimeSavingSection } from './components/sales/TimeSavingSection';
import { HoursComparisonSection } from './components/sales/HoursComparisonSection';
import { AudienceSection } from './components/sales/AudienceSection';
import { ProductContentsSection } from './components/sales/ProductContentsSection';
import { BonusesSection } from './components/sales/BonusesSection';
import { PricingSection } from './components/sales/PricingSection';
import { GuaranteeSection } from './components/sales/GuaranteeSection';
import { HowItWorksSection } from './components/sales/HowItWorksSection';
import { FaqSection } from './components/sales/FaqSection';
import { Footer } from './components/sales/Footer';

export default function App() {
  const scrollToPricing = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0f2417] antialiased font-sans selection:bg-[#16a34a]/20 selection:text-[#0f2417] pb-20 md:pb-0">
      {/* 1. Barra de Aviso Superior (⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE) */}
      <NoticeBar />

      <main>
        {/* SEÇÃO 1 — HERO */}
        <HeroSection onScrollToPricing={scrollToPricing} />

        {/* SEÇÃO 2 — VEJA ALGUMAS PÁGINAS QUE VOCÊ PODERÁ USAR COM SEUS ALUNOS (GRADE 2x7) */}
        <ProductPreviewSection />

        {/* SEÇÃO 3 — AS 120 ATIVIDADES VISUAIS DE CIÊNCIAS POSSUEM (4 CARDS) */}
        <BenefitsSection onScrollToPricing={scrollToPricing} />

        {/* SEÇÃO 4 — ECONOMIZE TEMPO E LEVE AULAS MAIS VISUAIS PARA SEUS ALUNOS */}
        <TimeSavingSection onScrollToPricing={scrollToPricing} />

        {/* SEÇÃO 5 — QUANTAS HORAS VOCÊ AINDA VAI PERDER (COUNTDOWN 15 MIN) */}
        <HoursComparisonSection onScrollToPricing={scrollToPricing} />

        {/* SEÇÃO 6 — ESTE MATERIAL É IDEAL PARA VOCÊ QUE DESEJA (6 CARDS) */}
        <AudienceSection />

        {/* SEÇÃO 7 — TUDO O QUE VOCÊ VAI RECEBER (+120 ATIVIDADES EM PDF) */}
        <ProductContentsSection />

        {/* SEÇÃO 8 — E AINDA TEM MAIS: 4 BÔNUS EXCLUSIVOS */}
        <BonusesSection />

        {/* SEÇÃO 9 — ESCOLHA A OPÇÃO IDEAL PARA VOCÊ (PLANO BÁSICO R$10 & PLANO COMPLETO R$27,90 + POPUP R$17,90) */}
        <PricingSection />

        {/* SEÇÃO 10 — VOCÊ TEM GARANTIA DE 15 DIAS */}
        <GuaranteeSection />

        {/* SEÇÃO 11 — COMO É O ACESSO (4 ETAPAS) */}
        <HowItWorksSection onScrollToPricing={scrollToPricing} />

        {/* SEÇÃO 12 — PERGUNTAS FREQUENTES */}
        <FaqSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING MOBILE CTA BAR (FIXED BOTTOM ON MOBILE) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e4ede8] p-2.5 sm:p-3 shadow-[0_-6px_20px_rgba(0,0,0,0.08)]">
        <button
          type="button"
          onClick={scrollToPricing}
          className="w-full bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.99] text-white font-black text-center text-sm sm:text-base uppercase py-3.5 px-4 rounded-full shadow-md tracking-wider cursor-pointer"
        >
          QUERO AS 120 ATIVIDADES AGORA
        </button>
      </div>
    </div>
  );
}
