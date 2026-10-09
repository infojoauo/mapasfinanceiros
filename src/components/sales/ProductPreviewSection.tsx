import React from 'react';
import { SPEAKING_ACTIVITIES_PREVIEW } from '../../data/salesPageConfig';
import { MessageSquare, Sparkles, BookOpen, Layers } from 'lucide-react';

export const ProductPreviewSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f8fafc] border-t border-slate-200/80">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            Prévia dos Materiais
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Veja exemplos de atividades e cartões do kit
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Atividades estruturadas com perguntas claras, prompts contextualizados e vocabulário de apoio para garantir que os alunos consigam falar com fluidez e confiança.
          </p>
        </div>

        {/* Grid de Exemplos de Cartões de Speaking */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SPEAKING_ACTIVITIES_PREVIEW.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between transition-all hover:shadow-md hover:border-blue-300"
            >
              {/* Header do Card */}
              <div className="p-5 sm:p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                    Level: {item.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                {/* Prompt em Destaque */}
                <div className="bg-slate-50 border-l-3 border-blue-500 p-3 rounded-r-lg mb-4 text-xs sm:text-sm text-slate-800 italic">
                  "{item.prompt}"
                </div>

                {/* Perguntas de Apoio */}
                <div className="space-y-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Follow-up Questions:
                  </span>
                  {item.sampleQuestions.map((q, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="text-blue-500 font-bold shrink-0">•</span>
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rodapé do Card com Tag de Dinâmica */}
              <div className="bg-slate-50/80 px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1.5 text-blue-700">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{item.tag}</span>
                </span>
                <span className="text-[11px] text-slate-600 bg-slate-200/70 px-2 py-0.5 rounded">
                  Pronto para imprimir
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Nota explicativa de personalização de imagens */}
        <div className="mt-10 text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-600">
            * Todas as atividades vêm acompanhadas de orientações pedagógicas para conduzir a prática oral em sala de aula de maneira simples e produtiva.
          </p>
        </div>
      </div>
    </section>
  );
};
