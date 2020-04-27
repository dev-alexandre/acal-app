import { ToastrModule } from 'ngx-toastr';
import { CommonModule, DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@app/layout/layout.module';
import { ClienteService } from '@app/pacotes/servico/cliente.service';
import { ParametroService } from '@app/pacotes/servico/_index';
import { ErrorInterceptor } from '@app/_autenticacao/_helpers/error.interceptor';
import { JwtInterceptor } from '@app/_autenticacao/_helpers/jwt.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClienteComponent } from './cliente.component';
import { ClienteRouting } from './cliente.routing';
import { ClienteEditarComponent } from './editar/cliente.editar.component';
import { ClienteExcluirComponent } from './excluir/cliente.excluir.component';
import { ClienteVisualizarComponent } from './visualizar/cliente.visualizar.component';
import { ClienteIncluirComponent } from './incluir/cliente.incluir.component';
import { ClienteListarComponent } from './listar/cliente.listar.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  imports:
  [
    ToastrModule.forRoot(),
    NgxMaskModule.forChild(),
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    ClienteRouting,
    LayoutModule,
  ],

  declarations:
  [
    ClienteComponent,
    ClienteEditarComponent,
    ClienteExcluirComponent,
    ClienteVisualizarComponent,
    ClienteIncluirComponent,
    ClienteListarComponent,
  ],

  providers:
  [
    ClienteService,
    ParametroService,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]

})

export class ClienteModule { }
