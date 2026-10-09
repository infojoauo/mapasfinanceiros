import React from 'react';
import { MousePointerClick, Users2, Mic, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MousePointerClick,
      title: 'Escolha a atividade da aula',
      desc: 'Navegue pelo kit e selecione o tópico ou tipo de atividade que melhor se encaixa no objetivo e no nível da sua turma naquele dia.',
    },
    {
      number: '02',
      icon: Users2,
      title: 'Organize as duplas ou grupos',
      desc: 'Imprima os cartões ou projete na tela. Divida os alunos em duplas (pair work) ou pequenos grupos com instruções claras e rápidas.',
    },
    {
      number: '03',
      icon: Mic,
      title: 'Conduza a prática com facilidade',
      desc: 'Os alunos assumem a fala de maneira espontânea guiados pelas perguntas e prompts, enquanto você atua como facilitador e mediador.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-slate-200/80">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            Passo a Passo
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Como funciona na sua rotina de aula
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Em apenas 3 passos simples, você transforma momentos de silêncio constrangedor em conversas ricas e ativas.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-blue-200 tracking-tighter">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
