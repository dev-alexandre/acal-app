import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';


@Injectable()
export class HomeService  {

  getServico(): string {
      return `${environment.apiUrl}/home`;
  }

  constructor(public http: HttpClient) {
  }

  getDistribuicaoCliente(): Observable<any> {
    return this.http.get<any>(this.getServico() + `/distribuicao/cliente` );
  }

  getDistribuicaoContratos(): Observable<any> {
    return this.http.get<any>(this.getServico() + `/distribuicao/contrato` );
  }

  getDistribuicaoBoleto(): Observable<any> {
    return this.http.get<any>(this.getServico() + `/distribuicao/boleto` );
  }

  getDistribuicaoOutros(): Observable<any> {
    return this.http.get<any>(this.getServico() + `/distribuicao/outros` );
  }

}
