import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Logradouro } from '../logradouro.modelo';
import { LogradouroService } from '../logradouro.service';

@Component({
    selector: 'app-logradouro-excluir',
    templateUrl: './logradouro.excluir.component.html',
})

export class LogradouroExcluirComponent implements OnInit {

  public data: Logradouro;

  constructor(
    public router: Router,
    public toast: ToastrService,
    public activeRouter: ActivatedRoute,
    public service: LogradouroService) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[logradouro][excluir]'));
    localStorage.removeItem('[logradouro][excluir]');

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
