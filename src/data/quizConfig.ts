// ========================================================
// CONFIGURAÇÃO CENTRAL DO QUIZ E DA OFERTA
// Substitua as variáveis abaixo para alterar imagens, links e textos
// ========================================================

// --------------------------------------------------------
// 1. PLACEHOLDERS DE IMAGENS
// Cole aqui as URLs das imagens quando desejar exibi-las.
// Se deixar vazio (""), o sistema exibe automaticamente um placeholder elegante.
// --------------------------------------------------------
export const HERO_IMAGE = "";
export const PROOF_IMAGE = "";
export const MECHANISM_IMAGE = "";
export const PRODUCT_IMAGE = "";
export const GUARANTEE_IMAGE = "";

export const TESTIMONIAL_1_IMAGE = "";
export const TESTIMONIAL_2_IMAGE = "";
export const TESTIMONIAL_3_IMAGE = "";

export const BONUS_IMAGE_1 = "";
export const BONUS_IMAGE_2 = "";
export const BONUS_IMAGE_3 = "";

// Imagens opcionais para a Pergunta 2 (Região do corpo)
export const IMAGE_BARRIGA = "";
export const IMAGE_CINTURA = "";
export const IMAGE_BRACOS = "";
export const IMAGE_PERNAS = "";
export const IMAGE_GLUTEOS = "";
export const IMAGE_CORPO_TODO = "";

// --------------------------------------------------------
// 2. CHECKOUT E LINKS DE CONVERSÃO
// Cole aqui os links de checkout dos planos (ex: Kiwify, Hotmart, Zuptos, etc)
// --------------------------------------------------------
export const CHECKOUT_BASICO_URL = "COLE_AQUI_O_LINK_DO_CHECKOUT_BASICO";
export const CHECKOUT_COMPLETO_URL = "COLE_AQUI_O_LINK_DO_CHECKOUT_COMPLETO";
export const CHECKOUT_UPGRADE_URL = "COLE_AQUI_O_LINK_DO_CHECKOUT_UPGRADE";

// Helper para repassar parâmetros de URL (UTMs, src, etc) para os checkouts preservando tracking
export function buildCheckoutUrl(baseUrl: string): string {
  if (!baseUrl) return '#';
  if (baseUrl.includes('COLE_AQUI')) return '#';
  try {
    const url = new URL(baseUrl, window.location.href);
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.forEach((val, key) => {
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, val);
      }
    });
    return url.toString();
  } catch {
    return baseUrl;
  }
}

// Aliases para compatibilidade retroativa
export const CHECKOUT_BASIC_URL = CHECKOUT_BASICO_URL;
export const CHECKOUT_COMPLETE_URL = CHECKOUT_COMPLETO_URL;
export const CHECKOUT_ESSENTIAL_URL = CHECKOUT_BASICO_URL;

// --------------------------------------------------------
// 3. GARANTIA & CONFIGURAÇÕES GERAIS
// --------------------------------------------------------
export const GUARANTEE_DAYS = 7;
export const BRAND_NAME = "MÉTODO 21 DIAS";
export const BRAND_SUBTITLE = "AVALIAÇÃO DE PERFIL & HÁBITOS";

// --------------------------------------------------------
// 4. PLANOS E PREÇOS COMERCIAIS
// --------------------------------------------------------
export const BASIC_PLAN = {
  name: "PLANO BÁSICO",
  badge: "OPÇÃO DE ENTRADA",
  price: "R$ 12",
  priceNumber: 12,
  cta: "QUERO COMEÇAR POR R$12",
  features: [
    "Rotina de 21 dias",
    "Guia principal",
    "Lista de ingredientes",
    "Checklist diário",
    "Receitas e ideias básicas",
    "Orientações práticas",
  ],
};

export const COMPLETE_PLAN = {
  name: "PLANO COMPLETO",
  badge: "MAIS ESCOLHIDO",
  price: "R$ 29",
  priceNumber: 29,
  cta: "QUERO O PLANO COMPLETO",
  features: [
    "Tudo do Plano Básico",
    "Rotina completa de 21 dias",
    "Guia completo",
    "Lista completa de ingredientes",
    "Checklist diário",
    "Estratégias complementares",
    "20 receitas de shakes",
    "40 sobremesas leves",
    "Materiais extras",
    "Bônus exclusivos",
  ],
};

export const UPGRADE_PLAN = {
  alertBadge: "ESPERE! TEMOS UMA CONDIÇÃO ESPECIAL PARA VOCÊ",
  headline: "LEVE O PLANO COMPLETO POR APENAS R$19",
  subheadline:
    "Você escolheu começar pelo Plano Básico, mas pode desbloquear agora todo o conteúdo do Plano Completo por apenas R$19.",
  price: "R$ 19",
  originalPrice: "R$ 29",
  savingsBadge: "ECONOMIZE R$10",
  cta: "SIM, QUERO O COMPLETO POR R$19",
  declineCta: "Não, quero continuar com o Plano Básico por R$12",
  features: [
    "Tudo do Plano Básico",
    "20 receitas de shakes",
    "40 sobremesas leves",
    "Estratégias complementares",
    "Materiais extras",
    "Bônus exclusivos",
  ],
};

// Aliases para compatibilidade retroativa
export const PLAN_ESSENTIAL = BASIC_PLAN;
export const PLAN_BASIC = BASIC_PLAN;
export const PLAN_COMPLETE = COMPLETE_PLAN;

// --------------------------------------------------------
// 5. BÔNUS EXCLUSIVOS (PLANO COMPLETO)
// --------------------------------------------------------
export const BONUSES = [
  {
    id: 1,
    title: "30 Estratégias para Facilitar sua Rotina",
    desc: "Pequenos ajustes de organização que poupam tempo e evitam desvios no seu dia a dia.",
    imageKey: "BONUS_IMAGE_1",
    imageUrl: BONUS_IMAGE_1,
  },
  {
    id: 2,
    title: "20 Shakes Práticos",
    desc: "Combinações refrescantes e nutritivas para saciar a fome entre refeições com praticidade.",
    imageKey: "BONUS_IMAGE_2",
    imageUrl: BONUS_IMAGE_2,
  },
  {
    id: 3,
    title: "40 Sobremesas Leves",
    desc: "Opções deliciosas para momentos de vontade de doce sem quebrar a sua consistência.",
    imageKey: "BONUS_IMAGE_3",
    imageUrl: BONUS_IMAGE_3,
  },
];

// --------------------------------------------------------
// 6. DEPOIMENTOS (PLACEHOLDERS REAIS)
// --------------------------------------------------------
export const TESTIMONIALS = [
  {
    id: 1,
    imageKey: "TESTIMONIAL_1_IMAGE",
    imageUrl: TESTIMONIAL_1_IMAGE,
    quote: "DEPOIMENTO REAL SERÁ INSERIDO AQUI",
    name: "NOME DA ALUNA",
    age: "42 anos",
    result: "Menos inchaço e rotina organizada",
  },
  {
    id: 2,
    imageKey: "TESTIMONIAL_2_IMAGE",
    imageUrl: TESTIMONIAL_2_IMAGE,
    quote: "DEPOIMENTO REAL SERÁ INSERIDO AQUI",
    name: "NOME DA ALUNA",
    age: "36 anos",
    result: "Voltou a vestir roupas que estavam guardadas",
  },
  {
    id: 3,
    imageKey: "TESTIMONIAL_3_IMAGE",
    imageUrl: TESTIMONIAL_3_IMAGE,
    quote: "DEPOIMENTO REAL SERÁ INSERIDO AQUI",
    name: "NOME DA ALUNA",
    age: "49 anos",
    result: "Mais energia e consistência na alimentação",
  },
];

// --------------------------------------------------------
// 7. PERGUNTAS FREQUENTES (FAQ)
// --------------------------------------------------------
export const FAQS = [
  {
    q: "O que eu recebo?",
    a: "Você recebe acesso imediato a um material digital estruturado em 21 dias com orientações de rotina, listas práticas de ingredientes, checklists diários e ideias simples de alimentação.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Logo após a confirmação do pagamento, os dados de acesso são enviados diretamente para o seu e-mail cadastrado e também por WhatsApp.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "O acesso ao conteúdo e materiais é vitalício. Você pode acessar e consultar sempre que quiser, pelo celular ou computador.",
  },
  {
    q: "Preciso seguir uma dieta complicada?",
    a: "Não. A proposta é exatamente o oposto: simplificar sua rotina com ingredientes acessíveis que você já encontra em qualquer feira ou mercado perto de casa.",
  },
  {
    q: "Funciona para qualquer idade?",
    a: "Sim. O método foi pensado para respeitar o ritmo e a rotina de mulheres adultas em diferentes fases da vida, sem imposições agressivas.",
  },
  {
    q: "Posso começar hoje?",
    a: "Sim! Como o material é 100% digital, você já pode começar a organizar seu plano e seus primeiros passos imediatamente.",
  },
];

// --------------------------------------------------------
// 8. RODAPÉ / LINKS LEGAIS
// --------------------------------------------------------
export const FOOTER_LINKS = {
  termsUrl: "#termos",
  privacyUrl: "#privacidade",
  contactUrl: "#contato",
};
