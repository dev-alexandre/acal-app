
export class Filtro {

  page: number;
  size: number;
  jaFoiPaginado: boolean;

  constructor() {
    this.page = 0;
    this.size = 10;
    this.jaFoiPaginado = false;
  }

}
