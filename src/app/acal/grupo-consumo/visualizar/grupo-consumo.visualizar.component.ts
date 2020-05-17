import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoConsumo } from '../grupo-consumo.modelo';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GrupoConsumoService } from '../grupo-consumo.service';

@Component({
    selector: 'app-grupo-consumo-visualizar',
    templateUrl: './grupo-consumo.visualizar.component.html',
})

export class GrupoConsumoVisualizarComponent implements OnInit {

 
  public data: GrupoConsumo;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: GrupoConsumoService) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[grupo-consumo][visualizar]'));
    localStorage.removeItem('[grupo-consumo][visualizar]');

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
