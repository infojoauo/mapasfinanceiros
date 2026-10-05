import React from 'react';
import { Check, Sparkles, ShieldCheck, HeartHandshake, ArrowDown } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface HeroSectionProps {
  onScrollToPlans: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPlans }) => {
  return (
    <section className="pt-8 sm:pt-12 pb-14 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#FAF5F5] via-[#FFFDFD] to-[#FAF5F6] relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#FCE7ED]/60 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Top Category Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCE8ED] border border-[#F5C7D3] text-[#A63152] text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C44369]" />
          <span>JORNADA PRÁTICA DE 21 DIAS • AUTOCUIDADO & ROTINA</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2A171E] font-serif leading-[1.25] tracking-tight max-w-3xl mx-auto mb-5">
          Uma rotina de 21 dias para cuidar da aparência da sua pele e voltar a se sentir bem quando olhar no espelho.
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-[#553C45] max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
          O <strong>Protocolo Pele Jovem</strong> organiza os seus cuidados diários em uma jornada simples e prática — para você finalmente saber o que usar de manhã e à noite, criar consistência e conquistar a sensação de uma pele bem cuidada, hidratada e com viço renovado.
        </p>

        {/* Hero Visual Area: [IMAGEM HERO / MOCKUP DO PRODUTO] */}
        <div className="max-w-2xl mx-auto mb-10">
          <ImagePlaceholder
            label="[IMAGEM HERO / MOCKUP DO PRODUTO]"
            subtext="Mockup visual 3D do Protocolo Pele Jovem com celular, tablet e guias digitais de autocuidado"
            aspect="aspect-[16/10]"
            badge="MOCKUP PRINCIPAL"
          />
        </div>

        {/* 3 Key Benefits Box */}
        <div className="max-w-xl mx-auto bg-white/95 backdrop-blur-xs rounded-2xl p-5 sm:p-6 shadow-sm border border-[#EED7DE] mb-9 text-left space-y-3.5">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[#4E7D65] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <p className="text-sm sm:text-[15px] text-[#2F1B22] font-medium leading-snug">
              <strong>Passos rápidos e descomplicados</strong> — rotinas de menos de 5 minutos fáceis de aplicar no seu dia a dia.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[#4E7D65] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <p className="text-sm sm:text-[15px] text-[#2F1B22] font-medium leading-snug">
              <strong>Use o que você já tem em casa</strong> — sem necessidade de comprar cosméticos caros ou dezenas de produtos.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[#4E7D65] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <p className="text-sm sm:text-[15px] text-[#2F1B22] font-medium leading-snug">
              <strong>Área de membros completa no seu ritmo</strong> — comece pelo Dia 1 e acesse tudo pelo celular ou computador.
            </p>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="max-w-md mx-auto">
          <button
            onClick={onScrollToPlans}
            className="w-full bg-gradient-to-r from-[#C24168] via-[#D64E76] to-[#C24168] hover:from-[#B1355A] hover:to-[#B1355A] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg uppercase tracking-wide py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center cursor-pointer border-t border-white/30 group"
          >
            <span className="flex items-center gap-2">
              QUERO COMEÇAR MEU PROTOCOLO
              <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </span>
          </button>
          
          <div className="flex items-center justify-center gap-4 text-xs text-[#6B505A] mt-3 font-medium">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#4E7D65]" />
              Garantia de 7 dias
            </span>
            <span className="text-[#D6B5BF]">•</span>
            <span className="inline-flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-[#D64E76]" />
              Acesso digital imediato
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
