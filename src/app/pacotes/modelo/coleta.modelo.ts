import { Parametro } from './_index';

export class Coleta {

  parametro: Parametro;
  exigido: string;
  analisado: string;
  conforme: string;

  constructor(parametro: Parametro, exigido: string, analisado: string, conforme: string ) {
    this.parametro = parametro;
    this.exigido = exigido;
    this.analisado = analisado;
    this.conforme = conforme;
  }

}
