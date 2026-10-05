import React from 'react';
import { Check, X, Sparkles, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface PlansSectionProps {
  onSelectBasicPlan: () => void;
  onSelectCompletePlan: (price?: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({
  onSelectBasicPlan,
  onSelectCompletePlan,
}) => {
  return (
    <section id="ofertas" className="py-14 sm:py-24 px-4 sm:px-6 bg-white border-t border-[#F2E5E8] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FAF0F3] border border-[#F5D8E0] text-[#9E3352] text-xs font-bold uppercase tracking-wider mb-3">
            ESCOLHA SEU PLANO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A161E] font-serif tracking-tight mb-3">
            Comece hoje sua jornada de 21 dias
          </h2>
          <p className="text-xs sm:text-sm text-[#61454F] leading-relaxed">
            Selecione a opção ideal para você. Todos os planos contam com acesso imediato e 7 dias de garantia incondicional.
          </p>
        </div>

        {/* 2 Plans Grid: Complete Plan First on Mobile / Desktop Highlighting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-3xl mx-auto">
          
          {/* PLANO COMPLETO (Mais Escolhido / Maior Percepção de Valor) */}
          <div className="bg-gradient-to-b from-[#FFFDFE] to-[#FFF7F9] rounded-3xl border-2 border-[#D45B7A] p-6 sm:p-8 shadow-xl relative flex flex-col justify-between order-1 md:order-2 transform md:-translate-y-2">
            {/* Best Value Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C24168] via-[#D64E76] to-[#C24168] text-white px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>MAIS ESCOLHIDO • MELHOR CUSTO-BENEFÍCIO</span>
            </div>

            <div>
              <div className="text-center mt-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D161F] font-serif">
                  Protocolo Pele Jovem + Kit Completo
                </h3>
                <p className="text-xs text-[#8C3A52] font-medium mt-0.5">
                  A experiência completa com todos os 6 bônus exclusivos
                </p>
              </div>

              {/* Product Mockup Space */}
              <div className="w-full mb-4">
                <ImagePlaceholder
                  label="[MOCKUP PROTOCOLO + 6 BÔNUS]"
                  subtext="Mockup visual com o Protocolo e todos os 6 bônus"
                  aspect="aspect-[16/10]"
                  badge="KIT COMPLETO"
                />
              </div>

              {/* Price Box */}
              <div className="text-center mb-6 bg-white/90 py-3.5 px-4 rounded-2xl border border-[#F2D6DF] shadow-xs">
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#2A161E] tracking-tight">
                    R$ 29,90
                  </span>
                  <span className="text-xs font-semibold text-[#664953]">à vista</span>
                </div>
                <p className="text-[11px] text-[#4E7D65] font-semibold mt-1">
                  Pagamento único • Sem mensalidade • Acesso vitalício
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 text-xs sm:text-sm text-[#2F1A23] mb-6">
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#4E7D65] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Área de membros completa</strong> com os 21 dias</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#4E7D65] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Aulas e orientações em vídeo</strong> curtas e diretas</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#4E7D65] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Manuais e roteiros em PDF</strong> (Manhã e Noite)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#4E7D65] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Caderno de Checklists diários</strong> de autocuidado</span>
                </div>
                
                {/* 6 Bonuses Highlighted */}
                <div className="p-3 bg-[#FAF0F3] rounded-xl border border-[#F5D8E0] space-y-1.5 mt-2">
                  <p className="text-[11px] font-bold text-[#A63152] uppercase tracking-wider">
                    + TODOS OS 6 BÔNUS EXCLUSIVOS:
                  </p>
                  <p className="text-xs text-[#5E424D]">✓ Bônus 1: Planner de Cuidados com a Pele</p>
                  <p className="text-xs text-[#5E424D]">✓ Bônus 2: Checklist da Rotina de Pele</p>
                  <p className="text-xs text-[#5E424D]">✓ Bônus 3: Guia das Áreas Específicas (Olhos/Colo)</p>
                  <p className="text-xs text-[#5E424D]">✓ Bônus 4: Guia dos Maiores Erros na Rotina</p>
                  <p className="text-xs text-[#5E424D]">✓ Bônus 5: Calendário de Autocuidado</p>
                  <p className="text-xs text-[#5E424D]">✓ Bônus 6: Kit de Rotinas Extras (Pré-Make & Spa)</p>
                </div>
              </div>
            </div>

            {/* Savings Callout & Action Button */}
            <div>
              <div className="text-center text-xs font-bold text-[#8E2848] bg-[#FAF0F3] py-1.5 px-3 rounded-xl border border-[#F5D8E0] mb-3">
                Economia imediata de mais de R$ 240 em bônus
              </div>

              <a
                href="https://app.zuptos.com.br/checkout/10cbb509bde9bf13"
                onClick={() => onSelectCompletePlan('29,90')}
                className="w-full bg-gradient-to-r from-[#C24168] via-[#D64E76] to-[#C24168] hover:from-[#B1355A] hover:to-[#B1355A] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base uppercase tracking-wide py-4 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-white/30 text-center"
              >
                <span>QUERO O PLANO COMPLETO (R$ 29,90)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-[#7A5C66] text-center mt-2 font-medium">
                ✨ Acesso imediato liberado no seu e-mail e WhatsApp
              </p>
            </div>
          </div>

          {/* PLANO BÁSICO */}
          <div className="bg-white rounded-3xl border border-[#E8D4DC] p-6 sm:p-7 shadow-xs relative flex flex-col justify-between order-2 md:order-1">
            <div>
              <div className="text-center mt-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D161F] font-serif">
                  Plano Básico
                </h3>
                <p className="text-xs text-[#7A5D67]">
                  Apenas o programa essencial do Protocolo Pele Jovem
                </p>
              </div>

              {/* Basic Mockup Space */}
              <div className="w-full mb-4">
                <ImagePlaceholder
                  label="[MOCKUP PLANO BÁSICO]"
                  subtext="Mockup visual do guia essencial do Protocolo"
                  aspect="aspect-[16/10]"
                  badge="PLANO BÁSICO"
                />
              </div>

              {/* Price Box */}
              <div className="text-center mb-6 bg-[#FAF6F7] py-3.5 px-4 rounded-2xl border border-[#F0DCE2]">
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#2D161F] tracking-tight">
                    R$ 10,00
                  </span>
                  <span className="text-xs font-semibold text-[#664953]">à vista</span>
                </div>
                <p className="text-[11px] text-[#7A5D67] mt-1">
                  Apenas hoje • Sem mensalidade
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 text-xs sm:text-sm text-[#2F1A23] mb-6">
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#4E7D65] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Área de membros</strong> com os 21 dias</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#4E7D65] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Vídeos e orientações</strong> da rotina</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#4E7D65] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Guia do Protocolo em PDF</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#4E7D65] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Checklist essencial</strong> de hábitos</span>
                </div>
                <div className="flex items-start gap-2.5 text-[#9E828C] opacity-80 pt-2">
                  <X className="w-4 h-4 text-[#BA365B] shrink-0 mt-0.5" />
                  <span>Sem os 6 bônus extras de autocuidado</span>
                </div>
              </div>
            </div>

            {/* Action Button - Triggers Popup Upgrade */}
            <div>
              <button
                type="button"
                onClick={onSelectBasicPlan}
                className="w-full bg-[#FAF0F3] hover:bg-[#F5E2E8] active:scale-[0.99] text-[#7A283E] font-bold text-sm sm:text-base uppercase tracking-wide py-3.5 px-4 rounded-xl shadow-xs hover:shadow-sm transition-all flex items-center justify-center cursor-pointer border border-[#E5C2CC] text-center"
              >
                <span>Quero o Plano Básico por R$ 10,00</span>
              </button>
              <p className="text-[11px] text-[#7A5C66] text-center mt-2 font-medium">
                Acesso imediato liberado no seu e-mail e WhatsApp
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
