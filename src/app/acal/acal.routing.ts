import { Routes, RouterModule } from '@angular/router';
import { AcalComponent } from './acal.component';
import { AuthGuard } from '@app/_autenticacao/_helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AcalComponent,
      children:
      [
        {
          path: '',
          redirectTo: 'parametro',
        },

        {
          path: 'parametro' , canActivate: [AuthGuard],
          loadChildren:
            () => import('app/acal/parametro/parametro.module')
            .then(m => m.ParametroModule)
        },

        {
          path: 'cliente' , canActivate: [AuthGuard],
          loadChildren:
            () => import('app/acal/cliente/cliente.module')
            .then(m => m.ClienteModule)
        },

        {
          path: 'analise' , canActivate: [AuthGuard],
          loadChildren:
            () => import('app/acal/analise/analise.module')
            .then(m => m.AnaliseModule)
        },

      ]
  },
];

export const AcalRouting = RouterModule.forChild(routes);
