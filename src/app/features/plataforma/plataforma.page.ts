import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CAMADAS, CAMINHOS, DADOS, FASES, FLUXOS, LinhaDado } from './plataforma.data';

/** Página de arquitetura pública: camadas, fluxos, dados, fases e modelo. */
@Component({
  selector: 'app-plataforma-page',
  imports: [RouterLink, MatButtonModule, MatCardModule, MatTableModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './plataforma.page.html',
  styleUrl: './plataforma.page.scss',
})
export class PlataformaPage {
  readonly camadas = CAMADAS;
  readonly fluxos = FLUXOS;
  readonly dados = DADOS;
  readonly colunasDados = ['dado', 'onde', 'quemVe'] as const;
  readonly fases = FASES;
  readonly caminhos = CAMINHOS;

  destacar(linha: LinhaDado): boolean {
    return !!linha.destaque;
  }
}
