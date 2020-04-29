import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BaseService } from '@app/pacotes/servico/base.service';
import { Filtro } from '@app/pacotes/filtro/filtro';
import { Matricula } from './matricula.modelo';

@Injectable()
export class MatriculaService extends BaseService<Matricula, Filtro>  {

  getServico(): string {
      return `${environment.apiUrl}/matricula`;
  }

  getHttp(): HttpClient {
    return this.http;
  }

  constructor(public http: HttpClient) {
    super();
  }

}
