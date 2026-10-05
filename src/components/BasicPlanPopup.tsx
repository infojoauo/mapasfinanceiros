import React from 'react';
import { X, Sparkles, Check, Gift } from 'lucide-react';

interface BasicPlanPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpgrade: () => void;
  onContinueBasic: () => void;
}

export const BasicPlanPopup: React.FC<BasicPlanPopupProps> = ({
  isOpen,
  onClose,
  onAcceptUpgrade,
  onContinueBasic,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl sm:rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl border-2 border-[#D45B7A] relative overflow-y-auto max-h-[94vh] text-center animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#9E828C] hover:text-[#2D161F] p-1 rounded-full hover:bg-[#FAF0F3] transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Special Offer Ribbon */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE8ED] border border-[#F5C7D3] text-[#A63152] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D45B7A]" />
          <span>OFERTA ÚNICA DE UPGRADE</span>
        </div>

        {/* Modal Main Headline */}
        <h3 className="text-lg sm:text-xl font-bold text-[#2A161E] font-serif mb-1 leading-snug">
          Espere! Você pode levar o KIT COMPLETO <br />
          <span className="text-[#C24168] font-sans font-extrabold text-sm sm:text-base">
            por apenas R$ 19,90 à vista
          </span>
        </h3>

        <p className="text-xs sm:text-[13px] text-[#634953] mb-4 leading-relaxed max-w-sm mx-auto">
          Por uma diferença de apenas <strong>R$ 9,90</strong>, você desbloqueia o <strong>Protocolo Pele Jovem</strong> com todos os <strong>6 Bônus Exclusivos</strong> de autocuidado!
        </p>

        {/* Benefit Summary Box */}
        <div className="bg-[#FAF5F7] border border-[#F0DCE2] rounded-2xl p-3.5 text-left space-y-2 mb-4 text-xs text-[#2F1A23]">
          <div className="flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-[#4E7D65] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</span>
            <span className="leading-tight">Área de membros completa com a Jornada dos 21 Dias</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-[#4E7D65] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</span>
            <span className="leading-tight font-medium text-[#8E2848]">+ Todos os 6 Bônus (Planner, Checklists, Áreas Críticas, Guia de Erros, Calendário e Rotinas Extras)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-[#4E7D65] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</span>
            <span className="leading-tight">Acesso vitalício no celular e suporte</span>
          </div>
        </div>

        {/* Big Upgrade Button - R$19,90 Zuptos Checkout */}
        <a
          href="https://app.zuptos.com.br/checkout/f1b3420a1d383e74"
          onClick={(e) => {
            if (onAcceptUpgrade) onAcceptUpgrade();
          }}
          className="w-full bg-gradient-to-r from-[#C24168] via-[#D64E76] to-[#C24168] hover:from-[#B1355A] hover:to-[#B1355A] active:scale-[0.99] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wide py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-t border-white/30 mb-2.5 flex items-center justify-center gap-1.5 text-center"
        >
          <span>PEGAR O KIT COMPLETO POR APENAS R$ 19,90 →</span>
        </a>

        {/* Secondary link to continue with basic - R$10,00 Zuptos Checkout */}
        <a
          href="https://app.zuptos.com.br/checkout/a1a5a3427164bc4c"
          onClick={(e) => {
            if (onContinueBasic) onContinueBasic();
          }}
          className="text-xs text-[#8C6D77] hover:text-[#2D161F] underline decoration-[#8C6D77]/40 hover:decoration-[#2D161F] py-1 cursor-pointer transition-colors block mx-auto text-center font-medium"
        >
          Continuar apenas com o Plano Básico por R$ 10,00 (sem bônus)
        </a>
      </div>
    </div>
  );
};
