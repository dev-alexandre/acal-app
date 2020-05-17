import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/_autenticacao/_helpers/auth.guard';
import { FuncaoEnum } from '@app/_autenticacao/enum/funcao.enum';
import { HomeComponent } from './home.component';
import { HomeDashboardComponent } from './dashboard/home.dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
      children:
      [
        {
          path: '', redirectTo: 'dashboard'
        },

        {
          path: 'dashboard',
          canActivate: [AuthGuard],
          component: HomeDashboardComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Dashboard ::',
          }
        },
      ]
  },
];

export const HomeRouting = RouterModule.forChild(routes);
