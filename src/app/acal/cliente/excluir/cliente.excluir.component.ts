import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../cliente.modelo';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-excluir',
    templateUrl: './cliente.excluir.component.html',
})

export class ClienteExcluirComponent implements OnInit {

  public aba: string;

  public data: Cliente;
  public submited: boolean;

  constructor(
    private toastr: ToastrService,
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ClienteService) {
  }

  ngOnInit(): void {

    this.data = JSON.parse(localStorage.getItem('[cliente][excluir]'));
    localStorage.removeItem('[cliente][excluir]');

    if (!this.data) {
      this.voltar();
    }

  }


  public deletar(): void {

    this.service

      .deletar(this.data.id)
        .subscribe(
          () => {
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },

          (error: any) => {
            this.toastr.error(error);
          }
    );
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  changeNavTab(aba: string) {
    this.aba = aba;
  }

  get dataFormatada() {
    if (this.data.dataNascimento) {
      return moment(this.data.dataNascimento).format('DD/MM/YYYY');
    }

    return '';
  }

}
