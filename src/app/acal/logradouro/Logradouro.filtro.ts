import { Filtro } from '@app/pacotes/filtro/filtro';
import { ElementoFiltro } from '@app/pacotes/filtro/_index';

export class LogradouroFiltro extends Filtro {

  nome: ElementoFiltro;
  tipoLogradouro: ElementoFiltro;

  constructor() {
    super();
    this.nome = new ElementoFiltro();
    this.tipoLogradouro = new ElementoFiltro();
  }

}
