import { Filtro } from '@app/pacotes/filtro/filtro';
import { ElementoFiltro } from '@app/pacotes/filtro/_index';

export class BoletoFiltro extends Filtro {

  nome: ElementoFiltro;

  constructor() {
    super();
    this.nome = new ElementoFiltro();
  }

}
