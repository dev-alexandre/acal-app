import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/_autenticacao/_helpers/auth.guard';
import { FuncaoEnum } from '@app/_autenticacao/enum/funcao.enum';
import { MatriculaComponent } from './matricula.component';
import { MatriculaEditarComponent } from './editar/matricula.editar.component';
import { MatriculaExcluirComponent } from './excluir/matricula.excluir.component';
import { MatriculaIncluirComponent } from './incluir/matricula.incluir.component';
import { MatriculaListarComponent } from './listar/matricula.listar.component';
import { MatriculaVisualizarComponent } from './visualizar/matricula.visualizar.component';

const routes: Routes = [
  {
    path: '',
    component: MatriculaComponent,
      children:
      [
        {
          path: '', redirectTo: 'listar'
        },

        {
          path: 'editar' ,
          canActivate: [AuthGuard],
          component: MatriculaEditarComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Grupo Consumo :: Editar ::' ,
          }
        },

        {
          path: 'excluir',
          canActivate: [AuthGuard],
          component: MatriculaExcluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Grupo Consumo :: Excluir ::',
          }
        },

        {
          path: 'incluir',
          canActivate: [AuthGuard],
          component: MatriculaIncluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Grupo Consumo :: Incluir ::',
          }
        },

        {
          path: 'listar',
          canActivate: [AuthGuard],
          component: MatriculaListarComponent,
          data:
          {
            title: ':: Acal Web :: Grupo Consumo :: Listar ::',
          }
        },

        {
          path: 'visualizar',
          canActivate: [AuthGuard],
          component: MatriculaVisualizarComponent,
          data:
          {
            title: ':: Acal Web :: Grupo Consumo :: Visualizar ::',
          }
        },
      ]
  },
];

export const MatriculaRouting = RouterModule.forChild(routes);
