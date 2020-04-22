import { ElementoFiltro} from './elemento.filtro';
import { Filtro } from './filtro';

export class ReferenciaFiltro extends Filtro {

  referencia: ElementoFiltro;
  ano: ElementoFiltro;
  mes: ElementoFiltro;
  orderAsc: Boolean;

  constructor() {
    super();
    this.orderAsc = null;
    this.ano = new ElementoFiltro;
    this.mes = new ElementoFiltro;
    this.referencia = new ElementoFiltro();
  }

}
