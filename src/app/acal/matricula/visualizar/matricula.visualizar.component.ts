import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Matricula } from '../matricula.modelo';

@Component({
    selector: 'app-matricula-visualizar',
    templateUrl: './matricula.visualizar.component.html',
})

export class MatriculaVisualizarComponent implements OnInit, OnDestroy {

  public data: Matricula;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[matricula][visualizar]'));
  }

  ngOnDestroy(): void {
    localStorage.removeItem('[matricula][visualizar]');
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

}
