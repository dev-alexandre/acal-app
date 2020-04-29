import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@app/pacotes/servico/base.service';
import { environment } from 'environments/environment';
import { CategoriaFiltro } from '../filtro/categoria.filtro';
import { Categoria } from '../modelo/categoria.modelo';

@Injectable()
export class CategoriaService extends BaseService<Categoria, CategoriaFiltro>  {

  getServico(): string {
      return `${environment.apiUrl}/categoria`;
  }

  getHttp(): HttpClient {
    return this.http;
  }

  constructor(public http: HttpClient) {
    super();
  }


}
