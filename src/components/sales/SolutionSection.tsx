import React from 'react';
import {
  SOLUTION_MOCKUP_IMAGE,
  PRODUCT_NAME,
} from '../../data/salesPageConfig';
import { ImageSlot } from '../common/ImageSlot';
import { MessageCircle, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const pillars = [
    {
      icon: MessageCircle,
      title: 'Cartões Prontos de Conversação',
      desc: 'Perguntas engajantes e temas instigantes divididos por nível para você apenas imprimir e distribuir na sala.',
    },
    {
      icon: Users,
      title: 'Estruturado para Pair & Group Work',
      desc: 'Dinâmicas pensadas para colocar duplas e grupos conversando simultaneamente, aumentando o tempo de fala de cada aluno.',
    },
    {
      icon: Sparkles,
      title: 'Situações Reais e Debates Leves',
      desc: 'Cenários do cotidiano (viagens, tecnologia, hábitos, escolhas difíceis e role-plays) que estimulam opiniões espontâneas.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            A Solução Definitiva
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Apresentamos o {PRODUCT_NAME}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Uma coletânea prática e visual de cartões, perguntas e prompts de conversação pronta para transformar suas aulas de inglês em momentos de pura interação oral.
          </p>
        </div>

        {/* Mockup visual da solução (vazio conforme solicitado pelo usuário) */}
        <div className="max-w-3xl mx-auto mb-14">
          <ImageSlot
            src={SOLUTION_MOCKUP_IMAGE}
            alt="Apresentação do Kit Speaking"
            label="MOCKUP DE APRESENTAÇÃO DO KIT SPEAKING"
            aspect="aspect-[16/9]"
            className="shadow-lg border border-slate-200"
          />
        </div>

        {/* 3 Pilares da Solução */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Faixa de Destaque */}
        <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="text-left">
            <h4 className="text-lg sm:text-xl font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Menos planejamento. Mais prática oral.</span>
            </h4>
            <p className="text-xs sm:text-sm text-blue-200 mt-1">
              Basta selecionar os cartões do dia, imprimir (ou projetar) e conduzir a dinâmica com segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
