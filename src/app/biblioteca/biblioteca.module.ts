import { InputDocumentoComponent } from './input/documento/input.documento.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelecionarCategoriaComponent } from './select/categoria/selecionar.categoria.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports:
  [
    NgxMaskModule.forChild(),
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
  ],

  declarations:
  [
    InputDocumentoComponent,
    SelecionarCategoriaComponent,

  ],

  exports:
  [
    InputDocumentoComponent,
    SelecionarCategoriaComponent,
  ]

})

export class BibliotecaModule { }
