import { ElementoFiltro } from './../../../pacotes/filtro/elemento.filtro';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from '@app/pacotes/modelo/_index';
import { AtualizacaoService } from '@app/pacotes/servico/_index';
import { Matricula } from '../matricula.modelo';
import { MatriculaFiltro } from '../matricula.filtro';
import { MatriculaService } from '../matricula.service';
import { Logradouro } from '@app/acal/logradouro/logradouro.modelo';

@Component({
    selector: 'app-matricula-listar',
    templateUrl: './matricula.listar.component.html',
})

export class MatriculaListarComponent implements OnInit {

  public table: Table<Matricula>;

  public filtro: MatriculaFiltro;


  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public matriculaService: MatriculaService,
    public atualizacaoService: AtualizacaoService,
    ) {
  }

  ngOnInit(): void {
    this.filtro = new MatriculaFiltro();
    this.buscar();
  }

  public buscar() {

    this.matriculaService.paginar(this.filtro)
      .subscribe(
        (table: Table<Matricula>) => {
          this.table = table;
          this.atualizacaoService.atualizacaoPaginacao.next(table);
        },
        (erro) => {
          console.log(erro);
        }
      );
  }

  public setFiltro(filtro: MatriculaFiltro) {
    this.filtro = filtro;
    this.buscar();
  }

  public ordernar(filtro: string): void {

    if (filtro === 'logradouro') {
      this.filtro.logradouro.orderAsc = (!this.filtro.logradouro.orderAsc);
    } else {
      this.filtro.logradouro.orderAsc = null;
    }

    if (filtro === 'numero') {
      this.filtro.numero.orderAsc = (!this.filtro.numero.orderAsc);
    } else {
      this.filtro.numero.orderAsc = null;
    }

    if (filtro === 'letra') {
      this.filtro.letra.orderAsc = (!this.filtro.letra.orderAsc);
    } else {
      this.filtro.letra.orderAsc = null;
    }

    this.buscar();
  }

  public selecionarLogradouro(lograoduro: Logradouro): void {
    if (lograoduro) {
      this.filtro.logradouro.valor = lograoduro.nome;
    } else {
      this.filtro.logradouro = new ElementoFiltro();
    }
    this.buscar();
  }

  public incluir(): void {
    this.router.navigate([ './incluir' ], { relativeTo: this.activeRouter.parent });
  }

  public editar(matricula: Matricula): void {
    localStorage.setItem('[matricula][editar]', JSON.stringify(matricula));
    this.router.navigate([ './editar' ], { relativeTo: this.activeRouter.parent });
  }

  public excluir(matricula: Matricula): void {
    localStorage.setItem('[matricula][excluir]', JSON.stringify(matricula));
    this.router.navigate([ './excluir' ], { relativeTo: this.activeRouter.parent });
  }

  public visualizar(matricula: Matricula): void {
    localStorage.setItem('[matricula][visualizar]', JSON.stringify(matricula));
    this.router.navigate([ './visualizar' ], { relativeTo: this.activeRouter.parent });
  }

}
