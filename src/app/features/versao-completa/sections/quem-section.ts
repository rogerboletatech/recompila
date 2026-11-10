import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadComponent } from './section-head';

interface Perfil { readonly rotulo: string; readonly titulo: string; readonly texto: string; }

/** "Pra quem é": perfis atendidos e as entradas por momento de carreira. */
@Component({
  selector: 'app-quem-section',
  imports: [SectionHeadComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="quem" class="secao">
      <app-section-head kicker="// pra quem é" titulo="Se você trabalha com tecnologia, tem lugar pra você aqui." />

      <div class="grade-areas">
        <div class="lista-areas">
          <strong>Do estagiário ao sênior. Cada um parte de onde está.</strong>
          <ul>
            @for (area of areas; track area) { <li>{{ area }}</li> }
          </ul>
        </div>
        <div class="perfis">
          @for (p of perfis; track p.rotulo) {
            <article class="perfil">
              <span class="rotulo">{{ p.rotulo }}</span>
              <strong>{{ p.titulo }}</strong>
              <p>{{ p.texto }}</p>
            </article>
          }
        </div>
      </div>

      <blockquote class="recado">
        <strong>Eu também estou aqui pra aprender.</strong>
        <p>Sei muita coisa, mas tenho fundamentos que ainda quero fortalecer. Não é curso de quem sabe tudo para quem não sabe nada. É um grupo em que cada um ensina o que domina. <strong>Roger</strong></p>
      </blockquote>
    </section>
  `,
  styles: [`
    .secao { display: flex; flex-direction: column; gap: 32px; }
    .grade-areas { display: flex; flex-wrap: wrap; gap: 28px; }
    .lista-areas { flex: 1 1 280px; display: flex; flex-direction: column; gap: 12px; }
    .lista-areas ul { margin: 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 8px; }
    .lista-areas li { border: 1px solid #36405a; border-radius: 999px; padding: 8px 14px; font-size: 14px; }
    .perfis { flex: 2 1 480px; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; }
    .perfil { background: #fff; border: 1px solid #e1e3dd; border-radius: 18px; padding: 22px; display: flex; flex-direction: column; gap: 8px; }
    .rotulo { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #5a6271; }
    .perfil strong { font-size: 19px; line-height: 1.3; }
    .perfil p { margin: 0; font-size: 15px; line-height: 1.55; color: #3e4654; }
    .recado { margin: 0; padding: 22px; border-left: 4px solid #2f5bff; background: #fff; border-radius: 12px; display: flex; flex-direction: column; gap: 6px; }
    .recado p { margin: 0; font-size: 16px; line-height: 1.6; color: #3e4654; }
  `],
})
export class QuemSectionComponent {
  readonly areas = ['Estagiário', 'Dev júnior, pleno e sênior', 'Front end', 'Back end', 'Full stack', 'Tech lead', 'Arquiteto', 'QA', 'Dados e DBA', 'Infra, SRE e cloud', 'Segurança', 'PM e PO', 'Design', 'Scrum Master e agilista'];

  readonly perfis: readonly Perfil[] = [
    { rotulo: 'DEV DAS ANTIGAS', titulo: 'Você não está ultrapassado. Seu stack está.', texto: 'VB, COBOL, Delphi, procedures. Você sabe por que o sistema é do jeito que é. Vem atualizar as ferramentas e ensinar o que nenhum curso ensina.' },
    { rotulo: 'DEV NOVO, VEM TAMBÉM', titulo: 'Você manja a ferramenta. Falta entender o porquê.', texto: 'Convive com quem segurou sistema crítico por anos. Ensina Angular e Git, aprende negócio, arquitetura e como as coisas quebram de verdade.' },
    { rotulo: 'DEV BOM QUE QUER IR ALÉM', titulo: 'Você entrega. Agora quer fundamento.', texto: 'Desenhar soluções resilientes, defender uma arquitetura e saber dizer não para projeto que nasce sem discovery.' },
    { rotulo: 'EM RECOLOCAÇÃO', titulo: 'Foi desligado? Vem com prioridade.', texto: 'Muitas vezes o que faltou foi detalhe: Git, teste, um projeto para mostrar. A gente acha esses detalhes e fecha um por um.' },
    { rotulo: 'PRODUCT MANAGER', titulo: 'Você conhece produto. Falta o método.', texto: 'Discovery de verdade e Event Storming para desenhar o negócio junto com os devs, antes de escrever a primeira história.' },
  ];
}
