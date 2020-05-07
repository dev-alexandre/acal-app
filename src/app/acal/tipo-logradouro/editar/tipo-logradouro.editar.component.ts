import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoLogradouro } from '../tipo-logradouro.modelo';
import { TipoLogradouroService } from '../tipo-logradouro.service';

@Component({
    selector: 'app-tipo-logradouro-editar',
    templateUrl: './tipo-logradouro.editar.component.html',
})

export class TipoLogradouroEditarComponent implements OnInit {

  public data: TipoLogradouro;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: TipoLogradouroService,
    public toast: ToastrService,
    ) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[tipo-logradouro][editar]'));
    localStorage.removeItem('[tipo-logradouro][editar]');

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

      nome: new FormControl(
        this.data.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),

      id: new FormControl(
        this.data.id
        ),
      }
    );

  }

  get nome() {
    return this.form.get('nome');
  }

}
