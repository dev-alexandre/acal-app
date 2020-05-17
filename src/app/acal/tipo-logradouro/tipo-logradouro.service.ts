import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BaseService } from '@app/pacotes/servico/base.service';
import { Filtro } from '@app/pacotes/filtro/filtro';
import { TipoLogradouro } from './tipo-logradouro.modelo';


@Injectable({
  providedIn: 'root'
})
export class TipoLogradouroService extends BaseService<TipoLogradouro, Filtro>  {

  getServico(): string {
      return `${environment.apiUrl}/tipo-logradouro`;
  }

  getHttp(): HttpClient {
    return this.http;
  }

  constructor(public http: HttpClient) {
    super();
  }

}
