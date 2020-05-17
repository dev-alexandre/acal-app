import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './_autenticacao/_helpers/auth.guard';

export const routes: Routes =
[

  {
    path: '',
    loadChildren:
      () => import('app/_autenticacao/autenticacao.module')
        .then(m => m.AutenticacaoModule)
  },

  {
    path: 'acal' , canActivate: [AuthGuard],
    loadChildren:
      () => import('app/acal/acal.module')
        .then(m => m.AcalModule)
  },

  {
    path: 'admin' , canActivate: [AuthGuard],
    loadChildren:
      () => import('app/admin/admin.module').then(m => m.AdminModule)
  },

  {
    path: '**', redirectTo: ''
  }

];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
