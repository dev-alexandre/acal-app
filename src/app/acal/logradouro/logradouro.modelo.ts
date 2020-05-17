import { TipoLogradouro } from '../tipo-logradouro/tipo-logradouro.modelo';
import { AE } from '../base/AE';

export class Logradouro extends AE {

  nome?: string;
  tipoLogradouro?: TipoLogradouro;

}
