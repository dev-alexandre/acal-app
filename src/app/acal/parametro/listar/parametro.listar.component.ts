import { ParametroFiltro } from './../../../pacotes/filtro/parametro.filtro';
import { ParametroService } from './../../../pacotes/servico/parametro.service';
import { Component, OnInit } from '@angular/core';
import { Analise } from '@app/pacotes/modelo/analise.modelo';
import { Parametro, Table } from '@app/pacotes/modelo/_index';
import { Router, ActivatedRoute } from '@angular/router';
import { ElementoFiltro } from '@app/pacotes/filtro/_index';
import { AtualizacaoService } from '@app/pacotes/servico/_index';

@Component({
    selector: 'app-parametro-listar',
    templateUrl: './parametro.listar.component.html',
})

export class ParametroListarComponent implements OnInit {

  public table: Table<Parametro>;
  public analises: Analise[];
  public parametros: Parametro[];

  public filtro: ParametroFiltro;


  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public parametroService: ParametroService,
    public atualizacaoService: AtualizacaoService
    ) {
  }

  ngOnInit(): void {
    this.filtro = new ParametroFiltro();
    this.filtro.nome = new ElementoFiltro();
    this.buscar();
  }

  public buscar() {

    this.parametroService.paginar(this.filtro)
      .subscribe(
        (table: Table<Parametro>) => {
          this.table = table;
          this.atualizacaoService.atualizacaoPaginacao.next(table);
        },
        (erro) => {
          console.log(erro);
        }
      );
  }

  public setFiltro(filtro: ParametroFiltro) {
    this.filtro = filtro;
    this.buscar();
  }

  public ordernar(nome: string): void {
    this.filtro.nome.orderAsc = (!this.filtro.nome.orderAsc);

    this.buscar();
  }

  incluir(): void {
    this.router.navigate([ './incluir' ], { relativeTo: this.activeRouter.parent });
  }

  editar(parametro: Parametro): void {
    localStorage.setItem('[parametro]' + '[editar]', JSON.stringify(parametro));
    this.router.navigate([ './editar' ], { relativeTo: this.activeRouter.parent });
  }

  excluir(parametro: Parametro): void {
    localStorage.setItem('[parametro]'  + '[excluir]', JSON.stringify(parametro));
    this.router.navigate([ './excluir' ], { relativeTo: this.activeRouter.parent });
  }

  visualizar(parametro: Parametro): void {
    localStorage.setItem('[parametro]'  + '[visualizar]', JSON.stringify(parametro));
    this.router.navigate([ './visualizar' ], { relativeTo: this.activeRouter.parent });
  }

}
