import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    children:
    [
      {
        path: '',
        redirectTo: 'login', pathMatch: 'full'
      },

      {
        path: 'login',
        component:
          LoginComponent, data: { title: 'Login :: Web Acal' }
      },
    ]
  }
];

export const AutenticacaoRouting = RouterModule.forChild(routes);
