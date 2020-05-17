import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { TipoLogradouro } from '@app/acal/tipo-logradouro/tipo-logradouro.modelo';
import { TipoLogradouroService } from '@app/acal/tipo-logradouro/tipo-logradouro.service';

@Component({
  selector: 'app-selecionar-tipo-logradouro',
  templateUrl: './selecionar.tipo-logradouro.component.html',
})

export class SelecionarTipoLogradouroComponent implements OnInit {

  @Input()
  public valido: boolean;

  @Input()
  public submetido: boolean;

  @Input()
  public disabled: boolean;

  @Input()
  public data: TipoLogradouro;



  @Output()
  public setValue = new EventEmitter();

  public datas: TipoLogradouro [];

  constructor(public service: TipoLogradouroService) {

  }

  ngOnInit(): void {

    this.service.listarTodos().subscribe(
      (datas: TipoLogradouro[]) => {
        this.datas = [];
        this.datas.push({nome: 'Selecione'});
        this.datas.push.apply(this.datas, datas);
      },
      () => {},
    );

    if (this.data == null) {
      this.data = ({nome: 'Selecione' });
    }

  }

  public onModelChange(data: TipoLogradouro) {

    if (data.nome === 'Selecione') {
      this.setValue.emit(null);
    } else {
      this.setValue.emit(data);
    }

  }

  public compare(a: TipoLogradouro, b: TipoLogradouro) {

    if (a && a.nome && b && b.nome) {

      if (a.nome === b.nome) {
        return true;
      }
    }

    return false;
  }
}
