import React, { useState } from 'react';
import { QuestionOptionCard } from './QuestionOptionCard';

interface QuestionAgeProps {
  onSelect: (age: string) => void;
  selectedAge?: string;
}

export const QuestionAge: React.FC<QuestionAgeProps> = ({ onSelect, selectedAge }) => {
  const [selected, setSelected] = useState<string>(selectedAge || '');

  const options = [
    { label: '18–29', value: '18–29' },
    { label: '30–39', value: '30–39' },
    { label: '40–49', value: '40–49' },
    { label: '50–59', value: '50–59' },
    { label: '60+', value: '60+' },
  ];

  const handlePick = (val: string) => {
    setSelected(val);
    setTimeout(() => {
      onSelect(val);
    }, 220);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4 animate-in fade-in duration-200">
      <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] text-center mb-2 leading-snug">
        Primeiro, me conta: qual é a sua idade?
      </h2>
      <p className="text-xs text-[#64748B] text-center mb-6">
        Selecione sua faixa etária:
      </p>

      <div className="space-y-3">
        {options.map((opt) => (
          <QuestionOptionCard
            key={opt.value}
            label={opt.label}
            selected={selected === opt.value}
            onClick={() => handlePick(opt.value)}
          />
        ))}
      </div>
    </div>
  );
};
