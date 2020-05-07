import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Mes } from '../modelo/_index';


@Injectable()
export class MesService   {

  private meses: Mes[];

  constructor() {
    this.meses = [] ;
  }

  public getAtual(): string {
    let mes = (new Date()).getMonth().toString();

    if (mes.length === 1) {
      mes = '0' + mes;
    }

    return mes;
  }

  public listar(): Mes [] {

    this.meses.push(new Mes('Janeiro', '01'));
    this.meses.push(new Mes('Feverreiro', '02'));
    this.meses.push(new Mes('Março', '03'));

    this.meses.push(new Mes('Abril', '04'));
    this.meses.push(new Mes('Maio', '05'));
    this.meses.push(new Mes('Junho', '06'));

    this.meses.push(new Mes('Julho', '07'));
    this.meses.push(new Mes('Agosto', '08'));
    this.meses.push(new Mes('Setembro', '09'));

    this.meses.push(new Mes('Outubro', '10'));
    this.meses.push(new Mes('Novembro', '11'));
    this.meses.push(new Mes('Dezembro', '12'));


    return this.meses;
  }

}
