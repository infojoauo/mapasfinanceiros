import React, { useState, useRef, useEffect } from 'react';
import { TESTIMONIAL_IMAGES } from '../../data/salesPageConfig';
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Star,
  CheckCircle2,
} from 'lucide-react';

interface TestimonialsSectionProps {
  onScrollToPricing?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = TESTIMONIAL_IMAGES.length;

  // Responsividade de imagens visíveis ao mesmo tempo:
  // Desktop/Notebook (>=1024px): 3 imagens
  // Tablet (>=640px): 2 imagens
  // Celular (<640px): 1 imagem
  const [visibleCount, setVisibleCount] = useState<number>(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newCount = 3;
      if (width < 640) {
        newCount = 1;
      } else if (width < 1024) {
        newCount = 2;
      } else {
        newCount = 3;
      }
      setVisibleCount(newCount);
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, total - newCount)));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [total]);

  const maxIndex = Math.max(0, total - visibleCount);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);

  // Sem loop infinito: para exatamente no primeiro (0) e no último (maxIndex)
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Suporte a teclado (setas para a esquerda e para a direita)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [maxIndex]);

  // Suporte a Touch no Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    currentTranslate.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = startX.current - currentTranslate.current;
    if (Math.abs(diff) > 40 && currentTranslate.current !== 0) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    startX.current = 0;
    currentTranslate.current = 0;
  };

  // Suporte a Arrastar com Mouse no Desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    currentTranslate.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = startX.current - currentTranslate.current;
    if (Math.abs(diff) > 40 && currentTranslate.current !== 0) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    startX.current = 0;
    currentTranslate.current = 0;
  };

  const isFirst = currentIndex === 0;
  const isLast = currentIndex >= maxIndex;

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 border-t border-slate-200/80 relative select-none">
      <div className="max-w-[1180px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3 shadow-2xs">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Depoimentos Reais de Professores</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Quem já aplicou em sala de aula recomenda
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Confira os feedbacks reais enviados por professores de inglês que já utilizam as atividades nas suas turmas.
          </p>

          {/* Social Proof Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-5 pt-5 border-t border-slate-200 text-xs sm:text-sm font-bold text-slate-700">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-900 font-black">4.9 / 5.0</span>
              <span className="text-slate-500 font-normal">(Avaliação média)</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>+2.300 professores satisfeitos</span>
            </div>
          </div>
        </div>

        {/* Bloco do Carrossel com 3 imagens simultâneas no desktop */}
        <div className="max-w-6xl mx-auto">
          {/* Caixa do Slide com Setas Flutuantes */}
          <div className="relative">
            {/* Seta Esquerda (Passar para anterior) */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePrev();
              }}
              disabled={isFirst}
              aria-label="Depoimentos anteriores"
              className={`absolute left-1 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-slate-800 border border-slate-300 shadow-xl flex items-center justify-center transition-all ${
                isFirst
                  ? 'opacity-20 cursor-not-allowed pointer-events-none'
                  : 'hover:text-blue-600 hover:scale-110 active:scale-95 cursor-pointer shadow-blue-900/20'
              }`}
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
            </button>

            {/* Seta Direita (Passar para próximo) */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleNext();
              }}
              disabled={isLast}
              aria-label="Próximos depoimentos"
              className={`absolute right-1 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-slate-800 border border-slate-300 shadow-xl flex items-center justify-center transition-all ${
                isLast
                  ? 'opacity-20 cursor-not-allowed pointer-events-none'
                  : 'hover:text-blue-600 hover:scale-110 active:scale-95 cursor-pointer shadow-blue-900/20'
              }`}
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
            </button>

            {/* Track Deslizante (SEM box branco ou cinza por trás, SEM lupa) */}
            <div
              className="w-full overflow-hidden rounded-2xl touch-pan-y cursor-grab active:cursor-grabbing px-1"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                className="flex transition-transform duration-500 ease-out will-change-transform items-center"
                style={{
                  width: `${(total / visibleCount) * 100}%`,
                  transform: `translateX(-${(currentIndex / total) * 100}%)`,
                }}
              >
                {TESTIMONIAL_IMAGES.map((url, idx) => (
                  <div
                    key={idx}
                    style={{ width: `${(1 / total) * 100}%` }}
                    className="shrink-0 flex items-center justify-center py-2 px-2 sm:px-3"
                  >
                    {/* Somente a imagem pura: formato nativo preservado, sem box/card atrás, sem lupa */}
                    <img
                      src={url}
                      alt={`Depoimento real de professor ${idx + 1}`}
                      loading={idx < 3 ? 'eager' : 'lazy'}
                      draggable={false}
                      className="max-h-[460px] sm:max-h-[500px] md:max-h-[540px] w-auto max-w-full object-contain rounded-2xl shadow-xl select-none block cursor-default pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Indicador de Bolinhas Centralizado (sem botões inferiores) */}
          <div className="flex flex-col items-center gap-2 mt-6">
            <div className="flex items-center justify-center gap-1.5">
              {[...Array(maxIndex + 1)].map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Ir para depoimentos ${dotIdx + 1}`}
                  className={`transition-all rounded-full cursor-pointer ${
                    currentIndex === dotIdx
                      ? 'w-7 h-2 bg-blue-600'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-bold text-slate-500 tracking-wider">
              {currentIndex + 1} de {maxIndex + 1}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
