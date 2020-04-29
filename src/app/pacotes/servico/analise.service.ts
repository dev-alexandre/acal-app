import 'rxjs/add/operator/map';
import { Referencia } from './../modelo/referencia.modelo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BaseService } from '@app/pacotes/servico/base.service';
import { Filtro } from '../filtro/filtro';
import { Analise } from '../modelo/analise.modelo';

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
