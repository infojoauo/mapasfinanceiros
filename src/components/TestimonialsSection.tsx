import React, { useState, useRef } from 'react';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialImages = [
    {
      url: 'https://i.imgur.com/P67nY9U.jpeg', // Original 5ª em 1º
      alt: 'Depoimento real de casal sobre o Finanças para Casais 1',
    },
    {
      url: 'https://i.imgur.com/3fRmxTY.jpeg', // Original 4ª em 2º
      alt: 'Depoimento real de casal sobre o Finanças para Casais 2',
    },
    {
      url: 'https://i.imgur.com/A8k7yqR.jpeg', // Original 2ª em 3º
      alt: 'Depoimento real de casal sobre o Finanças para Casais 3',
    },
    {
      url: 'https://i.imgur.com/A8u3MOm.jpeg', // Original 6ª em 4º
      alt: 'Depoimento real de casal sobre o Finanças para Casais 4',
    },
    {
      url: 'https://i.imgur.com/hU8eYFS.jpeg', // Original 3ª em 5º
      alt: 'Depoimento real de casal sobre o Finanças para Casais 5',
    },
    {
      url: 'https://i.imgur.com/nVotXAo.jpeg', // Original 7ª em 6º
      alt: 'Depoimento real de casal sobre o Finanças para Casais 6',
    },
    {
      url: 'https://i.imgur.com/t4JRH4v.jpeg', // Original 1ª por último (7º)
      alt: 'Depoimento real de casal sobre o Finanças para Casais 7',
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

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    const target = children[index];
    if (target) {
      const scrollOffset = target.offsetLeft - (container.clientWidth - target.clientWidth) / 2;
      container.scrollTo({
        left: Math.max(0, scrollOffset),
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const prev = activeIndex > 0 ? activeIndex - 1 : testimonialImages.length - 1;
    scrollToSlide(prev);
  };

  const handleNext = () => {
    const next = activeIndex < testimonialImages.length - 1 ? activeIndex + 1 : 0;
    scrollToSlide(next);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F3F0E6] border-t border-[#DFD9CA]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5ECE7] text-[#1E4D38] text-xs font-semibold uppercase tracking-wider mb-2">
            <Users className="w-3.5 h-3.5" /> Casais Reais, Resultados Reais
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14261E] font-serif">
            O que dizem os casais que já organizaram a vida financeira
          </h2>
          <p className="text-xs sm:text-sm text-[#5B7366] mt-2 max-w-xl mx-auto">
            Confira abaixo alguns dos relatos e mensagens reais de casais que aplicaram a metodologia no dia a dia:
          </p>
        </div>

        {/* Carousel Container (Smooth Swipe, No White Box Background) */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2 px-2 sm:px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden items-center"
          >
            {testimonialImages.map((item, idx) => (
              <div
                key={idx}
                className="w-[82vw] max-w-[340px] sm:w-[350px] md:w-[370px] shrink-0 snap-center flex flex-col items-center select-none"
              >
                {/* Image directly displayed in original format without white box background */}
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-auto object-contain rounded-2xl drop-shadow-md block hover:scale-[1.01] transition-transform duration-200"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls: Arrows + Clickable Dots */}
        <div className="flex flex-col items-center gap-2 pt-6">
          <div className="flex items-center justify-center gap-3">
            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Depoimento anterior"
              className="w-8 h-8 rounded-full bg-[#E5DEC9] text-[#4A3D2A] flex items-center justify-center hover:bg-[#D4CBB4] active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Clickable Dots */}
            <div className="flex items-center gap-1.5 px-2">
              {testimonialImages.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToSlide(dotIdx)}
                  aria-label={`Ir para depoimento ${dotIdx + 1}`}
                  className={`transition-all duration-200 rounded-full cursor-pointer ${
                    activeIndex === dotIdx
                      ? 'w-6 h-2.5 bg-[#E5A83B] shadow-xs'
                      : 'w-2.5 h-2.5 bg-[#D6CFC0] hover:bg-[#A39986]'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Próximo depoimento"
              className="w-8 h-8 rounded-full bg-[#E5DEC9] text-[#4A3D2A] flex items-center justify-center hover:bg-[#D4CBB4] active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
