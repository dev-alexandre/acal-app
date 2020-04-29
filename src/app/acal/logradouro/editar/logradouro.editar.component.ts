import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Logradouro } from '../logradouro.modelo';
import { LogradouroService } from '../logradouro.service';

@Component({
    selector: 'app-logradouro-editar',
    templateUrl: './logradouro.editar.component.html',
})

export class LogradouroEditarComponent implements OnInit {

  public data: Logradouro;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: LogradouroService) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[logradouro][editar]'));
    localStorage.removeItem('[logradouro][editar]');
    if (!this.data) {
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
        this.data.nome, [
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
