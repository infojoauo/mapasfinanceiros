import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, ShieldCheck, Clock } from 'lucide-react';

interface FaqSectionProps {
  onScrollToPlans: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onScrollToPlans }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const faqs = [
    {
      question: 'Preciso entender de finanças para usar?',
      answer:
        'Não! Os mapas visuais foram desenhados especificamente para quem não entende e não tem paciência com termos complicados de economia. Vocês olham os esquemas visuais e em poucos minutos já sabem o que fazer.',
    },
    {
      question: 'É um curso em vídeo longo?',
      answer:
        'Não! O foco é consulta prática e direta ao ponto. Não são horas de aulas cansativas em vídeo. São 50 mapas visuais objetivos que você pode consultar no celular, no computador ou até imprimir para preencher a dois.',
    },
    {
      question: 'Funciona no celular e no computador?',
      answer:
        'Sim! O material está em formato 100% digital otimizado em alta resolução (PDF e web interativo). Vocês podem abrir no WhatsApp, no leitor do smartphone, tablet ou tela do computador.',
    },
    {
      question: 'Como eu e meu parceiro(a) recebemos o material?',
      answer:
        'O envio é imediato e automático. Assim que a sua compra for confirmada, o link de acesso direto chega no seu e-mail e também no seu WhatsApp cadastrado.',
    },
    {
      question: 'Tem prazo de validade para acessar?',
      answer:
        'Não! O acesso é vitalício. Uma vez adquirido, o material é de vocês para sempre. Podem baixar e consultar sempre que forem planejar o mês, os investimentos ou o futuro dos filhos.',
    },
    {
      question: 'Os bônus são realmente grátis?',
      answer:
        'Sim! No Plano Completo de R$ 29,90 todos os 5 bônus extras (incluindo o Raio-X, Organizador Financeiro, Bússola e Checklist Anti-Briga) saem com 100% de desconto.',
    },
    {
      question: 'E se o meu marido/esposa não quiser participar no começo?',
      answer:
        'A beleza dos mapas é que eles são tão fáceis e visuais que desarmam qualquer resistência. Você pode começar aplicando os mapas de organização pessoal e da casa. Quando o outro parceiro vê os resultados e a tranquilidade, o engajamento é natural.',
    },
    {
      question: 'Como funciona a garantia de 7 dias?',
      answer:
        'Se por qualquer razão vocês sentirem que o produto não atendeu às suas expectativas, basta nos enviar uma mensagem e nós devolveremos 100% do seu dinheiro, sem letras miúdas.',
    },
    {
      question: 'O pagamento é seguro?',
      answer:
        'Sim, 100% seguro! Seus dados são processados com certificação bancária e criptografia de 256 bits via PIX imediato ou cartão de crédito.',
    },
  ];

  // Helper for WhatsApp click
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de tirar uma dúvida sobre o kit Finanças para Casais.'
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const today = new Date();
  const dateFormatted = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#E8E3D8]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest text-[#21573D] uppercase block mb-2">
            PERGUNTAS FREQUENTES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14261E] font-serif">
            Ficou com alguma dúvida?
          </h2>
          <p className="text-xs sm:text-sm text-[#5D7668] mt-1.5">
            Clique na pergunta para ver a resposta detalhada
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E3DDD1] shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-4.5 flex items-center justify-between gap-3 text-left hover:bg-[#FAF9F5] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#183124]">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#F3F0E6] flex items-center justify-center text-[#4A3E2A] shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-[#4E6659] leading-relaxed border-t border-[#F2EEE4] bg-[#FCFBF8]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Direct Help Button as required by instructions */}
        <div className="bg-[#EBF7F0] border border-[#BCE4CD] rounded-2xl p-6 text-center mb-12 shadow-xs">
          <p className="text-sm font-semibold text-[#16492F] mb-1">
            Prefere tirar alguma dúvida diretamente com nossa equipe?
          </p>
          <p className="text-xs text-[#457259] mb-4">
            Estamos online no WhatsApp para te ajudar a escolher a melhor opção para sua família.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BE5B] active:scale-[0.99] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Me manda mensagem no WhatsApp</span>
          </button>
        </div>

        {/* Final CTA Bar matching original */}
        <div className="text-center pt-2">
          <p className="text-xs font-semibold text-[#668072] mb-3 flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#E5A83B]" />
            Oferta válida até hoje, <strong className="text-[#132B20]">{dateFormatted}</strong> às 23:59
          </p>

          <button
            onClick={onScrollToPlans}
            className="w-full max-w-md mx-auto bg-[#E5A83B] hover:bg-[#D4982B] active:scale-[0.99] text-[#15231B] font-bold text-base sm:text-lg uppercase tracking-wide py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer border-t border-[#FEE199]"
          >
            <span>QUERO ME ORGANIZAR AGORA</span>
          </button>
        </div>
      </div>
    </section>
  );
};
