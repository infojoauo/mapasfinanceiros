import React, { useState } from 'react';
import { QuestionOptionCard } from './QuestionOptionCard';

interface QuestionDesiredResultProps {
  onSelect: (result: string) => void;
  selectedResult?: string;
}

export const QuestionDesiredResult: React.FC<QuestionDesiredResultProps> = ({
  onSelect,
  selectedResult,
}) => {
  const [selected, setSelected] = useState<string>(selectedResult || '');

  const options = [
    { label: 'Perder peso de verdade' },
    { label: 'Desinchar' },
    { label: 'Controlar melhor a fome' },
    { label: 'Voltar a gostar do meu corpo' },
    { label: 'Ter mais disposição no dia a dia' },
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
        Qual resultado você gostaria de perceber primeiro?
      </h2>
      <p className="text-xs text-[#64748B] text-center mb-6">
        Selecione o seu principal objetivo inicial:
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
