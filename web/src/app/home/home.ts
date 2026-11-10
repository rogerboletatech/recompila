import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Intent {
  chip: string;
  titulo: string;
  link: string;
  cards: [string, string, string][];
}

const INTENTS: Record<string, Intent> = {
  stack: { chip: 'Atualizar meu stack', titulo: 'Bora atualizar sem começar do zero.', link: '/versao-completa#trilhas', cards: [['Sua trilha', 'Devs', 'pontes do seu stack para o de hoje, com IA'], ['Tempo', '10 min', 'por dia, no celular'], ['Você termina com', '1 site', 'e um projeto validado']] },
  vaga: { chip: 'Quero uma vaga', titulo: 'Falta menos do que você imagina.', link: '/versao-completa#raiox', cards: [['Vagas analisadas', '6', 'reais, do LinkedIn'], ['O que mais pedem', 'Fundamento', 'mais do que ferramenta'], ['Seu próximo passo', 'Raio-X', 'cole uma vaga e veja os gaps']] },
  mudar: { chip: 'Mudar de área', titulo: 'Sem salto no escuro.', link: '/versao-completa#futuro', cards: [['Caminhos', '2', 'engenharia ou produto'], ['Antes de mudar', 'Você testa', 'nas primeiras semanas'], ['Comece por', 'Lógica + IA', 'um case simples do começo ao fim']] },
  produto: { chip: 'Sou PM, PO ou agilista', titulo: 'Método para quem já entende de produto.', link: '/versao-completa#pms', cards: [['Sua trilha', 'Produto', 'discovery e Event Storming'], ['Junto com', 'Os devs', 'desenhando o negócio'], ['Diferencial', 'Dizer não', 'com evidência']] },
  qa: { chip: 'Sou QA', titulo: 'De testador a dono da qualidade.', link: '/versao-completa#trilhas', cards: [['Sua trilha', 'Qualidade', 'automação e testes de contrato'], ['Superpoder', 'Golden Sample', 'conferir contra a fonte da verdade'], ['Com IA', 'Casos de teste', 'gerados e revisados por você']] },
  kids: { chip: 'Levar para uma escola', titulo: 'Tecnologia é brincadeira séria.', link: '/versao-completa#kids', cards: [['Idades', '6 a 14', 'com e sem computador'], ['Cada encontro', '50 min', 'missão, mostra e insígnia'], ['Segurança', 'Professor junto', 'sempre, sem dados de crianças']] },
  privado: { chip: 'Não quero me expor', titulo: 'Ninguém precisa saber.', link: '/versao-completa#privacidade', cards: [['Seu modo', 'Discreto', 'um personagem no lugar do nome'], ['Quem sabe', 'Só o mentor', 'e mais ninguém'], ['Quando quiser', 'Você apaga', 'tudo o que é seu']] },
};

const ORDEM = ['stack', 'vaga', 'mudar', 'produto', 'qa', 'kids', 'privado'];
const REGRAS: [string, string[]][] = [
  ['privado', ['expor', 'anon', 'privad', 'sigil', 'escond', 'discre', 'ninguém', 'ninguem']],
  ['kids', ['kid', 'escola', 'crian', 'filho', 'filha', 'aluno']],
  ['qa', ['qa', 'teste', 'qualidade', 'tester']],
  ['produto', ['pm', 'po', 'produto', 'scrum', 'agil', 'ágil', 'discovery']],
  ['vaga', ['vaga', 'emprego', 'entrevista', 'recoloca', 'demit', 'trabalho']],
  ['mudar', ['mudar', 'trocar', 'transi', 'área', 'area', 'carreira']],
];
const CORES = ['#9DB0FF', '#7FD6A8', '#FFD166'];

function entender(texto: string): string {
  const s = ' ' + texto.toLowerCase() + ' ';
  for (const [chave, palavras] of REGRAS) {
    for (const p of palavras) {
      const achou = p.length <= 2 ? s.includes(' ' + p + ' ') : s.includes(p);
      if (achou) return chave;
    }
  }
  return 'stack';
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly texto = signal('');
  readonly intent = signal<string | null>(null);
  readonly disse = signal('');
  readonly cores = CORES;

  readonly atual = computed(() => (this.intent() ? INTENTS[this.intent()!] : null));
  readonly chips = computed(() =>
    ORDEM.filter((k) => k !== this.intent()).map((k) => ({ key: k, label: INTENTS[k].chip }))
  );

  escolher(chave: string, frase: string): void {
    this.intent.set(chave);
    this.disse.set(frase);
    this.texto.set('');
  }

  enviar(): void {
    const t = this.texto().trim();
    if (!t) return;
    this.escolher(entender(t), t);
  }
}
