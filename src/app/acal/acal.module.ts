import { MesService } from './../pacotes/servico/mes.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AcalComponent } from './acal.component';
import { AcalRouting } from './acal.routing';
import { LayoutModule } from '@app/layout/layout.module';
import { AnaliseService, ParametroService } from '@app/pacotes/servico/_index';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports:
  [
    CommonModule,
    HttpClientModule,
    AcalRouting,
    LayoutModule,
  ],

  declarations:
  [
    AcalComponent,
  ],

  providers:
  [
    AnaliseService,
    ParametroService,
  ]

})

export class AcalModule { }
