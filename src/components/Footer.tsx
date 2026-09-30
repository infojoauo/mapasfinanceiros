import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 sm:px-6 bg-[#0E1F18] text-[#8EA69A] text-center border-t border-[#1B362A] text-xs">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2 text-white font-bold text-sm font-serif">
          <span>Finanças para Casais</span>
          <span className="text-[#E5A83B]">•</span>
          <span className="font-sans text-xs font-normal text-[#A3BFB0]">
            50 Mapas Visuais + Plano de Ação
          </span>
        </div>

        <p className="max-w-xl mx-auto text-[#799486] leading-relaxed text-[11px]">
          Este produto tem finalidade exclusivamente educacional e prática de organização pessoal e familiar. Não constitui consultoria financeira individual, promessa de rentabilidade ou recomendação de compra e venda de ativos regulados pela CVM.
        </p>

        <div className="flex items-center justify-center gap-4 text-xs text-[#9BB5A7] flex-wrap pt-2 border-t border-[#183125]">
          <a href="#termos" onClick={(e) => { e.preventDefault(); }} className="hover:text-white transition-colors">
            Termos de Uso
          </a>
          <span>•</span>
          <a href="#privacidade" onClick={(e) => { e.preventDefault(); }} className="hover:text-white transition-colors">
            Políticas de Privacidade
          </a>
          <span>•</span>
          <a href="#contato" onClick={(e) => { e.preventDefault(); }} className="hover:text-white transition-colors">
            Contato e Suporte
          </a>
        </div>

        <p className="text-[11px] text-[#5D7769]">
          © {new Date().getFullYear()} Finanças para Casais — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
