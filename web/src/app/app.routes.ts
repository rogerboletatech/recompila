import { Routes } from '@angular/router';

/** Rotas com carregamento sob demanda: cada página é um pacote separado. */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
    title: 'Recompila: o que você quer agora?',
  },
  {
    path: 'versao-completa',
    loadComponent: () =>
      import('./features/versao-completa/versao-completa.page').then((m) => m.VersaoCompletaPage),
    title: 'Recompila: versão completa',
  },
  { path: '**', redirectTo: '' },
];
