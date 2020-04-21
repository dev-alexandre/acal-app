import { AutenticacaoModule } from './_autenticacao/autenticacao.module';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes =
[

  {
    path: '',
    loadChildren:
      () => import('app/_autenticacao/autenticacao.module').then(m => m.AutenticacaoModule)
  },

  {
    path: 'admin',
    loadChildren:
      () => import('app/admin/admin.module').then(m => m.AdminModule)
  },

  /* 
  {
    path: 'authentication',
    loadChildren:
    () => import('app/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  */

  { path: '**', redirectTo: '' }

];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
