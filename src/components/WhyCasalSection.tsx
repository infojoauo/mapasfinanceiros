import React from 'react';
import { Heart, Shield, Users, ArrowRight } from 'lucide-react';

interface WhyCasalSectionProps {
  onScrollToPlans: () => void;
}

export const WhyCasalSection: React.FC<WhyCasalSectionProps> = ({ onScrollToPlans }) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0B1E17] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#E5A83B] uppercase block mb-3">
          BENEFÍCIOS
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white mb-8 sm:mb-10 leading-tight">
          Por que ter o seu Finanças para Casais
        </h2>

        {/* Benefits list with rounded dark green cards */}
        <div className="space-y-3.5 max-w-2xl mx-auto text-left mb-10">
          <div className="bg-[#132820]/90 border border-[#214335] rounded-xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-xs hover:border-[#306852] transition-colors">
            <Heart className="w-5 h-5 text-[#E5A83B] shrink-0 fill-[#E5A83B]/20" />
            <span className="text-sm sm:text-base text-[#E2ECE7]">
              Pare de sentir que vocês não têm controle sobre o próprio dinheiro
            </span>
          </div>

          <div className="bg-[#132820]/90 border border-[#214335] rounded-xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-xs hover:border-[#306852] transition-colors">
            <Heart className="w-5 h-5 text-[#E5A83B] shrink-0 fill-[#E5A83B]/20" />
            <span className="text-sm sm:text-base text-[#E2ECE7]">
              Entenda de uma vez por todas aquilo que sempre te confundiu em investimentos
            </span>
          </div>

          <div className="bg-[#132820]/90 border border-[#214335] rounded-xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-xs hover:border-[#306852] transition-colors">
            <Heart className="w-5 h-5 text-[#E5A83B] shrink-0 fill-[#E5A83B]/20" />
            <span className="text-sm sm:text-base text-[#E2ECE7]">
              Ganhe harmonia e autonomia para tomar suas próprias decisões financeiras
            </span>
          </div>

          <div className="bg-[#132820]/90 border border-[#214335] rounded-xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-xs hover:border-[#306852] transition-colors">
            <Heart className="w-5 h-5 text-[#E5A83B] shrink-0 fill-[#E5A83B]/20" />
            <span className="text-sm sm:text-base text-[#E2ECE7]">
              Comece a construir a segurança que você sempre sonhou para a sua família
            </span>
          </div>

          <div className="bg-[#132820]/90 border border-[#214335] rounded-xl p-4 sm:p-4.5 flex items-center gap-3.5 shadow-xs hover:border-[#306852] transition-colors">
            <Heart className="w-5 h-5 text-[#E5A83B] shrink-0 fill-[#E5A83B]/20" />
            <span className="text-sm sm:text-base text-[#E2ECE7]">
              Prepare-se para os próximos 10, 20 ou 30 anos — no seu tempo e com quem você ama
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="max-w-md mx-auto">
          <button
            onClick={onScrollToPlans}
            className="w-full bg-[#E5A83B] hover:bg-[#D4982B] active:scale-[0.99] text-[#12221A] font-bold text-base sm:text-lg uppercase tracking-wide py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center cursor-pointer border-t border-[#FEE199]"
          >
            <span>QUERO ME ORGANIZAR AGORA</span>
          </button>
        </div>
      </div>
    </section>
  );
};
