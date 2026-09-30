import React from 'react';
import { Check, Play, Video } from 'lucide-react';

interface HeroSectionProps {
  onScrollToPlans: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPlans }) => {
  return (
    <section className="pt-8 pb-14 px-4 sm:px-6 bg-[#F8F6F0] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Category tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5EEE8] border border-[#C6DDD0] text-[#16422C] text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
          <span>FINANÇAS PARA CASAIS</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#15271F] font-serif leading-[1.25] tracking-tight max-w-3xl mx-auto mb-6">
          Finanças para Casais 40+ – Plano Completo com 50 Mapas Visuais
        </h1>

        {/* Video Area (Espaço em branco grande e limpo para colar o vídeo de 30 segundos) */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative aspect-video w-full rounded-2xl bg-white border-2 border-dashed border-[#CFD8D3] shadow-md flex flex-col items-center justify-center p-6 text-center group hover:border-[#1E4D38] transition-all overflow-hidden">
            {/* Clean empty placeholder as explicitly required */}
            <div className="w-16 h-16 rounded-full bg-[#F3F6F4] flex items-center justify-center text-[#2D5A45] mb-3 shadow-inner group-hover:scale-105 transition-transform">
              <Play className="w-7 h-7 ml-1 fill-[#2D5A45]" />
            </div>
            <p className="text-sm sm:text-base font-semibold text-[#1F3A2E] mb-1">
              [ Espaço Limpo Reservado para o Vídeo de 30 Segundos ]
            </p>
            <p className="text-xs text-[#526E60] max-w-md">
              Área em branco pronta para você colar o embed ou link do seu vídeo de apresentação de alta conversão.
            </p>
            <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-[#1E4D38] bg-[#E8F1EC] px-2.5 py-1 rounded-md font-medium">
              <Video className="w-3.5 h-3.5" /> Vídeo 16:9 • Limpo e Otimizado
            </div>
          </div>
        </div>

        {/* Subhead text */}
        <p className="text-base sm:text-lg text-[#32453C] max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
          Da organização do dinheiro a dois ao planejamento do futuro em família: entenda de forma simples e visual como sair das dívidas juntos, montar a reserva dos filhos, dividir as contas sem atrito e construir um futuro financeiro mais seguro — <strong className="font-semibold text-[#12281E]">mesmo que vocês não entendam nada de finanças.</strong>
        </p>

        {/* 3 Green Checkmark Benefits */}
        <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-xs rounded-xl p-4 sm:p-5 shadow-xs border border-[#E3ECE6] mb-8 text-left space-y-2.5">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-sm bg-[#227B4E] text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <p className="text-sm sm:text-[15px] text-[#1D3328] font-medium leading-snug">
              <strong>Vocês olham, entendem e já organizam</strong> — sem aula longa
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-sm bg-[#227B4E] text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <p className="text-sm sm:text-[15px] text-[#1D3328] font-medium leading-snug">
              <strong>Funciona no celular e no computador</strong>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-sm bg-[#227B4E] text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <p className="text-sm sm:text-[15px] text-[#1D3328] font-medium leading-snug">
              <strong>Use quando quiser</strong>, como um manual de consulta do casal
            </p>
          </div>
        </div>

        {/* Main Golden CTA Button */}
        <div className="max-w-md mx-auto">
          <button
            onClick={onScrollToPlans}
            className="w-full bg-[#E5A83B] hover:bg-[#D4982B] active:scale-[0.99] text-[#15231B] font-bold text-base sm:text-lg uppercase tracking-wide py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center cursor-pointer border-t border-[#FEE199] group"
          >
            <span>QUERO ORGANIZAR MINHA VIDA FINANCEIRA</span>
          </button>
          <p className="text-xs text-[#556D60] mt-2.5 text-center font-medium leading-relaxed max-w-sm mx-auto">
            <span>🛡️ Acesso imediato por e-mail e WhatsApp após a confirmação da compra</span>
          </p>
        </div>
      </div>
    </section>
  );
};
