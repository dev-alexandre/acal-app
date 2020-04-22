import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Parametro } from '@app/pacotes/modelo/_index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParametroService } from '@app/pacotes/servico/_index';

@Component({
    selector: 'app-parametro-editar',
    templateUrl: './parametro.editar.component.html',
})

export class ParametroEditarComponent implements OnInit {

  public parametro: Parametro;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ParametroService) {
  }

  ngOnInit(): void {
    this.parametro = JSON.parse(localStorage.getItem('[parametro][editar]'));
    localStorage.removeItem('[parametro][editar]');
    if (!this.parametro) {
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
        this.parametro.nome , [
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
