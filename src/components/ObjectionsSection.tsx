import React from 'react';
import { Clock, ShoppingCart, Compass, CalendarCheck, Sparkles } from 'lucide-react';

export const ObjectionsSection: React.FC = () => {
  const objections = [
    {
      icon: <Clock className="w-5 h-5 text-[#C44369]" />,
      question: '“Eu quase não tenho tempo livre no meu dia a dia.”',
      answer:
        'Essa é a melhor parte: o Protocolo Pele Jovem foi pensado para mulheres reais. As rotinas da manhã e da noite levam menos de 5 minutos cada. São passos rápidos que se encaixam naturalmente enquanto você escova os dentes ou lava o rosto.',
    },
    {
      icon: <ShoppingCart className="w-5 h-5 text-[#C44369]" />,
      question: '“Eu já comprei muitos produtos e nenhum fez milagre.”',
      answer:
        'Nenhum produto sozinho faz milagre se for usado fora de ordem, de forma esporádica ou incompatível. Nosso foco não é te vender mais cosméticos, e sim ensinar você a extrair o melhor daquilo que você já tem em casa com constância e técnica.',
    },
    {
      icon: <Compass className="w-5 h-5 text-[#C44369]" />,
      question: '“Não entendo nada de pele ou cuidados e não sei por onde começar.”',
      answer:
        'Você não precisa entender nada técnico. A jornada é 100% mastigada, acolhedora e direta: você abre o Dia 1 e simplesmente segue o que está orientado, sem termos difíceis.',
    },
    {
      icon: <CalendarCheck className="w-5 h-5 text-[#C44369]" />,
      question: '“Preciso cumprir os 21 dias rigorosamente seguidos sem falhar?”',
      answer:
        'Não! Se você teve um dia corrido ou precisou pausar no fim de semana, você não perde o acesso nem precisa recomeçar do zero. O acesso é seu e você avança conforme sua rotina permitir.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#C44369]" />,
      question: '“Preciso comprar produtos importados ou caros para participar?”',
      answer:
        'Absolutamente não. No Dia 2 você vai aprender a fazer um pente-fino com os cremes e sabonetes que já estão no seu banheiro. Não exigimos nenhuma marca específica.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#FAF6F7] border-t border-[#F2E5E8]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FCE8ED] border border-[#F5C7D3] text-[#A63152] text-xs font-bold uppercase tracking-wider mb-3">
            TRANSPARÊNCIA TOTAL
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2A161E] font-serif tracking-tight mb-3">
            Alguma dessas dúvidas passou pela sua cabeça?
          </h2>
          <p className="text-xs sm:text-sm text-[#61454F]">
            Veja por que o Protocolo foi feito exatamente para se adaptar à sua realidade, e não o contrário.
          </p>
        </div>

        <div className="space-y-4">
          {objections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#F0DCE2] shadow-xs hover:border-[#D45B7A] transition-all"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#FAF0F3] border border-[#F5D8E0] flex items-center justify-center shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#2E1821] mb-2 leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#634C55] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
