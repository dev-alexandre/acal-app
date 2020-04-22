import { RouterModule, Routes } from '@angular/router';
import { ParametroComponent } from './parametro.component';
import { ParametroIncluirComponent } from './incluir/parametro.incluir.component';
import { ParametroListarComponent } from './listar/parametro.listar.component';
import { ParametroEditarComponent } from './editar/parametro.editar.component';
import { ParametroExcluirComponent } from './excluir/parametro.excluir.component';
import { ParametroVisualizarComponent } from './visualizar/parametro.visualizar.component';
import { AuthGuard } from '@app/_autenticacao/_helpers/auth.guard';
import { FuncaoEnum } from '@app/_autenticacao/enum/funcao.enum';

const routes: Routes = [
  {
    path: '',
    component: ParametroComponent,
      children:
      [
        {
          path: '', redirectTo: 'listar'
        },

        {
          path: 'editar' ,
          canActivate: [AuthGuard],
          component: ParametroEditarComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Parâmetro :: Editar ::' ,
          }
        },

        {
          path: 'excluir',
          canActivate: [AuthGuard],
          component: ParametroExcluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Parâmetro :: Excluir ::',
          }
        },

        {
          path: 'incluir',
          canActivate: [AuthGuard],
          component: ParametroIncluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Parâmetro :: Incluir ::',
          }
        },

        {
          path: 'listar',
          canActivate: [AuthGuard],
          component: ParametroListarComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Parâmetro :: Listar ::',
          }
        },

        {
          path: 'visualizar',
          canActivate: [AuthGuard],
          component: ParametroVisualizarComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Parâmetro :: Visualizar ::',
          }
        },
      ]
  },
];

export const ParametroRouting = RouterModule.forChild(routes);
