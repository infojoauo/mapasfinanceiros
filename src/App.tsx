/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NoticeBar } from './components/NoticeBar';
import { HeroSection } from './components/HeroSection';
import { VisualMapsPreview } from './components/VisualMapsPreview';
import { WhyCasalSection } from './components/WhyCasalSection';
import { KitContentSection } from './components/KitContentSection';
import { CountdownSection } from './components/CountdownSection';
import { IdealForYouSection } from './components/IdealForYouSection';
import { BonusesSection } from './components/BonusesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PlansSection } from './components/PlansSection';
import { BasicPlanPopup } from './components/BasicPlanPopup';
import { GuaranteeSection } from './components/GuaranteeSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const scrollToPlans = () => {
    const plansElem = document.getElementById('planos');
    if (plansElem) {
      plansElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Triggered when user clicks "Quero o Plano Básico por R$10,00" -> Opens popup offer
  const handleSelectBasicPlan = () => {
    setIsPopupOpen(true);
  };

  // Triggered when user clicks "Quero o Plano Completo por R$29,90"
  const handleSelectCompletePlan = () => {
    window.location.href = 'https://app.zuptos.com.br/checkout/10cbb509bde9bf13';
  };

  // From popup: user accepts upgrade offer at R$ 19,90
  const handleAcceptUpgrade = () => {
    setIsPopupOpen(false);
    window.location.href = 'https://app.zuptos.com.br/checkout/f1b3420a1d383e74';
  };

  // From popup: user declines and continues with basic at R$ 10,00
  const handleContinueBasic = () => {
    setIsPopupOpen(false);
    window.location.href = 'https://app.zuptos.com.br/checkout/a1a5a3427164bc4c';
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#1B2923] selection:bg-[#E5A83B]/30 selection:text-[#14261E]">
      {/* 0. Top Urgency Notice Bar */}
      <NoticeBar onScrollToPlans={scrollToPlans} />

      <main>
        {/* 1. Headline + Video 30s clean placeholder + Subhead + Bullets + CTA */}
        <HeroSection onScrollToPlans={scrollToPlans} />

        {/* 2. Seção "O que você vai aprender" (50 Mapas visuais divididos em 2 colunas com foco em Casais) */}
        <VisualMapsPreview onScrollToPlans={scrollToPlans} />

        {/* 3. Seção "Por que ter o seu Finanças para Casais" (Fundo verde escuro com texto obrigatório) */}
        <WhyCasalSection onScrollToPlans={scrollToPlans} />

        {/* 4. Seção "Conteúdo do Kit: Tudo que você vai aprender no FINANÇAS PARA CASAIS" */}
        <KitContentSection />

        {/* 5. Seção "Até quando você vai adiar sua vida financeira" (Contador 15/44/32 com texto novo) */}
        <CountdownSection onScrollToPlans={scrollToPlans} />

        {/* 6. Seção "Ideal para você..." (Casais de 35 a 55 anos) */}
        <IdealForYouSection />

        {/* 7. Seção de Bônus (Obrigatório: bem acima de Depoimentos, 5 bônus com destaque para Plano Completo) */}
        <BonusesSection />

        {/* 8. Seção de Depoimentos (Casais reais, Rosana, Cláudia, Sandra, etc.) */}
        <TestimonialsSection />

        {/* 9. Seção de Planos (Duas ofertas: Plano Básico R$10 e Plano Completo R$29,90) */}
        <PlansSection
          onSelectBasicPlan={handleSelectBasicPlan}
          onSelectCompletePlan={handleSelectCompletePlan}
        />

        {/* 10. Seção de Confiança / Garantia Incondicional de 7 Dias */}
        <GuaranteeSection />

        {/* 11. Seção "Como funciona depois da compra" (Passo a passo 01, 02, 03) */}
        <HowItWorksSection />

        {/* 12. Seção "Ficou com alguma dúvida?" (FAQ + Botão "Me manda mensagem no WhatsApp") */}
        <FaqSection onScrollToPlans={scrollToPlans} />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* MODAL POP-UP OBRIGATÓRIO (ao clicar no Plano Básico: Plano Completo por R$19,90) */}
      <BasicPlanPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onAcceptUpgrade={handleAcceptUpgrade}
        onContinueBasic={handleContinueBasic}
      />

      {/* Floating Action Button */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5 items-end">
        {/* Floating WhatsApp Help */}
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Finan%C3%A7as%20para%20Casais"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] hover:bg-[#20BE5B] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>
      </div>
    </div>
  );
}
