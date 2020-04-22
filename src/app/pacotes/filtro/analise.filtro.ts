import { ParametroFiltro } from './parametro.filtro';
import { Filtro } from './filtro';
import { ReferenciaFiltro } from './referencia.filtro';
import { ColetaFiltro } from './coleta.filtro';

export class AnaliseFiltro extends Filtro {

  referencia: ReferenciaFiltro;
  coleta: ColetaFiltro;

  constructor() {
    super();
    this.referencia = new ReferenciaFiltro();
    this.coleta = new ColetaFiltro();
  }

}
