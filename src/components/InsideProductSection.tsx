import React from 'react';
import { BookOpen, Sun, Moon, Sparkles, CheckSquare, Layers, FileCheck } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const InsideProductSection: React.FC = () => {
  const modules = [
    {
      icon: <BookOpen className="w-5 h-5 text-[#C44369]" />,
      title: '1. Guia Principal do Protocolo',
      desc: 'A bíblia do autocuidado prático: princípios de hidratação, nutrição da barreira cutânea e como entender os sinais da sua pele sem termos médicos complicados.',
    },
    {
      icon: <Sun className="w-5 h-5 text-[#C44369]" />,
      title: '2. Roteiro Matinal de 4 Minutos',
      desc: 'Os 3 passos essenciais para acordar a pele, reter água e blindar o rosto contra agressões diárias, com sensação leve e sem oleosidade excessiva.',
    },
    {
      icon: <Moon className="w-5 h-5 text-[#C44369]" />,
      title: '3. Roteiro Noturno Reparador',
      desc: 'Como higienizar suavemente e preparar a pele para a regeneração noturna, acordando no dia seguinte com toque aveludado e viço renovado.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#C44369]" />,
      title: '4. O Mapa da Ordem de Aplicação',
      desc: 'Nunca mais erre o que vem antes ou depois: textura leve → densa, água → óleo, limpador → hidratante → proteção solar.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#C44369]" />,
      title: '5. Manual das Áreas Críticas',
      desc: 'Protocolos delicados de atenção para o contorno dos olhos (olheiras e inchaço), pescoço e colo sem repuxar a pele.',
    },
    {
      icon: <CheckSquare className="w-5 h-5 text-[#C44369]" />,
      title: '6. Caderno de Checklists dos 21 Dias',
      desc: 'Folhas práticas diárias para você ticar cada hábito concluído e sentir a satisfação de estar cuidando de você mesma.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#FAF6F7] border-t border-[#F2E5E8]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FCE8ED] border border-[#F5C7D3] text-[#A63152] text-xs font-bold uppercase tracking-wider mb-3">
            CONTEÚDO REAL E ESTRUTURADO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A161E] font-serif tracking-tight mb-4">
            Veja o que você vai encontrar por dentro
          </h2>
          <p className="text-sm sm:text-base text-[#61454F] leading-relaxed">
            Cada material foi desenvolvido com carinho, design limpo e orientações didáticas para transformar seu autocuidado em um momento relaxante e prazeroso.
          </p>
        </div>

        {/* 3 Real Visual Placeholders for Product Inside */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-12">
          <ImagePlaceholder
            label="[IMAGEM PRODUTO POR DENTRO 1]"
            subtext="Página interna do Guia Principal ou telas da plataforma"
            aspect="aspect-[4/3]"
            badge="VISÃO INTERNA 01"
          />
          <ImagePlaceholder
            label="[IMAGEM PRODUTO POR DENTRO 2]"
            subtext="Diagrama visual das Rotinas da Manhã e Noite"
            aspect="aspect-[4/3]"
            badge="VISÃO INTERNA 02"
          />
          <ImagePlaceholder
            label="[IMAGEM PRODUTO POR DENTRO 3]"
            subtext="Apostila de Checklists diários e acompanhamento"
            aspect="aspect-[4/3]"
            badge="VISÃO INTERNA 03"
          />
        </div>

        {/* Content Blocks List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {modules.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-[#EED7DE] shadow-xs flex items-start gap-3.5 hover:border-[#D45B7A] transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-[#FAF0F3] border border-[#F5D8E0] flex items-center justify-center shrink-0 mt-0.5">
                {m.icon}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#2F1821] mb-1 leading-snug">
                  {m.title}
                </h3>
                <p className="text-xs text-[#634C55] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
