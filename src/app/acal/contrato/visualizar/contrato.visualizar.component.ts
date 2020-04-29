import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrato } from '../contrato.modelo';

@Component({
    selector: 'app-contrato-visualizar',
    templateUrl: './contrato.visualizar.component.html',
})

export class ContratoVisualizarComponent implements OnInit, OnDestroy {

  public data: Contrato;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[contrato][visualizar]'));
  }

  ngOnDestroy(): void {
    localStorage.removeItem('[contrato][visualizar]');
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

}
