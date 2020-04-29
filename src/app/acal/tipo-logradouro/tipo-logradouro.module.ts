import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@app/layout/layout.module';
import { ErrorInterceptor } from '@app/_autenticacao/_helpers/error.interceptor';
import { JwtInterceptor } from '@app/_autenticacao/_helpers/jwt.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { TipoLogradouroRouting } from './tipo-logradouro.routing';
import { TipoLogradouroComponent } from './tipo-logradouro.component';
import { TipoLogradouroEditarComponent } from './editar/tipo-logradouro.editar.component';
import { TipoLogradouroExcluirComponent } from './excluir/tipo-logradouro.excluir.component';
import { TipoLogradouroVisualizarComponent } from './visualizar/tipo-logradouro.visualizar.component';
import { TipoLogradouroIncluirComponent } from './incluir/tipo-logradouro.incluir.component';
import { TipoLogradouroListarComponent } from './listar/tipo-logradouro.listar.component';
import { TipoLogradouroService } from './tipo-logradouro.service';


@NgModule({
  imports:
  [
    NgxMaskModule.forChild(),
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    TipoLogradouroRouting,
    LayoutModule,
  ],

  declarations:
  [
    TipoLogradouroComponent,
    TipoLogradouroEditarComponent,
    TipoLogradouroExcluirComponent,
    TipoLogradouroVisualizarComponent,
    TipoLogradouroIncluirComponent,
    TipoLogradouroListarComponent,
  ],

  providers:
  [
    TipoLogradouroService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]

})

export class TipoLogradouroModule { }
