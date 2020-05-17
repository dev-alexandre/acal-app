import { Routes, RouterModule } from '@angular/router';
import { AcalComponent } from './acal.component';
import { AuthGuard } from '@app/_autenticacao/_helpers/auth.guard';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {
    path: '',
    component: AcalComponent,
      children:
      [
        {
          path: '',
          redirectTo: 'home',
        },

        {
          path: 'home' , canActivate: [AuthGuard],
          loadChildren:
            () => import('app/acal/home/home.module')
            .then(m => m.HomeModule)
        },

        {
          path: 'categoria',
          children: [
            { path: '', redirectTo: 'listar', pathMatch: 'full' },
            { path: 'listar', canActivate: [AuthGuard],
            component: CategoriaComponent, data: { title: ':: Acal Web :: Categoria ::' } },
          ]
        },

        {
          path: 'parametro' , canActivate: [AuthGuard],
          loadChildren:
            () => import('app/acal/parametro/parametro.module')
            .then(m => m.ParametroModule)
        },

        {
          path: 'cliente' , canActivate: [AuthGuard],
          loadChildren:
            () => import('app/acal/cliente/cliente.module')
            .then(m => m.ClienteModule)
        },

        {
          path: 'analise' , canActivate: [AuthGuard],
          loadChildren:
            () => import('app/acal/analise/analise.module')
            .then(m => m.AnaliseModule)
        },

        {
          path: 'tipo-logradouro' , canActivate: [AuthGuard],
          loadChildren:
            () => import('app/acal/tipo-logradouro/tipo-logradouro.module')
            .then(m => m.TipoLogradouroModule)
        },

        {
          path: 'grupo-consumo' , canActivate: [AuthGuard],
          loadChildren:
            () => import('app/acal/grupo-consumo/grupo-consumo.module')
            .then(m => m.GrupoConsumoModule)
        },

        {
          path: 'matricula' , canActivate: [AuthGuard],
          loadChildren:
            () => import('app/acal/matricula/matricula.module')
            .then(m => m.MatriculaModule)
        },

        {
          path: 'logradouro' , canActivate: [AuthGuard],
          loadChildren:
            () => import('app/acal/logradouro/logradouro.module')
            .then(m => m.LogradouroModule)
        },

        {
          path: 'boleto' , canActivate: [AuthGuard],
          loadChildren:
            () => import('app/acal/boleto/boleto.module')
            .then(m => m.BoletoModule)
        },

        {
          path: 'contrato' , canActivate: [AuthGuard],
          loadChildren:
            () => import('app/acal/contrato/contrato.module')
            .then(m => m.ContratoModule)
        },

      ]
  },
];

export const AcalRouting = RouterModule.forChild(routes);
