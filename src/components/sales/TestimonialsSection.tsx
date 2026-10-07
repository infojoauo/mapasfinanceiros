import React, { useRef, useState, useEffect } from 'react';
import { TESTIMONIALS } from '../../data/salesPageConfig';
import { ChevronLeft, ChevronRight, X, MessageSquareQuote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Update scroll navigation buttons state & active indicator
  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate approximate active item index
    const totalItems = TESTIMONIALS.length;
    const scrollProgress = scrollLeft / (scrollWidth - clientWidth || 1);
    const index = Math.round(scrollProgress * (totalItems - 1));
    setActiveIndex(Math.min(Math.max(index, 0), totalItems - 1));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Scroll by roughly the width of one card + gap
    const scrollAmount = el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>('.testimonial-card');
    if (items[index]) {
      items[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  return (
    <section className="py-14 sm:py-18 px-4 sm:px-6 bg-[#f3faf6] border-t border-[#e4ede8] relative">
      <div className="max-w-[1080px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dcfce7] text-[#15803d] text-xs font-black tracking-wider uppercase mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Depoimentos Reais</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2417] tracking-tight mb-3">
            Veja o que as professoras estão falando sobre as atividades
          </h2>

          <p className="text-sm sm:text-base text-[#4b5d54] font-medium max-w-xl mx-auto">
            Mensagens reais de educadoras que aplicaram o material em sala e transformaram a rotina de aulas de Ciências.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop / Tablet Left Arrow Button */}
          <button
            type="button"
            aria-label="Depoimento anterior"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`hidden sm:flex absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white border border-[#e4ede8] shadow-lg text-[#0f2417] transition-all cursor-pointer ${
              canScrollLeft
                ? 'hover:bg-[#16a34a] hover:text-white hover:border-[#16a34a] hover:scale-105 active:scale-95'
                : 'opacity-30 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Desktop / Tablet Right Arrow Button */}
          <button
            type="button"
            aria-label="Próximo depoimento"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`hidden sm:flex absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white border border-[#e4ede8] shadow-lg text-[#0f2417] transition-all cursor-pointer ${
              canScrollRight
                ? 'hover:bg-[#16a34a] hover:text-white hover:border-[#16a34a] hover:scale-105 active:scale-95'
                : 'opacity-30 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Track (Snap carousel, smooth, swipeable) */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2 px-1 no-scrollbar -mx-4 sm:mx-0 px-4 sm:px-0 items-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card snap-start shrink-0 w-[260px] sm:w-[300px] md:w-[325px] transition-transform duration-300 hover:scale-102 cursor-pointer select-none"
                onClick={() => setSelectedImage(testimonial.imageUrl)}
              >
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.alt}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto object-contain block drop-shadow-md rounded-2xl"
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls on Mobile */}
          <div className="flex sm:hidden items-center justify-between mt-5 px-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2.5 rounded-full bg-white border border-[#e4ede8] text-[#0f2417] shadow-sm ${
                canScrollLeft ? 'active:bg-[#16a34a] active:text-white' : 'opacity-30'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5 items-center">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir para depoimento ${i + 1}`}
                  onClick={() => scrollToIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'w-6 bg-[#16a34a]' : 'w-2 bg-[#cbd5e1]'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2.5 rounded-full bg-white border border-[#e4ede8] text-[#0f2417] shadow-sm ${
                canScrollRight ? 'active:bg-[#16a34a] active:text-white' : 'opacity-30'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Dots Indicator */}
          <div className="hidden sm:flex justify-center items-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para depoimento ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i ? 'w-8 bg-[#16a34a]' : 'w-2.5 bg-[#cbd5e1] hover:bg-[#94a3b8]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal Zoom Viewer */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-3.5 border-b border-[#e4ede8] bg-[#f8faf8]">
              <span className="text-xs sm:text-sm font-extrabold text-[#0f2417]">
                Depoimento de Professora
              </span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-1 rounded-full text-slate-500 hover:text-black hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image display */}
            <div className="overflow-y-auto p-2 bg-slate-50 flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Depoimento em tela cheia"
                className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-xs"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

