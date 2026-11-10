import { Injectable } from '@angular/core';
import { INTENTS, ORDEM_INTENTS, REGRAS_INTENTS } from '../data/intents.data';
import { Intent, IntentKey } from '../models/intent.model';

/** Interpreta o texto livre e devolve a intenção correspondente. */
@Injectable({ providedIn: 'root' })
export class IntentService {
  readonly ordem = ORDEM_INTENTS;

  get(chave: IntentKey): Intent {
    return INTENTS[chave];
  }

  /** Procura palavras-chave no texto. Sem correspondência, cai em "stack". */
  classificar(texto: string): IntentKey {
    const s = ` ${texto.toLowerCase()} `;
    for (const [chave, palavras] of REGRAS_INTENTS) {
      const achou = palavras.some((p) => (p.length <= 2 ? s.includes(` ${p} `) : s.includes(p)));
      if (achou) return chave;
    }
    return 'stack';
  }

  /** Sugestões que não são a intenção atual. */
  sugestoes(atual: IntentKey | null): IntentKey[] {
    return ORDEM_INTENTS.filter((k) => k !== atual);
  }
}
