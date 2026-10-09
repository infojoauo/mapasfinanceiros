import React from 'react';
import { Clock, MessageSquare, Compass, Smile, ArrowDown } from 'lucide-react';

interface BenefitsSectionProps {
  onScrollToPricing: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onScrollToPricing }) => {
  const benefits = [
    {
      icon: Clock,
      title: 'Economize horas de preparação',
      desc: 'Diga adeus ao tempo gasto procurando perguntas aleatórias no Google. Tudo pronto, organizado e diagramado com qualidade visual.',
    },
    {
      icon: MessageSquare,
      title: 'Estímulo genuíno à conversação',
      desc: 'Tópicos atuais e instigantes que geram conexão imediata com os alunos, fazendo-os esquecer a timidez e participar com naturalidade.',
    },
    {
      icon: Compass,
      title: 'Variedade pedagógica nas aulas',
      desc: 'Chega de aulas monótonas centradas apenas em gramática teórica. Traga dinâmicas interativas que tornam o aprendizado dinâmico.',
    },
    {
      icon: Smile,
      title: 'Mais tranquilidade para você lecionar',
      desc: 'Vá para a aula sabendo que você tem na manga um recurso testado e pronto para render discussões produtivas e engajadas.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-slate-200/80">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            Vantagens Práticas
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Por que esse kit faz a diferença no seu dia a dia
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Benefícios pensados para aliviar a rotina do professor e acelerar a desenvoltura dos estudantes.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action button */}
        <div className="text-center">
          <button
            type="button"
            onClick={onScrollToPricing}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full shadow-md transition-all cursor-pointer"
          >
            <span>Ver oferta e garantir acesso</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
