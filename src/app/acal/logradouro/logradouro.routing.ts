import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/_autenticacao/_helpers/auth.guard';
import { FuncaoEnum } from '@app/_autenticacao/enum/funcao.enum';
import { LogradouroComponent } from './logradouro.component';
import { LogradouroEditarComponent } from './editar/logradouro.editar.component';
import { LogradouroExcluirComponent } from './excluir/logradouro.excluir.component';
import { LogradouroIncluirComponent } from './incluir/logradouro.incluir.component';
import { LogradouroListarComponent } from './listar/logradouro.listar.component';
import { LogradouroVisualizarComponent } from './visualizar/logradouro.visualizar.component';

const routes: Routes = [
  {
    path: '',
    component: LogradouroComponent,
      children:
      [
        {
          path: '', redirectTo: 'listar'
        },

        {
          path: 'editar' ,
          canActivate: [AuthGuard],
          component: LogradouroEditarComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Grupo Consumo :: Editar ::' ,
          }
        },

        {
          path: 'excluir',
          canActivate: [AuthGuard],
          component: LogradouroExcluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Grupo Consumo :: Excluir ::',
          }
        },

        {
          path: 'incluir',
          canActivate: [AuthGuard],
          component: LogradouroIncluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Grupo Consumo :: Incluir ::',
          }
        },

        {
          path: 'listar',
          canActivate: [AuthGuard],
          component: LogradouroListarComponent,
          data:
          {
            title: ':: Acal Web :: Grupo Consumo :: Listar ::',
          }
        },

        {
          path: 'visualizar',
          canActivate: [AuthGuard],
          component: LogradouroVisualizarComponent,
          data:
          {
            title: ':: Acal Web :: Grupo Consumo :: Visualizar ::',
          }
        },
      ]
  },
];

export const LogradouroRouting = RouterModule.forChild(routes);
