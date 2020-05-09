import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@app/pacotes/servico/base.service';
import { environment } from 'environments/environment';
import { Parametro } from '@app/acal/parametro/parametro.modelo';
import { ParametroFiltro } from '@app/pacotes/filtro/_index';


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
