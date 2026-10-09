import React from 'react';

export const MarqueeBar: React.FC = () => {
  const items = [
    "A PROMOÇÃO ENCERRA HOJE – 70% DE DESCONTO NO KIT SPEAKING",
    "A PROMOÇÃO ENCERRA HOJE – 70% DE DESCONTO NO KIT SPEAKING",
    "A PROMOÇÃO ENCERRA HOJE – 70% DE DESCONTO NO KIT SPEAKING",
    "A PROMOÇÃO ENCERRA HOJE – 70% DE DESCONTO NO KIT SPEAKING",
  ];

  return (
    <div className="bg-[#E50914] text-white py-3.5 overflow-hidden select-none border-y border-red-700 shadow-md">
      <div className="animate-marquee flex items-center">
        <div className="flex items-center shrink-0">
          {items.map((text, idx) => (
            <div
              key={`m1-${idx}`}
              className="flex items-center whitespace-nowrap mx-3 sm:mx-6 font-black text-sm sm:text-base md:text-lg tracking-wide uppercase"
            >
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3 drop-shadow-sm">🔥</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center shrink-0">
          {items.map((text, idx) => (
            <div
              key={`m2-${idx}`}
              className="flex items-center whitespace-nowrap mx-3 sm:mx-6 font-black text-sm sm:text-base md:text-lg tracking-wide uppercase"
            >
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3 drop-shadow-sm">🔥</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
