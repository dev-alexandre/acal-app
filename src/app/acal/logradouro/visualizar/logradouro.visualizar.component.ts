import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logradouro } from '../logradouro.modelo';
import { ToastrService } from 'ngx-toastr';
import { LogradouroService } from '../logradouro.service';

@Component({
    selector: 'app-logradouro-visualizar',
    templateUrl: './logradouro.visualizar.component.html',
})

export class LogradouroVisualizarComponent implements OnInit {
  
  public data: Logradouro;

  constructor(
    public router: Router,
    public toast: ToastrService,
    public activeRouter: ActivatedRoute,
    public service: LogradouroService) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[logradouro][visualizar]'));
    localStorage.removeItem('[logradouro][visualizar]');

    if (!this.data) {
      this.voltar();
    }

  }

  public excluir(): void {

    this.service
      .deletar(this.data.id)
        .subscribe(
          (response) => {
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },
        (response) => {
          this.toast.info(response);
        }
    );
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }


}
