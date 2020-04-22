import { MesService } from './../../pacotes/servico/mes.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@app/layout/layout.module';
import { AnaliseService, ParametroService } from '@app/pacotes/servico/_index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnaliseRouting } from './analise.routing';
import { AnaliseComponent } from './analise.component';
import { AnaliseEditarComponent } from './editar/analise.editar.component';
import { AnaliseExcluirComponent } from './excluir/analise.excluir.component';
import { AnaliseIncluirComponent } from './incluir/analise.incluir.component';
import { AnaliseListarComponent } from './listar/analise.listar.component';

@NgModule({
  imports:
  [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AnaliseRouting,
    LayoutModule,
  ],

  declarations:
  [
    AnaliseComponent,
    AnaliseEditarComponent,
    AnaliseExcluirComponent,
    AnaliseIncluirComponent,
    AnaliseListarComponent,
  ],

  providers:
  [
    AnaliseService,
    ParametroService,
    MesService,
  ]
})

export class AnaliseModule { }
