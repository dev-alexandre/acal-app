import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoConsumo } from '../grupo-consumo.modelo';
import { GrupoConsumoService } from '../grupo-consumo.service';

@Component({
    selector: 'app-grupo-consumo-incluir',
    templateUrl: './grupo-consumo.incluir.component.html',
})

export class GrupoConsumoIncluirComponent implements OnInit {

  public data: GrupoConsumo;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: GrupoConsumoService) {
  }

  ngOnInit(): void {
    this.data = new GrupoConsumo();
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
