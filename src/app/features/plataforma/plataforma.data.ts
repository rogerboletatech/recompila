/** Conteúdo da página Plataforma, separado do template. */

export interface Camada {
  readonly nome: string;
  readonly descricao: string;
  readonly itens: readonly { readonly titulo: string; readonly detalhe: string }[];
}

export const CAMADAS: readonly Camada[] = [
  {
    nome: 'Pessoas', descricao: 'quem usa',
    itens: [
      { titulo: 'Membros', detalhe: 'devs, produto e QA' },
      { titulo: 'Instrutores e sócios', detalhe: 'conduzem grupos' },
      { titulo: 'Escolas', detalhe: 'recebem o Kids' },
      { titulo: 'Recrutadores', detalhe: 'visitam a vitrine' },
    ],
  },
  {
    nome: 'Canais', descricao: 'onde acontece',
    itens: [
      { titulo: 'Grupo WhatsApp', detalhe: 'pílulas, áudios, ranking' },
      { titulo: 'Landing page', detalhe: 'cadastro e vaga-alvo' },
      { titulo: 'Vitrine da comunidade', detalhe: 'link de cada site' },
      { titulo: 'Painel do mentor', detalhe: 'grupos, pontos, alertas' },
    ],
  },
  {
    nome: 'Núcleo', descricao: 'API Java 21 + Spring Boot',
    itens: [
      { titulo: 'Trilhas e pílulas', detalhe: 'conteúdo por perfil' },
      { titulo: 'Pontos e ranking', detalhe: 'XP, squads, temporadas' },
      { titulo: 'Raio-X da vaga', detalhe: 'vaga x perfil = gaps' },
      { titulo: 'Kids e escolas', detalhe: 'oficinas e instrutores' },
    ],
  },
  {
    nome: 'IA e dados', descricao: 'o que fica por trás',
    itens: [
      { titulo: 'Agente Boleta', detalhe: 'LLM via API' },
      { titulo: 'Transcrição', detalhe: 'áudio vira post' },
      { titulo: 'PostgreSQL', detalhe: 'perfis, pontos, trilhas' },
      { titulo: 'GitHub Pages', detalhe: 'site pessoal de cada membro' },
    ],
  },
  {
    nome: 'Transparência', descricao: 'o que fica público',
    itens: [
      { titulo: 'Painel público', detalhe: 'ranking, pote coletivo e divisão meio a meio' },
      { titulo: 'LGPD', detalhe: 'dados mínimos, saída fácil, nada de dados de crianças' },
    ],
  },
];

export interface Fluxo {
  readonly quem: string;
  readonly passos: readonly string[];
  readonly destaque: string;
}

export const FLUXOS: readonly Fluxo[] = [
  { quem: 'O membro', passos: ['Cadastro + vaga-alvo', 'Raio-X monta a trilha', 'Pílula no WhatsApp', 'Áudio vira post'], destaque: 'Site no ar + vitrine' },
  { quem: 'A escola', passos: ['Pedido pelo site', 'Conversa e aula teste', 'Instrutor Kids alocado', 'Oficinas com professor'], destaque: 'Relatório para a escola' },
  { quem: 'O sócio', passos: ['Monitor de um grupo', 'Instrutor com kit pronto', 'Grupo pago'], destaque: '50% no painel público' },
];

export interface LinhaDado {
  readonly dado: string;
  readonly onde: string;
  readonly quemVe: string;
  readonly destaque?: boolean;
}

export const DADOS: readonly LinhaDado[] = [
  { dado: 'Nome e WhatsApp', onde: 'Banco protegido', quemVe: 'Só o mentor' },
  { dado: 'Pontos e ranking', onde: 'Banco + painel', quemVe: 'O grupo, com nome ou apelido; fora do ranking no modo privado' },
  { dado: 'Participação no Recompila', onde: 'Banco protegido', quemVe: 'Ninguém de fora: nunca confirmamos quem participa' },
  { dado: 'Áudios', onde: 'Storage, com consentimento', quemVe: 'O grupo; público só com autorização' },
  { dado: 'Site pessoal', onde: 'GitHub da própria pessoa', quemVe: 'Público, se ele quiser' },
  { dado: 'Pote e divisão 50/50', onde: 'Painel público', quemVe: 'Todo mundo' },
  { dado: 'Dados de crianças', onde: 'Não guardamos', quemVe: 'Ninguém', destaque: true },
];

export interface Fase {
  readonly rotulo: string;
  readonly titulo: string;
  readonly texto: string;
  readonly nota: string;
  readonly atual?: boolean;
}

export const FASES: readonly Fase[] = [
  { rotulo: 'FASE 0 · AGORA', titulo: 'Piloto com amigos', texto: 'WhatsApp, Google Forms, planilha de pontos e GitHub Pages. Custo zero.', nota: 'Passa para a fase 1 quando: [META DE CONCLUSÃO] e temporada 2 começando', atual: true },
  { rotulo: 'FASE 1', titulo: 'Sistema próprio', texto: 'Landing com cadastro real, API Java 21, PostgreSQL e painel do mentor. Instrutores conduzem grupos.', nota: 'Custo mensal estimado: [R$ VALOR]' },
  { rotulo: 'FASE 2', titulo: 'IA e escala', texto: 'Agente Boleta, transcrição, Raio-X da vaga automático, painel público e Kids em várias escolas.', nota: 'Financiada por grupos pagos, empresas e patrocínio' },
];

export interface Caminho {
  readonly rotulo: string;
  readonly titulo: string;
  readonly itens: readonly string[];
  readonly cor: 'azul' | 'ambar';
}

export const CAMINHOS: readonly Caminho[] = [
  {
    rotulo: 'RECOMPILA · EMPRESA DE IMPACTO', titulo: 'Trilha, comunidade e empresas', cor: 'azul',
    itens: ['Grupos pagos a partir da temporada 2', 'Comunidade mensal e grupos fechados para empresas', 'Sócio-instrutor fica com 50% do grupo', 'Pode receber investidor quando houver números'],
  },
  {
    rotulo: 'INSTITUTO RECOMPILA · SEM FINS LUCRATIVOS', titulo: 'Recompila Kids nas escolas', cor: 'ambar',
    itens: ['Oficinas gratuitas para escolas, inclusive públicas', 'Financiado por doação, patrocínio e editais', 'Resultado reinvestido, sem divisão entre associados', 'Prestação de contas pública'],
  },
];
