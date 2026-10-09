import React, { useState, useEffect } from 'react';

export const NoticeBar: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState(840); // 14 min

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-red-600 text-white text-center py-2.5 px-4 font-bold text-xs sm:text-sm tracking-widest uppercase sticky top-0 z-50 flex items-center justify-center gap-2 flex-wrap shadow-md select-none">
      <span>🔥 Promoção termina em:</span>
      <span className="text-yellow-300 font-mono text-sm sm:text-base bg-black/25 px-2.5 py-0.5 rounded font-black tracking-wider shadow-inner">
        {formatTime(secondsLeft)}
      </span>
    </div>
  );
};
