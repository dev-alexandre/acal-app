import { BibliotecaModule } from './../../biblioteca/biblioteca.module';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@app/layout/layout.module';
import { ErrorInterceptor } from '@app/_autenticacao/_helpers/error.interceptor';
import { JwtInterceptor } from '@app/_autenticacao/_helpers/jwt.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GrupoConsumoComponent } from './grupo-consumo.component';
import { GrupoConsumoEditarComponent } from './editar/grupo-consumo.editar.component';
import { GrupoConsumoExcluirComponent } from './excluir/grupo-consumo.excluir.component';
import { GrupoConsumoVisualizarComponent } from './visualizar/grupo-consumo.visualizar.component';
import { GrupoConsumoIncluirComponent } from './incluir/grupo-consumo.incluir.component';
import { GrupoConsumoListarComponent } from './listar/grupo-consumo.listar.component';
import { GrupoConsumoService } from '@app/pacotes/servico/grupo-consumo.service';
import { GrupoConsumoRouting } from './grupo-consumo.routing';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  imports:
  [
    NgxMaskModule.forChild(),
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    GrupoConsumoRouting,
    LayoutModule,
    BibliotecaModule,
  ],

  declarations:
  [
    GrupoConsumoComponent,
    GrupoConsumoEditarComponent,
    GrupoConsumoExcluirComponent,
    GrupoConsumoVisualizarComponent,
    GrupoConsumoIncluirComponent,
    GrupoConsumoListarComponent,
  ],

  providers:
  [
    GrupoConsumoService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]

})

export class GrupoConsumoModule { }
