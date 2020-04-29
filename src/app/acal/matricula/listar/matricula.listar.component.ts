import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from '@app/pacotes/modelo/_index';
import { AtualizacaoService } from '@app/pacotes/servico/_index';
import { Matricula } from '../matricula.modelo';
import { MatriculaFiltro } from '../matricula.filtro';
import { MatriculaService } from '../matricula.service';

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

  editar(matricula: Matricula): void {
    localStorage.setItem('[matricula][editar]', JSON.stringify(matricula));
    this.router.navigate([ './editar' ], { relativeTo: this.activeRouter.parent });
  }

  excluir(matricula: Matricula): void {
    localStorage.setItem('[matricula][excluir]', JSON.stringify(matricula));
    this.router.navigate([ './excluir' ], { relativeTo: this.activeRouter.parent });
  }

  visualizar(matricula: Matricula): void {
    localStorage.setItem('[matricula][visualizar]', JSON.stringify(matricula));
    this.router.navigate([ './visualizar' ], { relativeTo: this.activeRouter.parent });
  }

}
