import React, { useState, useRef } from 'react';
import { HERO_VIDEO_URL, HERO_MOCKUP_IMAGE } from '../../data/salesPageConfig';
import { ImageSlot } from '../common/ImageSlot';
import { Video, Play } from 'lucide-react';

interface HeroSectionProps {
  onScrollToPricing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPricing }) => {
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const bullets = [
    '120 páginas A4 prontas para imprimir',
    'Conteúdos organizados do 6º ao 9º ano',
    'Cabeçalho com escola, aluno, turma, série, data e professor',
    'Ideal para aula, revisão, reforço, AEE e tarefa de casa',
    'Plano completo com gabarito e bônus exclusivos',
  ];

  // Identifica se é um link de embed (YouTube, Vimeo, etc.)
  const isEmbedVideo =
    HERO_VIDEO_URL &&
    (HERO_VIDEO_URL.includes('youtube.com') ||
      HERO_VIDEO_URL.includes('youtu.be') ||
      HERO_VIDEO_URL.includes('vimeo.com') ||
      HERO_VIDEO_URL.includes('pandavideo'));

  return (
    <section className="bg-[#faf9f1] pt-6 pb-12 sm:pt-8 sm:pb-14 px-4 sm:px-6 text-center">
      <div className="max-w-[1080px] mx-auto">
        {/* Eyebrow Pill */}
        <span className="inline-block bg-[#7ff08d] text-[#0b3d1a] font-extrabold text-xs sm:text-[13px] px-5 py-2 rounded-full mb-5 tracking-[0.3px] shadow-2xs">
          🔒 COMPRA 100% SEGURA E PROTEGIDA
        </span>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-[#13315c] leading-[1.2] tracking-[-0.5px] mb-4 uppercase max-w-[940px] mx-auto">
          +120 ATIVIDADES VISUAIS DE CIÊNCIAS DO 6º AO 9º ANO PRONTAS PARA IMPRIMIR E APLICAR
        </h1>

        {/* Lead Text */}
        <p className="text-base sm:text-lg md:text-[19px] text-[#2f5490] leading-relaxed max-w-[820px] mx-auto mb-6 font-normal">
          Explicações visuais + atividades práticas para ensinar corpo humano, células, solo, água, energia, matéria, ecologia, química e física de forma mais clara, organizada e fácil de entender.
        </p>

        {/* Hero Video Slot (No black borders, natural 9:16 vertical fit, fast start) */}
        <div className="w-full max-w-[340px] sm:max-w-[370px] md:max-w-[390px] mx-auto mb-7">
          {HERO_VIDEO_URL && !videoError ? (
            isEmbedVideo ? (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-[#16a34a]/20 bg-black">
                <iframe
                  src={HERO_VIDEO_URL}
                  title="Vídeo de Apresentação"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#16a34a] bg-transparent">
                <video
                  ref={videoRef}
                  controls
                  playsInline
                  preload="auto"
                  poster="/video-poster.jpg"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover block cursor-pointer"
                  onClick={togglePlay}
                >
                  <source src="/video.mp4" type="video/mp4" />
                  <source src="/video_mobile.mp4" type="video/mp4" />
                  <source src="/CT 05 - ugc (1).mp4" type="video/mp4" />
                  <source src="/video_fast.mp4" type="video/mp4" />
                  <source src="/CT 05 - ugc (1).mov" type="video/quicktime" />
                  Seu navegador não suporta este formato de vídeo.
                </video>

                {/* Botão de Play Chamativo quando pausado */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-all cursor-pointer"
                    title="Clique para assistir"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white flex items-center justify-center shadow-[0_6px_25px_rgba(22,163,74,0.6)] transform hover:scale-105 active:scale-95 transition-transform">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white text-white" />
                    </div>
                  </div>
                )}
              </div>
            )
          ) : HERO_MOCKUP_IMAGE ? (
            <div className="w-full max-w-[560px] mx-auto">
              <ImageSlot
                src={HERO_MOCKUP_IMAGE}
                alt="Capa das 120 Atividades Visuais de Ciências"
                label="[COLE AQUI A IMAGEM PRINCIPAL: HERO_MOCKUP_IMAGE]"
                rounded="rounded-2xl"
              />
            </div>
          ) : (
            /* Guia visual caso o vídeo ainda não tenha sido colocado na pasta public */
            <div className="w-full max-w-[620px] mx-auto p-6 sm:p-8 rounded-2xl border-2 border-dashed border-[#16a34a] bg-[#f0fbf4] text-center shadow-xs">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center mb-3">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#0f2417] mb-1">
                Área reservada para o seu Vídeo
              </h3>
              <p className="text-xs sm:text-sm text-[#4b5d54] mb-3 leading-relaxed">
                Arraste seu arquivo de vídeo diretamente para a pasta <strong className="text-[#0f2417]">public/</strong> (com o nome <code className="bg-white px-2 py-0.5 rounded border border-[#e4ede8] text-[#15803d] font-bold">video.mp4</code>).
              </p>
              <span className="inline-block bg-white text-[#15803d] text-xs font-bold px-3 py-1.5 rounded-full border border-[#16a34a]/30 shadow-2xs">
                ✓ Exibição 100% no formato original (sem corte nenhum)
              </span>
            </div>
          )}
        </div>

        {/* Checks List */}
        <div className="max-w-[640px] mx-auto space-y-2.5 mb-8 text-left">
          {bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#13315c] font-bold">
              <span className="w-6 h-6 rounded-full bg-[#d8f5de] text-[#116b2c] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✔
              </span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="max-w-[520px] mx-auto">
          <button
            type="button"
            onClick={onScrollToPricing}
            className="w-full bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.99] text-white font-black text-base sm:text-[19px] uppercase tracking-wider py-4 sm:py-4.5 px-8 rounded-full shadow-[0_8px_20px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer block text-center"
          >
            QUERO ACESSAR AS 120 ATIVIDADES AGORA
          </button>
          <p className="text-xs sm:text-sm text-[#2f5490] font-bold mt-3.5">
            Você recebe o material na hora, direto no seu e-mail.
          </p>
        </div>
      </div>
    </section>
  );
};
