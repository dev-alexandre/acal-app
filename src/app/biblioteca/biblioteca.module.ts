import { SelecionarClienteComponent } from './select/cliente/selecionar.cliente.component';
import { SelecionarTipoLogradouroComponent } from './select/tipo-logradouro/selecionar.tipo-logradouro.component';
import { InputDocumentoComponent } from './input/documento/input.documento.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelecionarCategoriaComponent } from './select/categoria/selecionar.categoria.component';
import { NgxMaskModule } from 'ngx-mask';
import { AcoesComponent } from './acoes/acoes.component';
import { InputMoneyComponent } from './input/money/input.money.component';
import { SelecionarLogradouroComponent } from './select/logradouro/selecionar.logradouro.component';
import { SelecionarGrupoConsumoComponent } from './select/grupo-consumo/selecionar.grupo-consumo.component';
import { SelecionarMatriculaComponent } from './select/matricula/selecionar.matricula.component';
import { DistribuicaoComponent } from './distribuicao/distribuicao.component';

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
    InputMoneyComponent,

    SelecionarCategoriaComponent,
    SelecionarTipoLogradouroComponent,
    SelecionarLogradouroComponent,
    SelecionarGrupoConsumoComponent,
    SelecionarClienteComponent,
    SelecionarMatriculaComponent,

    DistribuicaoComponent,

    AcoesComponent,
  ],

  exports:
  [
    InputMoneyComponent,
    InputDocumentoComponent,

    SelecionarCategoriaComponent,
    SelecionarTipoLogradouroComponent,
    SelecionarLogradouroComponent,
    SelecionarGrupoConsumoComponent,
    SelecionarClienteComponent,
    SelecionarMatriculaComponent,

    DistribuicaoComponent,

    AcoesComponent,
  ]

})

export class BibliotecaModule { }
