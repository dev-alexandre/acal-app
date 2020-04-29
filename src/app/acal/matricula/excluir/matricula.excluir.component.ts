import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Matricula } from '../matricula.modelo';
import { MatriculaService } from '../matricula.service';

@Component({
    selector: 'app-matricula-excluir',
    templateUrl: './matricula.excluir.component.html',
})

export class MatriculaExcluirComponent implements OnInit {

  public data: Matricula;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: MatriculaService) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[matricula][excluir]'));
    localStorage.removeItem('[matricula][excluir]');

    if (!this.data) {
      this.voltar();
    }

    this.formulario();
  }

  public excluir(): void {

    this.data = this.form.value;

    this.service
      .deletarPorNome(this.data.nome)
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
        this.data.nome , [
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
