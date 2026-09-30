import React, { useState, useEffect } from 'react';

interface NoticeBarProps {
  onScrollToPlans: () => void;
}

export const NoticeBar: React.FC<NoticeBarProps> = ({ onScrollToPlans }) => {
  const [dateFormatted, setDateFormatted] = useState<string>(() => {
    const now = new Date();
    return `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
  });

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      setDateFormatted(
        `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`
      );
    };

    updateDate();
    // Check every minute in case midnight crosses while user is on page
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      onClick={onScrollToPlans}
      className="bg-[#0c1f18] text-[#e8f5ee] py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium text-center flex items-center justify-center cursor-pointer hover:bg-[#122e24] transition-colors border-b border-[#1b3d30] sticky top-0 z-40 shadow-sm uppercase tracking-wide"
    >
      <span className="flex items-center gap-x-1.5 gap-y-0.5 flex-wrap justify-center font-semibold">
        <span className="inline-flex items-center gap-1 font-extrabold text-[#e5a83b]">
          <span className="text-xs sm:text-sm shrink-0 animate-bounce">🔥</span>
          <span>OFERTA POR TEMPO LIMITADO</span>
        </span>
        <span className="opacity-70 hidden sm:inline">—</span>
        <span>
          VÁLIDA ATÉ HOJE, <strong className="text-white underline decoration-[#e5a83b] font-black">{dateFormatted}</strong> ÀS 23:59
        </span>
      </span>
    </div>
  );
};
