import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'O material é físico ou digital?',
      a: 'É um material digital em formato PDF de alta resolução. Você recebe o arquivo para baixar e imprimir.',
    },
    {
      q: 'Para quais séries serve?',
      a: 'Serve para alunos do 6º ao 9º ano do Ensino Fundamental.',
    },
    {
      q: 'As atividades já vêm prontas?',
      a: 'Sim. As páginas já estão prontas para imprimir e aplicar imediatamente.',
    },
    {
      q: 'Tem cabeçalho nas atividades?',
      a: 'Sim. Todas as atividades possuem espaço para escola, aluno, turma, série, data e professor.',
    },
    {
      q: 'Posso usar em mais de uma turma?',
      a: 'Sim. Você pode imprimir e usar com todas as suas turmas sempre que precisar.',
    },
    {
      q: 'Serve para reforço escolar?',
      a: 'Sim. O material é ótimo para aula regular, reforço, revisão, recuperação, tarefa de casa e acompanhamento pedagógico.',
    },
    {
      q: 'Tem gabarito?',
      a: 'No plano completo, sim! Você recebe o gabarito completo para facilitar e agilizar a correção.',
    },
    {
      q: 'O acesso é imediato?',
      a: 'Sim. Após a confirmação do pagamento, você recebe os dados de acesso diretamente no seu e-mail.',
    },
    {
      q: 'Posso imprimir quantas vezes quiser?',
      a: 'Sim. O acesso ao material é vitalício, permitindo reimprimir quantas vezes precisar ao longo dos anos letivos.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 bg-[#f3faf6] text-center border-t border-[#e4ede8]">
      <div className="max-w-[720px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2417] tracking-tight mb-8">
          Perguntas Frequentes
        </h2>

        {/* FAQ Accordion List */}
        <div className="space-y-3 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[12px] border border-[#e4ede8] overflow-hidden shadow-[0_2px_8px_rgba(15,118,110,0.05)] transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4.5 sm:p-5 flex items-center justify-between gap-4 text-left font-black text-sm sm:text-base text-[#0f2417] hover:text-[#16a34a] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 text-[#16a34a]">
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4.5 pb-5 pt-1 text-sm sm:text-[15px] text-[#4b5d54] leading-relaxed border-t border-[#e4ede8] font-normal">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
