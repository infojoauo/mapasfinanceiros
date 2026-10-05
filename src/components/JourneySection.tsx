import React from 'react';
import { Calendar, Sun, Moon, Sparkles, Check, Heart, Shield } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const journeyHighlights = [
    {
      badge: 'DIA 01',
      title: 'O Ponto de Partida da sua Pele',
      desc: 'Faça uma autoavaliação simples para entender as necessidades reais do seu rosto hoje (ressecamento, opacidade, sensibilidade) e alinhar expectativas saudáveis.',
      icon: <Sparkles className="w-4 h-4 text-[#C44369]" />,
    },
    {
      badge: 'DIA 02',
      title: 'O Pente-Fino nos Seus Produtos',
      desc: 'Aprenda a analisar os produtos que você já tem em casa. Você vai separar o que é realmente bom do que só sobrecarrega sua pele e seu bolso.',
      icon: <Calendar className="w-4 h-4 text-[#C44369]" />,
    },
    {
      badge: 'DIA 03',
      title: 'Estruture sua Rotina da Manhã',
      desc: 'Aprenda o trio de ouro matinal: higiene gentil, hidratação equilibrada e blindagem contra radiação e poluição em menos de 4 minutos.',
      icon: <Sun className="w-4 h-4 text-[#C44369]" />,
    },
    {
      badge: 'DIA 04',
      title: 'Estruture sua Rotina da Noite',
      desc: 'Como remover impurezas do dia sem ressecar e aplicar os cuidados noturnos para acordar com a sensação de pele nutrida, calma e descansada.',
      icon: <Moon className="w-4 h-4 text-[#C44369]" />,
    },
    {
      badge: 'DIAS 05 A 10',
      title: 'Limpeza Gentil & Barreira de Hidratação',
      desc: 'Técnicas para fortalecer a barreira protetora da pele. Menos repuxamento, menos vermelhidão e mais retenção natural de umidade.',
      icon: <Shield className="w-4 h-4 text-[#C44369]" />,
    },
    {
      badge: 'DIAS 11 A 15',
      title: 'Cuidados Especiais: Olhar, Pescoço e Colo',
      desc: 'Atenção redobrada para as áreas mais delicadas que costumam denunciar o cansaço. Movimentos suaves e produtos adequados sem atrito.',
      icon: <Heart className="w-4 h-4 text-[#C44369]" />,
    },
    {
      badge: 'DIAS 16 A 20',
      title: 'Automassagem Facial & Viço Radiante',
      desc: 'Manobras simples de drenagem e relaxamento facial que aliviam a tensão dos músculos e deixam a pele com aparência viçosa e acordada.',
      icon: <Sparkles className="w-4 h-4 text-[#C44369]" />,
    },
    {
      badge: 'DIA 21',
      title: 'Consolide sua Nova Rotina de Autocuidado',
      desc: 'Como manter esses hábitos no piloto automático pelo resto do ano com leveza, sem neura e com muito prazer em se cuidar.',
      icon: <Check className="w-4 h-4 text-[#4E7D65]" />,
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#FAF6F7] border-t border-[#F2E5E8]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FCE8ED] border border-[#F5C7D3] text-[#A63152] text-xs font-bold uppercase tracking-wider mb-3">
            PASSO A PASSO GUIADO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A161E] font-serif tracking-tight mb-4">
            Como funciona a Jornada dos 21 Dias
          </h2>
          <p className="text-sm sm:text-base text-[#61454F] leading-relaxed">
            Nada de aulas cansativas ou teorias difíceis. Cada dia traz uma instrução curta, prática e acolhedora para você aplicar imediatamente no seu espelho.
          </p>
          <div className="mt-4 inline-block bg-white px-4 py-2 rounded-full border border-[#ECD2DB] text-xs sm:text-sm font-semibold text-[#8C324E] shadow-xs">
            🌸 <strong>Acesso livre e sem travas:</strong> comece pelo Dia 1 e avance no seu próprio ritmo. Todos os 21 dias já ficam liberados desde o primeiro minuto!
          </div>
        </div>

        {/* 21 Days Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {journeyHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#F0DCE2] shadow-xs hover:shadow-sm hover:border-[#D45B7A] transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF0F3] border border-[#F5D8E0] flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#C44369] tracking-wider uppercase bg-[#FDF0F3] px-2 py-0.5 rounded-sm inline-block mb-1">
                  {item.badge}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#2E1821] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#634C55] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#FAF0F3] rounded-2xl p-4 sm:p-5 border border-[#ECCCD5] text-center max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-[#5B3E48]">
            ✨ <strong>Você tem autonomia total:</strong> Pode revisitar qualquer aula, checklist ou exercício sempre que tiver dúvidas ou quiser reforçar seus cuidados.
          </p>
        </div>
      </div>
    </section>
  );
};
