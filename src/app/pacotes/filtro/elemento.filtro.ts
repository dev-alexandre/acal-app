import { Filtro } from './filtro';

export class ElementoFiltro extends Filtro {

  valor: string;
  orderAsc: Boolean;

  constructor() {
    super();
    this.orderAsc = null;
  }

}
