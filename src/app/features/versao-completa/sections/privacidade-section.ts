import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadComponent } from './section-head';

interface Modo {
  readonly rotulo: string;
  readonly titulo: string;
  readonly itens: readonly string[];
  readonly nota: string;
  readonly padrao?: boolean;
}

/** Três níveis de exposição: público, discreto e privado. */
@Component({
  selector: 'app-privacidade-section',
  imports: [SectionHeadComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="privacidade" class="secao">
      <app-section-head kicker="// do seu jeito"
                        titulo="Não quer se expor? Ninguém precisa saber."
                        apoio="Tem gente que está empregada e não quer que a empresa saiba. Tem gente em recolocação que prefere discrição. Tem sênior que prefere aprender sem plateia. Você escolhe como participa, e muda quando quiser." />

      <div class="modos">
        @for (m of modos; track m.rotulo) {
          <article class="modo" [class.padrao]="m.padrao" [attr.aria-label]="m.rotulo">
            <span class="rotulo">{{ m.rotulo }}</span>
            <strong>{{ m.titulo }}</strong>
            <ul>
              @for (item of m.itens; track item) { <li>✓ {{ item }}</li> }
            </ul>
            <span class="nota">{{ m.nota }}</span>
          </article>
        }
      </div>

      <ul class="garantias">
        <li>Nunca contamos a ninguém que você participa</li>
        <li>Nenhum dado é vendido ou repassado</li>
        <li>Você pode apagar tudo quando quiser</li>
      </ul>
    </section>
  `,
  styles: [`
    .secao { display: flex; flex-direction: column; gap: 32px; }
    .modos { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
    .modo { background: #fff; border: 1px solid #e1e3dd; border-radius: 20px; padding: 26px; display: flex; flex-direction: column; gap: 12px; }
    .modo.padrao { border: 2px solid #2f5bff; }
    .rotulo { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #5a6271; }
    .modo.padrao .rotulo { color: #2f5bff; }
    .modo strong { font-size: 21px; line-height: 1.25; }
    .modo ul { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 6px; font-size: 15px; color: #3e4654; }
    .nota { font-size: 14px; color: #5a6271; }
    .garantias { margin: 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 12px; }
    .garantias li { background: #0e1320; color: #f6f6f3; border-radius: 999px; padding: 10px 16px; font-size: 14px; }
  `],
})
export class PrivacidadeSectionComponent {
  readonly modos: readonly Modo[] = [
    { rotulo: 'PÚBLICO', titulo: 'Aparecer e ser visto', itens: ['Nome no ranking', 'Site na vitrine da comunidade', 'Destaque no @rogerboletatech'], nota: 'Para quem quer ser encontrado por recrutadores.' },
    { rotulo: 'DISCRETO · PADRÃO', titulo: 'Participar com personagem', itens: ['Seu personagem no ranking, como "Commit Sereno"', 'Áudios só para o grupo fechado', 'Site sem nome, se quiser'], nota: 'Você participa de tudo sem mostrar quem é.', padrao: true },
    { rotulo: 'PRIVADO', titulo: 'Só você e o mentor', itens: ['Fora do ranking e da vitrine', 'Áudios e Raio-X só com o mentor', 'Trilha individual, no seu tempo'], nota: 'Ideal para recolocação sigilosa.' },
  ];
}
