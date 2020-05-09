import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-documento',
  templateUrl: './input.documento.component.html',
})

export class InputDocumentoComponent implements OnInit {

  @Input()
  public habilitado: Boolean;

  @Input()
  public documento: string;

  @Input()
  public submetido: string;

  @Input()
  public formControlName: string;

  @Output()
  public setDocumento = new EventEmitter();

  public CNPJ: string;
  public CPF: string;

  public valido: Boolean;

  public tipoDocumento: string;

  ngOnInit(): void {

    this.CNPJ = 'C.N.P.J.';
    this.CPF = 'C.P.F.';

    if (this.documento) {

      if (this.documento.length === 14) {
        this.tipoDocumento = this.CNPJ;
      } else if (this.documento.length === 11)  {
        this.tipoDocumento = this.CPF;
      }

    }

    if (!this.tipoDocumento) {
      this.tipoDocumento = this.CPF;
    }


    if (this.habilitado == null) {
      this.habilitado = false;
    }


  }

  public changeTipoDocumento() {

    this.documento = '';

    if (this.tipoDocumento === this.CPF) {
      this.tipoDocumento = this.CNPJ;

    } else if (this.tipoDocumento === this.CNPJ) {
      this.tipoDocumento = this.CPF;
    }

  }

  public onChange(documento: string): void {

    if (this.tipoDocumento === this.CPF) {

      this.valido = (documento.length === 11);
    } else if (this.tipoDocumento === this.CNPJ) {

      this.valido = (documento.length === 14);
    }

    if (this.valido) {
      this.enviar(documento);
    } else {
      this.enviar(null)
    }

  }

  public enviar(documento: string): void {
    this.setDocumento.emit(documento);
  }

}

