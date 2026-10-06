import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Gift,
  ArrowRight,
  Lock,
} from 'lucide-react';
import {
  PRODUCT_IMAGE,
  GUARANTEE_IMAGE,
  GUARANTEE_DAYS,
  CHECKOUT_BASICO_URL,
  CHECKOUT_COMPLETO_URL,
  BASIC_PLAN,
  COMPLETE_PLAN,
  BONUSES,
  FAQS,
  FOOTER_LINKS,
  BRAND_NAME,
  buildCheckoutUrl,
} from '../../data/quizConfig';
import { ConfigImage } from '../common/ConfigImage';
import { BasicPlanUpgradeModal } from './BasicPlanUpgradeModal';

export const OfferStep: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleCompletePlanClick = () => {
    const finalUrl = buildCheckoutUrl(CHECKOUT_COMPLETO_URL);
    if (finalUrl && finalUrl !== '#') {
      window.location.href = finalUrl;
    } else {
      console.log('Checkout Completo URL configurável em src/data/quizConfig.ts (CHECKOUT_COMPLETO_URL)');
    }
  };

  const handleBasicPlanClick = () => {
    // IMPORTANTE: NÃO envia diretamente para o checkout.
    // Abre primeiro o popup/modal de upgrade para o plano completo por R$ 19.
    setIsUpgradeModalOpen(true);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
          <span>PLANO PERSONALIZADO PRONTO</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight mb-2">
          Seu plano de 21 dias está pronto.
        </h1>
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
          Escolha a versão que melhor combina com o que você quer alcançar:
        </p>
      </div>

      {/* Main Product Image Mockup */}
      <div className="w-full mb-8">
        <ConfigImage
          src={PRODUCT_IMAGE}
          alt="Produto Método 21 Dias"
          placeholderKey="PRODUCT_IMAGE"
          aspect="aspect-[16/10]"
          subtext="Mockup visual do material digital no celular e guias"
        />
      </div>

      {/* Comparison & Plans Section */}
      <div className="space-y-6 mb-12">
        {/* 1. PLANO COMPLETO — R$ 29 (DESTAQUE MÁXIMO / RECOMENDADO) */}
        <div className="bg-gradient-to-b from-[#FAFDFB] to-white rounded-3xl p-6 border-2 border-[#059669] shadow-lg relative">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#10B981] to-[#047857] text-white px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md whitespace-nowrap flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-200" />
            <span>{COMPLETE_PLAN.badge}</span>
          </div>

          <div className="text-center mt-2 mb-4">
            <h3 className="text-xl font-extrabold text-[#0F172A]">
              {COMPLETE_PLAN.name}
            </h3>
            <p className="text-xs text-[#059669] font-medium mt-0.5">
              Opção recomendada • Experiência completa com todos os bônus
            </p>
          </div>

          <div className="text-center bg-[#F0FDF4] py-3 px-4 rounded-2xl border border-[#DCFCE7] mb-5">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl sm:text-4xl font-black text-[#064E3B] tracking-tight">
                {COMPLETE_PLAN.price}
              </span>
              <span className="text-xs font-semibold text-[#047857]">à vista</span>
            </div>
            <p className="text-[11px] text-[#065F46] font-medium mt-0.5">
              Pagamento único • Acesso vitalício • Sem mensalidade
            </p>
          </div>

          <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#1E293B] mb-6">
            {COMPLETE_PLAN.features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-sm bg-[#059669] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <span className={idx === 0 ? "font-semibold text-[#065F46]" : ""}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Botão Completo: Envia DIRETAMENTE para CHECKOUT_COMPLETO_URL */}
          <button
            type="button"
            onClick={handleCompletePlanClick}
            className="w-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] hover:from-[#059669] hover:to-[#047857] active:scale-[0.99] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-white/30 text-center"
          >
            <span>{COMPLETE_PLAN.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-[11px] text-[#64748B] text-center mt-2">
            Acesso liberado imediatamente no seu e-mail
          </p>
        </div>

        {/* 2. PLANO BÁSICO — R$ 12 (OPÇÃO DE ENTRADA) */}
        <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs">
          <div className="text-center mb-3">
            <span className="inline-block text-[11px] font-bold text-[#64748B] uppercase tracking-wider bg-[#F1F5F9] px-2.5 py-0.5 rounded-full mb-1">
              {BASIC_PLAN.badge}
            </span>
            <h3 className="text-xl font-bold text-[#0F172A]">
              {BASIC_PLAN.name}
            </h3>
            <p className="text-xs text-[#64748B] mt-0.5">
              O programa base essencial para iniciar sua rotina
            </p>
          </div>

          <div className="text-center bg-[#F8FAFC] py-3 px-4 rounded-2xl border border-[#E2E8F0] mb-5">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl sm:text-4xl font-black text-[#1E293B] tracking-tight">
                {BASIC_PLAN.price}
              </span>
              <span className="text-xs font-semibold text-[#64748B]">à vista</span>
            </div>
            <p className="text-[11px] text-[#64748B] mt-0.5">
              Apenas hoje • Sem mensalidade
            </p>
          </div>

          <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#334155] mb-6">
            {BASIC_PLAN.features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-sm bg-[#10B981] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Botão Básico: Abre PRIMEIRO o modal de Upgrade (R$ 19) */}
          <button
            type="button"
            onClick={handleBasicPlanClick}
            className="w-full bg-[#F1F5F9] hover:bg-[#E2E8F0] active:scale-[0.99] text-[#0F172A] font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-4 rounded-2xl transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-[#CBD5E1] text-center"
          >
            <span>{BASIC_PLAN.cta}</span>
          </button>
          <p className="text-[11px] text-[#94A3B8] text-center mt-2">
            Versão de entrada • Conteúdo essencial
          </p>
        </div>
      </div>

      {/* BÔNUS EXCLUSIVOS (INCLUSOS NO COMPLETO) */}
      <div className="mb-12">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Gift className="w-3.5 h-3.5 text-[#D97706]" />
            <span>INCLUSOS NO PLANO COMPLETO</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
            BÔNUS EXCLUSIVOS
          </h2>
        </div>

        <div className="space-y-4">
          {BONUSES.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl p-4 border border-[#E2E8F0] shadow-xs flex flex-col justify-between"
            >
              <div className="w-full mb-3">
                <ConfigImage
                  src={b.imageUrl}
                  alt={b.title}
                  placeholderKey={b.imageKey}
                  aspect="aspect-[16/10]"
                  subtext="Mockup visual do bônus digital"
                />
              </div>

              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-full">
                  BÔNUS 0{b.id}
                </span>
                <span className="text-[10px] font-bold text-[#059669] uppercase">
                  100% Grátis
                </span>
              </div>

              <h4 className="text-sm font-bold text-[#0F172A] mb-1">
                {b.title}
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* GARANTIA */}
      <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs text-center mb-12">
        <div className="w-full max-w-[240px] mx-auto mb-4">
          <ConfigImage
            src={GUARANTEE_IMAGE}
            alt="Garantia"
            placeholderKey="GUARANTEE_IMAGE"
            aspect="aspect-[4/3]"
            subtext="Selo ou imagem de garantia de satisfação"
          />
        </div>

        <div className="w-10 h-10 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center mx-auto mb-3 text-[#059669]">
          <ShieldCheck className="w-5 h-5" />
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-2">
          Você tem uma garantia de {GUARANTEE_DAYS} dias.
        </h3>

        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-sm mx-auto mb-4">
          Acesse todo o conteúdo do método. Se por qualquer motivo você sentir que o plano não se encaixa na sua rotina ou não atende suas expectativas, basta solicitar o reembolso dentro do prazo de {GUARANTEE_DAYS} dias.
        </p>

        <div className="flex items-center justify-center gap-3 text-xs text-[#065F46] font-semibold pt-3 border-t border-[#F1F5F9]">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5" /> Compra 100% Segura
          </span>
          <span>•</span>
          <span>Risco Zero</span>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold text-[#059669] uppercase tracking-wider block mb-1">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-2.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 flex items-center justify-between gap-3 text-left hover:bg-[#F8FAF9] transition-colors cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#1E293B]">
                    {faq.q}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#475569] shrink-0 text-xs">
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-[#64748B] leading-relaxed border-t border-[#F1F5F9] bg-[#FAFAF9]">
                    <p className="mt-1">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="pt-6 pb-12 text-center text-xs text-[#94A3B8] border-t border-[#E2E8F0] space-y-3">
        <p className="font-bold text-[#64748B]">
          {BRAND_NAME} • Todos os direitos reservados.
        </p>
        <p className="text-[11px] text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
          Este produto tem finalidade exclusivamente educacional e de organização de hábitos saudáveis. Não substitui consulta médica ou diagnóstico profissional.
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-[#64748B]">
          <a href={FOOTER_LINKS.termsUrl} className="hover:underline">
            Termos de Uso
          </a>
          <span>•</span>
          <a href={FOOTER_LINKS.privacyUrl} className="hover:underline">
            Política de Privacidade
          </a>
          <span>•</span>
          <a href={FOOTER_LINKS.contactUrl} className="hover:underline">
            Contato
          </a>
        </div>
      </footer>

      {/* POPUP DE UPGRADE DO PLANO BÁSICO */}
      <BasicPlanUpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
      />
    </div>
  );
};
