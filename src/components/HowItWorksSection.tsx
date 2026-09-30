import React from 'react';
import { Lock, Mail, Smartphone } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Você finaliza a compra em ambiente seguro',
      desc: 'Processamento protegido com criptografia de ponta a ponta via PIX ou cartão de crédito.',
      icon: Lock,
    },
    {
      step: '02',
      title: 'Recebe o acesso por e-mail e WhatsApp na hora',
      desc: 'Em menos de 1 minuto os dados de acesso vitalício chegam na caixa de entrada e no celular do casal.',
      icon: Mail,
    },
    {
      step: '03',
      title: 'Abre o mapa que precisa e já começa a organizar, no celular ou no computador',
      desc: 'Sem enrolação e sem instalar nada pesado: clique, visualize e coloque a vida financeira do lar em ordem.',
      icon: Smartphone,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#F4F1EA] border-t border-[#E3DDCF]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest text-[#21573D] uppercase block mb-2">
            PASSO A PASSO
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14261E] font-serif">
            Como funciona depois da compra
          </h2>
          <p className="text-xs sm:text-sm text-[#5D7668] mt-1.5">
            Acesso imediato, prático e 100% digital
          </p>
        </div>

        <div className="space-y-3.5">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="bg-white rounded-xl p-4 sm:p-5 shadow-xs border border-[#E3DDD1] flex items-start gap-4 hover:border-[#21573D] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF7EE] border border-[#E8DFC9] flex items-center justify-center shrink-0">
                  <span className="text-base font-bold font-mono text-[#C08F35]">
                    {st.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#162D22]">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C7567] mt-0.5">
                    {st.desc}
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
