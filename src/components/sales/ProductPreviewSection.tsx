import React, { useState } from 'react';
import { CAROUSEL_IMAGES } from '../../data/salesPageConfig';
import { X } from 'lucide-react';

export const ProductPreviewSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  // Divide the 18 images into 2 rows of 9 images for optimal visual balance
  const row1 = CAROUSEL_IMAGES.slice(0, 9);
  const row2 = CAROUSEL_IMAGES.slice(9, 18);

  // Duplicate for seamless 100% infinite marquee loop
  const row1Track = [...row1, ...row1];
  const row2Track = [...row2, ...row2];

  return (
    <section className="py-14 sm:py-18 px-0 bg-[#f3faf6] border-t border-[#e4ede8] overflow-hidden select-none">
      <div className="max-w-[1080px] mx-auto text-center px-4 sm:px-6 mb-7 sm:mb-9">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2417] tracking-tight mb-3 max-w-2xl mx-auto leading-tight">
          Veja algumas páginas que você poderá usar com seus alunos
        </h2>

        {/* Subtitle / Hint Pill */}
        <p className="text-xs sm:text-sm text-[#4b5d54] max-w-xl mx-auto font-medium">
          Material 100% visual, ilustrado e pronto para imprimir no formato A4 com cabeçalho completo.
        </p>

        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e4ede8] text-[11px] sm:text-xs font-bold text-[#0f766e] shadow-2xs">
          <span>✨</span>
          <span>Clique em qualquer página para ampliar</span>
        </div>
      </div>

      {/* Infinite Carousel Container with Edge Fades */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-5">
        {/* Left & Right Gradient Shadows */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-[#f3faf6] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-[#f3faf6] to-transparent z-10" />

        {/* ROW 1: Scrolling to the Left */}
        <div className="overflow-hidden w-full flex">
          <div className="animate-marquee-left flex gap-3.5 sm:gap-4.5 py-1">
            {row1Track.map((item, idx) => (
              <div
                key={`r1-${idx}`}
                onClick={() => setSelectedImage({ url: item.url, title: item.title })}
                className="relative w-[140px] sm:w-[180px] md:w-[205px] shrink-0 aspect-[210/297] rounded-[12px] overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover rounded-[12px] block"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Scrolling to the Right */}
        <div className="overflow-hidden w-full flex">
          <div className="animate-marquee-right flex gap-3.5 sm:gap-4.5 py-1">
            {row2Track.map((item, idx) => (
              <div
                key={`r2-${idx}`}
                onClick={() => setSelectedImage({ url: item.url, title: item.title })}
                className="relative w-[140px] sm:w-[180px] md:w-[205px] shrink-0 aspect-[210/297] rounded-[12px] overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover rounded-[12px] block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-[#0f2417]/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-[500px] w-full max-h-[92vh] bg-white rounded-[20px] p-3 sm:p-4 border-2 border-[#d8f5de] shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3.5 -right-3.5 w-9 h-9 rounded-full bg-white border border-[#e4ede8] text-[#0f2417] flex items-center justify-center shadow-lg hover:bg-slate-100 cursor-pointer transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            <div className="w-full max-h-[80vh] overflow-auto rounded-[12px] bg-slate-50 border border-slate-100">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto object-contain block"
              />
            </div>

            <p className="text-xs sm:text-sm font-bold text-[#0f2417] mt-3">
              Visualização da Atividade • Formato PDF A4
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
