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
  label = 'ESPAÇO RESERVADO PARA SUA IMAGEM',
  aspect = 'aspect-[16/10]',
  className = '',
  imgClassName = 'w-full h-full object-cover',
  rounded = 'rounded-2xl',
}) => {
  // Se houver uma URL real configurada e não vazia, exibe a imagem
  if (src && src.trim().length > 0 && !src.includes('COLE_AQUI')) {
    return (
      <div className={`overflow-hidden ${rounded} ${className}`}>
        <img
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          className={`${imgClassName} ${rounded} transition-opacity duration-300 w-full`}
        />
      </div>
    );
  }

  // Se estiver vazia (conforme solicitado pelo usuário), mostra um placeholder moderno e limpo
  return (
    <div
      className={`relative w-full ${aspect} ${rounded} bg-gradient-to-b from-slate-50 to-slate-100/80 border-2 border-dashed border-slate-300 hover:border-blue-400/80 transition-colors flex flex-col items-center justify-center p-4 sm:p-6 text-center select-none shadow-xs ${className}`}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 mb-2.5 shadow-xs">
        <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <span className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wide block max-w-full px-2">
        {label}
      </span>
      <span className="text-[11px] sm:text-xs text-slate-400 font-normal mt-1">
        Insira a imagem posteriormente em <code className="text-slate-600 font-mono bg-slate-200/60 px-1 py-0.5 rounded text-[10px]">salesPageConfig.ts</code>
      </span>
    </div>
  );
};
