import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

/** Versão completa do site. Ainda em construção: as seções entram aqui uma a uma. */
@Component({
  selector: 'app-versao-completa-page',
  imports: [RouterLink, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="em-construcao">
      <h1>Versão completa em construção</h1>
      <p>Ela chega no próximo ajuste. Enquanto isso, volte para a conversa.</p>
      <a mat-stroked-button routerLink="/">Voltar para a conversa</a>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .em-construcao {
      min-height: calc(100vh - 140px); display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: 12px; padding: 24px; text-align: center;
    }
    p { color: #8c96ab; font-size: 17px; margin: 0; }
  `],
})
export class VersaoCompletaPage {}
