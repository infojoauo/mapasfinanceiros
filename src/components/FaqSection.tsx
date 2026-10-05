import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onScrollToPlans: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onScrollToPlans }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'O que é o Protocolo Pele Jovem?',
      a: 'É uma jornada digital prática de 21 dias desenvolvida para ajudar mulheres a organizar, descomplicar e aplicar uma rotina real e consistente de cuidados faciais. O foco é ensinar a ordem certa dos passos, criar hábitos sustentáveis e resgatar a sensação de pele viçosa, macia e bem cuidada.',
    },
    {
      q: 'Como recebo o acesso?',
      a: 'Imediatamente após a confirmação do pagamento, você recebe os dados de acesso à Área de Membros no seu e-mail cadastrado e também por WhatsApp. É rápido, automático e 100% seguro.',
    },
    {
      q: 'É apenas um ebook?',
      a: 'Não! O Protocolo é uma experiência completa dentro de uma plataforma digital exclusiva. Você encontra vídeos com explicações passo a passo, guias visuais em PDF, checklists imprimíveis de acompanhamento diário e materiais complementares.',
    },
    {
      q: 'Como funciona a jornada de 21 dias?',
      a: 'Cada dia traz uma orientação simples e rápida (menos de 5 minutos) para você aplicar diretamente no seu espelho. Começando pelo pente-fino dos seus produtos atuais, passando pela estruturação da rotina matinal e noturna, até a consolidação de hábitos duradouros.',
    },
    {
      q: 'Preciso fazer os 21 dias seguidos sem parar?',
      a: 'Não. Embora a jornada tenha sido desenhada em 21 etapas pedagógicas, você tem total autonomia para seguir no seu próprio ritmo. Se você tiver um dia corrido ou viajar no fim de semana, você continua exatamente de onde parou.',
    },
    {
      q: 'Todos os 21 dias já ficam disponíveis de imediato?',
      a: 'Sim! Não há nenhuma trava de liberação ou sistema artificial de espera. Todos os 21 dias e os bônus ficam 100% disponíveis desde o seu primeiro minuto de acesso.',
    },
    {
      q: 'Posso acessar pelo celular?',
      a: 'Com certeza. A plataforma é 100% otimizada para smartphones. Você pode abrir o celular na bancada do banheiro enquanto faz seu ritual matinal ou noturno.',
    },
    {
      q: 'Preciso comprar cosméticos específicos ou caros?',
      a: 'Não! Um dos grandes pilares do Protocolo é ensinar você a aproveitar o que já tem em casa. Você vai aprender a selecionar produtos acessíveis e entender como combiná-los sem precisar gastar fortunas na farmácia.',
    },
    {
      q: 'O Plano Completo vale a pena?',
      a: 'Sim, é a opção mais escolhida! Por uma diferença de apenas alguns reais você garante todos os 6 Bônus Exclusivos (Planner de Cuidados, Checklist Diário, Guia das Áreas Críticas, Guia dos Maiores Erros, Calendário e Rotinas Extras de Spa e Pré-Make).',
    },
    {
      q: 'Como funciona a garantia incondicional de 7 dias?',
      a: 'Se dentro de 7 dias você acessar o material e sentir que ele não atendeu suas expectativas, basta enviar um e-mail para o suporte e devolveremos 100% do valor pago, sem burocracia.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-t border-[#F2E5E8]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0F3] border border-[#F5D8E0] text-[#9E3352] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C44369]" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#2A161E] font-serif tracking-tight mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-xs sm:text-sm text-[#61454F] leading-relaxed">
            Tire todas as suas dúvidas sobre o acesso, funcionamento e formato do Protocolo Pele Jovem.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FCF9FA] rounded-2xl border border-[#F0DCE2] overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left hover:bg-[#F9EEF1] transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-xs sm:text-sm text-[#2E1821] leading-snug">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#A63152] shrink-0 border border-[#EACCD6]">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-[13px] text-[#5C424C] leading-relaxed border-t border-[#F2E5E8] bg-white">
                    <p className="mt-2">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA below FAQ */}
        <div className="text-center bg-[#FAF5F7] rounded-3xl p-6 sm:p-8 border border-[#EED7DE]">
          <h3 className="text-base sm:text-lg font-bold text-[#2B161E] mb-2 font-serif">
            Ainda tem alguma dúvida?
          </h3>
          <p className="text-xs sm:text-sm text-[#6B505A] mb-4 max-w-md mx-auto">
            Comece hoje sem nenhum risco com a nossa garantia de 7 dias e sinta o carinho de uma rotina bem cuidada.
          </p>
          <button
            onClick={onScrollToPlans}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C24168] to-[#D64E76] hover:from-[#B1355A] hover:to-[#B1355A] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wide py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>QUERO COMEÇAR AGORA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
