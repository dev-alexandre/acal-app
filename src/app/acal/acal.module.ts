import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@app/layout/layout.module';
import { AnaliseService, ParametroService } from '@app/pacotes/servico/_index';
import { NgxMaskModule } from 'ngx-mask';
import { AcalComponent } from './acal.component';
import { AcalRouting } from './acal.routing';
import { CategoriaComponent } from './categoria/categoria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '@app/pacotes/servico/categoria.service';
import { JwtInterceptor } from '@app/_autenticacao/_helpers/jwt.interceptor';
import { ErrorInterceptor } from '@app/_autenticacao/_helpers/error.interceptor';


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
