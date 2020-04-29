import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrato } from '../contrato.modelo';
import { ContratoService } from '../contrato.service';

@Component({
    selector: 'app-contrato-excluir',
    templateUrl: './contrato.excluir.component.html',
})

export class ContratoExcluirComponent implements OnInit {

  public data: Contrato;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContratoService) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('[contrato][excluir]'));
    localStorage.removeItem('[contrato][excluir]');

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
