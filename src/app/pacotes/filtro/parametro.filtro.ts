import { ElementoFiltro} from './elemento.filtro';
import { Filtro } from './filtro';

export class ParametroFiltro extends Filtro {

  nome: ElementoFiltro;

  constructor() {
    super();
    this.nome = new ElementoFiltro();
  }
}
