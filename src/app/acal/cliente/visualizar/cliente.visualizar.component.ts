import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parametro } from '@app/pacotes/modelo/_index';
import { Cliente } from '@app/pacotes/modelo/cliente.modelo';

@Component({
    selector: 'app-cliente-visualizar',
    templateUrl: './cliente.visualizar.component.html',
})

export class ClienteVisualizarComponent implements OnInit, OnDestroy {

  public cliente: Cliente;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('[cliente][visualizar]'));
  }

  ngOnDestroy(): void {
    localStorage.removeItem('[cliente][visualizar]');
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

}
