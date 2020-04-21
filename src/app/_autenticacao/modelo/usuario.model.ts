import { Funcao } from './_index';

export class User {

  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
  funcoes: Funcao [];

}
