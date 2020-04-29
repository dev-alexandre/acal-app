import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/_autenticacao/_helpers/auth.guard';
import { FuncaoEnum } from '@app/_autenticacao/enum/funcao.enum';
import { GrupoConsumoComponent } from './grupo-consumo.component';
import { GrupoConsumoEditarComponent } from './editar/grupo-consumo.editar.component';
import { GrupoConsumoExcluirComponent } from './excluir/grupo-consumo.excluir.component';
import { GrupoConsumoIncluirComponent } from './incluir/grupo-consumo.incluir.component';
import { GrupoConsumoListarComponent } from './listar/grupo-consumo.listar.component';
import { GrupoConsumoVisualizarComponent } from './visualizar/grupo-consumo.visualizar.component';

const routes: Routes = [
  {
    path: '',
    component: GrupoConsumoComponent,
      children:
      [
        {
          path: '', redirectTo: 'listar'
        },

        {
          path: 'editar' ,
          canActivate: [AuthGuard],
          component: GrupoConsumoEditarComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Grupo Consumo :: Editar ::' ,
          }
        },

        {
          path: 'excluir',
          canActivate: [AuthGuard],
          component: GrupoConsumoExcluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Grupo Consumo :: Excluir ::',
          }
        },

        {
          path: 'incluir',
          canActivate: [AuthGuard],
          component: GrupoConsumoIncluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Grupo Consumo :: Incluir ::',
          }
        },

        {
          path: 'listar',
          canActivate: [AuthGuard],
          component: GrupoConsumoListarComponent,
          data:
          {
            title: ':: Acal Web :: Grupo Consumo :: Listar ::',
          }
        },

        {
          path: 'visualizar',
          canActivate: [AuthGuard],
          component: GrupoConsumoVisualizarComponent,
          data:
          {
            title: ':: Acal Web :: Grupo Consumo :: Visualizar ::',
          }
        },
      ]
  },
];

export const GrupoConsumoRouting = RouterModule.forChild(routes);
