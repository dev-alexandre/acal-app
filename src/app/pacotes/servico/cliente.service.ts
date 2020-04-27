import { Cliente } from './../modelo/cliente.modelo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@app/pacotes/servico/base.service';
import { environment } from 'environments/environment';
import { ClienteFiltro } from '../filtro/cliente.filtro';


@Injectable()
export class ClienteService extends BaseService<Cliente, ClienteFiltro>  {

  getServico(): string {
      return `${environment.apiUrl}/cliente`;
  }

  getHttp(): HttpClient {
    return this.http;
  }

  constructor(public http: HttpClient) {
    super();
  }

}
