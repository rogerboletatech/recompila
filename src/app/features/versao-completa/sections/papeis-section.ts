import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadComponent } from './section-head';

interface Papel {
  readonly nome: string;
  readonly foco: string;
  readonly decide: readonly string[];
  readonly sinais: readonly string[];
  readonly alerta: string;
}

/** Ajuda a pessoa a distinguir tech lead, IT lead e tech manager, e a perceber quando está no papel errado. */
@Component({
  selector: 'app-papeis-section',
  imports: [SectionHeadComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="papeis" class="secao">
      <app-section-head kicker="// qual papel é o seu"
                        titulo="Tech manager, IT lead ou tech lead? Cada um decide coisas diferentes."
                        apoio="Os três aparecem misturados no dia a dia. O problema começa quando alguém assume um papel sem a preparação dele. Veja o que cada um decide e perceba onde você está hoje." />

      <div class="papeis">
        @for (p of papeis; track p.nome) {
          <article class="papel">
            <span class="rotulo">{{ p.foco }}</span>
            <strong class="nome">{{ p.nome }}</strong>

            <div class="bloco">
              <span class="titulo-bloco">O que decide</span>
              <ul>
                @for (d of p.decide; track d) { <li>{{ d }}</li> }
              </ul>
            </div>

            <div class="bloco">
              <span class="titulo-bloco">Sinais de que é o seu papel</span>
              <ul>
                @for (s of p.sinais; track s) { <li>{{ s }}</li> }
              </ul>
            </div>

            <p class="alerta"><strong>Cuidado:</strong> {{ p.alerta }}</p>
          </article>
        }
      </div>

      <aside class="checagem" aria-labelledby="checagem-titulo">
        <strong id="checagem-titulo">Três perguntas rápidas</strong>
        <ol>
          <li>Quando o time tem um problema de pessoas, você é quem resolve, ou só repassa?</li>
          <li>Quando o projeto precisa de orçamento e prazo, você sabe estimar, ou só aceita o que vem pronto?</li>
          <li>Quando a solução técnica está em risco, você desenha a alternativa, ou só pede para alguém resolver?</li>
        </ol>
        <p>Se a resposta da primeira pergunta é "sim" e você não tem preparo para conduzir pessoas, o caminho é o tech lead. Se for a segunda, o caminho é o IT lead. Não há problema em começar por um papel e migrar depois.</p>
      </aside>
    </section>
  `,
  styles: [`
    .secao { display: flex; flex-direction: column; gap: 32px; }
    .papeis { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .papel { background: #fff; border: 1px solid #e1e3dd; border-radius: 20px; padding: 26px; display: flex; flex-direction: column; gap: 14px; }
    .rotulo { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #5a6271; }
    .nome { font-size: 22px; line-height: 1.25; }
    .bloco { display: flex; flex-direction: column; gap: 6px; }
    .titulo-bloco { font-size: 13px; font-weight: 600; color: #2f5bff; }
    ul { margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 6px; font-size: 15px; line-height: 1.5; color: #3e4654; }
    .alerta { margin: 0; font-size: 15px; line-height: 1.55; color: #3e4654; background: #fff8ee; border-radius: 12px; padding: 12px 14px; }
    .checagem { background: #0e1320; color: #f6f6f3; border-radius: 20px; padding: 28px; display: flex; flex-direction: column; gap: 14px; }
    .checagem ol { margin: 0; padding-left: 22px; display: flex; flex-direction: column; gap: 8px; font-size: 16px; line-height: 1.5; color: #c5cbd8; }
    .checagem p { margin: 0; font-size: 16px; line-height: 1.6; color: #c5cbd8; }
  `],
})
export class PapeisSectionComponent {
  readonly papeis: readonly Papel[] = [
    {
      nome: 'Tech manager',
      foco: 'Pessoas e carreira',
      decide: ['Contratação e demissão', 'Feedback, metas e promoção', 'Saúde e ritmo do time', 'Desenvolvimento individual de cada pessoa'],
      sinais: ['Você faz 1 a 1 e sente que é seu papel cuidar de cada pessoa', 'Você se importa com o crescimento do time mais do que com a entrega de uma feature'],
      alerta: 'se você é tech manager e tenta decidir a arquitetura sozinho, o time perde a voz técnica. Delegue a solução para quem lidera a parte técnica.',
    },
    {
      nome: 'IT lead (coordenador de sistemas)',
      foco: 'Projeto, orçamento e entrega',
      decide: ['Tamanho do time e orçamento', 'Estimativa de complexidade e prazo', 'Prioridade do que entra no projeto', 'Entrega junto com o PM'],
      sinais: ['Você conversa com o PM sobre escopo, custo e risco antes de cada grande entrega', 'Você define a solução com o arquiteto, mesmo programando pouco'],
      alerta: 'se você é IT lead e não sabe estimar, vira só um intermediário. Aprenda estimativa, orçamento e gestão de risco antes de assumir a responsabilidade.',
    },
    {
      nome: 'Tech lead',
      foco: 'Solução técnica do time',
      decide: ['Desenho e padrões técnicos do time', 'Revisão de código e qualidade', 'Quebra de trabalho em partes técnicas', 'Quando e como usar IA no código'],
      sinais: ['Você programa boa parte da semana', 'As pessoas vêm até você para destravar um problema técnico'],
      alerta: 'se você é tech lead e tenta ser o chefe das pessoas, o time vai esperar você para tudo. Ensine o time a decidir também.',
    },
  ];
}
