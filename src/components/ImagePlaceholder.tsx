import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  subtext?: string;
  aspect?: string; // e.g. 'aspect-[4/3]', 'aspect-video', 'aspect-square', 'h-64 sm:h-80'
  className?: string;
  badge?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  subtext = 'Espaço reservado para inserção da imagem ou mockup real do produto',
  aspect = 'aspect-[16/10]',
  className = '',
  badge = 'ESPAÇO RESERVADO',
}) => {
  return (
    <div
      className={`relative w-full ${aspect} rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#FDF6F7] to-[#F7ECEF] border-2 border-dashed border-[#E5C2CC] shadow-inner flex flex-col items-center justify-center p-6 text-center group hover:border-[#D45B7A] transition-all overflow-hidden ${className}`}
    >
      {/* Decorative subtle ambient circle */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#F5D8E0]/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#EAD8DE]/40 rounded-full blur-2xl pointer-events-none" />

      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#EAC4CE] text-[#A33B58] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
        <Sparkles className="w-3 h-3 text-[#D45B7A]" />
        <span>{badge}</span>
      </div>

      {/* Icon Iconography */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-sm border border-[#E8CCD5] flex items-center justify-center text-[#D45B7A] mb-3 group-hover:scale-105 transition-transform">
        <ImageIcon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
      </div>

      {/* Main Identified Label */}
      <p className="text-sm sm:text-base font-bold text-[#3B222A] tracking-tight mb-1 font-serif">
        {label}
      </p>

      {/* Subtext description */}
      <p className="text-xs sm:text-[13px] text-[#7A5A64] max-w-sm leading-relaxed">
        {subtext}
      </p>
    </div>
  );
};
