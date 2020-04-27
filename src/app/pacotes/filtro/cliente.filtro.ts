import { ElementoFiltro } from './elemento.filtro';
import { Filtro } from './filtro';

export class ClienteFiltro extends Filtro {

  nome: ElementoFiltro;
  telefone: ElementoFiltro;
  documento: ElementoFiltro;
  dataNascimento: ElementoFiltro;

  constructor() {
    super();
    this.nome = new ElementoFiltro();
    this.telefone = new ElementoFiltro();
    this.documento = new ElementoFiltro();
    this.dataNascimento = new ElementoFiltro();
  }

}
