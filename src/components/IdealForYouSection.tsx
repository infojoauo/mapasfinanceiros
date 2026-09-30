import React from 'react';
import { Users, Heart } from 'lucide-react';

export const IdealForYouSection: React.FC = () => {
  const points = [
    {
      number: '01',
      text: 'Sentem que não sabem exatamente para onde o dinheiro da casa vai todo mês',
      detail: 'O dinheiro entra na conta, as contas chegam e no dia 20 o casal já não sabe onde foi parar.',
    },
    {
      number: '02',
      text: 'Têm dívidas ou parcelamentos espalhados e não sabem por onde começar a organizar juntos',
      detail: 'Cartões misturados, empréstimos ou rotativo que tiram o sono e geram atrito na relação.',
    },
    {
      number: '03',
      text: 'Têm dinheiro parado na poupança ou na conta porque têm receio de investir',
      detail: 'Querem ver o patrimônio da família render com segurança, sem cair em papo furado.',
    },
    {
      number: '04',
      text: 'Acham que já é tarde para começar a cuidar do futuro financeiro e da faculdade dos filhos',
      detail: 'Mesmo na faixa dos 35 aos 55 anos, ainda há tempo de ouro para blindar e multiplicar.',
    },
    {
      number: '05',
      text: 'Querem ganhar autonomia e paz no relacionamento sem precisar fazer um curso longo e cansativo',
      detail: 'Mapas visuais diretos ao ponto: olhou, entendeu em 5 minutos e aplicou na hora.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#F4F1EA] border-t border-[#E3DDCF]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest text-[#23583F] uppercase block mb-2">
            FEITO PARA O CASAL
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14261E] font-serif mb-4">
            Ideal para você...
          </h2>
          <div className="bg-white/80 border border-[#D5CDC0] rounded-xl p-4 shadow-xs">
            <p className="text-sm sm:text-base font-semibold text-[#1B3A2C] leading-snug">
              “Casais de 35 a 55 anos que querem organizar as finanças em dupla, reservar para os filhos e ter paz financeira.”
            </p>
          </div>
        </div>

        {/* Numbered 01 - 05 Cards matching the original styling */}
        <div className="space-y-3">
          {points.map((pt) => (
            <div
              key={pt.number}
              className="bg-white rounded-xl p-4 sm:p-5 shadow-xs border border-[#E3DDD1] flex items-start gap-4 hover:border-[#23583F] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FAF7EE] border border-[#E5DECA] flex items-center justify-center shrink-0">
                <span className="text-base font-bold font-mono text-[#C08F35]">
                  {pt.number}
                </span>
              </div>
              <div className="pt-0.5">
                <p className="text-sm sm:text-[15px] font-semibold text-[#182F24] leading-snug">
                  {pt.text}
                </p>
                <p className="text-xs text-[#5D7769] mt-1 font-normal">
                  {pt.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
