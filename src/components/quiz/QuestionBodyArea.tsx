import React, { useState } from 'react';
import { QuestionOptionCard } from './QuestionOptionCard';
import { Activity, Flame, Heart, Target, Layers, User } from 'lucide-react';

interface QuestionBodyAreaProps {
  onSelect: (area: string) => void;
  selectedArea?: string;
}

export const QuestionBodyArea: React.FC<QuestionBodyAreaProps> = ({
  onSelect,
  selectedArea,
}) => {
  const [selected, setSelected] = useState<string>(selectedArea || '');

  const options = [
    { label: 'Barriga', icon: <Flame className="w-5 h-5 text-[#059669]" /> },
    { label: 'Cintura', icon: <Target className="w-5 h-5 text-[#059669]" /> },
    { label: 'Braços', icon: <Activity className="w-5 h-5 text-[#059669]" /> },
    { label: 'Pernas', icon: <Layers className="w-5 h-5 text-[#059669]" /> },
    { label: 'Glúteos', icon: <Heart className="w-5 h-5 text-[#059669]" /> },
    { label: 'Corpo todo', icon: <User className="w-5 h-5 text-[#059669]" /> },
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
        Onde você mais percebeu mudanças no seu corpo?
      </h2>
      <p className="text-xs text-[#64748B] text-center mb-6">
        Selecione a região de maior atenção:
      </p>

      <div className="space-y-3">
        {options.map((opt) => (
          <QuestionOptionCard
            key={opt.label}
            label={opt.label}
            icon={opt.icon}
            selected={selected === opt.label}
            onClick={() => handlePick(opt.label)}
          />
        ))}
      </div>
    </div>
  );
};
