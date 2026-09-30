import React, { useState } from 'react';
import { X, Copy, Check, FileText, Download } from 'lucide-react';

interface CopyableTextModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CopyableTextModal: React.FC<CopyableTextModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const fullCopyText = `--- PÁGINA DE VENDAS COMPLETA: FINANÇAS PARA CASAIS ---

[FAIXA DE TOPO / URGÊNCIA]
Oferta por tempo limitado — Válida até hoje às 23:59 | Restam poucas vagas com bônus

[HEADLINE PRINCIPAL]
50 Mapas Visuais + Plano de Ação Completo para Casais Organizados Financeiramente | Reserva, Orçamento e Sem Briga por Dinheiro

[ÁREA DE VÍDEO]
[ Espaço em branco grande reservado para vídeo de 30 segundos ]

[SUBHEAD]
Da organização do dinheiro a dois ao planejamento do futuro em família: entenda de forma simples e visual como sair das dívidas juntos, montar a reserva dos filhos, dividir as contas sem atrito e construir um futuro financeiro mais seguro — mesmo que vocês não entendam nada de finanças.

[BULLETS DO HERO]
✓ Vocês olham, entendem e já organizam — sem aula longa
✓ Funciona no celular e no computador
✓ Use quando quiser, como um manual de consulta do casal

[BOTÃO CTA DO HERO]
QUERO ORGANIZAR MINHA VIDA FINANCEIRA
(Acesso imediato por e-mail e WhatsApp após a confirmação da compra)

--- SEÇÃO: UM MAPA VISUAL PARA CADA ETAPA DA VIDA FINANCEIRA ---
Título: Um mapa visual para cada etapa da sua vida financeira
Subtítulo: Veja alguns exemplos abaixo

1. Mapas de Organização (Entenda para onde o dinheiro do casal está indo e alinhe o orçamento)
- Coluna 1: Mapa 01 - Mapa de Orçamento Familiar para Casais (Casal Edition) - Para Onde Está Indo o Dinheiro do Casal?
- Coluna 2: Mapa 05 - Mapa de Divisão de Contas e Tarefas (Casal Edition) - Como Montar Seu Orçamento Familiar Sem Atrito

2. Mapas de Dívidas (Coloque ordem no que vocês devem e saiam do aperto juntos)
- Coluna 1: Mapa 11 - Como Organizar Todas as Dívidas do Casal
- Coluna 2: Mapa 15 - Qual Dívida Pagar Primeiro em Família?

3. Mapas de Reserva (Construa a segurança financeira do lar e o colchão dos filhos)
- Coluna 1: Mapa 21 - Como Calcular a Reserva Familiar do Casal
- Coluna 2: Mapa 24 - Mapa de Reserva para o Futuro dos Filhos (Casal Edition)

4. Mapas de Investimentos (Perca o medo de investir e comece a multiplicar o patrimônio do casal)
- Coluna 1: Mapa 33 - Mapa de Investimento em Família (Casal Edition) — CDI, Selic e IPCA: Qual a Diferença?
- Coluna 2: Mapa 34 - O Que Significa "100% do CDI" para o Casal?

5. Mapas de Futuro & Convivência (Preparem os próximos 10, 20 ou 30 anos sem brigas por dinheiro)
- Coluna 1: Mapa 41 - Mapa de Como Não Brigar por Dinheiro (Casal Edition)
- Coluna 2: Mapa 44 - Como Criar uma Meta Financeira Familiar de Longo Prazo

[O QUE CADA MAPA POSSUI]
✓ Passo a passo visual — vocês entendem de forma simples e direta
✓ Linguagem simples — sem termos técnicos que ninguém explica
✓ Consulta rápida — encontrem o que precisam em segundos
✓ Use quantas vezes quiser — é de vocês, para sempre

BOTÃO CTA: QUERO ME ORGANIZAR AGORA

--- SEÇÃO: POR QUE TER O SEU FINANÇAS PARA CASAIS ---
BENEFÍCIOS:

Pontos:
• Pare de sentir que vocês não têm controle sobre o próprio dinheiro
• Entendam de uma vez por todas aquilo que sempre te confundiu em investimentos
• Ganhem harmonia e autonomia para tomar suas próprias decisões financeiras
• Comecem a construir a segurança que vocês sempre sonharam para a família
• Preparem-se para os próximos 10, 20 ou 30 anos — no seu tempo e com quem você ama

BOTÃO CTA: QUERO ME ORGANIZAR AGORA

--- SEÇÃO: CONTEÚDO DO KIT ---
Tudo que você vai aprender no FINANÇAS PARA CASAIS:
1. Mapas de Organização Familiar (Orçamento a dois, divisão de contas, cartão sem estresse, fechamento mensal)
2. Mapas de Dívidas (Passo a passo visual para zerar juros e sair do vermelho em dupla)
3. Mapas de Reserva & Filhos (Cálculo da reserva familiar, colchão financeiro e futuro dos filhos)
4. Mapas de Investimentos em Família (Renda fixa sem segredos, CDI, Selic, Tesouro e proteção FGC)
5. Mapas de Futuro & Harmonia (Como não brigar por dinheiro, diálogo financeiro, patrimônio e aposentadoria)

--- SEÇÃO: ATÉ QUANDO VOCÊ VAI ADIAR ---
Contador: 15 HORAS | 44 MIN | 32 SEG
Texto: O preço promocional com os 5 bônus inclusos é válido apenas por tempo limitado. Quando o contador zerar, os bônus saem da oferta e o valor volta ao normal. Casais que já compraram veem o resultado em poucos dias!
BOTÃO CTA: QUERO ME ORGANIZAR AGORA

--- SEÇÃO: IDEAL PARA VOCÊ ---
Texto Principal:
“Casais de 35 a 55 anos que querem organizar as finanças em dupla, reservar para os filhos e ter paz financeira.”
01. Sentem que não sabem exatamente para onde o dinheiro da casa vai todo mês
02. Têm dívidas ou parcelamentos espalhados e não sabem por onde começar a organizar juntos
03. Têm dinheiro parado na poupança ou na conta porque têm receio de investir
04. Acham que já é tarde para começar a cuidar do futuro financeiro e da faculdade dos filhos
05. Querem ganhar autonomia e paz no relacionamento sem precisar fazer um curso longo e cansativo

--- SEÇÃO DE BÔNUS (ACIMA DOS DEPOIMENTOS) ---
Tudo que você vai receber:
• 50 mapas visuais divididos em 5 etapas
• Material de aprendizado E de consulta
• Acesso vitalício, no seu tempo
• Linguagem simples, sem enrolação

+ 5 BÔNUS EXCLUSIVOS INCLUSOS NO PLANO COMPLETO:
Bônus 01: Raio-X da Vida Financeira do Casal (de R$47 por GRÁTIS)
Bônus 02: Organizador Financeiro Casal 35-55 (de R$37 por GRÁTIS)
Bônus 03: Bússola dos Investimentos em Família (de R$37 por GRÁTIS)
Bônus 04: Calculadora do Futuro dos Filhos & Casal (de R$27 por GRÁTIS)
Bônus 05: Checklist Anti-Briga: Acordo Financeiro de Convivência (de R$29 por GRÁTIS)

--- SEÇÃO DE DEPOIMENTOS ---
1. Rosana L. (55 anos, professora) & Carlos (58 anos): "Meu marido sempre cuidava das finanças sozinho e eu ficava no escuro com receio. Com o Finanças para Casais e a Bússola, nós sentamos num domingo e hoje participo de todas as decisões. Não temos mais nenhuma briga por dinheiro e começamos a reserva para a faculdade dos nossos netos."
2. Cláudia R. (47 anos, autônoma) & Marcelo (49 anos): "Sempre achei que já era tarde pra gente se organizar. A gente vivia apagando incêndio no cartão de crédito. Hoje nós dois sabemos exatamente quanto entra, quanto sai e quanto guardamos todo dia 1º. Isso trouxe uma leveza maravilhosa para o nosso casamento."
3. Sandra M. (52 anos, servidora pública) & Roberto (54 anos): "A gente tinha dinheiro parado na poupança há mais de 10 anos porque morríamos de medo de perder. Com os mapas visuais, entendemos em uma única tarde o que é CDI e Selic sem economês. Hoje o dinheiro da nossa família está protegido e rendendo muito mais."
4. Renata F. (39 anos, enfermeira) & Felipe (42 anos): "Dividir as contas da casa era sempre motivo de cara feia e cobrança no fim do mês. O mapa de divisão proporcional e o acordo anti-briga salvaram a nossa rotina. A mulher manda no planejamento, o homem apoia na execução e a família prospera."
5. Luciana B. (44 anos, arquiteta) & Thiago (46 anos): "A didática visual é simplesmente perfeita. Dá para imprimir ou consultar no celular em 1 minuto. Pela primeira vez em 15 anos de casados nós conseguimos montar a reserva dos filhos e ainda planejar nossa viagem de fim de ano à vista."

--- SEÇÃO DE PLANOS (DUAS OFERTAS) ---

PLANO BÁSICO
Preço: R$ 10,00 (Apenas hoje)
O que você recebe:
• 50 Mapas Visuais
• Plano de Ação Completo
• Acesso vitalício
• Acesso imediato
• Suporte por WhatsApp
Botão: “Quero o Plano Básico por R$10,00”

PLANO COMPLETO (Mais Vendido)
Preço: R$ 29,90 (Apenas hoje)
O que você recebe:
• 50 Mapas Visuais
• Plano de Ação Completo
• + 5 Bônus Extras (mapas visuais de planejamento de casal + Checklist de divisão de contas)
• Acesso vitalício
• Acesso imediato
• Suporte prioritário por WhatsApp
Botão: “Quero o Plano Completo por R$29,90”

--- POP-UP OBRIGATÓRIO (QUANDO CLICAR NO PLANO BÁSICO) ---
Texto: “Plano Completo por apenas R$19,90 (economia de R$10)
Clique aqui para pegar o Plano Completo”
Botão Grande: “Pegar Plano Completo por R$19,90”

--- SEÇÃO DE CONFIANÇA / GARANTIA ---
Garantia Incondicional de 7 Dias: Sem prazo, sem burocracia. Se você e seu parceiro(a) não sentirem clareza e paz nas finanças já no primeiro mapa, devolvemos 100% do valor pago.

--- SEÇÕES FINAIS ---
Como funciona depois da compra:
01 - Você finaliza a compra em ambiente seguro
02 - Recebe o acesso por e-mail e WhatsApp na hora
03 - Abre o mapa que precisa e já começa a organizar, no celular ou no computador

Ficou com alguma dúvida?
(FAQ completa + Botão “Me manda mensagem no WhatsApp”)
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCopyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-7 shadow-2xl border border-[#D5CDC0] relative text-left max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#ECE6D8]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#227B4E]" />
            <h3 className="text-lg font-bold text-[#14291F] font-serif">
              Textos Completos da Página (Prontos para Copiar)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#8C9E94] hover:text-[#182C22] p-1.5 rounded-full hover:bg-[#F3EFE6] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Box */}
        <div className="flex-1 overflow-y-auto py-4 font-mono text-xs text-[#2A4034] bg-[#FAF8F3] p-4 rounded-xl border border-[#E8DFC9] my-4 leading-relaxed whitespace-pre-wrap select-all">
          {fullCopyText}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-[#6F867B]">
            Ideal para colar direto no Lovable, Elementor, Hotmart ou Typebot.
          </p>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 bg-[#227B4E] hover:bg-[#1B633F] text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-lg shadow-sm transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copiado com Sucesso!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar Todo o Texto</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
