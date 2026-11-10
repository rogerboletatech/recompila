import { Routes } from '@angular/router';
import { Home } from './home/home';
import { VersaoCompleta } from './versao-completa/versao-completa';

export const routes: Routes = [
  { path: '', component: Home, title: 'Recompila: o que você quer agora?' },
  { path: 'versao-completa', component: VersaoCompleta, title: 'Recompila: versão completa' },
  { path: '**', redirectTo: '' },
];
