import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { QuemSectionComponent } from './sections/quem-section';
import { FuturoSectionComponent } from './sections/futuro-section';
import { PrivacidadeSectionComponent } from './sections/privacidade-section';
import {
  CLASSES,
  CORES_PERSONAGEM,
  JA_DOMINA,
  PARTES_NOME_1,
  PARTES_NOME_2,
  REQUISITOS,
  TRACKS,
  TrackId,
} from './versao-completa.data';

/** Versão completa do site, em Angular. Cada seção vira um bloco desta página. */
@Component({
  selector: 'app-versao-completa-page',
  imports: [
    RouterLink,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    QuemSectionComponent,
    FuturoSectionComponent,
    PrivacidadeSectionComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './versao-completa.page.html',
  styleUrl: './versao-completa.page.scss',
})
export class VersaoCompletaPage {
  readonly tracks = TRACKS;

  constructor() {
    const trilhaUrl = this.rota.snapshot.queryParamMap.get('trilha') as TrackId | null;
    if (trilhaUrl && TRACKS.some((t) => t.id === trilhaUrl)) {
      this.trilhaId.set(trilhaUrl);
    }
  }
  readonly requisitos = REQUISITOS;
  readonly classes = CLASSES;
  readonly cores = CORES_PERSONAGEM;

  // Estado da trilha
  readonly trilhaId = signal<TrackId>('devs');
  readonly trilha = computed(() => TRACKS.find((t) => t.id === this.trilhaId()) ?? TRACKS[0]);

  // Menu mobile
  readonly menuAberto = signal(false);

  // Raio-X: requisitos marcados
  readonly dominados = signal<ReadonlySet<string>>(new Set(JA_DOMINA));
  readonly contagem = computed(() => this.dominados().size);
  readonly percentual = computed(() => Math.round((this.contagem() / REQUISITOS.length) * 100));
  readonly mensagemRaioX = computed(() => {
    const r = this.contagem() / REQUISITOS.length;
    if (r >= 0.8) return 'Você está pronto para aplicar. Só lapidar.';
    if (r >= 0.4) return 'Falta pouco. Os gaps viram sua trilha.';
    return 'Bora montar a trilha juntos, passo a passo.';
  });
  readonly gaps = computed(() =>
    REQUISITOS.filter((r) => !this.dominados().has(r.id)).map((r) => r.label),
  );

  // Personagem
  readonly nomePersonagem = signal('');
  readonly classeId = signal('eng');
  readonly corIndex = signal(0);
  private sugestoes = 0;
  private readonly rota = inject(ActivatedRoute);
  readonly classeAtual = computed(() => CLASSES.find((c) => c.id === this.classeId()) ?? CLASSES[0]);
  readonly corAtual = computed(() => CORES_PERSONAGEM[this.corIndex()] ?? CORES_PERSONAGEM[0]);
  readonly rotuloPersonagem = computed(() => this.nomePersonagem().trim() || 'Seu personagem');
  readonly inicialPersonagem = computed(() => (this.nomePersonagem().trim() || '?').charAt(0).toUpperCase());

  // Cadastro
  readonly perfis = [
    'Dev das antigas, quero atualizar o stack',
    'Dev novo, quero entender o negócio',
    'Dev experiente, quero mais fundamentos',
    'Estou em recolocação',
    'Sou PM e quero fundamentos de discovery',
    'Sou estagiário ou estudante',
    'Sou Scrum Master ou agilista',
    'Sou QA ou analista de testes',
    'Trabalho com dados, infra, segurança ou design',
  ];
  readonly nomeCadastro = signal('');
  readonly perfilCadastro = signal('');
  readonly cadastroEnviado = signal(false);

  alternarMenu(): void {
    this.menuAberto.update((v) => !v);
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
  }

  escolherTrilha(id: TrackId): void {
    this.trilhaId.set(id);
    this.fecharMenu();
  }

  alternarRequisito(id: string): void {
    this.dominados.update((atual) => {
      const novo = new Set(atual);
      if (novo.has(id)) novo.delete(id);
      else novo.add(id);
      return novo;
    });
  }

  sugerirNome(): void {
    this.sugestoes += 1;
    const a = PARTES_NOME_1[this.sugestoes % PARTES_NOME_1.length];
    const b = PARTES_NOME_2[(this.sugestoes * 3) % PARTES_NOME_2.length];
    this.nomePersonagem.set(`${a} ${b}`);
  }

  enviarCadastro(): void {
    if (!this.nomeCadastro().trim()) return;
    this.cadastroEnviado.set(true);
  }
}
