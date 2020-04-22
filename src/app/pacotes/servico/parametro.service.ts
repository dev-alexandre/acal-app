import 'rxjs/add/operator/map';
import { ParametroFiltro } from './../filtro/parametro.filtro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@app/pacotes/servico/base.service';
import { environment } from 'environments/environment';
import { Parametro } from '../modelo/parametro.modelo';


@Injectable()
export class ParametroService extends BaseService<Parametro, ParametroFiltro>  {

  getServico(): string {
      return `${environment.apiUrl}/parametro`;
  }

  getHttp(): HttpClient {
    return this.http;
  }

  constructor(public http: HttpClient) {
    super();
  }

}
