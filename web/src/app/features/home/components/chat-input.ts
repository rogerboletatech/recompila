import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

/** Campo de texto livre da conversa. Emite o texto ao enviar. */
@Component({
  selector: 'app-chat-input',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTooltipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form class="campo" (ngSubmit)="enviar()">
      <mat-form-field appearance="outline" subscriptSizing="dynamic" class="campo-texto">
        <mat-label>O que você quer?</mat-label>
        <input matInput name="pedido" [(ngModel)]="texto" autocomplete="off"
               placeholder="Ex.: quero uma vaga, sou PM, não quero me expor..." />
      </mat-form-field>
      <button mat-icon-button type="button" disabled matTooltip="Voz em breve" aria-label="Falar por voz, em breve">
        <mat-icon>mic</mat-icon>
      </button>
      <button mat-flat-button type="submit" aria-label="Enviar" [disabled]="!texto().trim()">
        <mat-icon>arrow_forward</mat-icon>
      </button>
    </form>
  `,
  styles: [`
    :host { display: block; width: 100%; max-width: 720px; margin: 0 auto; }
    .campo { display: flex; align-items: center; gap: 8px; }
    .campo-texto { flex: 1; min-width: 0; }
  `],
})
export class ChatInputComponent {
  readonly texto = signal('');
  readonly enviado = output<string>();

  enviar(): void {
    const t = this.texto().trim();
    if (!t) return;
    this.enviado.emit(t);
    this.texto.set('');
  }
}
