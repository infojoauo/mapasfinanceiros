import React from 'react';
import { Smartphone, Monitor, Video, FileText, CheckSquare, Sparkles } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const MembersAreaSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-t border-[#F2E5E8]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FAF0F3] border border-[#F5D8E0] text-[#9E3352] text-xs font-bold uppercase tracking-wider mb-3">
            AMBIENTE DIGITAL EXCLUSIVO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A161E] font-serif tracking-tight mb-4">
            Uma Área de Membros Moderna, Limpa e Agradável
          </h2>
          <p className="text-sm sm:text-base text-[#61454F] leading-relaxed">
            Nada de plataformas confusas ou links perdidos. Você recebe um acesso direto e seguro para consultar pelo celular, tablet ou computador sempre que precisar.
          </p>
        </div>

        {/* Space for [MOCKUP DA ÁREA DE MEMBROS] */}
        <div className="max-w-3xl mx-auto mb-10">
          <ImagePlaceholder
            label="[MOCKUP DA ÁREA DE MEMBROS]"
            subtext="Imagem mostrando a plataforma digital no celular e computador com os 21 dias organizados"
            aspect="aspect-[16/9]"
            badge="PLATAFORMA DIGITAL"
          />
        </div>

        {/* Features of Members Area */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div className="bg-[#FAF5F7] rounded-xl p-4 border border-[#F0DCE2]">
            <div className="w-10 h-10 rounded-full bg-white text-[#C44369] flex items-center justify-center mx-auto mb-2.5 shadow-xs">
              <Video className="w-5 h-5" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-[#2E1821] mb-1">Vídeos Curtos</h4>
            <p className="text-[11px] text-[#6E535D]">Sem enrolação, direto ao que você precisa fazer</p>
          </div>

          <div className="bg-[#FAF5F7] rounded-xl p-4 border border-[#F0DCE2]">
            <div className="w-10 h-10 rounded-full bg-white text-[#C44369] flex items-center justify-center mx-auto mb-2.5 shadow-xs">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-[#2E1821] mb-1">PDFs para Baixar</h4>
            <p className="text-[11px] text-[#6E535D]">Guias visuais em alta resolução para consultar offline</p>
          </div>

          <div className="bg-[#FAF5F7] rounded-xl p-4 border border-[#F0DCE2]">
            <div className="w-10 h-10 rounded-full bg-white text-[#C44369] flex items-center justify-center mx-auto mb-2.5 shadow-xs">
              <CheckSquare className="w-5 h-5" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-[#2E1821] mb-1">Checklists Fáceis</h4>
            <p className="text-[11px] text-[#6E535D]">Passo a passo matinal e noturno para marcar e acompanhar</p>
          </div>

          <div className="bg-[#FAF5F7] rounded-xl p-4 border border-[#F0DCE2]">
            <div className="w-10 h-10 rounded-full bg-white text-[#C44369] flex items-center justify-center mx-auto mb-2.5 shadow-xs">
              <Smartphone className="w-5 h-5" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-[#2E1821] mb-1">100% no Celular</h4>
            <p className="text-[11px] text-[#6E535D]">Abra na bancada do banheiro enquanto faz seu autocuidado</p>
          </div>
        </div>
      </div>
    </section>
  );
};
