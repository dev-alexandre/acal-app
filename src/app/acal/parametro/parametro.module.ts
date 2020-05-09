import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@app/layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParametroIncluirComponent } from './incluir/parametro.incluir.component';
import { ParametroListarComponent } from './listar/parametro.listar.component';
import { ParametroComponent } from './parametro.component';
import { ParametroRouting } from './parametro.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParametroEditarComponent } from './editar/parametro.editar.component';
import { ParametroExcluirComponent } from './excluir/parametro.excluir.component';
import { ParametroVisualizarComponent } from './visualizar/parametro.visualizar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '@app/_autenticacao/_helpers/jwt.interceptor';
import { ErrorInterceptor } from '@app/_autenticacao/_helpers/error.interceptor';
import { AnaliseService } from '../analise/analise.service';
import { ParametroService } from './parametro.service';


@NgModule({
  imports:
  [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    ParametroRouting,
    LayoutModule,
  ],

  declarations:
  [
    ParametroComponent,
    ParametroEditarComponent,
    ParametroExcluirComponent,
    ParametroVisualizarComponent,
    ParametroIncluirComponent,
    ParametroListarComponent,
  ],

  providers:
  [
    AnaliseService,
    ParametroService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]

})

export class ParametroModule { }
