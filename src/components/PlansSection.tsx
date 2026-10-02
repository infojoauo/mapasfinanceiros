import React from 'react';
import { Check, X, Sparkles, ShieldCheck, Gift } from 'lucide-react';

interface PlansSectionProps {
  onSelectBasicPlan: () => void;
  onSelectCompletePlan: (price?: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({
  onSelectBasicPlan,
  onSelectCompletePlan,
}) => {
  return (
    <section id="planos" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#E5E0D5]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#21573D] uppercase block mb-2">
            ESCOLHA SUA OPÇÃO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14261E] font-serif">
            Escolha seu plano
          </h2>
          <p className="text-xs sm:text-sm text-[#526D60] mt-1.5">
            Acesso vitalício, pagamento único e sem nenhuma mensalidade.
          </p>
        </div>

        {/* Two Offer Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* PLANO COMPLETO (Highlighted as MAIS VENDIDO) */}
          <div className="bg-white rounded-2xl border-2 border-[#E5A83B] p-6 sm:p-7 shadow-lg relative flex flex-col justify-between order-1 md:order-2">
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E5A83B] text-[#132219] font-bold text-[11px] sm:text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-sm flex items-center justify-center gap-1.5 whitespace-nowrap text-center">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>MAIS VENDIDO • RECOMENDADO</span>
            </div>

            <div>
              <div className="text-center mt-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#152B20] font-serif">
                  Plano Completo
                </h3>
                <p className="text-xs text-[#5D7668]">
                  O kit definitivo para o casal organizar tudo e nunca mais brigar por dinheiro
                </p>
              </div>

              {/* Kit Completo Mockup Image (sem box por trás, imagem maior) */}
              <div className="w-full flex items-center justify-center my-3 sm:my-4">
                <img 
                  src="https://i.imgur.com/uL8cEEL.png" 
                  alt="Kit Completo Finanças para Casais" 
                  className="w-full max-w-[340px] sm:max-w-[390px] h-auto max-h-[260px] object-contain drop-shadow-xl"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>

              {/* Price */}
              <div className="text-center mb-6 bg-[#FCFBF7] py-3.5 px-4 rounded-xl border border-[#ECE6D8]">
                <p className="text-xs text-[#7A8E83] line-through">
                  de R$ 77,90
                </p>
                <div className="flex items-baseline justify-center gap-1.5 mt-0.5">
                  <span className="text-sm font-semibold text-[#152B20]">por</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#152B20] tracking-tight">
                    R$ 29,90
                  </span>
                  <span className="text-xs font-semibold text-[#152B20]">à vista</span>
                </div>
                <p className="text-[11px] text-[#246B45] font-semibold mt-1">
                  Apenas hoje • Sem mensalidade
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 text-xs sm:text-sm text-[#1F362A] mb-6">
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>50 Mapas Visuais</strong> de finanças completos</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Plano de Ação Completo</strong> passo a passo</span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FFF9ED] p-2 rounded-lg border border-[#F3DFB0]">
                  <span className="text-base shrink-0">🎁</span>
                  <span>
                    <strong>+ 5 Bônus Extras</strong> (Raio-X, Organizador, Bússola, Calculadora do Futuro e Checklist Anti-Briga)
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Acesso vitalício</strong> — consulte quando quiser</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Acesso imediato</strong> no e-mail e WhatsApp</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Suporte prioritário</strong> por WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Savings Callout & Button */}
            <div>
              <div className="text-center text-xs font-bold text-[#8C6010] bg-[#FFF8E8] py-1.5 px-3 rounded-md border border-[#F5DC9C] mb-3">
                Você economiza R$ 148 em bônus, grátis
              </div>

              <a
                href="https://app.zuptos.com.br/checkout/10cbb509bde9bf13"
                onClick={(e) => {
                  if (onSelectCompletePlan) onSelectCompletePlan('29,90');
                }}
                className="w-full bg-[#E5A83B] hover:bg-[#D4982B] active:scale-[0.99] text-[#14231B] font-bold text-sm sm:text-base uppercase tracking-wide py-3.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center cursor-pointer border-t border-[#FEE199] text-center"
              >
                <span>Quero o Plano Completo por R$29,90</span>
              </a>
              <p className="text-[11px] text-[#698275] text-center mt-2">
                Acesso imediato por WhatsApp e e-mail
              </p>
            </div>
          </div>

          {/* PLANO BÁSICO */}
          <div className="bg-white rounded-2xl border border-[#DCD6C7] p-6 sm:p-7 shadow-xs relative flex flex-col justify-between order-2 md:order-1">
            <div>
              <div className="text-center mt-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#152B20] font-serif">
                  Plano Básico
                </h3>
                <p className="text-xs text-[#5D7668]">
                  Ideal para quem quer apenas a versão essencial dos 50 mapas
                </p>
              </div>

              {/* Kit Básico Mockup Image */}
              <div className="w-full flex items-center justify-center my-3 sm:my-4">
                <img 
                  src="https://i.imgur.com/iQjAqs0.png" 
                  alt="Plano Básico - 50 Mapas Visuais" 
                  className="w-full max-w-[320px] sm:max-w-[360px] h-auto max-h-[260px] object-contain drop-shadow-lg"
                  loading="lazy"
                />
              </div>

              {/* Price */}
              <div className="text-center mb-6 bg-[#FCFBF7] py-3.5 px-4 rounded-xl border border-[#ECE6D8]">
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#152B20] tracking-tight">
                    R$ 10,00
                  </span>
                  <span className="text-xs font-semibold text-[#152B20]">à vista</span>
                </div>
                <p className="text-[11px] text-[#556D61] mt-1">
                  Apenas hoje • Sem mensalidade
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 text-xs sm:text-sm text-[#1F362A] mb-6">
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>50 Mapas Visuais</strong> de finanças</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Plano de Ação Completo</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Acesso vitalício</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Acesso imediato</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-sm bg-[#227B4E] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Suporte por WhatsApp</strong></span>
                </div>
                <div className="flex items-start gap-2.5 text-[#889B90] opacity-80 pt-1">
                  <X className="w-4 h-4 text-[#C25858] shrink-0 mt-0.5" />
                  <span>Sem os 5 bônus extras de casal</span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div>
              <button
                onClick={onSelectBasicPlan}
                className="w-full bg-[#E5DEC9] hover:bg-[#D8D0B8] active:scale-[0.99] text-[#2C2317] font-bold text-sm sm:text-base uppercase tracking-wide py-3.5 px-4 rounded-lg shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-center cursor-pointer border border-[#C5BBA4]"
              >
                <span>Quero o Plano Básico por R$10,00</span>
              </button>
              <p className="text-[11px] text-[#698275] text-center mt-2">
                Acesso imediato por WhatsApp e e-mail
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
