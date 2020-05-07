import { ElementoFiltro } from '@app/pacotes/filtro/_index';
import { Filtro } from '@app/pacotes/filtro/filtro';

export class CategoriaFiltro extends Filtro {

  nome: ElementoFiltro;

  constructor() {
    super();
    this.nome = new ElementoFiltro();
  }

}
