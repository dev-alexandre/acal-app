import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoConsumoFiltro } from '@app/pacotes/filtro/grupo-consumo.filtro';
import { GrupoConsumo } from '@app/pacotes/modelo/grupo-consumo.modelo';
import { Table } from '@app/pacotes/modelo/_index';
import { GrupoConsumoService } from '@app/pacotes/servico/grupo-consumo.service';
import { AtualizacaoService } from './../../../pacotes/servico/atualizacao.service';

@Component({
    selector: 'app-grupo-consumo-listar',
    templateUrl: './grupo-consumo.listar.component.html',
})

export class GrupoConsumoListarComponent implements OnInit {

  public table: Table<GrupoConsumo>;

  public filtro: GrupoConsumoFiltro;


  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public grupoConsumoService: GrupoConsumoService,
    public atualizacaoService: AtualizacaoService,
    ) {
  }

  ngOnInit(): void {
    this.filtro = new GrupoConsumoFiltro();
    this.buscar();
  }

  public buscar() {

    this.grupoConsumoService.paginar(this.filtro)
      .subscribe(
        (table: Table<GrupoConsumo>) => {
          this.table = table;
          this.atualizacaoService.atualizacaoPaginacao.next(table);
        },
        (erro) => {
          console.log(erro);
        }
      );
  }

  public setFiltro(filtro: GrupoConsumoFiltro) {
    this.filtro = filtro;
    this.buscar();
  }

  public ordernar(filtro: string): void {

    if (filtro === 'nome') {
      this.filtro.nome.orderAsc = (!this.filtro.nome.orderAsc);
    } else {
      this.filtro.nome.orderAsc = null;
    }

    if (filtro === 'valor') {
      this.filtro.valor.orderAsc = (!this.filtro.valor.orderAsc);
    } else {
      this.filtro.valor.orderAsc = null;
    }

    if (filtro === 'categoria') {
      this.filtro.categoria.orderAsc = (!this.filtro.categoria.orderAsc);
    } else {
      this.filtro.categoria.orderAsc = null;
    }

    this.buscar();
  }

  incluir(): void {
    this.router.navigate([ './incluir' ], { relativeTo: this.activeRouter.parent });
  }

  editar(grupoConsumo: GrupoConsumo): void {
    localStorage.setItem('[grupo-consumo][editar]', JSON.stringify(grupoConsumo));
    this.router.navigate([ './editar' ], { relativeTo: this.activeRouter.parent });
  }

  excluir(grupoConsumo: GrupoConsumo): void {
    localStorage.setItem('[grupo-consumo][excluir]', JSON.stringify(grupoConsumo));
    this.router.navigate([ './excluir' ], { relativeTo: this.activeRouter.parent });
  }

  visualizar(grupoConsumo: GrupoConsumo): void {
    localStorage.setItem('[grupo-consumo][visualizar]', JSON.stringify(grupoConsumo));
    this.router.navigate([ './visualizar' ], { relativeTo: this.activeRouter.parent });
  }

}
