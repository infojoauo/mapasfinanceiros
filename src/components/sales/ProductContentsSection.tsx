import React from 'react';
import { CONTENTS_MOCKUP_IMAGE } from '../../data/salesPageConfig';
import { ImageSlot } from '../common/ImageSlot';

export const ProductContentsSection: React.FC = () => {
  const bullets = [
    '30 atividades para o 6º ano',
    '30 atividades para o 7º ano',
    '30 atividades para o 8º ano',
    '30 atividades para o 9º ano',
    'Formato PDF pronto para imprimir',
    'Páginas com cabeçalho completo',
    'Questões de observar, marcar, completar, relacionar e interpretar',
    'Temas de Terra, universo, matéria, água, solo e seres vivos',
    'Corpo humano, saúde, energia, clima e sustentabilidade',
    'Química, Física, genética, evolução e tecnologia',
    'Pode imprimir quantas vezes precisar para suas turmas',
  ];

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 bg-white text-center border-t border-[#e4ede8]">
      <div className="max-w-[1080px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2417] tracking-tight mb-8">
          Tudo o que você vai receber
        </h2>

        {/* Master Receive Card */}
        <div className="max-w-[820px] mx-auto bg-white border-2 border-[#dcfce7] rounded-[16px] p-6 sm:p-8 md:p-10 shadow-[0_8px_28px_rgba(15,118,110,0.10)] text-center">
          {/* Immediate Access Badge */}
          <span className="inline-block bg-[#16a34a] text-white font-extrabold text-xs sm:text-[13px] px-4 py-1.5 rounded-full mb-3.5 tracking-wide">
            ⚡ ACESSO IMEDIATO
          </span>

          <h3 className="text-xl sm:text-2xl md:text-[22px] font-black text-[#0f2417] mb-6">
            +120 Atividades Visuais de Ciências prontas para imprimir
          </h3>

          {/* Mockup Image */}
          <div className="w-full max-w-[380px] sm:max-w-[420px] mx-auto mb-6 overflow-hidden rounded-[12px] bg-[#f8faf8]">
            {CONTENTS_MOCKUP_IMAGE ? (
              <img
                src={CONTENTS_MOCKUP_IMAGE}
                alt="120 Atividades Visuais de Ciências"
                className="w-full h-auto object-contain rounded-[12px] block mx-auto transition-transform hover:scale-102 duration-300"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            ) : (
              <ImageSlot
                src={CONTENTS_MOCKUP_IMAGE}
                alt="120 Atividades Visuais de Ciências"
                label="[COLE AQUI A IMAGEM DO PACOTE: CONTENTS_MOCKUP_IMAGE]"
                aspect="aspect-[4/3]"
                rounded="rounded-[12px]"
              />
            )}
          </div>

          <p className="text-base sm:text-lg text-[#4b5d54] leading-relaxed max-w-xl mx-auto mb-7 font-normal">
            Uma coleção completa com atividades para 6º, 7º, 8º e 9º ano, organizada para facilitar sua rotina. Escolha pela série e pelo conteúdo, imprima e já pode usar.
          </p>

          {/* Checks List */}
          <div className="max-w-[560px] mx-auto space-y-2.5 text-left pt-2 border-t border-[#e4ede8]">
            {bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#0f2417] font-bold">
                <span className="w-6 h-6 rounded-full bg-[#dcfce7] text-[#15803d] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ✔
                </span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
