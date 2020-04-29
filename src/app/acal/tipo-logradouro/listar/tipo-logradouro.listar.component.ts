import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from '@app/pacotes/modelo/_index';
import { AtualizacaoService } from '@app/pacotes/servico/_index';
import { TipoLogradouro } from '../tipo-logradouro.modelo';
import { TipoLogradouroFiltro } from '../tipo-logradouro.filtro';
import { TipoLogradouroService } from '../tipo-logradouro.service';

@Component({
    selector: 'app-tipo-logradouro-listar',
    templateUrl: './tipo-logradouro.listar.component.html',
})

export class TipoLogradouroListarComponent implements OnInit {

  public table: Table<TipoLogradouro>;

  public filtro: TipoLogradouroFiltro;


  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public tipoLogradouroService: TipoLogradouroService,
    public atualizacaoService: AtualizacaoService,
    ) {
  }

  ngOnInit(): void {
    this.filtro = new TipoLogradouroFiltro();
    this.buscar();
  }

  public buscar() {

    this.tipoLogradouroService.paginar(this.filtro)
      .subscribe(
        (table: Table<TipoLogradouro>) => {
          this.table = table;
          this.atualizacaoService.atualizacaoPaginacao.next(table);
        },
        (erro) => {
          console.log(erro);
        }
      );
  }

  public setFiltro(filtro: TipoLogradouroFiltro) {
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

  editar(tipoLogradouro: TipoLogradouro): void {
    localStorage.setItem('[tipo-logradouro][editar]', JSON.stringify(tipoLogradouro));
    this.router.navigate([ './editar' ], { relativeTo: this.activeRouter.parent });
  }

  excluir(tipoLogradouro: TipoLogradouro): void {
    localStorage.setItem('[tipo-logradouro][excluir]', JSON.stringify(tipoLogradouro));
    this.router.navigate([ './excluir' ], { relativeTo: this.activeRouter.parent });
  }

  visualizar(tipoLogradouro: TipoLogradouro): void {
    localStorage.setItem('[tipo-logradouro][visualizar]', JSON.stringify(tipoLogradouro));
    this.router.navigate([ './visualizar' ], { relativeTo: this.activeRouter.parent });
  }

}
