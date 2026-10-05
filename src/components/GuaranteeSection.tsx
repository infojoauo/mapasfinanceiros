import React from 'react';
import { ShieldCheck, Lock, Award, HeartHandshake } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FAF6F7] border-t border-[#F2E5E8]">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#EED7DE] text-center">
          {/* Guarantee Icon */}
          <div className="w-16 h-16 rounded-full bg-[#FAF0F3] border border-[#F5D8E0] flex items-center justify-center mx-auto mb-4 text-[#C44369]">
            <ShieldCheck className="w-9 h-9 text-[#C44369]" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#2A161E] font-serif mb-1.5 tracking-tight">
            Garantia Incondicional de 7 Dias
          </h3>

          <p className="text-xs sm:text-sm font-bold text-[#A63152] uppercase tracking-wider mb-3">
            Risco zero para você • Teste com tranquilidade
          </p>

          <p className="text-xs sm:text-sm text-[#5E444D] leading-relaxed max-w-md mx-auto">
            Acesse o <strong>Protocolo Pele Jovem</strong> agora mesmo. Assista aos primeiros vídeos, baixe os checklists e aplique os passos do Dia 1 e Dia 2. Se em até 7 dias você achar que o método não trouxe clareza, organização e praticidade para sua rotina, basta nos enviar um e-mail.
          </p>

          <p className="text-xs sm:text-sm font-bold text-[#2F1720] mt-3">
            Devolvemos 100% do seu dinheiro, sem perguntas e sem letras miúdas.
          </p>

          <div className="mt-5 pt-4 border-t border-[#F2E5E8] flex items-center justify-center gap-4 text-xs text-[#7A5B66]">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#4E7D65]" /> Pagamento 100% Seguro
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-[#4E7D65]" /> Satisfação Garantida
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
