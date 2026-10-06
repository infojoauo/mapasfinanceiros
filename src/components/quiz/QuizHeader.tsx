import React from 'react';
import { Sparkles } from 'lucide-react';
import { BRAND_NAME, BRAND_SUBTITLE } from '../../data/quizConfig';

export const QuizHeader: React.FC = () => {
  return (
    <header className="pt-4 pb-3 px-4 text-center border-b border-[#E2E8F0]/60 bg-white/80 backdrop-blur-xs sticky top-0 z-30">
      <div className="max-w-md mx-auto flex items-center justify-center gap-1.5">
        <div className="w-5 h-5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#059669]">
          <Sparkles className="w-3 h-3 text-[#059669]" />
        </div>
        <span className="font-extrabold text-xs sm:text-sm tracking-wider text-[#064E3B] uppercase font-sans">
          {BRAND_NAME}
        </span>
        <span className="text-[#CBD5E1]">•</span>
        <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#047857] uppercase">
          {BRAND_SUBTITLE}
        </span>
      </div>
    </header>
  );
};
