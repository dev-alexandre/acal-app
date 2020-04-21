import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutenticacaoRouting } from './autenticacao.routing';

@NgModule({

  imports:
  [
    CommonModule,
    HttpClientModule,
    AutenticacaoRouting,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  declarations:
  [
    LoginComponent,
  ],

  providers:
  [
    AutenticacaoModule,
  ]

})

export class AutenticacaoModule { }
