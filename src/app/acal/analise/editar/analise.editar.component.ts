import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnaliseService } from '../analise.service';
import { Analise } from '../analise.modelo';
import { Parametro } from '@app/acal/parametro/parametro.modelo';
import { Coleta } from '../coleta.modelo';

@Component({
    selector: 'app-analise-editar',
    templateUrl: './analise.editar.component.html',
})

export class AnaliseEditarComponent implements OnInit {

  public data: Analise;
  public form: FormGroup;
  public submited: boolean;
  public items: FormArray;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public activeRouter: ActivatedRoute,
    public toast: ToastrService,
    public service: AnaliseService) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[analise][editar]'));
    localStorage.removeItem('[analise][editar]');

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
            this.toast.info(error);
          }
    );
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  public formulario() {

    this.form = new FormGroup(
      {
        referencia: this.fb.group({
          mes: [this.data.referencia.mes, Validators.required],
          ano: [this.data.referencia.ano, Validators.required]
        }),

        coletas: this.fb.array([]),

      }
    );
    this.buildColetas();

  }

  private buildColetas() {
    this.data.coletas.forEach( coleta => {
      this.buildColeta(coleta);
    });
  }

  private buildColeta(coleta: Coleta) {
    this.items = this.form.get('coletas') as FormArray;

    this.items.push(
      this.fb.group({

        parametro: this.fb.group({
          nome: coleta.parametro.nome
        }),

        exigido: [coleta.analisado, Validators.required],
        analisado: [coleta.analisado, Validators.required],
        conforme:  [coleta.exigido, Validators.required],
      })
    );
  }

  get nome() {
    return this.form.get('nome');
  }

}
