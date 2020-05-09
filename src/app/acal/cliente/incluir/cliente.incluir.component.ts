import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../cliente.modelo';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-incluir',
    templateUrl: './cliente.incluir.component.html',
})


export class ClienteIncluirComponent implements OnInit {

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
    this.aba = 'cliente';
    this.cliente = new Cliente();
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

      .salvar(this.form.value)
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

      nome: new FormControl(
        '', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),

      documento: new FormControl(
        '', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(14)
      ]),

      dataNascimento: new FormControl(
        '', []
        ),

        telefone: new FormControl(
        '', []
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
