import React from 'react';
import { NoticeBar } from './components/sales/NoticeBar';
import { HeroSection } from './components/sales/HeroSection';
import { PainPointsSection } from './components/sales/PainPointsSection';
import { MarqueeBar } from './components/sales/MarqueeBar';
import { SolutionSection } from './components/sales/SolutionSection';
import { ProductPreviewSection } from './components/sales/ProductPreviewSection';
import { HowItWorksSection } from './components/sales/HowItWorksSection';
import { ProductContentsSection } from './components/sales/ProductContentsSection';
import { BenefitsSection } from './components/sales/BenefitsSection';
import { TestimonialsSection } from './components/sales/TestimonialsSection';
import { PricingSection } from './components/sales/PricingSection';
import { GuaranteeSection } from './components/sales/GuaranteeSection';
import { FaqSection } from './components/sales/FaqSection';
import { FinalCtaSection } from './components/sales/FinalCtaSection';
import { Footer } from './components/sales/Footer';
import { PRODUCT_NAME } from './data/salesPageConfig';

export default function App() {
  // Captura e armazena automaticamente todas as UTMs para os checkouts
  React.useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      params.forEach((val, key) => {
        sessionStorage.setItem(`track_${key}`, val);
      });
    } catch {}
  }, []);

  const scrollToPricing = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased font-sans selection:bg-blue-600/20 selection:text-blue-950 pb-20 md:pb-0">
      {/* 0. BARRA SUPERIOR COM CONDIÇÃO DE LANÇAMENTO */}
      <NoticeBar />

      <main>
        {/* 1. HERO: Título persuasivo para professores de inglês, subtítulo, mockup e CTA */}
        <HeroSection onScrollToPricing={scrollToPricing} />

        {/* 2. IDENTIFICAÇÃO DO PROBLEMA: Dificuldades no speaking e tempo de preparação */}
        <PainPointsSection onScrollToPricing={scrollToPricing} />

        {/* 2.1 FAIXA PROMOCIONAL ANIMADA / MARQUEE */}
        <MarqueeBar />

        {/* 3. APRESENTAÇÃO DA SOLUÇÃO: Como o kit apoia as aulas práticas de speaking */}
        <SolutionSection />

        {/* 4. PRÉVIA DOS MATERIAIS: Exemplos reais de cartões e prompts de speaking em inglês */}
        <ProductPreviewSection />

        {/* 5. COMO FUNCIONA: Passo a passo prático para aplicar com os alunos */}
        <HowItWorksSection />

        {/* 6. O QUE ESTÁ INCLUÍDO: Lista clara de materiais e formatos */}
        <ProductContentsSection />

        {/* 7. BENEFÍCIOS: Vantagens para o professor e fluência da turma */}
        <BenefitsSection onScrollToPricing={scrollToPricing} />

        {/* 7.1 DEPOIMENTOS: O que dizem outros professores */}
        <TestimonialsSection onScrollToPricing={scrollToPricing} />

        {/* 8. OFERTA E PREÇO: Seção configurável de checkout com garantias */}
        <PricingSection />

        {/* 9. GARANTIA: Risco zero de 7 dias */}
        <GuaranteeSection />

        {/* 10. PERGUNTAS FREQUENTES: Formato, níveis, acesso e uso prático */}
        <FaqSection />

        {/* 11. CTA FINAL: Chamada conclusiva para garantir o kit */}
        <FinalCtaSection onScrollToPricing={scrollToPricing} />
      </main>

      {/* 12. RODAPÉ COMERCIAL */}
      <Footer />

      {/* FLOATING MOBILE CTA (FIXO NA PARTE INFERIOR EM CELULARES) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-slate-200 p-3 shadow-[0_-6px_20px_rgba(0,0,0,0.1)]">
        <button
          type="button"
          onClick={scrollToPricing}
          className="w-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-[0.99] text-white font-black text-center text-sm uppercase py-3.5 px-4 rounded-full shadow-lg tracking-wider cursor-pointer"
        >
          QUERO O KIT SPEAKING AGORA
        </button>
      </div>
    </div>
  );
}
