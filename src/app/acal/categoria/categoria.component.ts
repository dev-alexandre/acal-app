import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteFiltro } from '@app/pacotes/filtro/cliente.filtro';
import { ElementoFiltro } from '@app/pacotes/filtro/_index';
import { Cliente } from '@app/pacotes/modelo/cliente.modelo';
import { Table } from '@app/pacotes/modelo/_index';
import { CategoriaFiltro } from './categoria.filtro';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.modelo';

@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.component.html',
})

export class CategoriaComponent implements OnInit {

  public table: Table<Categoria>;
  public filtro: CategoriaFiltro;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public categoriaService: CategoriaService,
    ) {
  }

  ngOnInit(): void {
    this.filtro = new CategoriaFiltro();
    this.filtro.nome = new ElementoFiltro();
    this.buscar();
  }

  public buscar() {

    this.categoriaService.paginar(this.filtro)
      .subscribe(
        (table: Table<Cliente>) => {
          this.table = table;
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

    this.buscar();
  }

}
