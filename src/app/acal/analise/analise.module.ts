import { NgxMaskModule } from 'ngx-mask';
import { MesService } from './../../pacotes/servico/mes.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@app/layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnaliseRouting } from './analise.routing';
import { AnaliseComponent } from './analise.component';
import { AnaliseEditarComponent } from './editar/analise.editar.component';
import { AnaliseExcluirComponent } from './excluir/analise.excluir.component';
import { AnaliseIncluirComponent } from './incluir/analise.incluir.component';
import { AnaliseListarComponent } from './listar/analise.listar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '@app/_autenticacao/_helpers/jwt.interceptor';
import { ErrorInterceptor } from '@app/_autenticacao/_helpers/error.interceptor';
import { AnaliseService } from './analise.service';
import { ParametroService } from '../parametro/parametro.service';

@NgModule({
  imports:
  [
    NgxMaskModule.forChild(),
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AnaliseRouting,
    LayoutModule,
  ],

  declarations:
  [
    AnaliseComponent,
    AnaliseEditarComponent,
    AnaliseExcluirComponent,
    AnaliseIncluirComponent,
    AnaliseListarComponent,
  ],

  providers:
  [
    AnaliseService,
    ParametroService,
    MesService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})

export class AnaliseModule { }
