import { Referencia } from './referencia.modelo';
import { Coleta } from './coleta.modelo';

export class Analise {

  referencia: Referencia;
  coletas: Coleta[];

  constructor() {
    this.referencia = new Referencia();
    this.coletas = [];
  }
}
