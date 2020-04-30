import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Boleto } from '../boleto.modelo';
import { BoletoService } from '../boleto.service';

@Component({
    selector: 'app-boleto-excluir',
    templateUrl: './boleto.excluir.component.html',
})

export class BoletoExcluirComponent implements OnInit {

  public data: Boleto;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: BoletoService) {
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
      .deletarPorNome(this.data.numero)
        .subscribe(
          () => {
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },
        () => {}
    );
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  public formulario() {

    this.form = new FormGroup({

      nome: new FormControl(
        this.data.numero , [
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
