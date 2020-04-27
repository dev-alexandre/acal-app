import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteFiltro } from '@app/pacotes/filtro/cliente.filtro';
import { ElementoFiltro } from '@app/pacotes/filtro/_index';
import { Cliente } from '@app/pacotes/modelo/cliente.modelo';
import { Table } from '@app/pacotes/modelo/_index';
import { ClienteService } from '@app/pacotes/servico/cliente.service';
import { AtualizacaoService } from '@app/pacotes/servico/_index';

@Component({
    selector: 'app-cliente-listar',
    templateUrl: './cliente.listar.component.html',
})

export class ClienteListarComponent implements OnInit {

  public table: Table<Cliente>;
  public filtro: ClienteFiltro;
  public tipoDocumento: string;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public clienteService: ClienteService,
    public atualizacaoService: AtualizacaoService
    ) {
  }

  ngOnInit(): void {
    this.filtro = new ClienteFiltro();
    this.filtro.nome = new ElementoFiltro();
    this.buscar();
    this.tipoDocumento = 'CPF';
  }

  public buscar() {

    this.clienteService.paginar(this.filtro)
      .subscribe(
        (table: Table<Cliente>) => {
          this.table = table;
          this.atualizacaoService.atualizacaoPaginacao.next(table);
        },
        (erro) => {
          console.log(erro);
        }
      );
  }

  public setFiltro(filtro: ClienteFiltro) {
    this.filtro = filtro;
    this.buscar();
  }

  public ordernar(filtro: string): void {

    if (filtro === 'nome') {
      this.filtro.nome.orderAsc = (!this.filtro.nome.orderAsc);
    } else {
      this.filtro.nome.orderAsc = null;
    }

    if (filtro === 'documento') {
      this.filtro.documento.orderAsc = (!this.filtro.documento.orderAsc);
    } else {
      this.filtro.documento.orderAsc = null;
    }



    this.buscar();
  }

  incluir(): void {
    this.router.navigate([ './incluir' ], { relativeTo: this.activeRouter.parent });
  }

  editar(cliente: Cliente): void {
    localStorage.setItem('[cliente][editar]', JSON.stringify(cliente));
    this.router.navigate([ './editar' ], { relativeTo: this.activeRouter.parent });
  }

  excluir(cliente: Cliente): void {
    localStorage.setItem('[cliente][excluir]', JSON.stringify(cliente));
    this.router.navigate([ './excluir' ], { relativeTo: this.activeRouter.parent });
  }

  visualizar(cliente: Cliente): void {
    localStorage.setItem('[parametro][visualizar]', JSON.stringify(cliente));
    this.router.navigate([ './visualizar' ], { relativeTo: this.activeRouter.parent });
  }

}
