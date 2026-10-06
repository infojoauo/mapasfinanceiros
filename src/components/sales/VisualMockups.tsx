import React from 'react';
import { Microscope, Atom, Dna, Globe, Sparkles, BookOpen, FileCheck, CheckCircle2 } from 'lucide-react';

interface MockupBundleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const MockupBundle: React.FC<MockupBundleProps> = ({ className = '', size = 'md' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/40 via-teal-200/30 to-green-300/40 rounded-full blur-3xl -z-10 scale-95" />

      {/* Main Kit Mockup Graphic */}
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] mx-auto py-4">
        {/* Shadow floor */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-slate-900/15 rounded-full blur-md" />

        {/* Layer 1: Left Background Book - Planner de Aulas */}
        <div className="absolute -left-2 sm:left-2 top-8 w-32 sm:w-44 h-48 sm:h-64 bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-950 rounded-xl shadow-xl -rotate-12 border-2 border-teal-500/40 overflow-hidden text-white p-3 sm:p-4 flex flex-col justify-between transform transition-transform hover:-rotate-6 hover:scale-105 duration-300">
          <div className="flex items-center justify-between border-b border-teal-600/60 pb-1">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-teal-200">BÔNUS</span>
            <BookOpen className="w-3.5 h-3.5 text-teal-300" />
          </div>
          <div className="text-center my-auto">
            <p className="text-[10px] sm:text-xs font-black uppercase text-teal-100 leading-tight">PLANNER DE AULAS</p>
            <p className="text-[8px] sm:text-[9px] text-teal-300 font-medium">Ciências 6º ao 9º</p>
          </div>
          <div className="bg-teal-900/80 rounded py-1 px-1.5 text-center text-[8px] font-bold text-teal-200">
            PDF IMPRIMÍVEL
          </div>
        </div>

        {/* Layer 2: Right Background Book - Gabarito Completo */}
        <div className="absolute -right-2 sm:right-2 top-6 w-32 sm:w-44 h-48 sm:h-64 bg-gradient-to-br from-blue-800 via-indigo-900 to-slate-950 rounded-xl shadow-xl rotate-12 border-2 border-blue-500/40 overflow-hidden text-white p-3 sm:p-4 flex flex-col justify-between transform transition-transform hover:rotate-6 hover:scale-105 duration-300">
          <div className="flex items-center justify-between border-b border-blue-600/60 pb-1">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-blue-200">BÔNUS</span>
            <FileCheck className="w-3.5 h-3.5 text-blue-300" />
          </div>
          <div className="text-center my-auto">
            <p className="text-[10px] sm:text-xs font-black uppercase text-blue-100 leading-tight">GABARITO COMPLETO</p>
            <p className="text-[8px] sm:text-[9px] text-blue-300 font-medium">Respostas Comentadas</p>
          </div>
          <div className="bg-blue-950/80 rounded py-1 px-1.5 text-center text-[8px] font-bold text-blue-200">
            CORREÇÃO RÁPIDA
          </div>
        </div>

        {/* Layer 3: Central Foreground Book - 120 ATIVIDADES VISUAIS DE CIÊNCIAS */}
        <div className="relative mx-auto w-48 sm:w-60 h-64 sm:h-80 bg-gradient-to-br from-emerald-600 via-emerald-800 to-slate-950 rounded-2xl shadow-2xl border-4 border-emerald-400/80 overflow-hidden text-white p-4 sm:p-5 flex flex-col justify-between z-10 transform transition-transform hover:scale-105 duration-300">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />

          {/* Top header on book */}
          <div className="relative flex items-center justify-between border-b border-emerald-500/50 pb-2">
            <div className="flex items-center gap-1.5">
              <Microscope className="w-4 h-4 text-emerald-300" />
              <span className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-emerald-200">
                ENSINO FUNDAMENTAL
              </span>
            </div>
            <span className="bg-amber-400 text-slate-950 text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase">
              BNCC
            </span>
          </div>

          {/* Center Title Badge */}
          <div className="relative text-center my-auto py-1">
            <div className="inline-block bg-white text-emerald-950 font-black text-2xl sm:text-4xl px-3 py-1 rounded-xl shadow-lg border-2 border-emerald-300 tracking-tight leading-none mb-2">
              +120
            </div>
            <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-white leading-tight">
              ATIVIDADES VISUAIS
            </h3>
            <p className="text-xs sm:text-sm font-extrabold uppercase text-emerald-300 tracking-widest mt-0.5">
              DE CIÊNCIAS
            </p>
            <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/30 border border-emerald-400/50 text-[9px] sm:text-[10px] font-bold text-emerald-100">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>DO 6º AO 9º ANO</span>
            </div>
          </div>

          {/* Icons Bar */}
          <div className="relative flex items-center justify-around py-1.5 px-2 bg-emerald-950/60 rounded-xl border border-emerald-500/30 text-emerald-300 text-[10px]">
            <Dna className="w-4 h-4" />
            <Atom className="w-4 h-4" />
            <Globe className="w-4 h-4" />
            <Microscope className="w-4 h-4" />
          </div>

          {/* Bottom tag */}
          <div className="relative text-center pt-1 border-t border-emerald-600/40">
            <span className="text-[9px] sm:text-[10px] font-bold text-emerald-200 uppercase tracking-wider">
              PRONTO PARA IMPRIMIR EM PDF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
