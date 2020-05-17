import { Filtro } from '@app/pacotes/filtro/filtro';
import { ElementoFiltro } from '@app/pacotes/filtro/_index';

export class MatriculaFiltro extends Filtro {

  logradouro: ElementoFiltro;
  letra: ElementoFiltro;
  numero: ElementoFiltro;

  constructor() {
    super();
    this.logradouro = new ElementoFiltro();
    this.letra = new ElementoFiltro();
    this.numero = new ElementoFiltro();
  }

}
