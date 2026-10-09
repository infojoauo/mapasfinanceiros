// ========================================================
// CONFIGURAÇÃO CENTRAL DA PÁGINA DE VENDAS
// "Kit Speaking Pronto para Aula" - Materiais Práticos de Conversação em Inglês
// Todas as URLs de imagens estão vazias para você inserir suas próprias imagens!
// ========================================================

// --------------------------------------------------------
// 1. CHECKOUTS E LINKS DE CONVERSÃO (CONFIGURÁVEIS)
// Insira os links reais do seu checkout da Kiwify, Hotmart, Eduzz, etc.
// --------------------------------------------------------
export const CHECKOUT_URL: string = ""; // Link do checkout do Plano Básico (R$ 10,00)
export const CHECKOUT_COMPLETO_URL: string = ""; // Link do checkout do Plano Completo com Bônus (R$ 26,90)
export const SUPPORT_EMAIL: string = "contato@kitspeaking.com.br"; // E-mail de suporte configurável

// Função para repassar dinamicamente UTMs e parâmetros de rastreamento aos checkouts
export function buildCheckoutUrl(baseUrl: string): string {
  if (!baseUrl || baseUrl.trim().length === 0 || baseUrl.includes('COLE_AQUI')) {
    return '#oferta';
  }
  try {
    const url = new URL(baseUrl, window.location.href);

    // 1. Captura parâmetros da URL atual
    const currentParams = new URLSearchParams(window.location.search);

    // 2. Salva na sessionStorage para persistência
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
// 2. IMAGENS DO PRODUTO (TODAS VAZIAS CONFORME SOLICITADO)
// Basta preencher as strings abaixo quando tiver suas imagens prontas!
// --------------------------------------------------------
export const HERO_MOCKUP_IMAGE: string = ""; // Mockup principal do kit para a primeira dobra
export const SOLUTION_MOCKUP_IMAGE: string = ""; // Mockup de apresentação da solução
export const CONTENTS_MOCKUP_IMAGE: string = ""; // Mockup do conteúdo e cartões incluídos
export const OFFER_MOCKUP_IMAGE: string = ""; // Imagem do kit na seção de preço/oferta
export const GUARANTEE_SEAL_IMAGE: string = ""; // Selo de garantia (opcional)
export const TESTIMONIALS_GALLERY_IMAGE: string = ""; // Print ou galeria de depoimentos do WhatsApp/Instagram (opcional)

// --------------------------------------------------------
// 3. DADOS GERAIS DO PRODUTO
// --------------------------------------------------------
export const PRODUCT_NAME = "Kit Speaking Pronto para Aula";
export const HERO_HEADLINE = "Suas Aulas de Inglês com Mais Conversação e Menos Preparação";
export const PRODUCT_SUBTITLE = "Tenha atividades de speaking prontas para aplicar em sala e ajude seus alunos a praticar inglês sem precisar criar cada dinâmica do zero.";
export const GUARANTEE_DAYS = 7;

// --------------------------------------------------------
// 4. VALORES E PLANOS DA OFERTA (CONFIGURÁVEIS)
// Duas ofertas: R$ 10 (Plano Básico) e R$ 26,90 (Plano Completo com Bônus)
// --------------------------------------------------------
export interface PlanFeature {
  text: string;
  isBonus?: boolean;
  isHighlight?: boolean;
}

export interface PricingPlan {
  id: 'basico' | 'completo';
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  originalPrice: string;
  currentPrice: string;
  priceNumber: number;
  installments: string;
  cta: string;
  checkoutUrl: string;
  features: PlanFeature[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basico',
    name: 'Plano Básico',
    tagline: 'Oferta Principal do Kit Speaking',
    badge: 'OFERTA PRINCIPAL',
    isPopular: false,
    originalPrice: 'R$ 37,00',
    currentPrice: 'R$ 10,00',
    priceNumber: 10,
    installments: 'pagamento único',
    cta: 'QUERO O PLANO BÁSICO POR R$ 10',
    checkoutUrl: CHECKOUT_URL,
    features: [
      { text: 'Cartões de Conversação Prontos para Imprimir e Usar' },
      { text: 'Perguntas Dinâmicas para Duplas (Pair Work)' },
      { text: 'Prompts e Temas de Speaking do Cotidiano' },
      { text: 'Arquivos em PDF de Alta Resolução' },
      { text: 'Uso Prático em Sala, Reforço e Aulas Particulares' },
      { text: 'Acesso Vitalício ao material principal' },
      { text: 'Garantia Incondicional de 7 dias' },
    ],
  },
  {
    id: 'completo',
    name: 'Plano Completo + Bônus',
    tagline: 'Oferta Completa com Todos os Bônus Exclusivos',
    badge: 'MAIS ESCOLHIDO • MELHOR CUSTO-BENEFÍCIO',
    isPopular: true,
    originalPrice: 'R$ 67,00',
    currentPrice: 'R$ 26,90',
    priceNumber: 26.90,
    installments: 'ou em até 3x no cartão',
    cta: 'QUERO O PLANO COMPLETO POR R$ 26,90',
    checkoutUrl: CHECKOUT_COMPLETO_URL,
    features: [
      { text: 'TUDO DO PLANO BÁSICO INCLUSO', isHighlight: true },
      { text: 'Coletânea Completa de Cartões (Básico ao Avançado)' },
      { text: 'Dinâmicas para Duplas e Pequenos Grupos (Pair & Group Work)' },
      { text: 'Cenários de Role-Play Contextualizados (Aeroporto, Hotel, Rotina)' },
      { text: 'Guias Rápidos com Instruções de Aplicação para o Professor' },
      { text: 'Arquivos em PDF de Alta Resolução prontos para impressão ou tela' },
      { text: '🎁 BÔNUS #1: Guia Prático de Icebreakers & Warm-ups Rápidos (5 min)', isBonus: true },
      { text: '🎁 BÔNUS #2: Pack de Fichas de Avaliação e Rubricas Orais', isBonus: true },
      { text: '🎁 BÔNUS #3: Cartazes Visuais com Useful Classroom English Phrases', isBonus: true },
      { text: '🎁 BÔNUS #4: Atualizações e Novos Prompts sem custo adicional', isBonus: true },
      { text: 'Acesso Vitalício Completo com Suporte Prioritário', isHighlight: true },
      { text: 'Garantia Incondicional de 7 dias' },
    ],
  },
];

export const PRICING_CONFIG = {
  planName: "Acesso Completo ao Kit Speaking",
  originalPrice: "R$ 67,00",
  currentPrice: "R$ 26,90",
  basicPrice: "R$ 10,00",
  priceNumber: 26.90,
  installments: "ou em até 3x no cartão",
  saveBadge: "Condição Especial de Lançamento",
  cta: "QUERO MEU KIT SPEAKING AGORA",
  features: PRICING_PLANS[1].features.map((f) => f.text),
};

// --------------------------------------------------------
// 5. PRÉVIA VISUAL DE EXEMPLOS DE ATIVIDADES DE SPEAKING
// Cards estruturados com exemplos reais em inglês
// --------------------------------------------------------
export const SPEAKING_ACTIVITIES_PREVIEW = [
  {
    id: 1,
    category: "Conversation Starters",
    title: "Weekend & Daily Life",
    level: "A1 - A2",
    prompt: "What is your favorite part of the weekend? Describe your ideal Sunday morning.",
    sampleQuestions: [
      "How do you usually relax after a busy school or work week?",
      "If you could wake up anywhere tomorrow, where would you go?",
    ],
    tag: "Pair Work",
    imageUrl: "", // Vazio para você inserir imagem
  },
  {
    id: 2,
    category: "Would You Rather?",
    title: "Dilemmas & Choices",
    level: "A2 - B1",
    prompt: "Would you rather travel 100 years into the past or 100 years into the future? Explain why.",
    sampleQuestions: [
      "Would you rather never have homework or never have exams?",
      "Would you rather speak all languages fluently or talk to animals?",
    ],
    tag: "Group Debate",
    imageUrl: "", // Vazio para você inserir imagem
  },
  {
    id: 3,
    category: "Real-Life Role Play",
    title: "At the Airport & Lost Baggage",
    level: "B1 - B2",
    prompt: "Student A is a passenger whose bag is missing. Student B is the airline agent.",
    sampleQuestions: [
      "Can you describe your luggage in detail (color, brand, items)?",
      "What solution will the agent offer to solve the situation immediately?",
    ],
    tag: "Situational Speaking",
    imageUrl: "", // Vazio para você inserir imagem
  },
  {
    id: 4,
    category: "Quick Debate Cards",
    title: "Tech & Social Media Habits",
    level: "B1 - B2",
    prompt: "Should smartphones be completely banned in classrooms? Give 2 pros and 2 cons.",
    sampleQuestions: [
      "How has social media changed friendships in the last 5 years?",
      "What is one app you could never delete from your phone?",
    ],
    tag: "Speed Talking",
    imageUrl: "", // Vazio para você inserir imagem
  },
  {
    id: 5,
    category: "Storytelling & Prompts",
    title: "Finish the Mystery Story",
    level: "A2 - B1",
    prompt: "The train was completely empty except for a locked suitcase under seat 14...",
    sampleQuestions: [
      "Who does the suitcase belong to?",
      "What happened when the train suddenly stopped inside the tunnel?",
    ],
    tag: "Creative Speaking",
    imageUrl: "", // Vazio para você inserir imagem
  },
  {
    id: 6,
    category: "Opinion & Culture",
    title: "Music, Movies & Hobbies",
    level: "A1 - B1",
    prompt: "What song represents your mood right now? Recommend a movie you love to your partner.",
    sampleQuestions: [
      "Do you prefer watching movies at the cinema or at home on streaming?",
      "What is one hobby you have always wanted to try?",
    ],
    tag: "Icebreaker",
    imageUrl: "", // Vazio para você inserir imagem
  },
];

// --------------------------------------------------------
// 6. PERGUNTAS FREQUENTES (FAQ)
// --------------------------------------------------------
export const FAQS = [
  {
    question: "Qual a diferença entre o Plano Básico (R$ 10) e o Plano Completo (R$ 26,90)?",
    answer: "O Plano Básico (R$ 10,00) entrega a oferta principal com a coletânea essencial de cartões de conversação para você já aplicar em sala de aula. Já o Plano Completo (R$ 26,90) inclui o material principal mais todos os 4 bônus exclusivos (Guia de Icebreakers & Warm-ups, Pack de Fichas de Avaliação Oral, Cartazes Visuais com Classroom English e futuras atualizações gratuitas).",
  },
  {
    question: "Para quais níveis de inglês o material é indicado?",
    answer: "O kit foi pensado com atividades flexíveis para níveis Básico (A1/A2) até Intermediário/Independente (B1/B2). As perguntas e prompts possuem diferentes níveis de profundidade para você adaptar facilmente à realidade de cada turma ou aluno particular.",
  },
  {
    question: "Como recebo o acesso ao material?",
    answer: "Assim que a compra for confirmada, você recebe imediatamente um e-mail com o link de acesso aos arquivos para download. É tudo 100% digital e rápido.",
  },
  {
    question: "Posso imprimir ou usar em aulas online?",
    answer: "Com certeza! Os materiais vêm em formato PDF de alta resolução, prontos tanto para impressão (cartões para recortar e distribuir em duplas/grupos) quanto para projeção e compartilhamento de tela em aulas remotas (Zoom, Google Meet, Teams).",
  },
  {
    question: "O material serve para turmas grandes ou apenas aulas particulares?",
    answer: "Serve perfeitamente para os dois formatos. Em turmas grandes, você pode distribuir os cartões para dinâmicas em duplas (pair work), rotações de conversação (speed talking) ou grupos. Em aulas particulares (1-on-1), você utiliza como prompts de aquecimento ou discussão central da aula.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Você tem 7 dias completos para baixar, analisar e testar os materiais com seus alunos. Se por qualquer motivo achar que o kit não atendeu às suas expectativas, basta solicitar o reembolso que devolveremos 100% do seu dinheiro, sem burocracia.",
  },
  {
    question: "Terei acesso vitalício ao conteúdo?",
    answer: "Sim! Uma vez adquirido o kit, os arquivos são seus para sempre. Você pode baixar em seu computador, guardar no Google Drive e imprimir quantas vezes precisar ao longo do ano letivo.",
  },
];

// --------------------------------------------------------
// 7. DEPOIMENTOS DE PROFESSORES (CONFIGURÁVEIS)
// --------------------------------------------------------
export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  city: string;
  avatarUrl?: string; // Vazio por padrão (exibe iniciais elegantes)
  rating: number;
  badge: string;
  comment: string;
  highlight: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Profª Mariana Castro",
    role: "Professora de Ensino Fundamental & Médio",
    city: "São Paulo, SP",
    avatarUrl: "",
    rating: 5,
    badge: "Ensino Fundamental II",
    highlight: "Alunos tímidos falando sem medo",
    comment:
      "Eu passava quase todo o domingo procurando prompts e diagramando folhas de conversação. Com o kit, eu só imprimo os cartões de acordo com o nível da turma e levo pra sala. A aula flui com naturalidade e até os alunos mais tímidos começaram a participar do pair work!",
  },
  {
    id: 2,
    name: "Teacher Rodrigo Mendes",
    role: "Aulas Particulares & Online (1-on-1)",
    city: "Curitiba, PR",
    avatarUrl: "",
    rating: 5,
    badge: "Aulas Particulares & Zoom",
    highlight: "O plano de R$ 26,90 se pagou na 1ª semana",
    comment:
      "Uso tanto no presencial quanto nas minhas aulas individuais no Zoom. Os cartões de 'Would you rather' e os cenários de 'Role-Play' são fantásticos para quebrar o gelo. O investimento de R$ 26,90 no plano completo com os bônus se pagou logo na primeira aula.",
  },
  {
    id: 3,
    name: "Profª Camila Silveira",
    role: "Professora em Escola de Idiomas",
    city: "Belo Horizonte, MG",
    avatarUrl: "",
    rating: 5,
    badge: "Curso Livre de Idiomas",
    highlight: "Turma falando inglês sem voltar pro português",
    comment:
      "Meu maior desafio era fazer os alunos manterem a conversa em inglês durante o trabalho em duplas. As perguntas do kit são tão instigantes e reais que eles esquecem a timidez e se esforçam para debater em inglês o tempo inteiro.",
  },
  {
    id: 4,
    name: "Prof. Lucas Barreto",
    role: "Professor de Fundamental II & EJA",
    city: "Recife, PE",
    avatarUrl: "",
    rating: 5,
    badge: "Plano Completo + Bônus",
    highlight: "Bônus de warm-ups rápidos é excelente",
    comment:
      "O bônus de Icebreakers & Warm-ups rápidos de 5 minutos foi um divisor de águas. Antes eu demorava 15 minutos só tentando animar a sala; agora eu coloco uma pergunta do kit no quadro e em 5 minutos a turma já está falando com a energia lá em cima.",
  },
];

