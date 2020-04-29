import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boleto } from '../boleto.modelo';

@Component({
    selector: 'app-boleto-visualizar',
    templateUrl: './boleto.visualizar.component.html',
})

export class BoletoVisualizarComponent implements OnInit, OnDestroy {

  public data: Boleto;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[boleto][visualizar]'));
  }

  ngOnDestroy(): void {
    localStorage.removeItem('[boleto][visualizar]');
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

}
