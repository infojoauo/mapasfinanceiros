import React, { useState } from 'react';
import { QuestionOptionCard } from './QuestionOptionCard';

interface QuestionAttemptsProps {
  onSelect: (val: string) => void;
  selectedAttempts?: string;
}

export const QuestionAttempts: React.FC<QuestionAttemptsProps> = ({
  onSelect,
  selectedAttempts,
}) => {
  const [selected, setSelected] = useState<string>(selectedAttempts || '');

  const options = [
    { label: 'Sim, várias vezes. Emagreço e depois ganho tudo novamente.' },
    { label: 'Sim, mas nunca consigo manter.' },
    { label: 'Já tentei algumas coisas, mas nada funcionou como eu esperava.' },
    { label: 'Estou tentando emagrecer de verdade pela primeira vez.' },
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
        Você já tentou emagrecer antes?
      </h2>
      <p className="text-xs text-[#64748B] text-center mb-6">
        Selecione o que melhor reflete sua trajetória:
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
