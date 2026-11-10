import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Cabeçalho padrão das seções: rótulo em monoespaçado, título e texto de apoio. */
@Component({
  selector: 'app-section-head',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cabecalho">
      <p class="kicker">{{ kicker() }}</p>
      <h2>{{ titulo() }}</h2>
      @if (apoio()) {
        <p class="apoio">{{ apoio() }}</p>
      }
    </div>
  `,
  styles: [`
    .cabecalho { display: flex; flex-direction: column; gap: 10px; max-width: 820px; }
    .kicker { margin: 0; font-family: 'IBM Plex Mono', monospace; font-size: 14px; color: #2f5bff; }
    h2 { margin: 0; font-weight: 700; font-size: clamp(30px, 4.2vw, 52px); line-height: 1.06; letter-spacing: -0.025em; }
    .apoio { margin: 0; font-size: 18px; line-height: 1.6; color: #3e4654; }
    :host-context(.escuro) .kicker { color: #9db0ff; }
    :host-context(.escuro) h2 { color: #f6f6f3; }
    :host-context(.escuro) .apoio { color: #c5cbd8; }
  `],
})
export class SectionHeadComponent {
  readonly kicker = input.required<string>();
  readonly titulo = input.required<string>();
  readonly apoio = input<string>('');
}
