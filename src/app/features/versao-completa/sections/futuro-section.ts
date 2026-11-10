import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadComponent } from './section-head';

/** "O futuro": de caixinhas separadas para o engenheiro que enxerga o sistema inteiro. */
@Component({
  selector: 'app-futuro-section',
  imports: [SectionHeadComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="futuro" class="secao">
      <app-section-head kicker="// o futuro já começou"
                        titulo="As caixinhas estão acabando. Fica quem enxerga o sistema inteiro."
                        apoio="Com a IA escrevendo boa parte do código, separar front, back, arquiteto e QA em pessoas diferentes faz cada vez menos sentido. A nossa aposta: o engenheiro de software cuida do ecossistema todo, e o PM chega com fundamento e usa IA do jeito certo." />

      <div class="antes-depois">
        <article class="coluna ontem">
          <span class="rotulo">ONTEM · CADA UM NA SUA CAIXA</span>
          <div class="etiquetas">
            @for (p of ontem; track p) { <span class="etiqueta">{{ p }}</span> }
          </div>
          <p>Muita passagem de bastão, muito "isso não é comigo".</p>
        </article>

        <span class="seta" aria-hidden="true">→</span>

        <article class="coluna amanha">
          <span class="rotulo">AMANHÃ · DUAS PESSOAS NO CENTRO, A IA COMO TIME</span>
          <div class="papeis">
            <div class="papel">
              <strong>Engenheiro de software completo</strong>
              <div class="etiquetas">
                @for (h of engenheiro; track h) { <span class="etiqueta">{{ h }}</span> }
              </div>
            </div>
            <div class="papel">
              <strong>PM com fundamento</strong>
              <div class="etiquetas">
                @for (h of pm; track h) { <span class="etiqueta">{{ h }}</span> }
              </div>
            </div>
          </div>
          <div class="ia-time">
            <span class="rotulo">IA COMO TIME</span>
            <span>gera código, testes, protótipos e documentação. Quem decide são as pessoas.</span>
          </div>
        </article>
      </div>

      <div class="superpoderes">
        <strong>Ninguém fica para trás: sua especialidade vira superpoder</strong>
        <div class="grade">
          @for (s of superpoderes; track s.era) {
            <article class="cartao">
              <span class="rotulo">{{ s.era }}</span>
              <strong>{{ s.hoje }}</strong>
            </article>
          }
        </div>
      </div>

      <div class="grade-dupla">
        <div class="caixa">
          <strong>IA do jeito certo</strong>
          <ul>
            @for (regra of regrasIa; track regra) { <li><span aria-hidden="true">✓</span>{{ regra }}</li> }
          </ul>
        </div>

        <div class="caixa">
          <strong>PM e engenheiro: insight dos dois lados</strong>
          <ol class="fluxo">
            @for (p of insight; track p.texto) {
              <li class="passo"><b>{{ p.quem }}</b> {{ p.texto }}</li>
            }
          </ol>
          <p class="nota">É uma aposta sobre para onde o mercado vai, não uma certeza. Especialistas profundos continuam valiosos. A diferença é que todo mundo vai precisar enxergar o sistema inteiro.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .secao { display: flex; flex-direction: column; gap: 36px; }
    .antes-depois { display: flex; flex-wrap: wrap; gap: 20px; align-items: stretch; }
    .coluna { flex: 1 1 380px; border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 14px; }
    .ontem { background: #ecede7; }
    .amanha { background: #0e1320; color: #f6f6f3; flex: 1.4 1 480px; }
    .seta { align-self: center; font-size: 28px; color: #2f5bff; }
    .rotulo { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #5a6271; }
    .amanha .rotulo { color: #7fd6a8; }
    .etiquetas { display: flex; flex-wrap: wrap; gap: 8px; }
    .etiqueta { background: #fff; border: 1px solid #d7dad2; border-radius: 10px; padding: 8px 12px; font-size: 14px; }
    .amanha .etiqueta { background: #151c2e; border-color: #2a3550; color: #c5cbd8; }
    .papeis { display: flex; flex-direction: column; gap: 12px; }
    .papel { display: flex; flex-direction: column; gap: 8px; }
    .papel strong { font-size: 16px; }
    .ia-time { display: flex; flex-direction: column; gap: 6px; border-top: 1px solid #2a3550; padding-top: 14px; font-size: 15px; color: #c5cbd8; }
    .superpoderes { display: flex; flex-direction: column; gap: 14px; }
    .superpoderes > strong { font-size: 20px; }
    .grade { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 12px; }
    .cartao { background: #fff; border: 1px solid #e1e3dd; border-radius: 16px; padding: 18px; display: flex; flex-direction: column; gap: 6px; }
    .cartao strong { font-size: 16px; line-height: 1.4; }
    .grade-dupla { display: flex; flex-wrap: wrap; gap: 20px; }
    .caixa { flex: 1 1 380px; background: #fff; border: 1px solid #e1e3dd; border-radius: 18px; padding: 24px; display: flex; flex-direction: column; gap: 12px; }
    .caixa > strong { font-size: 18px; }
    .caixa ul { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 15px; color: #3e4654; }
    .caixa li span { color: #7fd6a8; font-weight: 700; margin-right: 8px; }
    .fluxo { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 15px; color: #3e4654; }
    .passo { background: #f6f6f3; border-radius: 12px; padding: 12px 14px; }
    .nota { margin: 0; font-size: 14px; color: #5a6271; line-height: 1.55; }
  `],
})
export class FuturoSectionComponent {
  readonly ontem = ['Dev front', 'Dev back', 'Arquiteto', 'QA', 'DBA', 'Infra', 'PM longe do time'];
  readonly engenheiro = ['Front', 'Back', 'Dados', 'Arquitetura', 'Qualidade', 'Cloud', 'Observabilidade'];
  readonly pm = ['Discovery', 'Domínio', 'Dados', 'Prototipar com IA', 'Dizer não'];

  readonly superpoderes = [
    { era: 'Era QA', hoje: 'Dono da qualidade e do Golden Sample' },
    { era: 'Era DBA ou dev de procedures', hoje: 'Dono dos dados e da performance' },
    { era: 'Era arquiteto', hoje: 'Quem desenha e revisa o que a IA gera' },
    { era: 'Era dev front ou back', hoje: 'Evolui para engenheiro de software e desenha a solução sem depender de ninguém' },
  ];

  readonly regrasIa = [
    'Dar contexto: o problema, a regra e o formato esperado',
    'Revisar e testar tudo o que a IA gera',
    'Conferir o resultado contra a fonte da verdade',
    'Nunca colar dado sensível ou código da empresa em IA pública',
    'Decisão e responsabilidade continuam humanas',
  ];

  readonly insight = [
    { quem: 'PM traz', texto: 'o problema e a evidência do cliente' },
    { quem: 'Engenheiro traz', texto: 'o que é possível, o custo e o risco' },
    { quem: 'A IA acelera', texto: 'protótipo, análise de dados e código' },
    { quem: 'Juntos decidem', texto: 'o que construir, e o que não construir' },
  ];
}
