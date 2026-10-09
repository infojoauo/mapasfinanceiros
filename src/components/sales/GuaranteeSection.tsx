import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import { GUARANTEE_DAYS } from '../../data/salesPageConfig';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#060e1d] text-white">
      <div className="max-w-[760px] mx-auto bg-gradient-to-b from-[#0d1a33] to-[#091326] border border-blue-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/10 blur-[80px] pointer-events-none rounded-full" />

        {/* Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-600/20 border border-blue-400/40 text-blue-400 flex items-center justify-center mx-auto mb-6 shadow-inner relative z-10">
          <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 stroke-[2]" />
        </div>

        {/* Subtitle */}
        <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-blue-400 block mb-2 relative z-10">
          RISCO ZERO PARA VOCÊ
        </span>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4 relative z-10">
          Garantia Incondicional de {GUARANTEE_DAYS} Dias
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6 max-w-xl mx-auto relative z-10">
          Você tem {GUARANTEE_DAYS} dias inteiros para acessar, baixar e testar as atividades de speaking com seus alunos. Se por qualquer motivo você sentir que o material não facilitou sua rotina pedagógica, basta nos enviar um e-mail para receber 100% do seu dinheiro de volta. Sem burocracia ou letras miúdas.
        </p>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-800/80 text-blue-200 text-xs font-bold px-4 py-2 rounded-full relative z-10">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Sua satisfação garantida ou seu dinheiro de volta</span>
        </div>
      </div>
    </section>
  );
};
