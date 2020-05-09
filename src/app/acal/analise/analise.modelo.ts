import { Coleta } from './coleta.modelo';
import { Referencia } from '@app/pacotes/modelo/_index';
import { AE } from '../base/AE';

export class Analise extends AE {

  referencia: Referencia;
  coletas: Coleta[];

  constructor() {
    super();
    this.referencia = new Referencia();
    this.coletas = [];
  }
}
