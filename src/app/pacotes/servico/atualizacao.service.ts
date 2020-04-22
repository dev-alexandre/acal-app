import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Table } from '../modelo/table.modelo';


@Injectable({
  providedIn: 'root',
  }
)
export class AtualizacaoService {

    public atualizacaoPaginacao: BehaviorSubject<Table<any>>;

    constructor() {
      this.atualizacaoPaginacao = new BehaviorSubject(null);
    }

}
