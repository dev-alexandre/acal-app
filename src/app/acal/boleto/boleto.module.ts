import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@app/layout/layout.module';
import { ErrorInterceptor } from '@app/_autenticacao/_helpers/error.interceptor';
import { JwtInterceptor } from '@app/_autenticacao/_helpers/jwt.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { BoletoRouting } from './boleto.routing';
import { BoletoComponent } from './boleto.component';
import { BoletoEditarComponent } from './editar/boleto.editar.component';
import { BoletoExcluirComponent } from './excluir/boleto.excluir.component';
import { BoletoVisualizarComponent } from './visualizar/boleto.visualizar.component';
import { BoletoIncluirComponent } from './incluir/boleto.incluir.component';
import { BoletoListarComponent } from './listar/boleto.listar.component';
import { BoletoService } from './boleto.service';


@NgModule({
  imports:
  [
    NgxMaskModule.forChild(),
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    BoletoRouting,
  ],

  declarations:
  [
    BoletoComponent,
    BoletoEditarComponent,
    BoletoExcluirComponent,
    BoletoVisualizarComponent,
    BoletoIncluirComponent,
    BoletoListarComponent,
  ],

  providers:
  [
    BoletoService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]

})

export class BoletoModule { }
