import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@app/layout/layout.module';
import { ErrorInterceptor } from '@app/_autenticacao/_helpers/error.interceptor';
import { JwtInterceptor } from '@app/_autenticacao/_helpers/jwt.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { ContratoRouting } from './contrato.routing';
import { ContratoComponent } from './contrato.component';
import { ContratoEditarComponent } from './editar/contrato.editar.component';
import { ContratoExcluirComponent } from './excluir/contrato.excluir.component';
import { ContratoVisualizarComponent } from './visualizar/contrato.visualizar.component';
import { ContratoIncluirComponent } from './incluir/contrato.incluir.component';
import { ContratoListarComponent } from './listar/contrato.listar.component';
import { ContratoService } from './contrato.service';

@NgModule({
  imports:
  [
    NgxMaskModule.forChild(),
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    ContratoRouting,
  ],

  declarations:
  [
    ContratoComponent,
    ContratoEditarComponent,
    ContratoExcluirComponent,
    ContratoVisualizarComponent,
    ContratoIncluirComponent,
    ContratoListarComponent,
  ],

  providers:
  [
    ContratoService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]

})

export class ContratoModule { }
