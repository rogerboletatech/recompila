/** Dados da versão completa: trilhas, requisitos do raio-x e classes do personagem. */

export type TrackId = 'devs' | 'pm' | 'qa' | 'kids';

export interface Track {
  readonly id: TrackId;
  readonly label: string;
  readonly sub: string;
  readonly cor: string;
  readonly fundo: string;
  readonly tag: string;
  readonly titulo: string;
  readonly para: string;
  readonly aprende: readonly string[];
  readonly ia: string;
  readonly projeto: string;
  readonly ancora: string;
  readonly linkLabel: string;
}

export const TRACKS: readonly Track[] = [
  {
    id: 'devs', label: 'Devs', sub: 'do estagiário ao sênior', cor: '#2F5BFF', fundo: '#F2F4FF',
    tag: 'TRILHA DEVS', titulo: 'Engenheiro de software: full stack, com arquitetura e liderança técnica',
    para: 'devs front end, back end e full stack, tech leads e arquitetos, das antigas e novos, e quem está em recolocação.',
    aprende: ['Pontes do seu stack para Java ou C# moderno', 'Arquitetura: C4, ADR, eventos e resiliência', 'Dados, testes e observabilidade', 'Revisar e testar o código que a IA gera', 'Front end e back end: quem domina os dois lados entrega mais', 'Liderança técnica: conduzir o time e decidir com trade-offs'],
    ia: 'IA como par de programação: com contexto, revisão e testes.',
    projeto: 'Um case do começo ao fim, validado pelo Golden Sample.',
    ancora: 'futuro', linkLabel: 'Ver o futuro do dev',
  },
  {
    id: 'pm', label: 'Produto', sub: 'PMs, POs e agilistas', cor: '#B7791F', fundo: '#FFF8EB',
    tag: 'TRILHA PRODUTO', titulo: 'Produto com fundamento',
    para: 'PMs, POs e Scrum Masters que querem método e um próximo passo na carreira.',
    aprende: ['Discovery: problema antes da solução', 'Brainstorming que funciona: brainwriting e Crazy 8s', 'Event Storming junto com os devs', 'Métricas de fluxo: lead time, throughput e gargalos', 'Dizer não com evidência', 'Para quem vem de Scrum Master: caminho para delivery ou produto'],
    ia: 'IA para prototipar, analisar dados do time e sintetizar entrevistas.',
    projeto: 'Discovery e Event Storming de um case, entregue a um squad que constrói.',
    ancora: 'pms', linkLabel: 'Ver a trilha de Produto',
  },
  {
    id: 'qa', label: 'QA', sub: 'de testador a engenheiro de qualidade', cor: '#0F7A5C', fundo: '#EEF8F3',
    tag: 'TRILHA QUALIDADE', titulo: 'De testador a engenheiro de qualidade',
    para: 'QAs, analistas de teste e quem quer ser dono da qualidade.',
    aprende: ['Automação de testes de API e de interface', 'Testes de contrato e de integração', 'Golden Sample: conferir contra a fonte da verdade', 'Qualidade em produção: observabilidade e incidentes'],
    ia: 'IA para gerar casos de teste e massa de dados, sempre com revisão humana.',
    projeto: 'Uma suíte automatizada e um Golden Sample para um case real.',
    ancora: 'cadastro', linkLabel: 'Quero esta trilha',
  },
  {
    id: 'kids', label: 'Kids', sub: 'oficinas nas escolas', cor: '#C2410C', fundo: '#FFF6EE',
    tag: 'RECOMPILA KIDS', titulo: 'Tecnologia é brincadeira séria',
    para: 'crianças de 6 a 14 anos, em oficinas nas escolas, sempre com o professor presente.',
    aprende: ['Lógica e algoritmos, sem computador', 'O primeiro jogo no Scratch', 'Como a IA aprende com exemplos', 'IA com responsabilidade e segurança digital'],
    ia: 'IA explicada com brincadeiras, sem contas e sem dados de crianças.',
    projeto: 'A mostra da turma, com o que cada equipe criou.',
    ancora: 'kids', linkLabel: 'Ver o Recompila Kids',
  },
];

export interface Requisito {
  readonly id: string;
  readonly label: string;
}

export const REQUISITOS: readonly Requisito[] = [
  { id: 'csharp', label: 'C# e .NET' },
  { id: 'sql', label: 'SQL Server' },
  { id: 'git', label: 'Git' },
  { id: 'kafka', label: 'Kafka' },
  { id: 'redis', label: 'Redis' },
  { id: 'solid', label: 'SOLID' },
  { id: 'clean', label: 'Clean Architecture' },
  { id: 'critico', label: 'Sistemas críticos e alto volume' },
  { id: 'n3', label: 'Suporte N3 e análise de incidentes' },
  { id: 'scrum', label: 'Scrum' },
  { id: 'copilot', label: 'GitHub Copilot (diferencial)' },
  { id: 'sonar', label: 'Sonar (diferencial)' },
  { id: 'arq', label: 'Decisões de arquitetura (diferencial)' },
  { id: 'fin', label: 'Mercado financeiro (diferencial)' },
];

/** Requisitos que o usuário já domina ao abrir a página. */
export const JA_DOMINA: readonly string[] = ['sql', 'git', 'critico', 'n3', 'scrum', 'solid'];

export interface ClassePersonagem {
  readonly id: string;
  readonly glifo: string;
  readonly nome: string;
  readonly desc: string;
  readonly trilha: string;
}

export const CLASSES: readonly ClassePersonagem[] = [
  { id: 'eng', glifo: '</>', nome: 'Engenheiro Completo', desc: 'front, back e dados', trilha: 'Trilha do ecossistema inteiro, com IA como time' },
  { id: 'arq', glifo: '[ ]', nome: 'Arquiteto de Sistemas', desc: 'desenho e decisões', trilha: 'C4, ADR, eventos e revisão do que a IA gera' },
  { id: 'qa', glifo: '✓', nome: 'Guardião da Qualidade', desc: 'testes e Golden Sample', trilha: 'Testes automatizados, Golden Sample e incidentes' },
  { id: 'dados', glifo: '∑', nome: 'Mestre dos Dados', desc: 'SQL e performance', trilha: 'Modelagem, plano de execução e dados para decisão' },
  { id: 'prod', glifo: '?', nome: 'Explorador de Produto', desc: 'discovery e domínio', trilha: 'Discovery, Event Storming e protótipo com IA' },
  { id: 'cloud', glifo: '↑', nome: 'Sentinela da Nuvem', desc: 'cloud e observabilidade', trilha: 'Docker, CI/CD, cloud e alertas que funcionam' },
];

export const CORES_PERSONAGEM: readonly string[] = ['#9DB0FF', '#7FD6A8', '#FFD166', '#FF9F6B', '#D9B8FF', '#8EE3F5'];

export const PARTES_NOME_1: readonly string[] = ['Commit', 'Lambda', 'Pixel', 'Kernel', 'Byte', 'Query', 'Cache', 'Thread', 'Deploy', 'Merge', 'Cursor', 'Socket'];
export const PARTES_NOME_2: readonly string[] = ['Veloz', 'Sereno', 'Curioso', 'Valente', 'Noturno', 'Zen', 'Brilhante', 'Teimoso', 'Ligeiro', 'Sábio', 'Raiz', 'Lendário'];
