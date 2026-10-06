import React from 'react';
import { GUARANTEE_SEAL_IMAGE } from '../../data/salesPageConfig';
import { ImageSlot } from '../common/ImageSlot';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 bg-[#f3faf6] text-center border-t border-[#e4ede8]">
      <div className="max-w-[720px] mx-auto">
        {/* Seal Slot / Badge */}
        <div className="w-24 h-24 mx-auto mb-4">
          {GUARANTEE_SEAL_IMAGE ? (
            <ImageSlot
              src={GUARANTEE_SEAL_IMAGE}
              alt="Garantia de 15 dias"
              label="[SELO DE GARANTIA]"
              aspect="aspect-[1/1]"
              rounded="rounded-full"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-1 shadow-md mx-auto flex items-center justify-center text-white">
              <div className="w-full h-full rounded-full border-2 border-dashed border-amber-200 flex flex-col items-center justify-center bg-amber-600 p-2">
                <span className="text-[9px] font-black uppercase tracking-widest text-amber-100">
                  GARANTIA
                </span>
                <span className="text-3xl font-black text-white leading-none my-0.5">15</span>
                <span className="text-[8px] font-bold uppercase text-amber-200">DIAS</span>
              </div>
            </div>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2417] tracking-tight mb-3">
          Você tem garantia de 15 dias
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#4b5d54] leading-relaxed mb-6 font-normal">
          Aproveite 15 dias para testar o material na prática com seus alunos. Se você achar que as atividades não ajudaram no seu dia a dia, você pode pedir o reembolso de 100% do valor pago.
        </p>

        {/* Checks List */}
        <div className="max-w-[520px] mx-auto space-y-2 mb-6 text-left">
          <div className="flex items-start gap-3 text-sm sm:text-base text-[#0f2417] font-bold">
            <span className="w-6 h-6 rounded-full bg-[#dcfce7] text-[#15803d] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
              ✔
            </span>
            <span>Se o material não fizer sentido para sua rotina</span>
          </div>
          <div className="flex items-start gap-3 text-sm sm:text-base text-[#0f2417] font-bold">
            <span className="w-6 h-6 rounded-full bg-[#dcfce7] text-[#15803d] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
              ✔
            </span>
            <span>Se as atividades não atenderem sua necessidade</span>
          </div>
          <div className="flex items-start gap-3 text-sm sm:text-base text-[#0f2417] font-bold">
            <span className="w-6 h-6 rounded-full bg-[#dcfce7] text-[#15803d] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
              ✔
            </span>
            <span>Ou se simplesmente não quiser continuar</span>
          </div>
        </div>

        {/* Reassurance text */}
        <p className="text-sm sm:text-[15px] text-[#0f2417] bg-white p-4.5 rounded-[16px] border border-[#e4ede8] font-bold leading-relaxed max-w-xl mx-auto shadow-2xs mt-4">
          👉 Você solicita o reembolso dentro do prazo, sem burocracia. Ou recebe um material pronto e útil, ou recebe seu dinheiro de volta.
        </p>
      </div>
    </section>
  );
};
