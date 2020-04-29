import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/_autenticacao/_helpers/auth.guard';
import { FuncaoEnum } from '@app/_autenticacao/enum/funcao.enum';
import { BoletoComponent } from './boleto.component';
import { BoletoEditarComponent } from './editar/boleto.editar.component';
import { BoletoExcluirComponent } from './excluir/boleto.excluir.component';
import { BoletoIncluirComponent } from './incluir/boleto.incluir.component';
import { BoletoListarComponent } from './listar/boleto.listar.component';
import { BoletoVisualizarComponent } from './visualizar/boleto.visualizar.component';

const routes: Routes = [
  {
    path: '',
    component: BoletoComponent,
      children:
      [
        {
          path: '', redirectTo: 'listar'
        },

        {
          path: 'editar' ,
          canActivate: [AuthGuard],
          component: BoletoEditarComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Boleto :: Editar ::' ,
          }
        },

        {
          path: 'excluir',
          canActivate: [AuthGuard],
          component: BoletoExcluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Boleto :: Excluir ::',
          }
        },

        {
          path: 'incluir',
          canActivate: [AuthGuard],
          component: BoletoIncluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Boleto :: Incluir ::',
          }
        },

        {
          path: 'listar',
          canActivate: [AuthGuard],
          component: BoletoListarComponent,
          data:
          {
            title: ':: Acal Web :: Boleto :: Listar ::',
          }
        },

        {
          path: 'visualizar',
          canActivate: [AuthGuard],
          component: BoletoVisualizarComponent,
          data:
          {
            title: ':: Acal Web :: Boleto :: Visualizar ::',
          }
        },
      ]
  },
];

export const BoletoRouting = RouterModule.forChild(routes);
