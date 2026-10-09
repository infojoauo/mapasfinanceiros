import React from 'react';
import {
  BONUSES_SECTION,
  BonusCardItem,
} from '../../data/salesPageConfig';
import {
  Gift,
  MessageSquare,
  Flame,
  Zap,
  CheckCircle2,
  Sparkles,
  Layers,
  Clock,
  Printer,
  ArrowDown,
} from 'lucide-react';

interface BonusSectionProps {
  onScrollToPricing?: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onScrollToPricing }) => {
  // Renderiza um mockup ilustrativo atraente quando o professor ainda não tiver inserido imagem própria
  const renderIllustrativeMockup = (item: BonusCardItem) => {
    if (item.imageUrl && item.imageUrl.trim().length > 0) {
      return (
        <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center p-2 border border-slate-200/80">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain rounded-xl select-none"
            loading="lazy"
          />
        </div>
      );
    }

    if (item.id === 1) {
      // Mockup Ilustrativo 1: Conversation Cards (Cartões de Conversação)
      return (
        <div className="w-full h-52 sm:h-56 rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 p-4 relative overflow-hidden border border-blue-700/40 shadow-inner flex flex-col justify-between select-none">
          {/* Brilho decorativo de fundo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Topo do Mockup */}
          <div className="flex items-center justify-between text-[11px] font-bold text-blue-200 relative z-10">
            <span className="flex items-center gap-1.5 bg-blue-800/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-blue-400/30">
              <MessageSquare className="w-3 h-3 text-cyan-300" />
              <span>Conversation Cards</span>
            </span>
            <span className="text-[10px] text-blue-300 font-mono bg-blue-950/60 px-2 py-0.5 rounded">
              PDF • Print & Cut
            </span>
          </div>

          {/* Cartões Sobrepostos Ilustrativos */}
          <div className="relative my-auto z-10 flex flex-col gap-2">
            {/* Card Fundo */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/20 transform -rotate-1 text-slate-100 shadow-md">
              <div className="text-[10px] uppercase font-bold text-cyan-300 tracking-wider">
                Prompt #14 • Pair Work
              </div>
              <p className="text-xs font-semibold text-white mt-0.5 leading-snug">
                "What is one place in the world you would love to visit next year and why?"
              </p>
            </div>

            {/* Card Frente */}
            <div className="bg-white rounded-xl p-3 border border-slate-200 transform translate-x-2 -translate-y-1 text-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-extrabold uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Topic: Daily Routine & Choices
                </span>
                <span className="text-[9px] text-slate-400 font-bold">Level A2-B1</span>
              </div>
              <p className="text-xs font-bold text-slate-900 leading-snug">
                "Would you rather work in an office or travel the world remotely?"
              </p>
            </div>
          </div>

          {/* Rodapé do Mockup */}
          <div className="flex items-center justify-between text-[10px] text-blue-200/90 font-medium relative z-10 pt-1 border-t border-blue-800/60">
            <span className="flex items-center gap-1">
              <Printer className="w-3 h-3 text-cyan-400" />
              <span>Pronto para imprimir</span>
            </span>
            <span className="font-bold text-cyan-300">Duplas & Grupos</span>
          </div>
        </div>
      );
    }

    if (item.id === 2) {
      // Mockup Ilustrativo 2: Speaking Warm-ups (Aquecimento Rápido)
      return (
        <div className="w-full h-52 sm:h-56 rounded-2xl bg-gradient-to-br from-amber-950 via-orange-950 to-slate-900 p-4 relative overflow-hidden border border-amber-700/40 shadow-inner flex flex-col justify-between select-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Topo do Mockup */}
          <div className="flex items-center justify-between text-[11px] font-bold text-amber-200 relative z-10">
            <span className="flex items-center gap-1.5 bg-amber-900/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-amber-400/30">
              <Flame className="w-3 h-3 text-amber-300" />
              <span>Speaking Warm-ups</span>
            </span>
            <span className="text-[10px] text-amber-300 font-mono bg-amber-950/60 px-2 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" />
              <span>5-10 Minutos</span>
            </span>
          </div>

          {/* Elemento Central Ilustrativo */}
          <div className="relative my-auto z-10 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-amber-200 text-slate-900 shadow-xl">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-black uppercase text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-amber-700" />
                <span>Primeiros 5 Minutos de Aula</span>
              </span>
              <span className="text-[10px] font-bold text-emerald-700">Quebra-Gelo</span>
            </div>
            <p className="text-xs font-bold text-slate-900 leading-snug">
              "Tell 3 true things and 1 lie about your weekend. Let your classmates guess!"
            </p>
            <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-2 text-[10px] text-slate-500">
              <span className="font-bold text-slate-700">Objetivo:</span>
              <span>Engajar a turma logo no início da aula</span>
            </div>
          </div>

          {/* Rodapé do Mockup */}
          <div className="flex items-center justify-between text-[10px] text-amber-200/90 font-medium relative z-10 pt-1 border-t border-amber-800/60">
            <span>Início dinâmico da aula</span>
            <span className="font-bold text-amber-300">Mais participação</span>
          </div>
        </div>
      );
    }

    // Mockup Ilustrativo 3: Quick Speaking Activities (Atividades Rápidas)
    return (
      <div className="w-full h-52 sm:h-56 rounded-2xl bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 p-4 relative overflow-hidden border border-emerald-700/40 shadow-inner flex flex-col justify-between select-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Topo do Mockup */}
        <div className="flex items-center justify-between text-[11px] font-bold text-emerald-200 relative z-10">
          <span className="flex items-center gap-1.5 bg-emerald-900/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-emerald-400/30">
            <Zap className="w-3 h-3 text-emerald-300" />
            <span>Quick Speaking</span>
          </span>
          <span className="text-[10px] text-emerald-300 font-mono bg-emerald-950/60 px-2 py-0.5 rounded">
            Zero Preparação
          </span>
        </div>

        {/* Elemento Central Ilustrativo */}
        <div className="relative my-auto z-10 space-y-2">
          <div className="bg-white/95 rounded-xl p-3 border border-emerald-200 text-slate-900 shadow-xl">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-extrabold uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                Speed Talking Challenge
              </span>
              <span className="text-[10px] font-bold text-slate-500">2 min / dupla</span>
            </div>
            <p className="text-xs font-bold text-slate-900 leading-snug">
              "Convince your partner to swap lives with you for just 24 hours. Go!"
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2.5 py-1 text-[10px] text-emerald-200 border border-white/10 flex items-center justify-between">
            <span>Roteiros rápidos de conversação</span>
            <span className="font-bold text-white">Flexível & Prático</span>
          </div>
        </div>

        {/* Rodapé do Mockup */}
        <div className="flex items-center justify-between text-[10px] text-emerald-200/90 font-medium relative z-10 pt-1 border-t border-emerald-800/60">
          <span>Diversifique suas dinâmicas</span>
          <span className="font-bold text-emerald-300">Sem preparar do zero</span>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-slate-200/80">
      <div className="max-w-[1140px] mx-auto">
        {/* Header da Seção de Bônus */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-300/80 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3.5 shadow-2xs">
            <Gift className="w-3.5 h-3.5 text-amber-600" />
            <span>{BONUSES_SECTION.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {BONUSES_SECTION.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            {BONUSES_SECTION.subtitle}
          </p>
        </div>

        {/* Grid com os 3 Cards de Bônus (3 Colunas no Desktop, empilhado no Celular) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {BONUSES_SECTION.items.map((bonus) => {
            const isBonus1 = bonus.id === 1;
            const isBonus2 = bonus.id === 2;
            const isBonus3 = bonus.id === 3;

            const badgeBg = isBonus1
              ? 'bg-blue-600 text-white'
              : isBonus2
              ? 'bg-amber-600 text-white'
              : 'bg-emerald-600 text-white';

            const borderHover = isBonus1
              ? 'hover:border-blue-400'
              : isBonus2
              ? 'hover:border-amber-400'
              : 'hover:border-emerald-400';

            return (
              <div
                key={bonus.id}
                className={`bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${borderHover} group relative`}
              >
                <div>
                  {/* Mockup Ilustrativo ou Imagem Real do Bônus */}
                  <div className="mb-5 overflow-hidden rounded-2xl">
                    {renderIllustrativeMockup(bonus)}
                  </div>

                  {/* Header do Card com Badge e Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-2xs ${badgeBg}`}>
                      {bonus.badge}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      {bonus.tag}
                    </span>
                  </div>

                  {/* Nome do Bônus em Destaque */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2.5 group-hover:text-blue-900 transition-colors">
                    {bonus.title}
                  </h3>

                  {/* Descrição Curta e Fácil de Ler */}
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-5">
                    {bonus.description}
                  </p>

                  {/* Pontos de Destaque / Itens do Bônus */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-4">
                    {bonus.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rodapé do Card */}
                <div className="pt-3 border-t border-slate-100 text-center">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Incluso no Plano Completo (R$ 26,90)
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chamada para Ação para conferir o plano com bônus na seção de oferta */}
        {onScrollToPricing && (
          <div className="text-center mt-12 sm:mt-14">
            <button
              type="button"
              onClick={onScrollToPricing}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-6 py-3 rounded-full transition-all cursor-pointer shadow-xs"
            >
              <span>Ver oferta completa com todos os 3 bônus</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
