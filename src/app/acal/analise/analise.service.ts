import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BaseService } from '@app/pacotes/servico/base.service';
import { Filtro } from '@app/pacotes/filtro/filtro';
import { Referencia } from '@app/pacotes/modelo/_index';
import { Analise } from './analise.modelo';

@Injectable()
export class AnaliseService extends BaseService<Analise, Filtro>  {

  getServico(): string {
      return `${environment.apiUrl}/analise`;
  }

  getHttp(): HttpClient {
    return this.http;
  }

  constructor(public http: HttpClient) {
    super();
  }

  deletarPorReferencia(referencia: Referencia) {
    return this.getHttp().delete<string>(this.getServico()  + `/deletar/` + referencia.mes + `/` + referencia.ano);
  }

}
