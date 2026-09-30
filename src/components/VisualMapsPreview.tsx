import React from 'react';
import { Check, Users } from 'lucide-react';

interface MapItem {
  mapNumber: string;
  imageUrl: string;
}

interface MapCategory {
  id: string;
  icon: string;
  coupleBadge: string;
  title: string;
  subtitle: string;
  direction: 'left' | 'right';
  maps: MapItem[];
}

interface VisualMapsPreviewProps {
  onScrollToPlans: () => void;
}

// Subcomponent: Infinite Loop Marquee Carousel for each category of maps (pure images only)
const InfiniteCategoryCarousel: React.FC<{
  category: MapCategory;
}> = ({ category }) => {
  // We duplicate the 5 maps to create a continuous track
  // Set of 10 items in part A, and set of 10 items in part B for a seamless 50% translation loop
  const repeatedMaps = [...category.maps, ...category.maps];

  const renderCard = (map: MapItem, key: string) => (
    <div
      key={key}
      className="w-[180px] sm:w-[220px] md:w-[250px] shrink-0 select-none flex items-center justify-center"
    >
      <img
        src={map.imageUrl}
        alt="Mapa visual financeiro"
        className="w-full h-auto object-contain rounded-2xl drop-shadow-md block pointer-events-none"
        loading="lazy"
      />
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Category Title & Badge */}
      <div className="text-center px-2 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-2 mb-1 text-center max-w-full">
          <span className="text-2xl shrink-0">{category.icon}</span>
          <h3 className="text-lg sm:text-2xl font-bold text-[#162C22] font-serif text-center leading-snug">
            {category.title}
          </h3>
        </div>
        <div className="flex items-center justify-center gap-2 flex-wrap text-xs sm:text-sm text-[#465E52] text-center">
          <span>{category.subtitle}</span>
          <span className="inline-flex items-center gap-1 bg-[#DEE8E2] text-[#1E4D38] px-2 py-0.5 rounded text-xs font-semibold">
            {category.coupleBadge}
          </span>
        </div>
      </div>

      {/* Infinite Loop Carousel Track (Continuous loop without pause) */}
      <div className="relative w-full overflow-hidden py-2 pointer-events-none">
        {/* Left and Right gradient fades for clean edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-10 bg-gradient-to-r from-[#F3F1EA] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-10 bg-gradient-to-l from-[#F3F1EA] to-transparent" />

        <div
          className={`flex w-max ${
            category.direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
          }`}
        >
          {/* Part A (10 items) */}
          <div className="flex shrink-0 gap-4 sm:gap-5 pr-4 sm:pr-5 items-stretch">
            {repeatedMaps.map((map, i) => renderCard(map, `a-${i}`))}
          </div>
          {/* Part B (10 items - identical copy for seamless loop) */}
          <div className="flex shrink-0 gap-4 sm:gap-5 pr-4 sm:pr-5 items-stretch">
            {repeatedMaps.map((map, i) => renderCard(map, `b-${i}`))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const VisualMapsPreview: React.FC<VisualMapsPreviewProps> = ({ onScrollToPlans }) => {
  const mapCategories: MapCategory[] = [
    {
      id: 'organizacao',
      icon: '🗺️',
      coupleBadge: '👨‍👩‍👧 Casal & Família',
      title: 'Mapas de Organização',
      subtitle: 'Entenda para onde o dinheiro do casal está indo e alinhe o orçamento',
      direction: 'left', // Alternando: Esquerda
      maps: [
        { mapNumber: '01', imageUrl: 'https://i.imgur.com/LPpwcKX.jpeg' },
        { mapNumber: '02', imageUrl: 'https://i.imgur.com/QqiKF8R.jpeg' },
        { mapNumber: '03', imageUrl: 'https://i.imgur.com/kYiwgOK.jpeg' },
        { mapNumber: '04', imageUrl: 'https://i.imgur.com/k3HVsxP.jpeg' },
        { mapNumber: '05', imageUrl: 'https://i.imgur.com/zTI8tz8.jpeg' },
      ],
    },
    {
      id: 'dividas',
      icon: '💳',
      coupleBadge: '👫 Parceria Financeira',
      title: 'Mapas de Dívidas',
      subtitle: 'Coloque ordem no que vocês devem e saiam do aperto juntos',
      direction: 'right', // Alternando: Direita
      maps: [
        { mapNumber: '11', imageUrl: 'https://i.imgur.com/S5UxSj9.jpeg' },
        { mapNumber: '12', imageUrl: 'https://i.imgur.com/ZTM4whW.jpeg' },
        { mapNumber: '13', imageUrl: 'https://i.imgur.com/rdlqG3j.jpeg' },
        { mapNumber: '14', imageUrl: 'https://i.imgur.com/0tqCwaw.jpeg' },
        { mapNumber: '15', imageUrl: 'https://i.imgur.com/RBFJCIb.jpeg' },
      ],
    },
    {
      id: 'reserva',
      icon: '🛡️',
      coupleBadge: '👨‍👩‍👧 Futuro dos Filhos',
      title: 'Mapas de Reserva',
      subtitle: 'Construa a segurança financeira do lar e o colchão dos filhos',
      direction: 'left', // Alternando: Esquerda
      maps: [
        { mapNumber: '21', imageUrl: 'https://i.imgur.com/3GZGuF1.jpeg' },
        { mapNumber: '22', imageUrl: 'https://i.imgur.com/Gb3qIJ7.jpeg' },
        { mapNumber: '23', imageUrl: 'https://i.imgur.com/ugG4UNf.jpeg' },
        { mapNumber: '24', imageUrl: 'https://i.imgur.com/xLuAdyQ.jpeg' },
        { mapNumber: '25', imageUrl: 'https://i.imgur.com/Gps9OGE.jpeg' },
      ],
    },
    {
      id: 'investimentos',
      icon: '📈',
      coupleBadge: '👫 Investindo a Dois',
      title: 'Mapas de Investimentos',
      subtitle: 'Perca o medo de investir e comece a multiplicar o patrimônio do casal',
      direction: 'right', // Alternando: Direita
      maps: [
        { mapNumber: '31', imageUrl: 'https://i.imgur.com/Rh1VTuF.jpeg' },
        { mapNumber: '32', imageUrl: 'https://i.imgur.com/Zl4Iik8.jpeg' },
        { mapNumber: '33', imageUrl: 'https://i.imgur.com/xbkiREd.jpeg' },
        { mapNumber: '34', imageUrl: 'https://i.imgur.com/XEvKVMc.jpeg' },
        { mapNumber: '35', imageUrl: 'https://i.imgur.com/Ez5At2B.jpeg' },
      ],
    },
    {
      id: 'futuro',
      icon: '👨‍👩‍👧',
      coupleBadge: '🤍 Paz no Casamento',
      title: 'Mapas de Futuro & Convivência',
      subtitle: 'Preparem os próximos 10, 20 ou 30 anos sem brigas por dinheiro',
      direction: 'left', // Alternando: Esquerda
      maps: [
        { mapNumber: '41', imageUrl: 'https://i.imgur.com/Nga1yPp.jpeg' },
        { mapNumber: '42', imageUrl: 'https://i.imgur.com/HcnckvA.jpeg' },
        { mapNumber: '43', imageUrl: 'https://i.imgur.com/fbqkBkE.jpeg' },
        { mapNumber: '44', imageUrl: 'https://i.imgur.com/G71eYgH.jpeg' },
        { mapNumber: '45', imageUrl: 'https://i.imgur.com/icHWD1V.jpeg' },
      ],
    },
  ];

  return (
    <section className="py-16 px-3 sm:px-6 bg-[#F3F1EA] border-t border-[#E5E2D8] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E3EBE6] text-[#1E4D38] text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" /> Metodologia Visual Prática a Dois
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14261E] font-serif tracking-tight">
            Um mapa visual para cada etapa da sua vida financeira
          </h2>
          <p className="text-sm sm:text-base text-[#4F685B] mt-2">
            Veja os mapas de cada etapa abaixo adaptados para casais e famílias
          </p>
        </div>

        {/* 5 Carousels with Infinite Loop and Alternating Directions */}
        <div className="space-y-12 sm:space-y-16">
          {mapCategories.map((cat) => (
            <InfiniteCategoryCarousel key={cat.id} category={cat} />
          ))}
        </div>

        {/* "O que cada mapa possui" card */}
        <div className="mt-20 max-w-xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-[#14261E] font-serif mb-6">
            O que cada mapa possui
          </h3>

          <div className="space-y-3 text-left mb-8">
            <div className="bg-white rounded-xl p-4 shadow-xs border border-[#E3DDD1] flex items-center gap-3">
              <div className="w-5 h-5 rounded-sm bg-[#227B4E] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <p className="text-sm sm:text-base text-[#1E3328] font-medium">
                <strong>Passo a passo visual</strong> — vocês entendem de forma simples e direta
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-xs border border-[#E3DDD1] flex items-center gap-3">
              <div className="w-5 h-5 rounded-sm bg-[#227B4E] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <p className="text-sm sm:text-base text-[#1E3328] font-medium">
                <strong>Linguagem simples</strong> — sem termos técnicos que ninguém explica
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-xs border border-[#E3DDD1] flex items-center gap-3">
              <div className="w-5 h-5 rounded-sm bg-[#227B4E] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <p className="text-sm sm:text-base text-[#1E3328] font-medium">
                <strong>Consulta rápida</strong> — encontrem o que precisam em segundos
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-xs border border-[#E3DDD1] flex items-center gap-3">
              <div className="w-5 h-5 rounded-sm bg-[#227B4E] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <p className="text-sm sm:text-base text-[#1E3328] font-medium">
                <strong>Use quantas vezes quiser</strong> — é de vocês, para sempre
              </p>
            </div>
          </div>

          {/* Golden CTA Button */}
          <div className="max-w-md mx-auto">
            <button
              onClick={onScrollToPlans}
              className="w-full bg-[#E5A83B] hover:bg-[#D4982B] active:scale-[0.99] text-[#15231B] font-bold text-base sm:text-lg uppercase tracking-wide py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center cursor-pointer border-t border-[#FEE199]"
            >
              <span>QUERO ME ORGANIZAR AGORA</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
