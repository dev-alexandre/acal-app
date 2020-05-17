import { Filtro } from '@app/pacotes/filtro/filtro';
import { ElementoFiltro } from '@app/pacotes/filtro/_index';

export class ContratoFiltro extends Filtro {

  numero: ElementoFiltro;
  cliente: ElementoFiltro;
  valor: ElementoFiltro;

  constructor() {
    super();
    this.numero = new ElementoFiltro();
    this.cliente = new ElementoFiltro();
    this.valor = new ElementoFiltro();
  }

}
