import React from 'react';
import { ShoppingCart, Mail, Download, Printer } from 'lucide-react';

interface HowItWorksSectionProps {
  onScrollToPricing: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onScrollToPricing }) => {
  const steps = [
    {
      number: '1',
      title: 'Conclua sua compra',
      desc: 'Após o pagamento, seu acesso é liberado automaticamente.',
      icon: <ShoppingCart className="w-7 h-7 text-[#15803d]" />,
    },
    {
      number: '2',
      title: 'Receba os dados de acesso',
      desc: 'Você recebe o material no seu e-mail ou área de membros.',
      icon: <Mail className="w-7 h-7 text-[#15803d]" />,
    },
    {
      number: '3',
      title: 'Baixe os arquivos',
      desc: 'Todos os materiais ficam organizados para facilitar o uso.',
      icon: <Download className="w-7 h-7 text-[#15803d]" />,
    },
    {
      number: '4',
      title: 'Imprima e aplique',
      desc: 'Imprima as páginas e leve as atividades para seus alunos.',
      icon: <Printer className="w-7 h-7 text-[#15803d]" />,
    },
  ];

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 bg-white text-center border-t border-[#e4ede8]">
      <div className="max-w-[1080px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2417] tracking-tight mb-8 sm:mb-10">
          Como é o acesso
        </h2>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-[900px] mx-auto text-center">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center justify-start text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#dcfce7] flex items-center justify-center mb-3 text-[#15803d] shadow-2xs">
                {step.icon}
              </div>
              <div className="w-9 h-9 rounded-full bg-[#16a34a] text-white font-black flex items-center justify-center mb-3 text-sm shadow-xs">
                {step.number}
              </div>
              <h3 className="text-base font-black text-[#0f2417] mb-1 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-[#4b5d54] leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="max-w-[520px] mx-auto">
          <button
            type="button"
            onClick={onScrollToPricing}
            className="w-full bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.99] text-white font-black text-base sm:text-[19px] uppercase tracking-wider py-4 sm:py-4.5 px-8 rounded-full shadow-[0_8px_20px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer block text-center"
          >
            QUERO MEU ACESSO AGORA
          </button>
        </div>
      </div>
    </section>
  );
};
