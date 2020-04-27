import { RouterModule, Routes } from '@angular/router';
import { FuncaoEnum } from '@app/_autenticacao/enum/funcao.enum';
import { AuthGuard } from '@app/_autenticacao/_helpers/auth.guard';
import { ClienteComponent } from './cliente.component';
import { ClienteEditarComponent } from './editar/cliente.editar.component';
import { ClienteExcluirComponent } from './excluir/cliente.excluir.component';
import { ClienteIncluirComponent } from './incluir/cliente.incluir.component';
import { ClienteListarComponent } from './listar/cliente.listar.component';
import { ClienteVisualizarComponent } from './visualizar/cliente.visualizar.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
      children:
      [
        {
          path: '', redirectTo: 'listar'
        },

        {
          path: 'editar' ,
          canActivate: [AuthGuard],
          component: ClienteEditarComponent,
          data:
          {
            title: ':: Acal Web :: Cliente :: Editar ::' ,
          }
        },

        {
          path: 'excluir',
          canActivate: [AuthGuard],
          component: ClienteExcluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Cliente :: Excluir ::',
          }
        },

        {
          path: 'incluir',
          canActivate: [AuthGuard],
          component: ClienteIncluirComponent,
          data:
          {
            title: ':: Acal Web :: Cliente :: Incluir ::',
          }
        },

        {
          path: 'listar',
          canActivate: [AuthGuard],
          component: ClienteListarComponent,
          data:
          {
            title: ':: Acal Web :: Cliente :: Listar ::',
          }
        },

        {
          path: 'visualizar',
          canActivate: [AuthGuard],
          component: ClienteVisualizarComponent,
          data:
          {
            title: ':: Acal Web :: Cliente :: Visualizar ::',
          }
        },
      ]
  },
];

export const ClienteRouting = RouterModule.forChild(routes);
