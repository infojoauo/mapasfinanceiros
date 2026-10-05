import React, { useState, useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, MessageSquareHeart } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      label: '[DEPOIMENTO REAL 01 - PRINT WHATSAPP]',
      tag: 'Rotina Matinal',
      summary: '“Pela primeira vez consegui manter uma rotina de 5 minutos sem desistir no 3º dia. Minha pele está muito mais macia!”',
      aluna: 'Aluna do Protocolo • 42 anos',
    },
    {
      id: 2,
      label: '[DEPOIMENTO REAL 02 - PRINT WHATSAPP]',
      tag: 'Viço & Hidratação',
      summary: '“O que mais amei foi a ordem certa dos produtos. Parei de gastar com cremes à toa e estou usando o que já tinha.”',
      aluna: 'Aluna do Protocolo • 38 anos',
    },
    {
      id: 3,
      label: '[DEPOIMENTO REAL 03 - PRINT WHATSAPP]',
      tag: 'Área dos Olhos',
      summary: '“Os cuidados delicados com o contorno dos olhos fizeram toda diferença na minha maquiagem que não craquela mais.”',
      aluna: 'Aluna do Protocolo • 51 anos',
    },
    {
      id: 4,
      label: '[DEPOIMENTO REAL 04 - PRINT WHATSAPP]',
      tag: 'Checklist Diário',
      summary: '“A facilidade dos checklists na área de membros é incrível. Tico todo dia e sinto um orgulho enorme do meu momento.”',
      aluna: 'Aluna do Protocolo • 46 anos',
    },
    {
      id: 5,
      label: '[DEPOIMENTO REAL 05 - PRINT WHATSAPP]',
      tag: 'Autoestima',
      summary: '“Voltar a me olhar com carinho no espelho sem aquela sensação de pele cansada não tem preço.”',
      aluna: 'Aluna do Protocolo • 44 anos',
    },
  ];

  // Update active dot when user swipes horizontally on mobile
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    let closestIndex = 0;
    let minDiff = Infinity;
    const containerCenter = scrollLeft + container.clientWidth / 2;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const diff = Math.abs(containerCenter - childCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollToTestimonial = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    if (children[index]) {
      children[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const prev = Math.max(0, activeIndex - 1);
    scrollToTestimonial(prev);
  };

  const handleNext = () => {
    const next = Math.min(testimonials.length - 1, activeIndex + 1);
    scrollToTestimonial(next);
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-t border-[#F2E5E8] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0F3] border border-[#F5D8E0] text-[#9E3352] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#C44369]" />
            <span>RELATOS DE ALUNAS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A161E] font-serif tracking-tight mb-3">
            Quem organizou a rotina, sentiu a diferença
          </h2>
          <p className="text-xs sm:text-sm text-[#61454F] leading-relaxed max-w-xl mx-auto">
            Mulheres reais que deixaram a confusão de lado e hoje desfrutam de um momento diário de autocuidado e bem-estar.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-2 no-scrollbar px-2 sm:px-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className="w-[280px] sm:w-[340px] md:w-[360px] shrink-0 snap-center bg-[#FAF5F7] rounded-3xl p-5 border border-[#F0DCE2] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <ImagePlaceholder
                      label={item.label}
                      subtext="Espaço reservado para o print real do relato da aluna"
                      aspect="aspect-[4/3]"
                      badge={item.tag}
                    />
                  </div>
                  <p className="text-xs sm:text-sm italic text-[#442C35] mb-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#EDD5DC] flex items-center justify-between text-[11px] text-[#7A5B66] font-medium">
                  <span>{item.aluna}</span>
                  <span className="text-[#C44369] font-bold">★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls: Arrows + Clickable Dots */}
        <div className="flex flex-col items-center gap-2 pt-6">
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Depoimento anterior"
              className="w-8 h-8 rounded-full bg-[#FAF0F3] text-[#7A3649] flex items-center justify-center hover:bg-[#F5E2E8] active:scale-95 transition-all shadow-xs cursor-pointer border border-[#EACCD6]"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            <div className="flex items-center gap-1.5 px-2">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToTestimonial(dotIdx)}
                  aria-label={`Ir para depoimento ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === dotIdx
                      ? 'w-6 bg-[#C44369]'
                      : 'w-2 bg-[#E5CBD3] hover:bg-[#D4AAB7]'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Próximo depoimento"
              className="w-8 h-8 rounded-full bg-[#FAF0F3] text-[#7A3649] flex items-center justify-center hover:bg-[#F5E2E8] active:scale-95 transition-all shadow-xs cursor-pointer border border-[#EACCD6]"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
          <span className="text-[11px] text-[#8C6D77] font-medium">
            Deslize para ver mais relatos
          </span>
        </div>
      </div>
    </section>
  );
};
