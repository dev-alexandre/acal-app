import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Parametro } from '@app/pacotes/modelo/_index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParametroService } from '@app/pacotes/servico/_index';
import { Cliente } from '@app/pacotes/modelo/cliente.modelo';

@Component({
    selector: 'app-cliente-editar',
    templateUrl: './cliente.editar.component.html',
})

export class ClienteEditarComponent implements OnInit {

  public cliente: Cliente;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ParametroService) {
  }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('[cliente][editar]'));
    localStorage.removeItem('[cliente][editar]');
    if (!this.cliente) {
      this.voltar();
    }

    this.formulario();
  }

  public onSubmit(): void {
    this.submited = true;

    if (!this.form.valid) {
      return;
    }

    this.service
      .atualizar(this.form.value)
        .subscribe(
          (response) => {
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },

        (response) => {

        }
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
