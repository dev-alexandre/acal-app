import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Logradouro } from '../logradouro.modelo';
import { LogradouroService } from '../logradouro.service';
import { TipoLogradouro } from '@app/acal/tipo-logradouro/tipo-logradouro.modelo';

@Component({
    selector: 'app-logradouro-incluir',
    templateUrl: './logradouro.incluir.component.html',
})

export class LogradouroIncluirComponent implements OnInit {

  public data: Logradouro;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public toast: ToastrService,
    public activeRouter: ActivatedRoute,
    public service: LogradouroService) {
  }

  ngOnInit(): void {
    this.data = new Logradouro();
    this.formulario();
  }

  public onSubmit(): void {
    this.submited = true;

    if (!this.form.valid) {
      return;
    }

    this.service
      .salvar(this.form.value)
        .subscribe(
          (response) => {
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },

        (error) => {
          this.toast.info(error);
        }
    );
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  public formulario() {

    this.form = new FormGroup({

      tipoLogradouro: new FormControl(
        null, [
        Validators.required,
      ]),

      nome: new FormControl(
        '', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),

      }
    );

  }

  public setTipoLogradouro(tipoLogradouro: TipoLogradouro) {
    this.form.patchValue({
      tipoLogradouro: tipoLogradouro
    });
  }

  get nome() {
    return this.form.get('nome');
  }

  get tipoLogradouro() {
    return this.form.get('tipoLogradouro');
  }

}
