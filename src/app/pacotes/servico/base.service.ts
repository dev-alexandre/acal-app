import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from '../modelo/_index';

export abstract class BaseService<T, F> {

  abstract getServico(): string;
  abstract getHttp(): HttpClient;

  constructor() {

  }

  paginar(filtro: F): Observable<Table<T>> {
    return this.getHttp().post<Table<T>>(this.getServico() + `/paginar`, filtro);
  }

  listarTodos(): Observable<T[]> {
    return this.getHttp().get<T[]>(this.getServico() + `/listar`);
  }

  buscar(id: number): Observable<T> {
    return this.getHttp().get<T>(this.getServico() + `/buscar/` + id );
  }

  salvar(t: T): Observable<T> {
    return this.getHttp().post<T>(this.getServico()  + `/salvar`, t);
  }

  atualizar(t: T): Observable<T> {
    return this.getHttp().put<T>( this.getServico()  + `/atualizar`, t);
  }

  deletar(id: string): Observable<any> {
    return this.getHttp().delete<string>(this.getServico()  + `/deletar/` + id);
  }

  deletarPorNome(nome: string) {
    return this.getHttp().delete<string>(this.getServico()  + `/deletar/` + nome);
  }

  select(): Observable<any[]> {
    return this.getHttp().get<any[]>(this.getServico() + `/select` );
  }

  selectPor(nome: string): Observable<any[]> {
    return this.getHttp().get<any[]>(this.getServico() + `/select/` + nome );
  }

}
