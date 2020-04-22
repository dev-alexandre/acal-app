import { RouterModule, Routes } from '@angular/router';
import { AnaliseComponent } from './analise.component';
import { AnaliseEditarComponent } from './editar/analise.editar.component';
import { AnaliseExcluirComponent } from './excluir/analise.excluir.component';
import { AnaliseIncluirComponent } from './incluir/analise.incluir.component';
import { AnaliseListarComponent } from './listar/analise.listar.component';


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
          component: AnaliseEditarComponent,
          data: { title: ':: Acal Web :: Análise :: Editar ::' }
        },

        {
          path: 'excluir',
          component: AnaliseExcluirComponent,
          data: { title: ':: Acal Web :: Análise :: Excluir ::' }
        },

        {
          path: 'incluir',
          component: AnaliseIncluirComponent,
          data: { title: ':: Acal Web :: Análise :: Incluir ::' }
        },

        {
          path: 'listar',
          component: AnaliseListarComponent,
          data: { title: ':: Acal Web :: Análise :: Listar ::' }
        },

      ]
  },
];

export const AnaliseRouting = RouterModule.forChild(routes);
