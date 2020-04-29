import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@app/pacotes/servico/base.service';
import { environment } from 'environments/environment';
import { Boleto } from './boleto.modelo';
import { BoletoFiltro } from './boleto.filtro';

@Injectable()
export class BoletoService extends BaseService<Boleto, BoletoFiltro>  {

  getServico(): string {
      return `${environment.apiUrl}/boleto`;
  }

  getHttp(): HttpClient {
    return this.http;
  }

  constructor(public http: HttpClient) {
    super();
  }

}
