import React from 'react';
import { Check } from 'lucide-react';

interface QuestionOptionCardProps {
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onClick: () => void;
}

export const QuestionOptionCard: React.FC<QuestionOptionCardProps> = ({
  label,
  sublabel,
  icon,
  selected = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full p-4 sm:p-4.5 rounded-2xl text-left border-2 transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 active:scale-[0.99] group shadow-2xs ${
        selected
          ? 'bg-[#ECFDF5] border-[#059669] shadow-sm'
          : 'bg-white hover:bg-[#F9FAF9] border-[#E2E8F0] hover:border-[#10B981]/50'
      }`}
    >
      <div className="flex items-center gap-3.5 flex-1">
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-center justify-center shrink-0 text-[#059669]">
            {icon}
          </div>
        )}
        <div>
          <span className="text-sm sm:text-base font-bold text-[#1E293B] block leading-snug group-hover:text-[#065F46] transition-colors">
            {label}
          </span>
          {sublabel && (
            <span className="text-xs text-[#64748B] block mt-0.5 leading-relaxed">
              {sublabel}
            </span>
          )}
        </div>
      </div>

      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
          selected
            ? 'bg-[#059669] border-[#059669] text-white'
            : 'border-[#CBD5E1] bg-white group-hover:border-[#10B981]'
        }`}
      >
        {selected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
      </div>
    </button>
  );
};
