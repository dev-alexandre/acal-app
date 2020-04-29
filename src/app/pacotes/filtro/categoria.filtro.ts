import { Filtro } from './filtro';
import { ElementoFiltro } from './_index';

export class CategoriaFiltro extends Filtro {

  nome: ElementoFiltro;

  constructor() {
    super();
    this.nome = new ElementoFiltro();
  }

}
