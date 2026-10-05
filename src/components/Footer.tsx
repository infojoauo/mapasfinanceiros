import React from 'react';
import { Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 bg-[#1F1015] text-[#A68892] text-center border-t border-[#361E26] text-xs">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2 text-white font-bold text-sm font-serif">
          <span>Protocolo Pele Jovem</span>
          <span className="text-[#C44369]">•</span>
          <span className="font-sans text-xs font-normal text-[#D4AEB9]">
            Jornada Prática de 21 Dias de Autocuidado
          </span>
        </div>

        <p className="max-w-xl mx-auto text-[#8F707A] leading-relaxed text-[11px]">
          Este produto tem finalidade exclusivamente educacional, de organização de rotina diária e autocuidado pessoal. Não substitui consulta, diagnóstico ou acompanhamento dermatológico ou médico profissional. Não promete cura ou eliminação de condições físicas.
        </p>

        <div className="flex items-center justify-center gap-4 text-xs text-[#BA9DA6] flex-wrap pt-2 border-t border-[#311A22]">
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

        <p className="text-[11px] text-[#7A5B65]">
          © {new Date().getFullYear()} Protocolo Pele Jovem — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
