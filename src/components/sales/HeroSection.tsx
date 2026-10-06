import React from 'react';
import { HERO_MOCKUP_IMAGE } from '../../data/salesPageConfig';
import { ImageSlot } from '../common/ImageSlot';

interface HeroSectionProps {
  onScrollToPricing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPricing }) => {
  const bullets = [
    '120 páginas A4 prontas para imprimir',
    'Conteúdos organizados do 6º ao 9º ano',
    'Cabeçalho com escola, aluno, turma, série, data e professor',
    'Ideal para aula, revisão, reforço, AEE e tarefa de casa',
    'Plano completo com gabarito e bônus exclusivos',
  ];

  return (
    <section className="bg-[#faf9f1] pt-6 pb-12 sm:pt-8 sm:pb-14 px-4 sm:px-6 text-center">
      <div className="max-w-[1080px] mx-auto">
        {/* Eyebrow Pill */}
        <span className="inline-block bg-[#7ff08d] text-[#0b3d1a] font-extrabold text-xs sm:text-[13px] px-5 py-2 rounded-full mb-5 tracking-[0.3px] shadow-2xs">
          🔒 COMPRA 100% SEGURA E PROTEGIDA
        </span>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-[#13315c] leading-[1.2] tracking-[-0.5px] mb-4 uppercase max-w-[940px] mx-auto">
          +120 ATIVIDADES VISUAIS DE CIÊNCIAS DO 6º AO 9º ANO PRONTAS PARA IMPRIMIR E APLICAR
        </h1>

        {/* Lead Text */}
        <p className="text-base sm:text-lg md:text-[19px] text-[#2f5490] leading-relaxed max-w-[820px] mx-auto mb-6 font-normal">
          Explicações visuais + atividades práticas para ensinar corpo humano, células, solo, água, energia, matéria, ecologia, química e física de forma mais clara, organizada e fácil de entender.
        </p>

        {/* Hero Image Mockup Slot */}
        <div className="w-full max-w-[560px] mx-auto mb-7">
          <ImageSlot
            src={HERO_MOCKUP_IMAGE}
            alt="Capa das 120 Atividades Visuais de Ciências"
            label="[COLE AQUI A IMAGEM PRINCIPAL: HERO_MOCKUP_IMAGE]"
            aspect="aspect-[4/3]"
            rounded="rounded-2xl"
          />
        </div>

        {/* Checks List */}
        <div className="max-w-[640px] mx-auto space-y-2.5 mb-8 text-left">
          {bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#13315c] font-bold">
              <span className="w-6 h-6 rounded-full bg-[#d8f5de] text-[#116b2c] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✔
              </span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="max-w-[520px] mx-auto">
          <button
            type="button"
            onClick={onScrollToPricing}
            className="w-full bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.99] text-white font-black text-base sm:text-[19px] uppercase tracking-wider py-4 sm:py-4.5 px-8 rounded-full shadow-[0_8px_20px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer block text-center"
          >
            QUERO ACESSAR AS 120 ATIVIDADES AGORA
          </button>
          <p className="text-xs sm:text-sm text-[#2f5490] font-bold mt-3.5">
            Você recebe o material na hora, direto no seu e-mail.
          </p>
        </div>
      </div>
    </section>
  );
};
