import React from 'react';
import { Eye, Droplets, Sparkles, Clock, AlertCircle, ShoppingBag } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Eye className="w-6 h-6 text-[#C44369]" />,
      title: 'Linhas que chamam mais atenção',
      description: 'Pequenas linhas ao redor dos olhos, da boca ou na testa que parecem mais visíveis no espelho ou quando você passa maquiagem.',
    },
    {
      icon: <Droplets className="w-6 h-6 text-[#C44369]" />,
      title: 'Sensação de pele ressecada e opaca',
      description: 'A pele parece perder o viço natural com facilidade, dando aquela impressão de cansaço mesmo depois de uma boa noite de sono.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#C44369]" />,
      title: 'Sensação de perda de firmeza',
      description: 'O contorno do rosto e o pescoço já não parecem tão tonificados e hidratados como eram há alguns anos atrás.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#C44369]" />,
      title: 'Dificuldade de manter consistência',
      description: 'Você até começa animada a passar algum creme, mas depois de 3 ou 4 dias a rotina corrida engole o tempo e você acaba parando.',
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-[#C44369]" />,
      title: 'Dúvida sobre a ordem dos produtos',
      description: 'O que passar primeiro? O que usar de manhã com protetor? O que passar à noite antes de dormir? Falta um roteiro claro e sem complicação.',
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-[#C44369]" />,
      title: 'Armário cheio de potes esquecidos',
      description: 'Comprar cosméticos caros por indicação na internet que acabam encostados na gaveta porque você não soube como encaixá-los no seu dia a dia.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-t border-[#F2E5E8]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FAF0F3] border border-[#F5D8E0] text-[#9E3352] text-xs font-bold uppercase tracking-wider mb-3">
            IDENTIFICAÇÃO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A161E] font-serif tracking-tight mb-4">
            Você sente que sua pele mudou com o passar dos anos?
          </h2>
          <p className="text-sm sm:text-base text-[#61454F] leading-relaxed">
            Se você tem mais de 30, 40 ou 50 anos, é muito comum começar a notar pequenas mudanças na aparência do rosto. Veja se alguma dessas situações soa familiar para você:
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-[#FCF9FA] rounded-2xl p-5 border border-[#F0E1E5] hover:border-[#E2BAC6] hover:bg-white transition-all shadow-xs hover:shadow-sm flex flex-col justify-start"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FCECEF] flex items-center justify-center mb-4 shrink-0 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-[#2C1820] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#634953] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Empathy Callout */}
        <div className="bg-[#FAF2F4] rounded-2xl p-5 sm:p-6 border border-[#ECCCD5] text-center max-w-2xl mx-auto">
          <p className="text-sm sm:text-base font-semibold text-[#3B1F28] leading-relaxed">
            "Se você se identificou com uma ou mais dessas situações, saiba que você não está sozinha — e o motivo de não conseguir os cuidados que deseja quase nunca é o que você imagina."
          </p>
        </div>
      </div>
    </section>
  );
};
