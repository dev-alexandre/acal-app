import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoConsumo } from '../grupo-consumo.modelo';
import { GrupoConsumoService } from '../grupo-consumo.service';
import { Categoria } from '@app/acal/categoria/categoria.modelo';

@Component({
    selector: 'app-grupo-consumo-editar',
    templateUrl: './grupo-consumo.editar.component.html',
})

export class GrupoConsumoEditarComponent implements OnInit {

  public data: GrupoConsumo;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public toast: ToastrService,
    public activeRouter: ActivatedRoute,
    public service: GrupoConsumoService) {
  }

  ngOnInit(): void {
    this.data = new GrupoConsumo();

    this.data = JSON.parse(localStorage.getItem('[grupo-consumo][editar]'));
    localStorage.removeItem('[grupo-consumo][editar]');

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

      id: new FormControl(
        this.data.id, [
      ]),

      categoria: new FormControl(
        this.data.categoria, [
        Validators.required,
      ]),

      nome: new FormControl(
        this.data.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),

      valor: new FormControl(
        this.data.valor, [
        Validators.required,
      ]),

      }
    );

  }

  public setCategoria(categoria: Categoria): void {
    this.data.categoria = categoria;

    this.form.patchValue({
      categoria: categoria
    });
  }

  public setValue(valorFormatado: string) {
    this.form.patchValue({
      valor: valorFormatado
    });
  }

  get nome() {
    return this.form.get('nome');
  }

  get categoria() {
    return this.form.get('categoria');
  }

  get valor() {
    return this.form.get('valor');
  }
}
