import { RouterModule, Routes } from '@angular/router';
import { ParametroComponent } from './parametro.component';
import { ParametroIncluirComponent } from './incluir/parametro.incluir.component';
import { ParametroListarComponent } from './listar/parametro.listar.component';
import { ParametroEditarComponent } from './editar/parametro.editar.component';
import { ParametroExcluirComponent } from './excluir/parametro.excluir.component';
import { ParametroVisualizarComponent } from './visualizar/parametro.visualizar.component';


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
          path: 'editar',
          component: ParametroEditarComponent,
          data: { title: ':: Acal Web :: Parâmetro :: Editar ::' }
        },

        {
          path: 'excluir',
          component: ParametroExcluirComponent,
          data: { title: ':: Acal Web :: Parâmetro :: Excluir ::' }
        },

        {
          path: 'incluir',
          component: ParametroIncluirComponent,
          data: { title: ':: Acal Web :: Parâmetro :: Incluir ::' }
        },

        {
          path: 'listar',
          component: ParametroListarComponent,
          data: { title: ':: Acal Web :: Parâmetro :: Listar ::' }
        },

        {
          path: 'visualizar',
          component: ParametroVisualizarComponent,
          data: { title: ':: Acal Web :: Parâmetro :: Visualizar ::' }
        },
      ]
  },
];

export const ParametroRouting = RouterModule.forChild(routes);
