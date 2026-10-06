import React from 'react';
import { PRODUCT_NAME } from '../../data/salesPageConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f2417] text-[#cfe0d7] text-center py-9 px-5 text-xs sm:text-[13px] border-t border-[#0f2417] space-y-2">
      <p>
        <b className="text-white font-black">{PRODUCT_NAME}</b> — Material pedagógico digital para professores.
      </p>
      <p className="opacity-70 text-[11px] sm:text-xs">
        Este produto não faz parte do Facebook ou Google. Todos os direitos reservados.
      </p>
    </footer>
  );
};
