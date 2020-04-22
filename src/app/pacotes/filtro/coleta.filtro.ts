import { Filtro } from './filtro';
import { ParametroFiltro } from './parametro.filtro';
import { ElementoFiltro } from './elemento.filtro';

export class ColetaFiltro extends Filtro {

  parametro: ParametroFiltro;
  exigido: ElementoFiltro;
  analisado: ElementoFiltro;
  conforme: ElementoFiltro;

  constructor() {
    super();
    this.parametro = new ParametroFiltro();
    this.exigido = new ElementoFiltro();
    this.analisado = new ElementoFiltro();
    this.conforme = new ElementoFiltro();
  }

}
