import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrato } from '../contrato.modelo';
import { ContratoService } from '../contrato.service';

@Component({
    selector: 'app-contrato-editar',
    templateUrl: './contrato.editar.component.html',
})

export class ContratoEditarComponent implements OnInit {

  public data: Contrato;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContratoService) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[contrato][editar]'));
    localStorage.removeItem('[contrato][editar]');
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

        (error) => {
          console.log(error);
        }
    );
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  public formulario() {

    this.form = new FormGroup({

      numero: new FormControl(
        this.data.numero, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]), }
    );

  }

  get numero() {
    return this.form.get('numero');
  }

}
