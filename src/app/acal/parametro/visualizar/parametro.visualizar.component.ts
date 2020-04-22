import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parametro } from '@app/pacotes/modelo/_index';

@Component({
    selector: 'app-parametro-visualizar',
    templateUrl: './parametro.visualizar.component.html',
})

export class ParametroVisualizarComponent implements OnInit, OnDestroy {

  public parametro: Parametro;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.parametro = JSON.parse(localStorage.getItem('[parametro][visualizar]'));
  }

  ngOnDestroy(): void {
    localStorage.removeItem('[parametro][visualizar]');
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

}
