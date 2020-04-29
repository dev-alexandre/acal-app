import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/_autenticacao/_helpers/auth.guard';
import { FuncaoEnum } from '@app/_autenticacao/enum/funcao.enum';
import { TipoLogradouroComponent } from './tipo-logradouro.component';
import { TipoLogradouroEditarComponent } from './editar/tipo-logradouro.editar.component';
import { TipoLogradouroExcluirComponent } from './excluir/tipo-logradouro.excluir.component';
import { TipoLogradouroIncluirComponent } from './incluir/tipo-logradouro.incluir.component';
import { TipoLogradouroListarComponent } from './listar/tipo-logradouro.listar.component';
import { TipoLogradouroVisualizarComponent } from './visualizar/tipo-logradouro.visualizar.component';

const routes: Routes = [
  {
    path: '',
    component: TipoLogradouroComponent,
      children:
      [
        {
          path: '', redirectTo: 'listar'
        },

        {
          path: 'editar' ,
          canActivate: [AuthGuard],
          component: TipoLogradouroEditarComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Tipo Logradouro :: Editar ::' ,
          }
        },

        {
          path: 'excluir',
          canActivate: [AuthGuard],
          component: TipoLogradouroExcluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Tipo Logradouro :: Excluir ::',
          }
        },

        {
          path: 'incluir',
          canActivate: [AuthGuard],
          component: TipoLogradouroIncluirComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Tipo Logradouro :: Incluir ::',
          }
        },

        {
          path: 'listar',
          canActivate: [AuthGuard],
          component: TipoLogradouroListarComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Tipo Logradouro :: Listar ::',
          }
        },

        {
          path: 'visualizar',
          canActivate: [AuthGuard],
          component: TipoLogradouroVisualizarComponent,
          data:
          {
            roles: [FuncaoEnum.Especialista],
            title: ':: Acal Web :: Tipo Logradouro :: Visualizar ::',
          }
        },
      ]
  },
];

export const TipoLogradouroRouting = RouterModule.forChild(routes);
