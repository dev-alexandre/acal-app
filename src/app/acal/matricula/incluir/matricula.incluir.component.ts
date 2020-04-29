import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Matricula } from '../matricula.modelo';
import { MatriculaService } from '../matricula.service';

@Component({
    selector: 'app-matricula-incluir',
    templateUrl: './matricula.incluir.component.html',
})

export class MatriculaIncluirComponent implements OnInit {

  public data: Matricula;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: MatriculaService) {
  }

  ngOnInit(): void {
    this.data = new Matricula();
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

        }
    );
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  public formulario() {

    this.form = new FormGroup({

      nome: new FormControl(
        '', [
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
