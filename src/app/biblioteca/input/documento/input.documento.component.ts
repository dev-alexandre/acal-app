import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-documento',
  templateUrl: './input.documento.component.html',
})

export class InputDocumentoComponent implements OnInit {

  @Input()
  public documento: string;

  @Input()
  public submetido: string;

  @Input()
  public formControlName: string;

  @Output()
  public setDocumento = new EventEmitter();

  public tipoDocumento: string;

  ngOnInit(): void {
    this.tipoDocumento = 'C.P.F.';
  }

  public changeTipoDocumento() {

    this.documento = '';

    if (this.tipoDocumento === 'C.P.F.') {
      this.tipoDocumento = 'C.N.P.J.';

    } else if (this.tipoDocumento === 'C.N.P.J.') {
      this.tipoDocumento = 'C.P.F.';
    }
  }

  validarCPF(documento: string): void {

    if (documento.length === 11) {
      this.enviar(documento);
    }
  }

  validarCNPJ(documento: string): void {

    if (documento.length === 14) {
      this.enviar(documento);
    }
  }

  public enviar(documento: string): void {
    this.setDocumento.emit(documento);
  }


}
