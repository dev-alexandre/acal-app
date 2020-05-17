import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnaliseFiltro, ElementoFiltro } from '@app/pacotes/filtro/_index';
import { ReferenciaFiltro } from '@app/pacotes/filtro/referencia.filtro';
import { ColetaFiltro } from '@app/pacotes/filtro/coleta.filtro';
import { Table } from '@app/pacotes/modelo/_index';
import { Analise } from '../analise.modelo';
import { Parametro } from '@app/acal/parametro/parametro.modelo';
import { AnaliseService } from '../analise.service';
import { AtualizacaoService } from '@app/pacotes/servico/_index';

@Component({
    selector: 'app-analise-listar',
    templateUrl: './analise.listar.component.html',
})

export class AnaliseListarComponent implements OnInit {

  public table: Table<Analise>;
  public analises: Analise[];
  public parametros: Parametro[];

  public filtro: AnaliseFiltro;


  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public analiseService: AnaliseService,
    public atualizacaoService: AtualizacaoService,
    public toast: ToastrService,
    ) {
  }

  validarReferencia(referencia: string): void {
    const anoAtual = (new Date()).getFullYear();

    if (referencia.length === 6) {
      const mes = +referencia.substring( 0 , 2 );
      const ano = +referencia.substring( 2 , 6 );

      if (mes < 1 || mes > 12) {
        this.filtro.referencia.mes = new ElementoFiltro();

        this.filtro.referencia = new ReferenciaFiltro();
        this.filtro.referencia.referencia = new ElementoFiltro();
        this.toast.info(mes + ': não é um Mês valido');

      }

    }
  }

  ngOnInit(): void {
    this.filtro = new AnaliseFiltro();
    this.filtro.referencia = new ReferenciaFiltro();
    this.filtro.coleta = new ColetaFiltro();
    this.buscar();
  }

  public onEnter() {

    if (this.filtro.referencia.referencia.valor) {

      this.filtro.referencia.mes.valor = this.filtro.referencia.referencia.valor.substring( 0 , 2 );
      this.filtro.referencia.ano.valor = this.filtro.referencia.referencia.valor.substring( 2 , 6 );

    } else {

      this.filtro.referencia.mes.valor = null;
      this.filtro.referencia.ano.valor = null;

    }

    this.buscar();
  }

  public buscar() {

    this.analiseService.paginar(this.filtro)
      .subscribe(
        (table: Table<Analise>) => {
          this.table = table;
          this.atualizacaoService.atualizacaoPaginacao.next(table);
        },
        (erro) => {
          console.log(erro);
        }
      );
  }

  public setFiltro(filtro: AnaliseFiltro) {
    this.filtro = filtro;
    this.buscar();
  }

  public ordernar(nome: string): void {

    if (nome === 'referencia') {
      this.filtro.referencia.orderAsc = (!this.filtro.referencia.orderAsc);
    } else {
      this.filtro.referencia.orderAsc = null;
    }

    if (nome === 'parametro') {
      this.filtro.coleta.parametro.nome.orderAsc = (!this.filtro.coleta.parametro.nome.orderAsc);
    } else {
      this.filtro.coleta.parametro.nome.orderAsc = null;
    }

    if (nome === 'exigido') {
      this.filtro.coleta.exigido.orderAsc = (!this.filtro.coleta.exigido.orderAsc);
    } else {
      this.filtro.coleta.exigido.orderAsc = null;
    }

    if (nome === 'analisado') {
      this.filtro.coleta.analisado.orderAsc = (!this.filtro.coleta.analisado.orderAsc);
    } else {
      this.filtro.coleta.analisado.orderAsc = null;
    }

    if (nome === 'conforme') {
      this.filtro.coleta.conforme.orderAsc = (!this.filtro.coleta.conforme.orderAsc);
    } else {
      this.filtro.coleta.conforme.orderAsc = null;
    }

    this.buscar();
  }

  incluir(): void {
    this.router.navigate([ './incluir' ], { relativeTo: this.activeRouter.parent });
  }

  editar(analise: Analise): void {
    localStorage.setItem('[analise]' + '[editar]', JSON.stringify(analise));
    this.router.navigate([ './editar' ], { relativeTo: this.activeRouter.parent });
  }

  excluir(analise: Analise): void {
    localStorage.setItem('[analise]'  + '[excluir]', JSON.stringify(analise));
    this.router.navigate([ './excluir' ], { relativeTo: this.activeRouter.parent });
  }

  visualizar(analise: Analise): void {
    localStorage.setItem('[analise]'  + '[visualizar]', JSON.stringify(analise));
    this.router.navigate([ './visualizar' ], { relativeTo: this.activeRouter.parent });
  }

}
