import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IntentCard } from '../../core/models/intent.model';

/** Card de resumo usado nas respostas da conversa. */
@Component({
  selector: 'app-intent-card',
  imports: [MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card appearance="outlined" class="intent-card">
      <mat-card-content>
        <span class="eyebrow">{{ card().eyebrow }}</span>
        <strong class="destaque" [style.color]="cor()">{{ card().destaque }}</strong>
        <span class="detalhe">{{ card().detalhe }}</span>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    :host { display: block; }
    .intent-card {
      min-height: 150px; border-radius: 22px; background: #121829; border-color: #222a3b;
      padding: 8px;
    }
    mat-card-content { display: flex; flex-direction: column; gap: 8px; }
    .eyebrow {
      font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #8c96ab;
      text-transform: uppercase; letter-spacing: 0.06em;
    }
    .destaque { font-size: clamp(30px, 4vw, 44px); line-height: 1.05; letter-spacing: -0.02em; }
    .detalhe { font-size: 15px; color: #c5cbd8; }
  `],
})
export class IntentCardComponent {
  readonly card = input.required<IntentCard>();
  readonly cor = input<string>('#9db0ff');
}
