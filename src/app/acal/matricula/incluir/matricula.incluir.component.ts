import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Matricula } from '../matricula.modelo';
import { MatriculaService } from '../matricula.service';
import { Logradouro } from '@app/acal/logradouro/logradouro.modelo';

@Component({
    selector: 'app-matricula-incluir',
    templateUrl: './matricula.incluir.component.html',
})

export class MatriculaIncluirComponent implements OnInit {

  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public toast: ToastrService,
    public activeRouter: ActivatedRoute,
    public service: MatriculaService) {
  }

  ngOnInit(): void {
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

      numero: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ]),

      letra: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ]),

      logradouro: new FormControl(
        null, [
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
