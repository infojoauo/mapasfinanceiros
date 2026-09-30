import React from 'react';
import { Check, Gift, BookOpen, Calculator, Compass, FileCheck } from 'lucide-react';

export const BonusesSection: React.FC = () => {
  const bonuses = [
    {
      number: '01',
      badge: 'BÔNUS 01',
      icon: '📊',
      title: 'Raio-X da Vida Financeira do Casal',
      originalPrice: 'de R$47 por GRÁTIS',
      description: 'Diagnóstico preenchível para vocês descobrirem exatamente onde está o dinheiro do casal: organizado, construindo segurança ou pronto para avançar.',
      highlight: 'Incluso no Plano Completo',
      imageUrl: 'https://i.imgur.com/Lnv2mUR.png',
    },
    {
      number: '02',
      badge: 'BÔNUS 02',
      icon: '📑',
      title: 'Organizador Financeiro Casal 35-55',
      originalPrice: 'de R$37 por GRÁTIS',
      description: 'Ferramenta mensal (digital + imprimível) para vocês organizarem entradas, divisão de contas, cartões e o quanto conseguem poupar a dois. Entrou → saiu → sobrou → guardou.',
      highlight: 'Incluso no Plano Completo',
      imageUrl: 'https://i.imgur.com/lDca5L2.png',
    },
    {
      number: '03',
      badge: 'BÔNUS 03',
      icon: '🧭',
      title: 'Bússola dos Investimentos em Família',
      originalPrice: 'de R$37 por GRÁTIS',
      description: 'Ferramenta de comparação para o casal entender risco, rentabilidade e liquidez antes de decidirem juntos onde colocar as economias da família.',
      highlight: 'Incluso no Plano Completo',
      imageUrl: 'https://i.imgur.com/a2jVi9f.png',
    },
    {
      number: '04',
      badge: 'BÔNUS 04',
      icon: '🧮',
      title: 'Calculadora do Futuro dos Filhos & Casal',
      originalPrice: 'de R$27 por GRÁTIS',
      description: 'Simule cenários e descubra o que o casal consegue construir começando agora para a faculdade dos filhos e aposentadoria — em 5, 10, 15 ou 20 anos.',
      highlight: 'Incluso no Plano Completo',
      imageUrl: 'https://i.imgur.com/LeK59sT.png',
    },
    {
      number: '05',
      badge: 'BÔNUS 05',
      icon: '📋',
      title: 'Checklist Anti-Briga: Acordo Financeiro de Convivência',
      originalPrice: 'de R$29 por GRÁTIS',
      description: 'Mapas visuais extras de planejamento de casal + Checklist prático de divisão de contas e limites de gastos no cartão para blindar a harmonia do lar.',
      highlight: 'Incluso no Plano Completo',
      imageUrl: 'https://i.imgur.com/riH01cm.png',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#E8E4DA]">
      <div className="max-w-3xl mx-auto">
        {/* Kit Overview Card */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14261E] font-serif mb-4">
            Tudo que você vai receber
          </h2>

          {/* Kit mockup / cover image without background boxes */}
          <div className="max-w-xl mx-auto mb-10 flex flex-col items-center">
            <div className="w-full flex items-center justify-center mb-6">
              <img 
                src="https://i.imgur.com/uL8cEEL.png" 
                alt="Kit Finanças para Casais - 50 Mapas Visuais + Plano de Ação Completo"
                className="w-full max-w-[480px] h-auto object-contain drop-shadow-xl"
                loading="eager"
              />
            </div>

            {/* Checklist of core package */}
            <div className="w-full space-y-2.5 text-left text-xs sm:text-sm text-[#20372B]">
              <div className="flex items-center gap-2.5 p-3 bg-white/90 rounded-xl border border-[#E3DDD1] shadow-xs">
                <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                <span><strong>50 mapas visuais</strong> divididos em 5 etapas (organização, dívidas, reserva, investimentos, futuro)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-white/90 rounded-xl border border-[#E3DDD1] shadow-xs">
                <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                <span><strong>Material de aprendizado E de consulta</strong> — volte sempre que o casal precisar</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-white/90 rounded-xl border border-[#E3DDD1] shadow-xs">
                <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                <span><strong>Acesso vitalício</strong>, no seu tempo</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-white/90 rounded-xl border border-[#E3DDD1] shadow-xs">
                <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                <span><strong>Linguagem simples</strong>, sem enrolação</span>
              </div>
            </div>
          </div>

          {/* Bonus callout banner */}
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#FFF7E6] border border-[#F5D896] text-[#8C6010] text-xs sm:text-sm font-extrabold uppercase tracking-wide shadow-xs text-center leading-snug">
            <span>+ 5 BÔNUS EXCLUSIVOS INCLUSOS NO PLANO COMPLETO</span>
          </div>
          <p className="text-xs sm:text-sm text-[#5B7366] mt-2">
            O <strong>Plano Completo</strong> inclui todos os 5 bônus abaixo sem nenhum custo adicional.
          </p>
        </div>

        {/* 5 Bonus Cards matching original visual hierarchy */}
        <div className="space-y-6">
          {bonuses.map((b) => (
            <div
              key={b.number}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#E3DDD1] hover:shadow-md transition-shadow"
            >
              {/* Bonus image without box or artificial background */}
              <div className="w-full flex items-center justify-center py-2 sm:py-3 mb-4">
                <img
                  src={b.imageUrl}
                  alt={b.title}
                  className="w-full max-w-[440px] max-h-[260px] sm:max-h-[300px] h-auto object-contain drop-shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Bonus details */}
              <div className="text-center">
                <div className="flex flex-col items-center justify-center gap-1.5 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#14291F] text-center leading-snug">
                    <span className="mr-1.5 text-lg sm:text-xl inline-block align-middle">{b.icon}</span>
                    <span className="align-middle">{b.title}</span>
                  </h3>
                  <span className="text-xs font-bold text-[#1B4332] bg-[#E5EFE8] px-2.5 py-0.5 rounded-full inline-block">
                    {b.originalPrice}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#4E6659] leading-relaxed max-w-xl mx-auto">
                  {b.description}
                </p>

                <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-[#A27218] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A83B]" />
                  <span>{b.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
