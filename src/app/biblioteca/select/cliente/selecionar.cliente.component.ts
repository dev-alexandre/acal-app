import { ClienteFiltro } from './../../../pacotes/filtro/cliente.filtro';
import { ToastrService } from 'ngx-toastr';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from '@app/acal/cliente/cliente.modelo';
import { ClienteService } from '@app/acal/cliente/cliente.service';
import { ElementoFiltro } from '@app/pacotes/filtro/_index';
import { Table } from '@app/pacotes/modelo/_index';

export interface Select<T> {
  nome: string;
  lista: T [];
}

@Component({
  selector: 'app-selecionar-cliente',
  templateUrl: './selecionar.cliente.component.html',
})

export class SelecionarClienteComponent implements OnInit {

  @Input()
  public valido: boolean;

  @Input()
  public submetido: boolean;

  @Input()
  public disabled: boolean;

  @Input()
  public data: Cliente;

  @Output()
  public setValue = new EventEmitter();

  public nome: string;
  public focus: boolean;

  public datas: Cliente [];

  constructor(
    public service: ClienteService,
    public toast: ToastrService,
    ) {

  }

  ngOnInit(): void {
    this.nome = '';
    this.data = null;
    this.focus = false;
    this.datas = [];
  }

  public listar() {
    const filtro = new ClienteFiltro();
    filtro.nome = new ElementoFiltro();
    filtro.nome.valor = this.nome;

    if (this.nome.length > 2) {
      this.service.paginar(filtro).subscribe(
       (table: Table<Cliente> ) => {
         this.datas = table.content;
       },
       (error) => {
          this.toast.error(error);
       },
      );
    } else {
      this.limpar();
    }

  }

  public selecionar(cliente: Cliente): void {
    this.data = cliente;
    this.setValue.emit(cliente);
  }

  public limpar(): void {
    this.data = null;
    this.datas = [];

    this.selecionar(null);
  }

  public compare(a: Cliente, b: Cliente) {

    if (a && a.id && b && b.id) {

      if (a.id === b.id) {
        return true;
      }
    }

    return false;
  }
}
