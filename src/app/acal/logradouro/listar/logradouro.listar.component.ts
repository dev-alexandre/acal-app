import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from '@app/pacotes/modelo/_index';
import { AtualizacaoService } from '@app/pacotes/servico/_index';
import { Logradouro } from '../logradouro.modelo';
import { LogradouroFiltro } from '../Logradouro.filtro';
import { LogradouroService } from '../logradouro.service';

@Component({
    selector: 'app-logradouro-listar',
    templateUrl: './logradouro.listar.component.html',
})

export class LogradouroListarComponent implements OnInit {

  public table: Table<Logradouro>;

  public filtro: LogradouroFiltro;


  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public logradouroService: LogradouroService,
    public atualizacaoService: AtualizacaoService,
    ) {
  }

  ngOnInit(): void {
    this.filtro = new LogradouroFiltro();
    this.buscar();
  }

  public buscar() {

    this.logradouroService.paginar(this.filtro)
      .subscribe(
        (table: Table<Logradouro>) => {
          this.table = table;
          this.atualizacaoService.atualizacaoPaginacao.next(table);
        },
        (erro) => {
          console.log(erro);
        }
      );
  }

  public setFiltro(filtro: LogradouroFiltro) {
    this.filtro = filtro;
    this.buscar();
  }

  public ordernar(filtro: string): void {

    if (filtro === 'nome') {
      this.filtro.nome.orderAsc = (!this.filtro.nome.orderAsc);
    } else {
      this.filtro.nome.orderAsc = null;
    }

    if (filtro === 'tipoLogradouro') {
      this.filtro.tipoLogradouro.orderAsc = (!this.filtro.tipoLogradouro.orderAsc);
    } else {
      this.filtro.tipoLogradouro.orderAsc = null;
    }

    this.buscar();
  }

  incluir(): void {
    this.router.navigate([ './incluir' ], { relativeTo: this.activeRouter.parent });
  }

  editar(logradouro: Logradouro): void {
    localStorage.setItem('[logradouro][editar]', JSON.stringify(logradouro));
    this.router.navigate([ './editar' ], { relativeTo: this.activeRouter.parent });
  }

  excluir(logradouro: Logradouro): void {
    localStorage.setItem('[logradouro][excluir]', JSON.stringify(logradouro));
    this.router.navigate([ './excluir' ], { relativeTo: this.activeRouter.parent });
  }

  visualizar(logradouro: Logradouro): void {
    localStorage.setItem('[logradouro][visualizar]', JSON.stringify(logradouro));
    this.router.navigate([ './visualizar' ], { relativeTo: this.activeRouter.parent });
  }

}
