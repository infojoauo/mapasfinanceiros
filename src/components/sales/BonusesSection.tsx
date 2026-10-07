import React from 'react';
import { BONUSES } from '../../data/salesPageConfig';

export const BonusesSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 bg-[#f3faf6] text-center border-t border-[#e4ede8]">
      <div className="max-w-[1080px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2417] tracking-tight mb-2">
          E ainda tem mais: 4 bônus exclusivos
        </h2>
        <p className="text-base sm:text-lg text-[#4b5d54] mb-8 font-normal">
          Você também vai receber, sem pagar nada a mais:
        </p>

        {/* 4 Cards (90px 1fr on mobile, 120px 1fr on desktop) matching competitor */}
        <div className="space-y-4 max-w-[720px] mx-auto text-left">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white rounded-[16px] p-4 sm:p-5 border border-[#e4ede8] shadow-[0_8px_28px_rgba(15,118,110,0.10)] grid grid-cols-[90px_1fr] sm:grid-cols-[120px_1fr] items-center gap-3.5 sm:gap-[18px]"
            >
              {/* Image on the left */}
              <div className="w-full shrink-0 overflow-hidden rounded-[10px] bg-[#f8faf8] border border-slate-100 shadow-2xs">
                <img
                  src={bonus.imageUrl}
                  alt={bonus.title}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto object-cover rounded-[10px] block"
                />
              </div>

              {/* Bonus details on the right */}
              <div className="flex-1 w-full flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#fef3c7] text-[#92400e] font-extrabold text-[11px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full mb-1.5 sm:mb-2">
                    {bonus.badge}
                  </span>
                  <h3 className="text-base sm:text-[19px] font-black text-[#0f2417] leading-snug mb-1 sm:mb-1.5">
                    {bonus.title}
                  </h3>
                  <p className="text-xs sm:text-[15px] text-[#4b5d54] leading-relaxed font-normal mb-2 sm:mb-3">
                    {bonus.desc}
                  </p>
                </div>

                <div className="text-xs sm:text-[15px] pt-1">
                  <s className="text-[#9ca3af] font-bold mr-2">{bonus.originalPrice}</s>
                  <span className="text-[#15803d] font-black uppercase tracking-wider">
                    GRÁTIS
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
