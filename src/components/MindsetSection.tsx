import React from 'react';
import { HelpCircle, CheckCircle2, Sparkles, XCircle } from 'lucide-react';

export const MindsetSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#FAF6F7] border-t border-[#F2E5E8]">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-[#FCE8ED] border border-[#F5C7D3] text-[#A63152] text-xs font-bold uppercase tracking-wider mb-3">
          UMA NOVA PERSPECTIVA
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A161E] font-serif tracking-tight mb-5">
          O problema nunca foi falta de vontade.
        </h2>

        <p className="text-base sm:text-lg text-[#553C45] leading-relaxed mb-8">
          Muitas mulheres realmente querem cuidar melhor da aparência da pele, mas acabam completamente perdidas entre centenas de produtos recomendados na internet, dicas contraditórias e rotinas de 10 passos que não cabem na vida real.
        </p>

        {/* Comparison Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
          {/* How most women try */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#F0DDE2] shadow-xs">
            <div className="flex items-center gap-2 text-[#BA365B] font-bold text-sm uppercase tracking-wider mb-3">
              <XCircle className="w-5 h-5 shrink-0" />
              <span>O que costuma dar errado</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-[#5B434C]">
              <li className="flex items-start gap-2">
                <span className="text-[#C44369] font-bold">•</span>
                <span>Comprar produtos por impulso sem saber se combinam entre si</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C44369] font-bold">•</span>
                <span>Tentar seguir rotinas complexas e demoradas que cansam rápido</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C44369] font-bold">•</span>
                <span>Não ter um método organizado para a manhã e para a noite</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C44369] font-bold">•</span>
                <span>Desistir na primeira semana por achar que não tem tempo</span>
              </li>
            </ul>
          </div>

          {/* The Protocol Approach */}
          <div className="bg-[#FFFDFE] rounded-2xl p-5 sm:p-6 border-2 border-[#D45B7A] shadow-sm relative">
            <div className="flex items-center gap-2 text-[#4E7D65] font-bold text-sm uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>O caminho do Protocolo</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-[#2F1D24]">
              <li className="flex items-start gap-2">
                <span className="text-[#4E7D65] font-bold">✓</span>
                <span>Aprender a ordem exata de aplicação para potencializar o cuidado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4E7D65] font-bold">✓</span>
                <span>Passos rápidos de menos de 5 minutos que se tornam automáticos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4E7D65] font-bold">✓</span>
                <span>Aproveitar o que você já tem em casa sem desperdício</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4E7D65] font-bold">✓</span>
                <span>Construir consistência diária para uma sensação duradoura de viço</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/90 rounded-2xl p-5 border border-[#ECDCE0] shadow-xs">
          <p className="text-sm sm:text-base text-[#462F37] leading-relaxed">
            ✨ Ter uma pele com aparência bem cuidada não é sobre ter o produto mais caro da farmácia. É sobre <strong>saber o que fazer, na ordem certa, com constância e carinho por você mesma.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
