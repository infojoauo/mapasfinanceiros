import React from 'react';
import { PRODUCT_NAME } from '../../data/salesPageConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081226] text-slate-400 text-center py-12 px-5 text-xs sm:text-[13px] border-t border-slate-800">
      <div className="max-w-[800px] mx-auto space-y-4">
        <p className="font-bold text-slate-300 text-sm">
          {PRODUCT_NAME} • Todos os direitos reservados © {currentYear}
        </p>

        <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
          Material pedagógico digital desenvolvido para auxiliar professores no ensino prático de conversação em inglês.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-2 text-slate-500 font-medium">
          <a href="#termos" className="hover:text-slate-300 transition-colors">
            Termos de Uso
          </a>
          <span>•</span>
          <a href="#privacidade" className="hover:text-slate-300 transition-colors">
            Política de Privacidade
          </a>
          <span>•</span>
          <a href="#contato" className="hover:text-slate-300 transition-colors">
            Suporte ao Cliente
          </a>
        </div>

        <p className="text-[11px] text-slate-600 pt-3">
          Este site não possui vínculo comercial com a Meta, Facebook ou Google. Todos os conteúdos são de propriedade de seus respectivos criadores.
        </p>
      </div>
    </footer>
  );
};
