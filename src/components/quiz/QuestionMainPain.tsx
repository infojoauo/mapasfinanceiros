import React, { useState } from 'react';
import { QuestionOptionCard } from './QuestionOptionCard';

interface QuestionMainPainProps {
  onSelect: (pain: string) => void;
  selectedPain?: string;
  userName?: string;
}

export const QuestionMainPain: React.FC<QuestionMainPainProps> = ({
  onSelect,
  selectedPain,
  userName,
}) => {
  const [selected, setSelected] = useState<string>(selectedPain || '');

  const options = [
    { label: 'Minha barriga e medidas' },
    { label: 'Minha autoestima' },
    { label: 'Tenho dificuldade para emagrecer' },
    { label: 'Minha falta de energia' },
    { label: 'Minhas roupas não servem como antes' },
  ];

  const handlePick = (val: string) => {
    setSelected(val);
    setTimeout(() => {
      onSelect(val);
    }, 220);
  };

  const nameDisplay = userName?.trim()
    ? `${userName.trim()}, o`
    : 'O';

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4 animate-in fade-in duration-200">
      <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] text-center mb-2 leading-snug">
        {nameDisplay} que mais te incomoda hoje?
      </h2>
      <p className="text-xs text-[#64748B] text-center mb-6">
        Seja sincera, suas respostas são 100% confidenciais:
      </p>

      <div className="space-y-3">
        {options.map((opt) => (
          <QuestionOptionCard
            key={opt.label}
            label={opt.label}
            selected={selected === opt.label}
            onClick={() => handlePick(opt.label)}
          />
        ))}
      </div>
    </div>
  );
};
