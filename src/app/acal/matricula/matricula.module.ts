import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@app/layout/layout.module';
import { ErrorInterceptor } from '@app/_autenticacao/_helpers/error.interceptor';
import { JwtInterceptor } from '@app/_autenticacao/_helpers/jwt.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { MatriculaRouting } from './matricula.routing';
import { MatriculaComponent } from './matricula.component';
import { MatriculaEditarComponent } from './editar/matricula.editar.component';
import { MatriculaExcluirComponent } from './excluir/matricula.excluir.component';
import { MatriculaVisualizarComponent } from './visualizar/matricula.visualizar.component';
import { MatriculaIncluirComponent } from './incluir/matricula.incluir.component';
import { MatriculaListarComponent } from './listar/matricula.listar.component';
import { MatriculaService } from './matricula.service';
import { BibliotecaModule } from '@app/biblioteca/biblioteca.module';


@NgModule({
  imports:
  [
    NgxMaskModule.forChild(),
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatriculaRouting,
    LayoutModule,
    BibliotecaModule,
  ],

  declarations:
  [
    MatriculaComponent,
    MatriculaEditarComponent,
    MatriculaExcluirComponent,
    MatriculaVisualizarComponent,
    MatriculaIncluirComponent,
    MatriculaListarComponent,
  ],

  providers:
  [
    MatriculaService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]

})

export class MatriculaModule { }
