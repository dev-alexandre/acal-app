import { AE } from './../base/AE';

export class Cliente extends AE {

  nome: string;
  documento: string;
  dataNascimento: Date;
  telefone: string;

  constructor() {
    super();
  }

}
