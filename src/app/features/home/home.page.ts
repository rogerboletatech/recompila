import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { IntentService } from '../../core/services/intent.service';
import { IntentKey } from '../../core/models/intent.model';
import { IntentCardComponent } from '../../shared/components/intent-card';
import { ChatInputComponent } from './components/chat-input';

/** Página inicial: conversa livre que responde com cards e sugestões. */
@Component({
  selector: 'app-home-page',
  imports: [RouterLink, MatButtonModule, IntentCardComponent, ChatInputComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  private readonly intents = inject(IntentService);

  readonly atual = signal<IntentKey | null>(null);
  readonly disse = signal('');
  readonly resposta = computed(() => (this.atual() ? this.intents.get(this.atual()!) : null));
  readonly sugestoes = computed(() => this.intents.sugestoes(this.atual()));
  readonly cores = ['#9db0ff', '#7fd6a8', '#ffd166'];

  /** Texto livre: classifica e responde. */
  responder(texto: string): void {
    this.escolher(this.intents.classificar(texto), texto);
  }

  /** Sugestão clicada: vai direto para a intenção. */
  escolher(chave: IntentKey, frase: string): void {
    this.atual.set(chave);
    this.disse.set(frase);
  }

  rotulo(chave: IntentKey): string {
    return this.intents.get(chave).chip;
  }
}
