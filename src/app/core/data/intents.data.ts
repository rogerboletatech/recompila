import { Intent, IntentKey } from '../models/intent.model';

/** Conteúdo da conversa. Fica separado do componente para ser fácil de editar. */
export const INTENTS: Readonly<Record<IntentKey, Intent>> = {
  stack: {
    chip: 'Atualizar meu stack',
    titulo: 'Bora atualizar sem começar do zero.',
    ancora: 'trilhas',
    trilha: 'devs',
    cards: [
      { eyebrow: 'Sua trilha', destaque: 'Engenheiro', detalhe: 'full stack, com arquitetura e liderança técnica' },
      { eyebrow: 'Tempo', destaque: '10 min', detalhe: 'por dia, no celular' },
      { eyebrow: 'Você termina com', destaque: '1 site', detalhe: 'e um projeto validado' },
    ],
  },
  vaga: {
    chip: 'Quero uma vaga',
    titulo: 'Falta menos do que você imagina.',
    ancora: 'vagas',
    cards: [
      { eyebrow: 'Vagas analisadas', destaque: '6', detalhe: 'reais, do LinkedIn' },
      { eyebrow: 'O que mais pedem', destaque: 'Fundamento', detalhe: 'mais do que ferramenta' },
      { eyebrow: 'Seu próximo passo', destaque: 'Raio-X', detalhe: 'cole uma vaga e veja os gaps' },
    ],
  },
  mudar: {
    chip: 'Mudar de área',
    titulo: 'Sem salto no escuro.',
    ancora: 'futuro',
    cards: [
      { eyebrow: 'Caminhos', destaque: '2', detalhe: 'engenharia ou produto' },
      { eyebrow: 'Antes de mudar', destaque: 'Você testa', detalhe: 'nas primeiras semanas' },
      { eyebrow: 'Comece por', destaque: 'Lógica + IA', detalhe: 'um case simples do começo ao fim' },
    ],
  },
  produto: {
    chip: 'Sou PM, PO ou agilista',
    titulo: 'Método para quem já entende de produto.',
    ancora: 'trilhas',
    trilha: 'pm',
    cards: [
      { eyebrow: 'Sua trilha', destaque: 'Produto', detalhe: 'discovery e Event Storming' },
      { eyebrow: 'Junto com', destaque: 'Os devs', detalhe: 'desenhando o negócio' },
      { eyebrow: 'Diferencial', destaque: 'Dizer não', detalhe: 'com evidência' },
    ],
  },
  qa: {
    chip: 'Sou QA',
    titulo: 'De testador a dono da qualidade.',
    ancora: 'trilhas',
    trilha: 'qa',
    cards: [
      { eyebrow: 'Sua trilha', destaque: 'Qualidade', detalhe: 'automação e testes de contrato' },
      { eyebrow: 'Superpoder', destaque: 'Golden Sample', detalhe: 'conferir contra a fonte da verdade' },
      { eyebrow: 'Com IA', destaque: 'Casos de teste', detalhe: 'gerados e revisados por você' },
    ],
  },
  kids: {
    chip: 'Levar para uma escola',
    titulo: 'Tecnologia é brincadeira séria.',
    ancora: 'trilhas',
    trilha: 'kids',
    cards: [
      { eyebrow: 'Idades', destaque: '6 a 14', detalhe: 'com e sem computador' },
      { eyebrow: 'Cada encontro', destaque: '50 min', detalhe: 'missão, mostra e insígnia' },
      { eyebrow: 'Segurança', destaque: 'Professor junto', detalhe: 'sempre, sem dados de crianças' },
    ],
  },
  privado: {
    chip: 'Não quero me expor',
    titulo: 'Ninguém precisa saber.',
    ancora: 'privacidade',
    cards: [
      { eyebrow: 'Seu modo', destaque: 'Discreto', detalhe: 'um personagem no lugar do nome' },
      { eyebrow: 'Quem sabe', destaque: 'Só o mentor', detalhe: 'e mais ninguém' },
      { eyebrow: 'Quando quiser', destaque: 'Você apaga', detalhe: 'tudo o que é seu' },
    ],
  },
};

/** Ordem em que as sugestões aparecem nos chips. */
export const ORDEM_INTENTS: readonly IntentKey[] = ['stack', 'vaga', 'mudar', 'produto', 'qa', 'kids', 'privado'];

/** Palavras-chave que levam a cada intenção, na ordem de prioridade. */
export const REGRAS_INTENTS: readonly (readonly [IntentKey, readonly string[]])[] = [
  ['privado', ['expor', 'anon', 'privad', 'sigil', 'escond', 'discre', 'ninguém', 'ninguem']],
  ['kids', ['kid', 'escola', 'crian', 'filho', 'filha', 'aluno']],
  ['qa', ['qa', 'teste', 'qualidade', 'tester']],
  ['produto', ['pm', 'po', 'produto', 'scrum', 'agil', 'ágil', 'discovery']],
  ['vaga', ['vaga', 'emprego', 'entrevista', 'recoloca', 'demit', 'trabalho']],
  ['mudar', ['mudar', 'trocar', 'transi', 'área', 'area', 'carreira']],
];
