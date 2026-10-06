import React from 'react';
import { ArrowRight, Sparkles, Check, Target, AlertTriangle, Compass, User } from 'lucide-react';
import { QuizAnswers } from '../../types/quiz';

interface ResultStepProps {
  answers: QuizAnswers;
  onNext: () => void;
}

export const ResultStep: React.FC<ResultStepProps> = ({ answers, onNext }) => {
  const diff = Math.max(0, answers.currentWeight - answers.targetWeight);

  const namePrefix = answers.name?.trim()
    ? `${answers.name.trim().toUpperCase()}, `
    : '';

  const methodDeliverables = [
    'Rotina de 21 dias',
    'Organização diária',
    'Lista de ingredientes',
    'Receitas',
    'Checklist',
    'Estratégias práticas',
  ];

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 animate-in fade-in duration-300 text-center">
      {/* Personalized Indicator */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
        <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
        <span>ANÁLISE CONCLUÍDA</span>
      </div>

      {/* Main Headline */}
      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-2 leading-snug">
        {namePrefix}SUA ANÁLISE ESTÁ PRONTA.
      </h2>
      <p className="text-xs sm:text-sm text-[#475569] mb-6">
        Cruzamos suas respostas para mapear exatamente o seu ponto de partida e suas necessidades:
      </p>

      {/* Personalized 4-Block Card */}
      <div className="bg-white rounded-3xl p-5 border border-[#E2E8F0] shadow-xs mb-6 text-left space-y-3.5">
        {/* Bloco 1: SEU PERFIL */}
        <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]/80">
          <div className="flex items-center gap-2 mb-1 text-[#059669]">
            <User className="w-4 h-4" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider">
              SEU PERFIL
            </span>
          </div>
          <p className="text-xs sm:text-[13px] font-semibold text-[#1E293B]">
            Mulher na faixa de <strong>{answers.age || '30-49'} anos</strong> com maior foco na região de <strong>{answers.bodyArea || 'Barriga / Corpo todo'}</strong>.
          </p>
        </div>

        {/* Bloco 2: SEU OBJETIVO */}
        <div className="p-3.5 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0]">
          <div className="flex items-center gap-2 mb-1 text-[#065F46]">
            <Target className="w-4 h-4" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider">
              SEU OBJETIVO
            </span>
          </div>
          <p className="text-sm font-black text-[#064E3B]">
            {answers.currentWeight} kg → {answers.targetWeight} kg{' '}
            <span className="text-xs font-bold text-[#059669]">(-{diff} kg)</span>
          </p>
        </div>

        {/* Bloco 3: SEU PRINCIPAL DESAFIO */}
        <div className="p-3.5 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A]">
          <div className="flex items-center gap-2 mb-1 text-[#B45309]">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider">
              SEU PRINCIPAL DESAFIO
            </span>
          </div>
          <p className="text-xs sm:text-[13px] font-medium text-[#78350F]">
            {answers.mainObstacle || 'Dificuldade de manter consistência e rotina corrida'}
          </p>
        </div>

        {/* Bloco 4: SEU FOCO */}
        <div className="p-3.5 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0]">
          <div className="flex items-center gap-2 mb-1 text-[#059669]">
            <Compass className="w-4 h-4" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider">
              SEU FOCO
            </span>
          </div>
          <p className="text-xs sm:text-[13px] font-bold text-[#065F46]">
            {answers.desiredResult || 'Perda de peso de verdade + controle da fome'}
          </p>
        </div>
      </div>

      {/* Seção 17: APRESENTAÇÃO DO MÉTODO */}
      <div className="bg-gradient-to-b from-[#FAFDFB] to-white rounded-3xl p-5 sm:p-6 border-2 border-[#10B981] shadow-md mb-6 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-[11px] font-extrabold uppercase tracking-wider mb-2">
          <span>A SOLUÇÃO IDEAL</span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-2 leading-tight">
          POR ISSO CRIAMOS O MÉTODO 21 DIAS
        </h3>

        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
          Uma rotina prática para ajudar você a organizar alimentação, hábitos e consistência durante 21 dias.
        </p>

        <div className="space-y-2.5 pt-2 border-t border-[#E2E8F0]">
          {methodDeliverables.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#1E293B]">
              <span className="w-4 h-4 rounded-full bg-[#059669] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                ✓
              </span>
              <span className="font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="w-full bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] hover:from-[#059669] hover:to-[#047857] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-white/30"
      >
        <span>CONTINUAR PARA O RESULTADO</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
