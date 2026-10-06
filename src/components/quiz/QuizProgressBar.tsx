import React from 'react';

interface QuizProgressBarProps {
  currentQuestion: number;
  totalQuestions?: number;
}

export const QuizProgressBar: React.FC<QuizProgressBarProps> = ({
  currentQuestion,
  totalQuestions = 8,
}) => {
  const percentage = Math.min(100, Math.max(0, (currentQuestion / totalQuestions) * 100));

  return (
    <div className="w-full max-w-md mx-auto px-4 pt-3 pb-2">
      <div className="flex items-center justify-between text-[11px] font-bold tracking-wider text-[#065F46] uppercase mb-1.5">
        <span>PERGUNTA {currentQuestion} DE {totalQuestions}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full transition-all duration-400 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
