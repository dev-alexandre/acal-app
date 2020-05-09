import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../cliente.modelo';
import { ParametroService } from '@app/acal/parametro/parametro.service';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../cliente.service';
import * as moment from 'moment';

@Component({
    selector: 'app-cliente-editar',
    templateUrl: './cliente.editar.component.html',
})

export class ClienteEditarComponent implements OnInit {

  public aba: string;

  public cliente: Cliente;
  public form: FormGroup;
  public submited: boolean;

  constructor(
    private toastr: ToastrService,
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ClienteService) {
  }

  ngOnInit(): void {

    this.cliente = JSON.parse(localStorage.getItem('[cliente][editar]'));
    localStorage.removeItem('[cliente][editar]');

    if (!this.cliente) {
      this.voltar();
    }

    this.formulario();
  }

  public onSubmit(): void {
    this.submited = true;

    if (!this.form.valid) {
      return;
    }

    if (this.form.value.dataNascimento) {
      const date = moment(this.form.value.dataNascimento, 'DDMMYYYY');

      if (!date.isValid()) {
        this.toastr.error(this.form.value.dataNascimento + ' não é um data valida');
        return;
      }
      this.form.value.dataNascimento = date.toDate();

    }

    this.service

      .atualizar(this.form.value)
        .subscribe(
          () => {
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },

          (error: any) => {
            this.toastr.error(error);
          }
    );
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  public formulario() {

    this.form = new FormGroup({

      id: new FormControl(
        this.cliente.id,
      ),

      nome: new FormControl(
        this.cliente.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),

      documento: new FormControl(
        this.cliente.documento, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(14)
      ]),

      dataNascimento: new FormControl(
        moment(this.cliente.dataNascimento, 'YYYY-MM-DD').format('DDMMYYYY')
        , []
        ),

        telefone: new FormControl(
          this.cliente.telefone, []
        ),

      }
    );

  }

  public setDocumento (documentoValue: string): void {

    this.form.patchValue({
      documento: documentoValue
    });

  }

  changeNavTab(aba: string) {
    this.aba = aba;
  }

  get nome() {
    return this.form.get('nome');
  }

  get documento() {
    return this.form.get('documento');
  }

  get dataNascimento() {
    return this.form.get('dataNascimento');
  }

  get telefone() {
    return this.form.get('telefone');
  }

}
