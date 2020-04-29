import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from '@app/pacotes/modelo/_index';
import { AtualizacaoService } from '@app/pacotes/servico/_index';
import { BoletoFiltro } from '../boleto.filtro';
import { Boleto } from '../boleto.modelo';
import { BoletoService } from '../boleto.service';

@Component({
    selector: 'app-boleto-listar',
    templateUrl: './boleto.listar.component.html',
})

export class BoletoListarComponent implements OnInit {

  public table: Table<Boleto>;
  public filtro: BoletoFiltro;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: BoletoService,
    public atualizacaoService: AtualizacaoService,
    ) {
  }

  ngOnInit(): void {
    this.filtro = new BoletoFiltro();
    this.buscar();
  }

  public buscar() {

    this.service.paginar(this.filtro)
      .subscribe(
        (table: Table<Boleto>) => {
          this.table = table;
          this.atualizacaoService.atualizacaoPaginacao.next(table);
        },
        (erro) => {
          console.log(erro);
        }
      );
  }

  public setFiltro(filtro: BoletoFiltro) {
    this.filtro = filtro;
    this.buscar();
  }

  public ordernar(filtro: string): void {

    if (filtro === 'nome') {
      this.filtro.nome.orderAsc = (!this.filtro.nome.orderAsc);
    } else {
      this.filtro.nome.orderAsc = null;
    }

    this.buscar();
  }

  incluir(): void {
    this.router.navigate([ './incluir' ], { relativeTo: this.activeRouter.parent });
  }

  editar(boleto: Boleto): void {
    localStorage.setItem('[boleto][editar]', JSON.stringify(boleto));
    this.router.navigate([ './editar' ], { relativeTo: this.activeRouter.parent });
  }

  excluir(boleto: Boleto): void {
    localStorage.setItem('[boleto][excluir]', JSON.stringify(boleto));
    this.router.navigate([ './excluir' ], { relativeTo: this.activeRouter.parent });
  }

  visualizar(boleto: Boleto): void {
    localStorage.setItem('[boleto][visualizar]', JSON.stringify(boleto));
    this.router.navigate([ './visualizar' ], { relativeTo: this.activeRouter.parent });
  }

}
