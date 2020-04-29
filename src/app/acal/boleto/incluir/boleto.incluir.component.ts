import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Boleto } from '../boleto.modelo';
import { BoletoService } from '../boleto.service';

@Component({
    selector: 'app-boleto-incluir',
    templateUrl: './boleto.incluir.component.html',
})

export class BoletoIncluirComponent implements OnInit {

  public data: Boleto;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: BoletoService) {
  }

  ngOnInit(): void {
    this.data = new Boleto();
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
          () => {
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },
          (error) => {
            
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
