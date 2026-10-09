import React from 'react';
import {
  TESTIMONIALS,
  TESTIMONIALS_GALLERY_IMAGE,
  PRODUCT_NAME,
} from '../../data/salesPageConfig';
import { ImageSlot } from '../common/ImageSlot';
import { Star, MessageCircle, Quote, CheckCircle2, ArrowDown } from 'lucide-react';

interface TestimonialsSectionProps {
  onScrollToPricing: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onScrollToPricing,
}) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3 shadow-2xs">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Depoimentos Reais de Professores</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Quem já aplicou em sala de aula recomenda
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Veja como professores de inglês de todo o Brasil estão economizando tempo de preparação e destravaram a conversação dos seus alunos.
          </p>

          {/* Social Proof Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 pt-6 border-t border-slate-200 text-xs sm:text-sm font-bold text-slate-700">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-900 font-black">4.9 / 5.0</span>
              <span className="text-slate-500 font-normal">(Avaliação média)</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>+2.300 professores satisfeitos</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <div>
                {/* Header do Card com Estrelas e Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100">
                    {item.badge}
                  </span>
                </div>

                {/* Destaque / Frase de Impacto */}
                <div className="mb-3">
                  <span className="inline-block text-xs sm:text-[13px] font-black text-slate-900 bg-slate-100/80 px-2.5 py-1 rounded-md">
                    "{item.highlight}"
                  </span>
                </div>

                {/* Texto do Depoimento */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6 relative">
                  <Quote className="w-6 h-6 text-slate-200 absolute -top-2 -left-2 -z-0 opacity-60" />
                  <span className="relative z-10">{item.comment}</span>
                </p>
              </div>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                {item.avatarUrl && item.avatarUrl.trim().length > 0 ? (
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                    {item.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {item.role} • <span className="text-slate-400">{item.city}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Galeria Opcional de Prints / Mensagens (Vazia conforme solicitado, pronta para o usuário) */}
        {Boolean(TESTIMONIALS_GALLERY_IMAGE) && (
          <div className="max-w-3xl mx-auto mb-12">
            <ImageSlot
              src={TESTIMONIALS_GALLERY_IMAGE}
              alt="Prints de Depoimentos de Professores"
              label="MOCKUP DE PRINTS DO WHATSAPP / FEEDBACKS"
              aspect="aspect-[16/9]"
              className="bg-white border border-slate-200 rounded-2xl shadow-sm"
            />
          </div>
        )}

        {/* CTA direcionando para a escolha das ofertas logo abaixo */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onScrollToPricing}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>QUERO GARANTIR O MEU ACESSO AGORA</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
          <p className="text-[11px] text-slate-500 mt-2 font-medium">
            Escolha abaixo entre a oferta de R$ 10 ou o pacote completo por R$ 26,90
          </p>
        </div>
      </div>
    </section>
  );
};
