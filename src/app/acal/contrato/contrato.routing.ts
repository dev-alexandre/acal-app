import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/_autenticacao/_helpers/auth.guard';
import { FuncaoEnum } from '@app/_autenticacao/enum/funcao.enum';
import { ContratoComponent } from './contrato.component';
import { ContratoEditarComponent } from './editar/contrato.editar.component';
import { ContratoExcluirComponent } from './excluir/contrato.excluir.component';
import { ContratoIncluirComponent } from './incluir/contrato.incluir.component';
import { ContratoListarComponent } from './listar/contrato.listar.component';
import { ContratoVisualizarComponent } from './visualizar/contrato.visualizar.component';

const routes: Routes = [
  {
    path: '',
    component: ContratoComponent,
      children:
      [
        {
          path: '', redirectTo: 'listar'
        },

        {
          path: 'editar' ,
          canActivate: [AuthGuard],
          component: ContratoEditarComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Contrato :: Editar ::' ,
          }
        },

        {
          path: 'excluir',
          canActivate: [AuthGuard],
          component: ContratoExcluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Contrato :: Excluir ::',
          }
        },

        {
          path: 'incluir',
          canActivate: [AuthGuard],
          component: ContratoIncluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Contrato :: Incluir ::',
          }
        },

        {
          path: 'listar',
          canActivate: [AuthGuard],
          component: ContratoListarComponent,
          data:
          {
            title: ':: Acal Web :: Contrato :: Listar ::',
          }
        },

        {
          path: 'visualizar',
          canActivate: [AuthGuard],
          component: ContratoVisualizarComponent,
          data:
          {
            title: ':: Acal Web :: Contrato :: Visualizar ::',
          }
        },
      ]
  },
];

export const ContratoRouting = RouterModule.forChild(routes);
