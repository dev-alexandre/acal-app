import { Funcao } from './_index';

export class User {

  login: string;
  nome: string;
  senha: string;
  habilitado: boolean;
  exipirado: boolean;
  bloqueado: boolean;
  token?: string;
  funcoes: Funcao [];
  createdDate: Date;
  lastModifiedDate: Date;

}
