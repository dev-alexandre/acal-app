import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoConsumo } from '../grupo-consumo.modelo';

@Component({
    selector: 'app-grupo-consumo-visualizar',
    templateUrl: './grupo-consumo.visualizar.component.html',
})

export class GrupoConsumoVisualizarComponent implements OnInit, OnDestroy {

  public data: GrupoConsumo;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[grupo-consumo][visualizar]'));
  }

  ngOnDestroy(): void {
    localStorage.removeItem('[grupo-consumo][visualizar]');
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

}
