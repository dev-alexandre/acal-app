import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logradouro } from '../logradouro.modelo';

@Component({
    selector: 'app-logradouro-visualizar',
    templateUrl: './logradouro.visualizar.component.html',
})

export class LogradouroVisualizarComponent implements OnInit, OnDestroy {

  public data: Logradouro;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[logradouro][visualizar]'));
  }

  ngOnDestroy(): void {
    localStorage.removeItem('[logradouro][visualizar]');
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

}
