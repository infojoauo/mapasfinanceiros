import React from 'react';
import { X, ArrowDown } from 'lucide-react';

interface PainPointsSectionProps {
  onScrollToPricing: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onScrollToPricing }) => {
  const painPoints = [
    {
      title: 'Alunos travados com medo de falar',
      desc: 'Você pede para a turma conversar em inglês e a sala fica em silêncio absoluto ou todo mundo volta a falar português no primeiro minuto.',
    },
    {
      title: 'Horas preciosas perdidas no planejamento',
      desc: 'Ter que passar noites e finais de semana buscando perguntas na internet, formatando cartões e criando prompts do zero para cada aula.',
    },
    {
      title: 'Aulas cansativas presas ao livro didático',
      desc: 'Textos engessados e diálogos artificiais do material tradicional que não geram conversas reais nem despertam o interesse dos alunos.',
    },
    {
      title: 'Dificuldade para engajar todo mundo',
      desc: 'Sempre os mesmos dois ou três alunos mais extrovertidos falando enquanto o restante da turma fica tímido e sem coragem de participar.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f8fafc] border-y border-slate-200/80">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            O Desafio do Professor de Inglês
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Reconhece algum destes problemas nas suas aulas de inglês?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Ensinar conversação na prática não deveria custar sua paz mental nem roubar suas horas de descanso.
          </p>
        </div>

        {/* Grid de Dores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto mb-12">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs flex items-start gap-4 transition-all hover:shadow-md hover:border-slate-300"
            >
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 text-red-500 mt-0.5">
                <X className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem de Transição para a Solução */}
        <div className="text-center max-w-xl mx-auto bg-blue-50/80 border border-blue-200/80 rounded-2xl p-6 sm:p-8">
          <p className="text-sm sm:text-base font-bold text-blue-950 mb-4 leading-snug">
            É exatamente para resolver isso que criamos o Kit Speaking: dinâmicas práticas que colocam seus alunos para falar desde os primeiros minutos de aula.
          </p>
          <button
            type="button"
            onClick={onScrollToPricing}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-blue-700 hover:text-blue-900 tracking-wide uppercase transition-colors cursor-pointer"
          >
            <span>Ver detalhes e proposta do kit</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
