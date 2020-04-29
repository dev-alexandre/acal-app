import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoLogradouro } from '../tipo-logradouro.modelo';

@Component({
    selector: 'app-tipo-logradouro-visualizar',
    templateUrl: './tipo-logradouro.visualizar.component.html',
})

export class TipoLogradouroVisualizarComponent implements OnInit, OnDestroy {

  public data: TipoLogradouro;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[tipo-logradouro][visualizar]'));
  }

  ngOnDestroy(): void {
    localStorage.removeItem('[tipo-logradouro][visualizar]');
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

}
