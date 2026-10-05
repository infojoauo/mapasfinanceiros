import React from 'react';
import { ArrowDown, Layers, Sparkles, CheckCheck, RefreshCw, Heart } from 'lucide-react';

export const ProtocolPresentationSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'ORGANIZAR',
      subtitle: 'Entenda os cuidados essenciais',
      desc: 'Faça um pente-fino no que você já tem em casa e aprenda a separar o que é realmente essencial do que só gera atrito e confusão na sua rotina.',
      icon: <Layers className="w-5 h-5 text-[#C44369]" />,
    },
    {
      num: '02',
      title: 'APLICAR',
      subtitle: 'Passo a passo matinal e noturno',
      desc: 'Siga um roteiro simples de menos de 5 minutos pela manhã (limpar, hidratar, proteger) e à noite (limpar e nutrir enquanto você descansa).',
      icon: <Sparkles className="w-5 h-5 text-[#C44369]" />,
    },
    {
      num: '03',
      title: 'CRIAR CONSISTÊNCIA',
      subtitle: 'O hábito que não cansa',
      desc: 'Com checklists práticos e tarefas diárias leves, o cuidado se integra naturalmente ao seu dia, sem parecer uma obrigação pesada.',
      icon: <CheckCheck className="w-5 h-5 text-[#C44369]" />,
    },
    {
      num: '04',
      title: 'MANTER A ROTINA',
      subtitle: 'Pele bem cuidada o ano todo',
      desc: 'Consolide os hábitos adquiridos para que a sensação de pele nutrida, viçosa e saudável se mantenha mesmo após o término dos 21 dias.',
      icon: <RefreshCw className="w-5 h-5 text-[#C44369]" />,
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-t border-[#F2E5E8] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FAF0F3] border border-[#F5D8E0] text-[#9E3352] text-xs font-bold uppercase tracking-wider mb-3">
            O MÉTODO DEFINITIVO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A161E] font-serif tracking-tight mb-4">
            Conheça o Protocolo Pele Jovem
          </h2>
          <p className="text-sm sm:text-base text-[#61454F] leading-relaxed">
            Uma jornada digital prática e aberta de 21 dias, desenhada para ajudar você a finalmente sair do ciclo de compras por impulso e construir uma rotina prazerosa de autocuidado facial.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 relative mb-12">
          {steps.map((st, i) => (
            <div
              key={st.num}
              className="bg-[#FCF9FA] rounded-2xl p-5 border border-[#F2E2E6] flex flex-col justify-between relative group hover:border-[#D45B7A] transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#C44369] bg-[#FCECEF] px-2.5 py-1 rounded-md">
                    ETAPA {st.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center">
                    {st.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#2D1821] font-serif tracking-tight mb-1">
                  {st.title}
                </h3>
                <h4 className="text-xs font-semibold text-[#8C3C54] mb-2.5">
                  {st.subtitle}
                </h4>
                <p className="text-xs text-[#634C54] leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-[#ECCCD5] items-center justify-center text-[#C44369] shadow-xs text-xs font-bold pointer-events-none">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Compliance / Transparency Notice */}
        <div className="bg-[#FAF5F7] rounded-2xl p-4 sm:p-5 border border-[#E8D4DC] max-w-2xl mx-auto flex items-start gap-3 text-left">
          <Heart className="w-5 h-5 text-[#C44369] shrink-0 mt-0.5" />
          <p className="text-xs text-[#6B505A] leading-relaxed">
            <strong>Transparência e Responsabilidade:</strong> Os 21 dias são a duração pedagógica da jornada de organização de hábitos diários. O Protocolo Pele Jovem não é consulta, procedimento ou tratamento médico, e sim um programa educacional de autocuidado e rotina consciente.
          </p>
        </div>
      </div>
    </section>
  );
};
