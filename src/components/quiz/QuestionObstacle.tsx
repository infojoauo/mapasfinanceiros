import React, { useState } from 'react';
import { QuestionOptionCard } from './QuestionOptionCard';

interface QuestionObstacleProps {
  onSelect: (val: string) => void;
  selectedObstacle?: string;
}

export const QuestionObstacle: React.FC<QuestionObstacleProps> = ({
  onSelect,
  selectedObstacle,
}) => {
  const [selected, setSelected] = useState<string>(selectedObstacle || '');

  const options = [
    { label: 'Já gastei dinheiro com métodos que não deram resultado.' },
    { label: 'Tenho dificuldade para controlar a fome.' },
    { label: 'Começo animada, mas não consigo manter.' },
    { label: 'Minha rotina é corrida demais.' },
    { label: 'Quando consigo emagrecer, acabo recuperando o peso.' },
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
        O que mais atrapalha você a emagrecer hoje?
      </h2>
      <p className="text-xs text-[#64748B] text-center mb-6">
        Identifique o seu maior obstáculo no momento:
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
