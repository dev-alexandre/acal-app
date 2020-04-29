import { Filtro } from './filtro';
import { ElementoFiltro } from './_index';

export class GrupoConsumoFiltro extends Filtro {

  nome: ElementoFiltro;
  valor: ElementoFiltro;
  categoria: ElementoFiltro;

  constructor() {
    super();
    this.nome = new ElementoFiltro();
    this.valor = new ElementoFiltro();
    this.categoria = new ElementoFiltro();
  }

}
