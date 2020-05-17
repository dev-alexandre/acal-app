import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Matricula } from '@app/acal/matricula/matricula.modelo';
import { MatriculaService } from '@app/acal/matricula/matricula.service';
import { ToastrService } from 'ngx-toastr';

export interface Select<T> {
  nome: string;
  lista: T [];
}

@Component({
  selector: 'app-selecionar-matricula',
  templateUrl: './selecionar.matricula.component.html',
})

export class SelecionarMatriculaComponent implements OnInit {

  @Input()
  public valido: boolean;

  @Input()
  public submetido: boolean;

  @Input()
  public disabled: boolean;

  @Input()
  public data: Matricula;

  @Output()
  public setValue = new EventEmitter();

  public datas: Select<Matricula>[];

  constructor(
    public service: MatriculaService,
    public toast: ToastrService
    ) {

  }

  ngOnInit(): void {

    this.service.select().subscribe(
      (datas: Select<Matricula>[]) => {
        this.datas = datas;
      },
      (erro) => {
        this.toast.error(erro);
      },
    );

    if (this.data === undefined) {
      this.data = null;
    }
  }

  public onModelChange(data: Matricula) {
    this.setValue.emit(data);
  }

  public compare(a: Matricula, b: Matricula) {

    if (a && a.id && b && b.id) {

      if (a.id === b.id) {
        return true;
      }
    }

    return false;
  }
}
