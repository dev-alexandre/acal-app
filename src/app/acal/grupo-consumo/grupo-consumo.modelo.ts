import { Categoria } from '@app/acal/categoria/categoria.modelo';
import { AE } from '../base/AE';

export class GrupoConsumo extends AE {

  nome: string;
  valor: number;
  categoria: Categoria;

}
