import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Matricula } from '../matricula.modelo';
import { MatriculaService } from '../matricula.service';
import { Logradouro } from '@app/acal/logradouro/logradouro.modelo';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-matricula-editar',
    templateUrl: './matricula.editar.component.html',
})

export class MatriculaEditarComponent implements OnInit {

  public form: FormGroup;
  public submited: boolean;
  public data: Matricula;

  constructor(
    public router: Router,
    public toast: ToastrService,
    public activeRouter: ActivatedRoute,
    public service: MatriculaService) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[matricula][editar]'));
    localStorage.removeItem('[matricula][editar]');

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
      .salvar(this.form.value)
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

  public formulario() {

    this.form = new FormGroup({

      id: new FormControl(
        this.data.id, [
        Validators.required,
      ]),

      numero: new FormControl(
        this.data.numero, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ]),

      letra: new FormControl(
        this.data.letra, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ]),

      logradouro: new FormControl(
        this.data.logradouro, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ]),

      }
    );

  }

  public setLogradouro(logradouro: Logradouro){
    this.form.patchValue({
      logradouro: logradouro
    });
  }

  get numero() {
    return this.form.get('numero');
  }

  get letra() {
    return this.form.get('letra');
  }

  get logradouro() {
    return this.form.get('logradouro');
  }

}
