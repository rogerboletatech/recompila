import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-versao-completa',
  imports: [RouterLink],
  template: `
    <main class="em-construcao">
      <h1>Versão completa em construção</h1>
      <p>Ela chega no próximo ajuste. Enquanto isso, <a routerLink="/">volte para a conversa</a>.</p>
    </main>
  `,
  styles: [`
    :host { display: block; }
    .em-construcao {
      min-height: 100vh; display: flex; flex-direction: column; align-items: center;
      justify-content: center; gap: 12px; padding: 24px; box-sizing: border-box;
      background: #0b0f1a; color: #f6f6f3; font-family: system-ui, sans-serif; text-align: center;
    }
    a { color: #9db0ff; }
    p { color: #8c96ab; font-size: 17px; }
  `],
})
export class VersaoCompleta {}
