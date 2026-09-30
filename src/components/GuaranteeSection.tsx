import React from 'react';
import { ShieldCheck, Lock, Award } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 bg-[#F8F6F0]">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-[#E3DDD1] text-center">
          {/* Guarantee Icon */}
          <div className="w-14 h-14 rounded-full bg-[#FAF5EB] border border-[#F0DFB8] flex items-center justify-center mx-auto mb-4 text-[#BF8B2B]">
            <ShieldCheck className="w-8 h-8 text-[#C48F29]" />
          </div>

          <h3 className="text-[16px] sm:text-xl md:text-2xl font-bold text-[#14291F] font-serif mb-1.5 whitespace-nowrap tracking-tight sm:tracking-normal">
            Garantia Incondicional de 7 Dias
          </h3>

          <p className="text-[11px] sm:text-xs md:text-sm font-bold text-[#8C6010] uppercase tracking-wider mb-3 whitespace-nowrap">
            Risco zero para o casal, sem burocracia
          </p>

          <p className="text-xs sm:text-sm text-[#4E6659] leading-relaxed max-w-md mx-auto">
            Acessem todo o material agora. Se em até 7 dias vocês acharem que os 50 mapas visuais e o plano de ação não trouxeram clareza, organização e paz nas finanças do casal, basta nos enviar um único e-mail ou mensagem no WhatsApp.
          </p>

          <p className="text-xs font-bold text-[#183929] mt-3">
            Devolvemos 100% do seu dinheiro na mesma hora. Simples assim.
          </p>

          <div className="mt-5 pt-4 border-t border-[#F2EEE4] flex items-center justify-center gap-4 text-xs text-[#718A7D]">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#227B4E]" /> Pagamento 100% Seguro
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-[#227B4E]" /> Satisfação Garantida
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
