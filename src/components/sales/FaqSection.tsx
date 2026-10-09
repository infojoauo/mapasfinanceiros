import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../../data/salesPageConfig';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-slate-200/80">
      <div className="max-w-[760px] mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Tudo o que você precisa saber sobre o Kit Speaking antes de garantir o seu acesso.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-700 transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-500 shadow-2xs">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
