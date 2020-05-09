import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Parametro } from '../parametro.modelo';
import { ParametroService } from '../parametro.service';

@Component({
    selector: 'app-parametro-excluir',
    templateUrl: './parametro.excluir.component.html',
})

export class ParametroExcluirComponent implements OnInit {

  public parametro: Parametro;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ParametroService) {
  }

  ngOnInit(): void {
    this.parametro = JSON.parse(localStorage.getItem('[parametro][excluir]'));
    localStorage.removeItem('[parametro][excluir]');

    if (!this.parametro) {
      this.voltar();
    }

    this.formulario();
  }

  public excluir(): void {

    this.parametro = this.form.value;

    this.service
      .deletarPorNome(this.parametro.nome)
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
