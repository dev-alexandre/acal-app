import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from '@app/pacotes/modelo/_index';
import { AtualizacaoService } from '@app/pacotes/servico/_index';
import { Contrato } from '../contrato.modelo';
import { ContratoFiltro } from '../contrato.filtro';
import { ContratoService } from '../contrato.service';

@Component({
    selector: 'app-contrato-listar',
    templateUrl: './contrato.listar.component.html',
})

export class ContratoListarComponent implements OnInit {

  public table: Table<Contrato>;

  public filtro: ContratoFiltro;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContratoService,
    public atualizacaoService: AtualizacaoService,
    ) {
  }

  ngOnInit(): void {
    this.filtro = new ContratoFiltro();
    this.buscar();
  }

  public buscar() {

    this.service.paginar(this.filtro)
      .subscribe(
        (table: Table<Contrato>) => {
          this.table = table;
          this.atualizacaoService.atualizacaoPaginacao.next(table);
        },
        (erro) => {
          console.log(erro);
        }
      );
  }

  public setFiltro(filtro: ContratoFiltro) {
    this.filtro = filtro;
    this.buscar();
  }

  public ordernar(filtro: string): void {

    if (filtro === 'numero') {
      this.filtro.numero.orderAsc = (!this.filtro.numero.orderAsc);
    } else {
      this.filtro.numero.orderAsc = null;
    }

    if (filtro === 'cliente') {
      this.filtro.cliente.orderAsc = (!this.filtro.cliente.orderAsc);
    } else {
      this.filtro.cliente.orderAsc = null;
    }

    if (filtro === 'valor') {
      this.filtro.valor.orderAsc = (!this.filtro.valor.orderAsc);
    } else {
      this.filtro.valor.orderAsc = null;
    }

    this.buscar();
  }

  incluir(): void {
    this.router.navigate([ './incluir' ], { relativeTo: this.activeRouter.parent });
  }

  editar(contrato: Contrato): void {
    localStorage.setItem('[contrato][editar]', JSON.stringify(contrato));
    this.router.navigate([ './editar' ], { relativeTo: this.activeRouter.parent });
  }

  excluir(contrato: Contrato): void {
    localStorage.setItem('[contrato][excluir]', JSON.stringify(contrato));
    this.router.navigate([ './excluir' ], { relativeTo: this.activeRouter.parent });
  }

  visualizar(contrato: Contrato): void {
    localStorage.setItem('[contrato][visualizar]', JSON.stringify(contrato));
    this.router.navigate([ './visualizar' ], { relativeTo: this.activeRouter.parent });
  }

}
