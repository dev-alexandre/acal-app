import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@app/pacotes/servico/base.service';
import { environment } from 'environments/environment';
import { GrupoConsumo } from './grupo-consumo.modelo';
import { GrupoConsumoFiltro } from '@app/pacotes/filtro/grupo-consumo.filtro';

@Injectable()
export class GrupoConsumoService extends BaseService<GrupoConsumo, GrupoConsumoFiltro>  {

  getServico(): string {
    return `${environment.apiUrl}/grupo-consumo`;
  }

  getHttp(): HttpClient {
    return this.http;
  }

  constructor(public http: HttpClient) {
    super();
  }

}
