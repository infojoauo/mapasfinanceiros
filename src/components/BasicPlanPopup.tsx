import React from 'react';
import { X, Sparkles } from 'lucide-react';

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
        className="bg-white rounded-xl sm:rounded-2xl max-w-md w-full p-4 sm:p-5 shadow-2xl border-2 border-[#E5A83B] relative overflow-y-auto max-h-[94vh] text-center animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 text-[#8C9E94] hover:text-[#182C22] p-1 rounded-full hover:bg-[#F3EFE6] transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Special Offer Ribbon */}
        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFF4DC] border border-[#F2D184] text-[#8C6010] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3 h-3 text-[#E5A83B]" />
          <span>OFERTA ÚNICA DE UPGRADE</span>
        </div>

        {/* Modal Main Headline */}
        <h3 className="text-base sm:text-lg font-bold text-[#14291F] font-serif mb-1 leading-snug">
          Plano Completo por apenas R$19,90 <br />
          <span className="text-[#207449] font-sans font-bold text-xs sm:text-sm">(economia de R$10)</span>
        </h3>

        <p className="text-xs sm:text-[13px] text-[#4E6659] mb-3 leading-relaxed max-w-sm mx-auto">
          Clique aqui e pegue o Plano Completo com todos os <strong>50 Mapas Visuais</strong> + os <strong>5 Bônus Exclusivos</strong> para o casal pelo menor preço já praticado!
        </p>

        {/* Benefit Summary Box */}
        <div className="bg-[#FAF9F5] border border-[#E5DFD1] rounded-lg p-2.5 sm:p-3 text-left space-y-2 mb-3.5 text-[11px] sm:text-xs text-[#1F3328]">
          <div className="flex items-start gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#227B4E] text-white flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">✓</span>
            <span className="leading-tight">Todos os 50 Mapas Visuais + Plano de Ação em dupla</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#227B4E] text-white flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">✓</span>
            <span className="leading-tight">+ 5 Bônus Exclusivos (Raio-X da Vida Financeira do Casal • Organizador Financeiro Casal 35-55 • Bússola dos Investimentos em Família • Calculadora do Futuro dos Filhos & Casal • Acordo Anti-Briga)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#227B4E] text-white flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">✓</span>
            <span className="leading-tight">Acesso vitalício + suporte prioritário</span>
          </div>
        </div>

        {/* Big Required Button - R$19,90 Zuptos Checkout */}
        <a
          href="https://app.zuptos.com.br/checkout/f1b3420a1d383e74"
          onClick={(e) => {
            if (onAcceptUpgrade) onAcceptUpgrade();
          }}
          className="w-full bg-[#E5A83B] hover:bg-[#D4982B] active:scale-[0.99] text-[#132219] font-extrabold text-xs sm:text-sm uppercase tracking-wide py-3 px-4 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border-t border-[#FFF2CC] mb-2 flex items-center justify-center gap-1.5 text-center"
        >
          <span>PEGAR PLANO COMPLETO POR APENAS R$19,90 →</span>
        </a>

        {/* Secondary link to continue with basic - R$10,00 Zuptos Checkout */}
        <a
          href="https://app.zuptos.com.br/checkout/a1a5a3427164bc4c"
          onClick={(e) => {
            if (onContinueBasic) onContinueBasic();
          }}
          className="text-[11px] text-[#6F867B] hover:text-[#28493A] underline decoration-[#6F867B]/40 hover:decoration-[#28493A] py-1 cursor-pointer transition-colors block mx-auto text-center font-medium"
        >
          Continuar com o Plano Básico por R$10,00 (sem bônus)
        </a>
      </div>
    </div>
  );
};
