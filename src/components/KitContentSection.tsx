import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';

export const KitContentSection: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    org: true,
    div: false,
    res: false,
    inv: false,
    fut: false,
  });

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const sections = [
    {
      key: 'org',
      icon: '🗺️',
      title: 'Mapas de Organização',
      subtitle: 'Coloque as contas do casal e o orçamento do lar em ordem',
      items: [
        'Mapa de Orçamento Familiar para Casais (Casal Edition)',
        'Mapa de Divisão de Contas e Tarefas (Casal Edition)',
        'Para Onde Está Indo o Dinheiro da Família?',
        'Gastos Fixos x Gastos Variáveis do Lar',
        'Necessidade x Desejo: Como Alinhar as Prioridades do Casal',
        'Como Usar o Cartão de Crédito a Dois Sem Perder o Controle',
        'À Vista ou Parcelado? O Que Compensa Mais para o Casal',
        'Como Fazer o Fechamento Financeiro Mensal em 20 Minutos',
        'E muito mais mapas visuais de organização prática',
      ],
    },
    {
      key: 'div',
      icon: '💳',
      title: 'Mapas de Dívidas',
      subtitle: 'Saia do vermelho em dupla com um plano claro e sem brigas',
      items: [
        'Como Organizar Todas as Dívidas do Casal em um Só Lugar',
        'Como Descobrir Quanto a Família Realmente Deve',
        'Como os Juros Fazem a Dívida Familiar Virar Bola de Neve',
        'Qual Dívida Pagar Primeiro em Conjunto?',
        'Como Ler e Negociar uma Proposta Bancária em Dupla',
        'Como Comparar Duas Propostas de Renegociação com Desconto',
        'Passo a Passo Visual para Zerar o Vermelho sem Culpar o Outro',
        'E muito mais mapas de alívio e quitação',
      ],
    },
    {
      key: 'res',
      icon: '🛡️',
      title: 'Mapas de Reserva & Filhos',
      subtitle: 'Construa a segurança financeira do casal e a reserva dos filhos',
      items: [
        'Mapa de Reserva para o Futuro dos Filhos (Casal Edition)',
        'Como Calcular a Reserva de Emergência Familiar do Casal',
        'Quanto Guardar por Mês sem Apertar o Padrão de Vida da Casa',
        'Onde Deixar a Reserva do Casal (Liquidez Imediata e 100% CDI)',
        'Reserva de Emergência Familiar x Dinheiro para Sonhos do Casal',
        'Quando Usar — e Quando NÃO Usar — a Reserva da Família',
        'Como Começar a Guardar Mesmo Começando com R$ 50 no Mês',
        'Como Automatizar as Transferências para a Poupança/CDB da Família',
        'E muito mais mapas de blindagem financeira',
      ],
    },
    {
      key: 'inv',
      icon: '📈',
      title: 'Mapas de Investimentos em Família',
      subtitle: 'Entenda antes de decidir onde investir o dinheiro do casal',
      items: [
        'Mapa de Investimento em Família (Casal Edition)',
        'Renda Fixa x Renda Variável: Qual a Diferença sem Economês',
        'CDI, Selic e IPCA: Guia Visual Definitivo para o Casal',
        'Tesouro Selic, IPCA+ e Prefixado: Qual Escolher para a Família',
        'CDB, LCI e LCA: Como Aproveitar Isenção de Imposto de Renda',
        'O Que É FGC e Como Ele Protege as Contas do Casal até R$ 250 mil',
        'FIIs (Fundos Imobiliários) e Dividendos Mensais para o Casal',
        'Como Comparar Dois Investimentos em Menos de 1 Minuto',
        'E muito mais mapas descomplicados',
      ],
    },
    {
      key: 'fut',
      icon: '👨‍👩‍👧',
      title: 'Mapas de Futuro & Harmonia',
      subtitle: 'Preparem os próximos 10, 20 ou 30 anos com tranquilidade e paz',
      items: [
        'Mapa de Como Não Brigar por Dinheiro (Casal Edition)',
        'Como Falar de Dinheiro e Alinhar Sonhos sem Gerar Discussão',
        'Como Calcular o Patrimônio Líquido do Casal Hoje',
        'Ativos x Passivos: O Que Coloca Dinheiro no Bolso da Família',
        'Como Criar Metas de Curto, Médio e Longo Prazo para a Família',
        'O Poder dos Juros Compostos a Favor do Futuro dos Filhos',
        'Planejamento de Aposentadoria a Dois: INSS + Renda Própria',
        'Check-up Financeiro Anual do Casal em 5 Passos Práticos',
        'E muito mais mapas de visão de futuro',
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#F8F6F0]">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest text-[#2D5A45] uppercase block mb-2">
            CONTEÚDO DO KIT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14261E] font-serif">
            Tudo que você vai aprender no FINANÇAS PARA CASAIS
          </h2>
          <p className="text-sm sm:text-base text-[#4E6659] mt-2">
            Mapas visuais organizados por etapa, do jeito mais simples de entender e aplicar a dois.
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-4">
          {sections.map((sec) => {
            const isExpanded = !!expandedSections[sec.key];
            return (
              <div
                key={sec.key}
                className="bg-white rounded-xl border border-[#E3DDD1] shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleSection(sec.key)}
                  className="w-full p-4 sm:p-5 flex items-start sm:items-center justify-between gap-3 text-left hover:bg-[#FAF9F5] transition-colors cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="text-2xl shrink-0">{sec.icon}</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#162D22]">
                        {sec.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5A7366]">
                        {sec.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F3F0E6] flex items-center justify-center text-[#4A3E2A] shrink-0 mt-0.5 sm:mt-0">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#EFECE3] bg-[#FCFBF8]">
                    <ul className="space-y-2.5 mt-3">
                      {sec.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2E4237]">
                          <span className="text-[#207449] font-bold text-sm shrink-0">✓</span>
                          <span className={item.includes('Casal Edition') ? 'font-semibold text-[#183B2B]' : ''}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
