import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@app/layout/layout.module';
import { ErrorInterceptor } from '@app/_autenticacao/_helpers/error.interceptor';
import { JwtInterceptor } from '@app/_autenticacao/_helpers/jwt.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { HomeRouting } from './home.routing';
import { BibliotecaModule } from '@app/biblioteca/biblioteca.module';
import { HomeDashboardComponent } from './dashboard/home.dashboard.component';


@NgModule({
  imports:
  [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HomeRouting,
    LayoutModule,
    BibliotecaModule,
  ],

  declarations:
  [
    HomeComponent,
    HomeDashboardComponent,
  ],

  providers:
  [
    HomeService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]

})

export class HomeModule { }
