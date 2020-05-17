import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Logradouro } from '@app/acal/logradouro/logradouro.modelo';
import { GrupoConsumo } from '@app/acal/grupo-consumo/grupo-consumo.modelo';
import { GrupoConsumoService } from '@app/acal/grupo-consumo/grupo-consumo.service';

export interface Select {
  nome: string;
  lista: GrupoConsumo [];
}

@Component({
  selector: 'app-selecionar-grupo-consumo',
  templateUrl: './selecionar.grupo-consumo.component.html',
})

export class SelecionarGrupoConsumoComponent implements OnInit {

  @Input()
  public valido: boolean;

  @Input()
  public submetido: boolean;

  @Input()
  public disabled: boolean;

  @Input()
  public data: GrupoConsumo;

  @Output()
  public setValue = new EventEmitter();

  public datas: Select[];

  constructor(public service: GrupoConsumoService) {

  }

  ngOnInit(): void {

    this.service.select().subscribe(
      (datas: Select[]) => {
        this.datas = datas;
      },
      (erro) => {
      },
    );

    if (this.data === undefined) {
      this.data = null;
    }
  }

  public onModelChange(data: Logradouro) {
    this.setValue.emit(data);
  }

  public compare(a: Logradouro, b: Logradouro) {

    if (a && a.id && b && b.id) {

      if (a.id === b.id) {
        return true;
      }
    }

    return false;
  }
}
