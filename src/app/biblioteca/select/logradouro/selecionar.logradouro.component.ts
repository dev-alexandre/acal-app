import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Logradouro } from '@app/acal/logradouro/logradouro.modelo';
import { LogradouroService } from '@app/acal/logradouro/logradouro.service';

export interface SelectLogradouro {
  nome: string;
  lista: Logradouro [];
}

@Component({
  selector: 'app-selecionar-logradouro',
  templateUrl: './selecionar.logradouro.component.html',
})

export class SelecionarLogradouroComponent implements OnInit {

  @Input()
  public valido: boolean;

  @Input()
  public submetido: boolean;

  @Input()
  public disabled: boolean;

  @Input()
  public data: Logradouro;

  @Output()
  public setValue = new EventEmitter();

  public datas: SelectLogradouro [];

  constructor(public service: LogradouroService) {

  }

  ngOnInit(): void {

    this.service.select().subscribe(
      (datas: SelectLogradouro[]) => {
        this.datas = datas;
      },
      (erro) => {
      },
    );

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
