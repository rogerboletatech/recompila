/** Um caminho que a conversa pode seguir (ex.: "Quero uma vaga"). */
export type IntentKey = 'stack' | 'vaga' | 'mudar' | 'produto' | 'qa' | 'kids' | 'privado';

/** Um card de resumo: rótulo pequeno, destaque e complemento. */
export interface IntentCard {
  readonly eyebrow: string;
  readonly destaque: string;
  readonly detalhe: string;
}

export interface Intent {
  readonly chip: string;
  readonly titulo: string;
  /** Âncora da versão completa para o assunto. */
  readonly ancora: string;
  /** Trilha a abrir na versão completa (devs, pm, qa ou kids), quando houver. */
  readonly trilha?: 'devs' | 'pm' | 'qa' | 'kids';
  readonly cards: readonly IntentCard[];
}
