import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface ConfigImageProps {
  src?: string;
  alt: string;
  placeholderKey: string;
  aspect?: string; // e.g. 'aspect-[4/3]', 'aspect-video', 'aspect-square', 'aspect-[16/10]'
  className?: string;
  subtext?: string;
}

export const ConfigImage: React.FC<ConfigImageProps> = ({
  src,
  alt,
  placeholderKey,
  aspect = 'aspect-[16/10]',
  className = '',
  subtext = 'Espaço reservado para inserção da imagem',
}) => {
  const hasRealImage = Boolean(
    src &&
    typeof src === 'string' &&
    src.trim().length > 0 &&
    !src.includes('COLE_AQUI')
  );

  if (hasRealImage) {
    return (
      <div className={`relative w-full ${aspect} rounded-2xl overflow-hidden bg-[#F0FDF4] border border-[#DCFCE7] shadow-xs ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${aspect} rounded-2xl bg-gradient-to-b from-[#F0FDF4] to-[#ECFDF5] border-2 border-dashed border-[#A7F3D0] flex flex-col items-center justify-center p-5 text-center shadow-xs overflow-hidden ${className}`}
    >
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#86EFAC] text-[#065F46] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
        <Sparkles className="w-3 h-3 text-[#059669]" />
        <span>ESPAÇO RESERVADO</span>
      </div>

      <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-[#BBF7D0] flex items-center justify-center text-[#059669] mb-2">
        <ImageIcon className="w-6 h-6 stroke-[1.75]" />
      </div>

      <p className="text-xs sm:text-sm font-bold text-[#064E3B] tracking-tight mb-1 font-mono">
        [{placeholderKey}]
      </p>

      {subtext && (
        <p className="text-[11px] text-[#047857]/80 max-w-xs leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
};
