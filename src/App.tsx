import React, { useState } from 'react';
import { NoticeBar } from './components/NoticeBar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { MindsetSection } from './components/MindsetSection';
import { ProtocolPresentationSection } from './components/ProtocolPresentationSection';
import { JourneySection } from './components/JourneySection';
import { MembersAreaSection } from './components/MembersAreaSection';
import { InsideProductSection } from './components/InsideProductSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { ObjectionsSection } from './components/ObjectionsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BonusesSection } from './components/BonusesSection';
import { PlansSection } from './components/PlansSection';
import { BasicPlanPopup } from './components/BasicPlanPopup';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const scrollToPlans = () => {
    const plansElem = document.getElementById('ofertas');
    if (plansElem) {
      plansElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Triggered when user clicks "Quero o Plano Básico por R$ 10,00" -> Opens popup offer
  const handleSelectBasicPlan = () => {
    setIsPopupOpen(true);
  };

  // Triggered when user clicks "Quero o Plano Completo por R$ 29,90" -> Direct Zuptos checkout
  const handleSelectCompletePlan = () => {
    window.location.href = 'https://app.zuptos.com.br/checkout/10cbb509bde9bf13';
  };

  // From popup: user accepts upgrade offer at R$ 19,90 -> Direct Zuptos checkout
  const handleAcceptUpgrade = () => {
    setIsPopupOpen(false);
    window.location.href = 'https://app.zuptos.com.br/checkout/f1b3420a1d383e74';
  };

  // From popup: user declines and continues with basic at R$ 10,00 -> Direct Zuptos checkout
  const handleContinueBasic = () => {
    setIsPopupOpen(false);
    window.location.href = 'https://app.zuptos.com.br/checkout/a1a5a3427164bc4c';
  };

  return (
    <div className="min-h-screen bg-[#FAF7F6] text-[#2D2126] selection:bg-[#E88099]/30 selection:text-[#2A161E]">
      {/* 0. Top Launch Notice Bar */}
      <NoticeBar onScrollToPlans={scrollToPlans} />

      <main>
        {/* 1. Hero: Headline + Subhead + Bullets + CTA + Mockup Space */}
        <HeroSection onScrollToPlans={scrollToPlans} />

        {/* 2. Identificação com o Problema */}
        <ProblemSection />

        {/* 3. O Problema Não é Falta de Vontade (Quebra de Objeção) */}
        <MindsetSection />

        {/* 4. Apresentação do Protocolo (Mecanismo 4 Etapas) */}
        <ProtocolPresentationSection />

        {/* 5. Como Funciona (A Jornada dos 21 Dias) */}
        <JourneySection />

        {/* 6. Apresentação da Área de Membros */}
        <MembersAreaSection />

        {/* 7. O Produto por Dentro (3 Placeholders + Módulos) */}
        <InsideProductSection />

        {/* 8. O que a Cliente vai Receber */}
        <WhatYouGetSection onScrollToPlans={scrollToPlans} />

        {/* 9. Quebra de Objeções Direta */}
        <ObjectionsSection />

        {/* 10. Prova Social / Depoimentos em Carrossel */}
        <TestimonialsSection />

        {/* 11. 6 Bônus Exclusivos com Placeholders */}
        <BonusesSection />

        {/* 12. Ofertas: Plano Completo (R$ 29,90) e Plano Básico (R$ 10,00) */}
        <PlansSection
          onSelectBasicPlan={handleSelectBasicPlan}
          onSelectCompletePlan={handleSelectCompletePlan}
        />

        {/* 14. Seção de Garantia de 7 Dias */}
        <GuaranteeSection />

        {/* 15. FAQ Completo com 10 Dúvidas */}
        <FaqSection onScrollToPlans={scrollToPlans} />

        {/* 16. CTA Final de Conversão */}
        <FinalCtaSection onScrollToPlans={scrollToPlans} />
      </main>

      {/* Footer com Direitos e Aviso Legal */}
      <Footer />

      {/* POPUP OBRIGATÓRIO (ao clicar no Plano Básico: Kit Completo por R$ 19,90) */}
      <BasicPlanPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onAcceptUpgrade={handleAcceptUpgrade}
        onContinueBasic={handleContinueBasic}
      />

      {/* Floating Action Button (WhatsApp Suporte) */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5 items-end">
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Protocolo%20Pele%20Jovem"
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
