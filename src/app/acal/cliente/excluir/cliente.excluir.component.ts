import { ClienteService } from './../../../pacotes/servico/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Parametro } from '@app/pacotes/modelo/_index';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParametroService } from '@app/pacotes/servico/_index';
import { Cliente } from '@app/pacotes/modelo/cliente.modelo';

@Component({
    selector: 'app-cliente-excluir',
    templateUrl: './cliente.excluir.component.html',
})

export class ClienteExcluirComponent implements OnInit {

  public cliente: Cliente;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ClienteService) {
  }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('[cliente][excluir]'));
    localStorage.removeItem('[cliente][excluir]');

    if (!this.cliente) {
      this.voltar();
    }

    this.formulario();
  }

  public excluir(): void {

    this.cliente = this.form.value;

    this.service
      .deletarPorNome(this.cliente.nome)
        .subscribe(
          (response) => {
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },
        (response) => {}
    );
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  public formulario() {

    this.form = new FormGroup({

      nome: new FormControl(
        this.cliente.nome , [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]), }
    );

  }

  get nome() {
    return this.form.get('nome');
  }

}
