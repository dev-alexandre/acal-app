import { RouterModule, Routes } from '@angular/router';
import { AnaliseComponent } from './analise.component';
import { AnaliseEditarComponent } from './editar/analise.editar.component';
import { AnaliseExcluirComponent } from './excluir/analise.excluir.component';
import { AnaliseIncluirComponent } from './incluir/analise.incluir.component';
import { AnaliseListarComponent } from './listar/analise.listar.component';
import { AuthGuard } from '@app/_autenticacao/_helpers/auth.guard';
import { FuncaoEnum } from '@app/_autenticacao/enum/funcao.enum';


const routes: Routes = [
  {
    path: '',
    component: AnaliseComponent,
      children:
      [
        {
          path: '', redirectTo: 'listar'
        },

        {
          path: 'editar',
          canActivate: [AuthGuard],
          component: AnaliseEditarComponent,
          data: { title: ':: Acal Web :: Análise :: Editar ::' }
        },

        {
          path: 'excluir',
          canActivate: [AuthGuard],
          component: AnaliseExcluirComponent,
          data: { title: ':: Acal Web :: Análise :: Excluir ::' }
        },

        {
          path: 'incluir',
          canActivate: [AuthGuard],
          component: AnaliseIncluirComponent,
          data:
          {
            roles: [FuncaoEnum.Atendente, FuncaoEnum.Especialista],
            title: ':: Acal Web :: Análise :: Incluir ::'
          }
        },

        {
          path: 'listar',
          canActivate: [AuthGuard],
          component: AnaliseListarComponent,
          data:
          {
            roles: [FuncaoEnum.Atendente, FuncaoEnum.Especialista],
            title: ':: Acal Web :: Análise :: Listar ::'
          }
        },

      ]
  },
];

export const AnaliseRouting = RouterModule.forChild(routes);
