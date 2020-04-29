import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@app/layout/layout.module';
import { ErrorInterceptor } from '@app/_autenticacao/_helpers/error.interceptor';
import { JwtInterceptor } from '@app/_autenticacao/_helpers/jwt.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { LogradouroRouting } from './logradouro.routing';
import { LogradouroComponent } from './logradouro.component';
import { LogradouroExcluirComponent } from './excluir/logradouro.excluir.component';
import { LogradouroVisualizarComponent } from './visualizar/logradouro.visualizar.component';
import { LogradouroIncluirComponent } from './incluir/logradouro.incluir.component';
import { LogradouroListarComponent } from './listar/logradouro.listar.component';
import { LogradouroEditarComponent } from './editar/logradouro.editar.component';
import { LogradouroService } from './logradouro.service';


@NgModule({
  imports:
  [
    NgxMaskModule.forChild(),
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    LogradouroRouting,
    LayoutModule,
  ],

  declarations:
  [
    LogradouroComponent,
    LogradouroComponent,
    LogradouroEditarComponent,
    LogradouroExcluirComponent,
    LogradouroVisualizarComponent,
    LogradouroIncluirComponent,
    LogradouroListarComponent,
  ],

  providers:
  [
    LogradouroService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]

})

export class LogradouroModule { }
