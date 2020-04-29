import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoLogradouro } from '../tipo-logradouro.modelo';
import { TipoLogradouroService } from '../tipo-logradouro.service';

@Component({
    selector: 'app-tipo-logradouro-excluir',
    templateUrl: './tipo-logradouro.excluir.component.html',
})

export class TipoLogradouroExcluirComponent implements OnInit {

  public data: TipoLogradouro;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: TipoLogradouroService) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[tipo-logradouro][excluir]'));
    localStorage.removeItem('[tipo-logradouro][excluir]');

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
