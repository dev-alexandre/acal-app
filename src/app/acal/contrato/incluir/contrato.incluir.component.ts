import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratoService } from '../contrato.service';
import { GrupoConsumo } from '@app/acal/grupo-consumo/grupo-consumo.modelo';
import * as moment from 'moment';
import { Cliente } from '@app/acal/cliente/cliente.modelo';
import { Matricula } from '@app/acal/matricula/matricula.modelo';

@Component({
    selector: 'app-contrato-incluir',
    templateUrl: './contrato.incluir.component.html',
})

export class ContratoIncluirComponent implements OnInit {

  public form: FormGroup;
  public submited: boolean;
  public dataCriacao: string;
  public exibirSelecionarMatriculaCorrespondencia: Boolean;

  constructor(
    public router: Router,
    public toast: ToastrService,
    public activeRouter: ActivatedRoute,
    public service: ContratoService) {
  }

  ngOnInit(): void {

    this.formulario();
    this.dataCriacao = moment().format('DD/MM/YYYY');

    this.exibirSelecionarMatriculaCorrespondencia = null;
  }

  public onSubmit(): void {
    this.submited = true;

    if (!this.form.valid) {
      return;
    }

    this.setValor();

    this.service
      .salvar(this.form.value)
        .subscribe(
          (response) => {
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },

        (response) => {
          this.toast.error(response);
        }
    );
  }

  voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  public formulario() {

    this.form = new FormGroup({

      dataCriacao: new FormControl(
        new Date, [
        Validators.required,
      ]),

      grupoConsumo: new FormControl(
        null, [
        Validators.required,
      ]),

      cliente: new FormControl(
        null, [
        Validators.required,
      ]),

      matricula: new FormControl(
        null, [
        Validators.required,
      ]),

      matriculaCorrespondencia: new FormControl(
        null, [
        Validators.required,
      ]),

      contratoPrincipal: new FormControl(
        false, [
        Validators.required,
      ]),

      valor: new FormControl(
        null, [
      ]),

      }
    );

    this.setDataCriancao();
  }

  public setDataCriancao(): void {
    this.form.patchValue({
      dataCriancao: new Date()
    });
  }

  public setGrupoConsumo(grupoConsumo: GrupoConsumo): void {
    this.form.patchValue({
      grupoConsumo: grupoConsumo
    });
  }

  public setCliente(cliente: Cliente): void {
    this.form.patchValue({
      cliente: cliente
    });
  }

  public setMatricula(matricula: Matricula): void {
    this.form.patchValue({
      matricula: matricula
    });
  }

  public setMatriculaCorrespondencia(matricula: Matricula): void {
    this.form.patchValue({
      matriculaCorrespondencia: matricula
    });
  }

  public setTipoContrato(contratoPrincipal: boolean) {
    this.form.patchValue({
      contratoPrincipal: contratoPrincipal
    });
  }

  public setValor() {
    this.form.patchValue({
      valor: this.grupoConsumo.value.valor
    });
  }

  public exibirMatriculaCorrespondencia(acao: boolean): void {
    this.exibirSelecionarMatriculaCorrespondencia = acao;

    if (acao) {
        this.setMatriculaCorrespondencia(this.matricula.value);
    }

  }

 

  get grupoConsumo() {
    return this.form.get('grupoConsumo');
  }

  get cliente() {
    return this.form.get('cliente');
  }

  get matricula() {
    return this.form.get('matricula');
  }

  get matriculaCorrespondencia() {
    return this.form.get('matriculaCorrespondencia');
  }

  get contratoPrincipal() {
    return this.form.get('contratoPrincipal');
  }
 

}
