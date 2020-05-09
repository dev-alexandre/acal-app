import { BibliotecaModule } from './../biblioteca/biblioteca.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@app/layout/layout.module';
import { NgxMaskModule } from 'ngx-mask';
import { AcalComponent } from './acal.component';
import { AcalRouting } from './acal.routing';
import { CategoriaComponent } from './categoria/categoria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JwtInterceptor } from '@app/_autenticacao/_helpers/jwt.interceptor';
import { ErrorInterceptor } from '@app/_autenticacao/_helpers/error.interceptor';
import { CategoriaService } from './categoria/categoria.service';
import { AnaliseService } from './analise/analise.service';
import { ParametroService } from './parametro/parametro.service';


@NgModule({
  imports:
  [
    NgxMaskModule.forChild(),
    CommonModule,
    HttpClientModule,
    AcalRouting,
    LayoutModule,
    CommonModule,
    NgbModule,
    FormsModule,
    BibliotecaModule
  ],

  declarations:
  [
    AcalComponent,
    CategoriaComponent,
  ],

  providers:
  [
    AnaliseService,
    ParametroService,
    CategoriaService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]

})

export class AcalModule { }
