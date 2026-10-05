import React from 'react';
import { Gift, Sparkles, Check } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const BonusesSection: React.FC = () => {
  const bonuses = [
    {
      num: '01',
      badge: 'BÔNUS 01',
      title: 'Planner de Cuidados com a Pele',
      value: 'de R$ 47 por GRÁTIS',
      desc: 'Um organizador visual para você planejar seus momentos de autocuidado da semana, acompanhar o uso de produtos e registrar as sensações da sua pele.',
      placeholder: '[IMAGEM BÔNUS 1 - Planner de Cuidados]',
    },
    {
      num: '02',
      badge: 'BÔNUS 02',
      title: 'Checklist da Rotina de Pele Diária',
      value: 'de R$ 37 por GRÁTIS',
      desc: 'Folhas práticas matinais e noturnas para imprimir ou ticar no celular, garantindo que você nunca se esqueça de um passo essencial.',
      placeholder: '[IMAGEM BÔNUS 2 - Checklist da Rotina]',
    },
    {
      num: '03',
      badge: 'BÔNUS 03',
      title: 'Guia das Áreas que Mais Incomodam',
      value: 'de R$ 47 por GRÁTIS',
      desc: 'Passo a passo dedicado e ultra suave para contorno dos olhos, pescoço, colo e lábios — áreas que exigem toque delicado e hidratação focada.',
      placeholder: '[IMAGEM BÔNUS 3 - Guia das Áreas Críticas]',
    },
    {
      num: '04',
      badge: 'BÔNUS 04',
      title: 'Guia dos Maiores Erros na Rotina de Cuidados',
      value: 'de R$ 37 por GRÁTIS',
      desc: 'Descubra os 7 deslizes mais frequentes que detonam a barreira da pele (como água muito quente ou esfregar toalha) e como corrigi-los hoje mesmo.',
      placeholder: '[IMAGEM BÔNUS 4 - Guia dos Erros Comuns]',
    },
    {
      num: '05',
      badge: 'BÔNUS 05',
      title: 'Calendário de Autocuidado & Hábitos',
      value: 'de R$ 29 por GRÁTIS',
      desc: 'Um mapa mensal de pequenos hábitos que potencializam o viço: ingestão de água, trocas de fronha de travesseiro, sono reparador e pausas antiestresse.',
      placeholder: '[IMAGEM BÔNUS 5 - Calendário de Autocuidado]',
    },
    {
      num: '06',
      badge: 'BÔNUS 06',
      title: 'Kit de Rotinas Extras: Pré-Make & Spa de Domingo',
      value: 'de R$ 47 por GRÁTIS',
      desc: 'Roteiros especiais para preparar a pele antes da maquiagem (sem craquelar) e um mini ritual de spa facial relaxante para fazer no fim de semana.',
      placeholder: '[IMAGEM BÔNUS 6 - Kit de Rotinas Extras]',
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#FAF6F7] border-t border-[#F2E5E8]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE8ED] border border-[#F5C7D3] text-[#A63152] text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5 text-[#C44369]" />
            <span>EXCLUSIVOS NO PLANO COMPLETO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A161E] font-serif tracking-tight mb-3">
            Leve + 6 Bônus de Presente
          </h2>
          <p className="text-xs sm:text-sm text-[#61454F] leading-relaxed">
            Ao escolher o <strong>Plano Completo</strong> hoje, você garante acesso gratuito a todos os 6 materiais complementares abaixo (mais de R$ 240 em bônus inclusos sem custo extra):
          </p>
        </div>

        {/* 6 Bonus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {bonuses.map((b) => (
            <div
              key={b.num}
              className="bg-white rounded-3xl p-5 border border-[#F0DCE2] shadow-sm hover:shadow-md hover:border-[#D45B7A] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <ImagePlaceholder
                    label={b.placeholder}
                    subtext="Mockup do material em PDF para download"
                    aspect="aspect-[4/3]"
                    badge={b.badge}
                  />
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-[#C44369] bg-[#FAF0F3] px-2.5 py-0.5 rounded-full">
                    {b.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-[#4E7D65] bg-[#EBF4EF] px-2 py-0.5 rounded-full">
                    {b.value}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#2C1720] mb-2 leading-snug">
                  {b.title}
                </h3>

                <p className="text-xs text-[#634C55] leading-relaxed">
                  {b.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F2E5E8] flex items-center gap-1.5 text-xs font-semibold text-[#4E7D65]">
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>Incluso no Plano Completo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
