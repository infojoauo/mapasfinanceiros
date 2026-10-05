import React from 'react';
import { Check, Sparkles, HeartHandshake } from 'lucide-react';

interface WhatYouGetSectionProps {
  onScrollToPlans: () => void;
}

export const WhatYouGetSection: React.FC<WhatYouGetSectionProps> = ({ onScrollToPlans }) => {
  const items = [
    {
      title: 'Área de Membros Exclusiva',
      desc: 'Um ambiente digital intuitivo e seguro, sem anúncios e com navegação simplificada pelo celular ou computador.',
    },
    {
      title: 'Jornada Aberta de 21 Dias',
      desc: 'Todos os 21 dias liberados imediatamente para você assistir, ler e praticar no seu tempo, sem nenhuma trava.',
    },
    {
      title: 'Vídeos & Orientações Práticas',
      desc: 'Instruções diretas e acolhedoras demonstrando os movimentos certos e a ordem de cada passo.',
    },
    {
      title: 'Manuais e Guias em PDF',
      desc: 'Apostilas em alta resolução diagramadas com elegância para você salvar no celular ou imprimir.',
    },
    {
      title: 'Checklists de Acompanhamento Diário',
      desc: 'Folhas de tique matinal e noturno para manter sua consistência e comemorar suas pequenas vitórias diárias.',
    },
    {
      title: 'Roteiros de Rotina da Manhã e Noite',
      desc: 'O passo a passo resumido para colocar na porta do armário do banheiro e nunca mais ter dúvidas.',
    },
    {
      title: 'Tarefas e Exercícios Leves de Autocuidado',
      desc: 'Dicas de respiração, hidratação hídrica, massagens faciais e hábitos que complementam a saúde da pele.',
    },
    {
      title: 'Material de Consulta Permanente',
      desc: 'Acesso vitalício para você revisitar sempre que mudar de estação ou quiser ajustar sua rotina.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-t border-[#F2E5E8]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FAF0F3] border border-[#F5D8E0] text-[#9E3352] text-xs font-bold uppercase tracking-wider mb-3">
            O PACOTE COMPLETO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A161E] font-serif tracking-tight mb-4">
            Uma Experiência Guiada de Autocuidado
          </h2>
          <p className="text-base text-[#5B414B] leading-relaxed">
            Você <strong>não</strong> está comprando apenas um arquivo em PDF ou um ebook esquecido no celular. Você está recebendo um método passo a passo pensado para trazer clareza, leveza e resultados visíveis no seu dia a dia.
          </p>
        </div>

        {/* Benefits Checklist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="bg-[#FCF9FA] rounded-2xl p-5 border border-[#F2E0E5] flex items-start gap-3.5 shadow-xs hover:border-[#D45B7A] transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-[#4E7D65] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#2A151E] mb-1">
                  {it.title}
                </h3>
                <p className="text-xs text-[#634A54] leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-gradient-to-r from-[#FAF0F3] via-[#FFF3F6] to-[#FAF0F3] rounded-3xl p-6 sm:p-8 border border-[#ECCCD5] text-center max-w-2xl mx-auto shadow-sm">
          <Sparkles className="w-8 h-8 text-[#C44369] mx-auto mb-3" />
          <h3 className="text-lg sm:text-xl font-bold text-[#2D161F] font-serif mb-2">
            Pronta para dar esse carinho à sua pele?
          </h3>
          <p className="text-xs sm:text-sm text-[#5B3E48] mb-5 max-w-md mx-auto">
            Junte-se a centenas de mulheres que já organizaram suas rotinas de cuidados diários com leveza e confiança.
          </p>
          <button
            onClick={onScrollToPlans}
            className="bg-gradient-to-r from-[#C24168] to-[#D64E76] hover:from-[#B1355A] hover:to-[#B1355A] text-white font-extrabold text-sm sm:text-base uppercase tracking-wide py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            QUERO VER OS PLANOS E COMEÇAR
          </button>
        </div>
      </div>
    </section>
  );
};
