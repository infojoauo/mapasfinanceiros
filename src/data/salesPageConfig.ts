// ========================================================
// CONFIGURAÇÃO CENTRAL DA PÁGINA DE VENDAS
// "120 Atividades Visuais de Ciências"
// Substitua as variáveis abaixo para alterar links, imagens e textos
// ========================================================

// --------------------------------------------------------
// 1. CHECKOUTS E LINKS DE CONVERSÃO
// Cole aqui os links de checkout da Kiwify, Hotmart, Eduzz, etc.
// --------------------------------------------------------
export const CHECKOUT_BASICO_URL = "https://app.zuptos.com.br/checkout/a1a5a3427164bc4c";
export const CHECKOUT_COMPLETO_URL = "https://app.zuptos.com.br/checkout/10cbb509bde9bf13";
export const CHECKOUT_UPGRADE_URL = "https://app.zuptos.com.br/checkout/f1b3420a1d383e74";

// Função para repassar dinamicamente UTMs e parâmetros de rastreamento aos checkouts
export function buildCheckoutUrl(baseUrl: string): string {
  if (!baseUrl) return '#oferta';
  if (baseUrl.includes('COLE_AQUI')) return '#oferta';
  try {
    const url = new URL(baseUrl, window.location.href);

    // 1. Captura parâmetros da URL atual
    const currentParams = new URLSearchParams(window.location.search);

    // 2. Salva na sessionStorage para persistência (não perde tracking ao navegar)
    currentParams.forEach((val, key) => {
      try {
        sessionStorage.setItem(`track_${key}`, val);
      } catch {}
    });

    // 3. Aplica todos os parâmetros atuais na URL de checkout
    currentParams.forEach((val, key) => {
      url.searchParams.set(key, val);
    });

    // 4. Recupera parâmetros salvos caso a URL tenha sido limpa
    try {
      for (let i = 0; i < sessionStorage.length; i++) {
        const storageKey = sessionStorage.key(i);
        if (storageKey && storageKey.startsWith('track_')) {
          const paramName = storageKey.replace('track_', '');
          const paramVal = sessionStorage.getItem(storageKey);
          if (paramVal && !url.searchParams.has(paramName)) {
            url.searchParams.set(paramName, paramVal);
          }
        }
      }
    } catch {}

    return url.toString();
  } catch {
    return baseUrl;
  }
}

// --------------------------------------------------------
// 2. VÍDEO E IMAGENS PRINCIPAIS DA HEADLINE (HERO)
// Vídeo otimizado com faststart para carregamento instantâneo
// --------------------------------------------------------
export const HERO_VIDEO_URL = "/video.mp4";
export const HERO_MOCKUP_IMAGE = "";
export const CONTENTS_MOCKUP_IMAGE = "https://i.imgur.com/2VARx0Q.jpeg";
export const GUARANTEE_SEAL_IMAGE = "";

export const PLAN_BASIC_IMAGE = "https://i.imgur.com/W4TqMqw.jpeg";
export const PLAN_COMPLETE_IMAGE = "https://i.imgur.com/mH0kSCW.jpeg";

export const BONUS_1_IMAGE = "https://i.imgur.com/rGFnEqr.jpeg";
export const BONUS_2_IMAGE = "https://i.imgur.com/ioeq5M7.jpeg";
export const BONUS_3_IMAGE = "https://i.imgur.com/2zG2iNm.jpeg";
export const BONUS_4_IMAGE = "https://i.imgur.com/9r4z6oJ.jpeg";

export const PRODUCT_NAME = "120 Atividades Visuais de Ciências";
export const GUARANTEE_DAYS = 15;

// --------------------------------------------------------
// 3. PRÉVIAS DAS PÁGINAS DE ATIVIDADES (CARROSSEL EM LOOP INFINITO)
// 18 imagens de atividades práticas para o carrossel
// --------------------------------------------------------
export const CAROUSEL_IMAGES = [
  { id: 1, title: "Atividade 1 — Ciências Visuais", url: "https://i.imgur.com/9S9lSFC.jpeg" },
  { id: 2, title: "Atividade 2 — Ciências Visuais", url: "https://i.imgur.com/JZKmgzu.jpeg" },
  { id: 3, title: "Atividade 3 — Ciências Visuais", url: "https://i.imgur.com/365swcx.jpeg" },
  { id: 4, title: "Atividade 4 — Ciências Visuais", url: "https://i.imgur.com/oB584CY.jpeg" },
  { id: 5, title: "Atividade 5 — Ciências Visuais", url: "https://i.imgur.com/71VM9kj.jpeg" },
  { id: 6, title: "Atividade 6 — Ciências Visuais", url: "https://i.imgur.com/Kb8RRIy.jpeg" },
  { id: 7, title: "Atividade 7 — Ciências Visuais", url: "https://i.imgur.com/khUAeV1.jpeg" },
  { id: 8, title: "Atividade 8 — Ciências Visuais", url: "https://i.imgur.com/oKN0DLV.jpeg" },
  { id: 9, title: "Atividade 9 — Ciências Visuais", url: "https://i.imgur.com/f3aUiIC.jpeg" },
  { id: 10, title: "Atividade 10 — Ciências Visuais", url: "https://i.imgur.com/Phxr53v.jpeg" },
  { id: 11, title: "Atividade 11 — Ciências Visuais", url: "https://i.imgur.com/F8UOZjI.jpeg" },
  { id: 12, title: "Atividade 12 — Ciências Visuais", url: "https://i.imgur.com/KrIBnJH.jpeg" },
  { id: 13, title: "Atividade 13 — Ciências Visuais", url: "https://i.imgur.com/SKpT2Uy.jpeg" },
  { id: 14, title: "Atividade 14 — Ciências Visuais", url: "https://i.imgur.com/OfYOg2C.jpeg" },
  { id: 15, title: "Atividade 15 — Ciências Visuais", url: "https://i.imgur.com/Yga53qu.jpeg" },
  { id: 16, title: "Atividade 16 — Ciências Visuais", url: "https://i.imgur.com/7l1Xnly.jpeg" },
  { id: 17, title: "Atividade 17 — Ciências Visuais", url: "https://i.imgur.com/ixDcobD.jpeg" },
  { id: 18, title: "Atividade 18 — Ciências Visuais", url: "https://i.imgur.com/gK4PBJd.jpeg" },
];

export const ACTIVITY_PAGES = CAROUSEL_IMAGES.map((img) => ({
  id: img.id,
  title: img.title,
  imageKey: `ACTIVITY_${img.id}_IMAGE`,
  imageUrl: img.url,
}));

// --------------------------------------------------------
// 4. PLANOS E PREÇOS
// --------------------------------------------------------
export const BASIC_PLAN = {
  name: "Plano Básico",
  originalPrice: "R$ 47,90",
  price: "R$ 10,00",
  priceNumber: 10.00,
  saveBadge: "Você economiza R$ 37,90",
  cta: "QUERO SOMENTE O BÁSICO",
  features: [
    "120 Atividades Visuais de Ciências",
    "PDF pronto para imprimir",
    "Conteúdos do 6º ao 9º ano",
    "Atividades com cabeçalho completo",
    "Uso em sala, reforço, revisão e tarefa",
  ],
};

export const COMPLETE_PLAN = {
  name: "Plano Completo",
  badge: "⚡ MAIS VENDIDO • 3x mais conteúdo",
  originalPrice: "R$ 97,00",
  price: "R$ 27,90",
  priceNumber: 27.90,
  saveBadge: "Você economiza R$ 69,10",
  cta: "OBTER O PLANO COMPLETO",
  features: [
    "120 Atividades Visuais de Ciências",
    "PDF pronto para imprimir",
    "Cabeçalho completo em todas as páginas",
    "Organizadas do 6º ao 9º ano",
    "Pode imprimir quantas vezes quiser",
    "🎁 Bônus #1 - Gabarito Completo",
    "🎁 Bônus #2 - Planner de Aulas",
    "🎁 Bônus #3 - Mini Simulados",
    "🎁 Bônus #4 - Cartazes Visuais",
    "Acesso vitalício",
    "Garantia de 15 dias",
    "Acesso imediato por e-mail",
  ],
};

// --------------------------------------------------------
// 4.1. POPUP DE UPGRADE DO PLANO BÁSICO (OFERTA EXCLUSIVA R$17,90)
// Abre ao clicar em "QUERO SOMENTE O BÁSICO"
// --------------------------------------------------------
export const UPGRADE_PLAN = {
  tag: "OFERTA EXCLUSIVA",
  title: "Espera!",
  sub: "Leve o Plano Completo com desconto exclusivo",
  copy: "Como você escolheu o Básico por R$10, liberamos uma condição especial no Plano Completo só agora.",
  originalPrice: "R$ 27,90",
  price: "R$ 17,90",
  priceOnce: "pagamento único • acesso vitalício",
  listTitle: "O que você ganha a mais no Completo:",
  ctaYes: "SIM! QUERO O COMPLETO POR R$17,90",
  ctaNo: "Não, quero só o Básico por R$10",
  features: [
    "120 Atividades Visuais de Ciências",
    "Gabarito Completo",
    "Planner de Aulas de Ciências",
    "Mini Simulados de Ciências",
    "Cartazes Visuais de Ciências",
    "Acesso vitalício ao material",
    "Garantia de 15 dias",
    "Acesso imediato por e-mail",
  ],
};

// --------------------------------------------------------
// 5. 4 BÔNUS EXCLUSIVOS
// --------------------------------------------------------
export const BONUSES = [
  {
    id: 1,
    badge: "BÔNUS #1",
    title: "Gabarito Completo",
    desc: "Um arquivo organizado com as respostas das atividades para facilitar a correção e economizar tempo.",
    originalPrice: "R$27",
    imageKey: "BONUS_1_IMAGE",
    imageUrl: BONUS_1_IMAGE,
  },
  {
    id: 2,
    badge: "BÔNUS #2",
    title: "Planner de Aulas de Ciências",
    desc: "Um planner simples e prático para organizar conteúdos, turmas, datas, objetivos e atividades.",
    originalPrice: "R$27",
    imageKey: "BONUS_2_IMAGE",
    imageUrl: BONUS_2_IMAGE,
  },
  {
    id: 3,
    badge: "BÔNUS #3",
    title: "Mini Simulados de Ciências",
    desc: "Questões extras para revisar conteúdos importantes do 6º ao 9º ano.",
    originalPrice: "R$27",
    imageKey: "BONUS_3_IMAGE",
    imageUrl: BONUS_3_IMAGE,
  },
  {
    id: 4,
    badge: "BÔNUS #4",
    title: "Cartazes Visuais de Ciências",
    desc: "Cartazes educativos para reforçar conceitos em sala, mural, revisão rápida ou complemento das explicações.",
    originalPrice: "R$27",
    imageKey: "BONUS_4_IMAGE",
    imageUrl: BONUS_4_IMAGE,
  },
];

// --------------------------------------------------------
// 5.1. DEPOIMENTOS DE CLIENTES / PROFESSORAS
// --------------------------------------------------------
export const TESTIMONIALS = [
  {
    id: 1,
    imageUrl: "https://i.imgur.com/qhLHeGP.jpeg",
    alt: "Depoimento de professora aprovando as atividades de ciências",
  },
  {
    id: 2,
    imageUrl: "https://i.imgur.com/UKuXfSc.jpeg",
    alt: "Feedback de educadora utilizando o material em sala de aula",
  },
  {
    id: 3,
    imageUrl: "https://i.imgur.com/f7GWvFZ.jpeg",
    alt: "Avaliação positiva das atividades visuais",
  },
  {
    id: 4,
    imageUrl: "https://i.imgur.com/LFGspim.jpeg",
    alt: "Comentário de professora elogiando a praticidade e visual",
  },
  {
    id: 5,
    imageUrl: "https://i.imgur.com/PsTVdiF.jpeg",
    alt: "Relato de economia de tempo na preparação de aulas",
  },
  {
    id: 6,
    imageUrl: "https://i.imgur.com/4RiVUHQ.jpeg",
    alt: "Depoimento sobre o engajamento dos alunos com o material",
  },
];

// --------------------------------------------------------
// 6. PERGUNTAS FREQUENTES (FAQ)
// --------------------------------------------------------
export const FAQS = [
  {
    q: "O material é físico ou digital?",
    a: "O material é 100% digital em formato PDF de alta resolução. Você recebe os arquivos diretamente no seu e-mail para baixar e imprimir quando e onde quiser.",
  },
  {
    q: "Para quais anos serve?",
    a: "Foi desenvolvido especialmente para os conteúdos de Ciências dos Anos Finais do Ensino Fundamental: 6º, 7º, 8º e 9º ano.",
  },
  {
    q: "Qual é o formato do material?",
    a: "Todos os arquivos estão no formato padrão PDF em tamanho A4, com excelente qualidade gráfica, prontos para qualquer impressora.",
  },
  {
    q: "Vem com gabarito de respostas?",
    a: "Sim! No Plano Completo você recebe como bônus o Gabarito Completo com as respostas de todas as atividades.",
  },
  {
    q: "Posso imprimir quantas vezes quiser?",
    a: "Sim! O acesso é vitalício. Você pode baixar e imprimir quantas cópias precisar para todas as suas turmas ao longo dos anos letivos.",
  },
  {
    q: "As atividades têm cabeçalho?",
    a: "Sim! Todas as 120 páginas já possuem cabeçalho padronizado com espaço para escola, aluno, turma, série, data e professor.",
  },
  {
    q: "Tem garantia?",
    a: "Sim, você tem 15 dias de garantia incondicional. Se não gostar do material por qualquer motivo, devolvemos 100% do seu dinheiro.",
  },
  {
    q: "E se eu não gostar?",
    a: "Basta nos enviar um e-mail ou mensagem dentro do prazo de 15 dias que realizamos o reembolso de forma simples e rápida.",
  },
  {
    q: "Como tenho acesso aos bônus?",
    a: "Ao escolher o Plano Completo, todos os 4 bônus exclusivos serão liberados juntos com o material principal no seu e-mail.",
  },
];
