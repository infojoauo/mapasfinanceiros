import React from 'react';
import { CONTENTS_MOCKUP_IMAGE, PRODUCT_NAME } from '../../data/salesPageConfig';
import { ImageSlot } from '../common/ImageSlot';
import { Check, FileText, Printer, Laptop, Sparkles, BookOpen } from 'lucide-react';

export const ProductContentsSection: React.FC = () => {
  const itemsIncluded = [
    {
      title: 'Cartões Temáticos de Conversação',
      desc: 'Perguntas organizadas por temas reais: viagens, cotidiano, hobbies, planos de futuro, dilemas e opiniões.',
    },
    {
      title: 'Dinâmicas de Pair Work & Speed Talking',
      desc: 'Instruções para dividir duplas e promover rotações ágeis de diálogo em sala.',
    },
    {
      title: 'Cenários de Role-Play Contextualizados',
      desc: 'Simulações da vida real (hotel, aeroporto, compras, entrevistas e pedidos) com papéis definidos.',
    },
    {
      title: 'Prompts Criativos e Storytelling',
      desc: 'Inícios de histórias e situações inusitadas para desafiar a imaginação e a fluência dos estudantes.',
    },
    {
      title: 'Formato Pronto para Impressão e Telas',
      desc: 'Arquivos PDF de alta qualidade configurados tanto para recortar quanto para projetar no Datashow ou reuniões virtuais.',
    },
    {
      title: 'Guia de Aplicação Rápida para o Professor',
      desc: 'Dicas práticas de como quebrar o gelo e conduzir o feedback sem interromper o fluxo de fala dos alunos.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f8fafc] border-t border-slate-200/80">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            O Que Está Incluído
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Tudo o que você recebe no {PRODUCT_NAME}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Materiais didáticos pensados com rigor pedagógico para facilitar seu trabalho e transformar sua experiência em sala.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Mockup do Kit (Vazio conforme solicitado, configurável) */}
          <div className="lg:col-span-5">
            <ImageSlot
              src={CONTENTS_MOCKUP_IMAGE}
              alt="Conteúdo do Kit Speaking"
              label="MOCKUP DOS MATERIAIS INCLUÍDOS"
              aspect="aspect-[4/3]"
              className="shadow-md border border-slate-200 bg-white"
            />
            <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 text-center">
              <span className="text-xs font-bold text-slate-800 block mb-1">
                Acesso Imediato e Vitalício
              </span>
              <p className="text-[11px] text-slate-500">
                Baixe no computador, celular ou tablet e imprima quantas vezes quiser.
              </p>
            </div>
          </div>

          {/* Lista de Itens Incluídos */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {itemsIncluded.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 flex items-start gap-3.5 shadow-2xs"
                >
                  <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/60">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
