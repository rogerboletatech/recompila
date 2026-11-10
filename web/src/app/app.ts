import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

/** Casca da aplicação: barra superior com a troca entre as versões. */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-toolbar class="topo">
      <span class="marca"><span class="selo" aria-hidden="true">&gt;_</span>Recompila</span>
      <span class="espaco"></span>
      <nav class="versoes" aria-label="Escolha a versão">
        <a routerLink="/" routerLinkActive="ativa" [routerLinkActiveOptions]="{ exact: true }">Conversa</a>
        <a routerLink="/versao-completa" routerLinkActive="ativa">Versão completa</a>
      </nav>
    </mat-toolbar>

    <router-outlet />

    <footer class="rodape">Você está falando com o Boleta, uma IA. Conversa confidencial.</footer>
  `,
  styles: [`
    :host { display: block; min-height: 100vh; }
    .topo { background: transparent; color: #f6f6f3; padding: 0 24px; height: 72px; }
    .marca { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 18px; }
    .selo {
      font-family: 'IBM Plex Mono', monospace; font-size: 13px; font-weight: 600;
      background: #2f5bff; color: #fff; border-radius: 8px; padding: 5px 7px;
    }
    .espaco { flex: 1; }
    .versoes {
      display: flex; gap: 4px; padding: 4px; border-radius: 999px;
      background: #121829; border: 1px solid #2a3550;
    }
    .versoes a {
      padding: 8px 14px; border-radius: 999px; text-decoration: none;
      font-size: 14px; font-weight: 500; color: #c5cbd8;
    }
    .versoes a.ativa { background: #2f5bff; color: #fff; font-weight: 600; }
    .rodape { text-align: center; padding: 0 24px 24px; font-size: 13px; color: #6b7385; }
  `],
})
export class App {}
