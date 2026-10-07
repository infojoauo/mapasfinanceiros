import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageSlotProps {
  src?: string;
  alt: string;
  label?: string;
  aspect?: string;
  className?: string;
  imgClassName?: string;
  rounded?: string;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  src,
  alt,
  label = 'COLE O LINK DA IMAGEM AQUI',
  aspect = 'aspect-[4/3]',
  className = '',
  imgClassName = 'w-full h-full object-cover',
  rounded = 'rounded-2xl',
}) => {
  if (src && src.trim().length > 0 && !src.includes('COLE_AQUI')) {
    return (
      <div className={`overflow-hidden ${rounded} ${className}`}>
        <img
          src={src}
          alt={alt}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className={`${imgClassName} ${rounded} transition-opacity duration-300 w-full`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${aspect} ${rounded} bg-[#f9fbf9] border-2 border-dashed border-[#d5eedb] hover:border-[#16a34a]/60 transition-colors flex flex-col items-center justify-center p-3 sm:p-4 text-center select-none shadow-2xs ${className}`}
    >
      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#15803d] mb-2 shadow-2xs">
        <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block max-w-full px-2 truncate">
        {label}
      </span>
      <span className="text-[9px] sm:text-[10px] text-slate-400 font-sans mt-0.5">
        (Espaço reservado para sua imagem)
      </span>
    </div>
  );
};
