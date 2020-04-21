import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { routing } from './authentication.routing';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageLockscreenComponent } from './page-lockscreen/page-lockscreen.component';
import { PageForgotPasswordComponent } from './page-forgot-password/page-forgot-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageForbiddonErrorComponent } from './page-forbiddon-error/page-forbiddon-error.component';
import { PageIsErrorComponent } from './page-is-error/page-is-error.component';
import { PageTryLaterComponent } from './page-try-later/page-try-later.component';
import { PagesModule } from '../pages/pages.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AutenticacaoService } from '../_autenticacao/service/autenticacao.service';

@NgModule({

  imports:
  [
    CommonModule,
    routing,
    PagesModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  declarations:
  [
    PageLoginComponent,
    AuthenticationComponent,
    PageRegisterComponent,
    PageLockscreenComponent,
    PageForgotPasswordComponent,
    PageNotFoundComponent,
    PageForbiddonErrorComponent,
    PageIsErrorComponent,
    PageTryLaterComponent
  ],

  providers:
  [
    HttpModule,
    HttpClientModule,
    AutenticacaoService,
  ]

})
export class AutenticacaoModule { }
