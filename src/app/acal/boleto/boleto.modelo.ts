import { Referencia } from '@app/pacotes/modelo/_index';
import { Contrato } from '../contrato/contrato.modelo';

export class Boleto {

  numero: string;
  dataCriacao: Date;
  referencia: Referencia;
  contrato: Contrato;

}
