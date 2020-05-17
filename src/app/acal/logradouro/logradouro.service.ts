import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BaseService } from '@app/pacotes/servico/base.service';
import { Filtro } from '@app/pacotes/filtro/filtro';
import { Logradouro } from './logradouro.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogradouroService extends BaseService<Logradouro, Filtro>  {

  getServico(): string {
      return `${environment.apiUrl}/logradouro`;
  }

  getHttp(): HttpClient {
    return this.http;
  }

  constructor(public http: HttpClient) {
    super();
  }

}
