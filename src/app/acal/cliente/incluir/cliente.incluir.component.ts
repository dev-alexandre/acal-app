import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '@app/pacotes/modelo/cliente.modelo';
import { ClienteService } from '@app/pacotes/servico/cliente.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

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

    const cliente: Cliente = this.form.value;
    const date = moment(this.form.value.dataNascimento, 'DDMMYYYY');

    if (!date.isValid()) {
      this.toastr.error(this.form.value.dataNascimento + ' não é um data valida');
      return;
    }
    cliente.dataNascimento = date.toDate();


    this.service

      .salvar(cliente)
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
        Validators.maxLength(50)
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
