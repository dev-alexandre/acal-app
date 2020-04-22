import { Pageable } from './pageable.modelo';

export class Table<T> {

  content: T[];
  numberOfElements: number;
  first: boolean;
  empty: boolean;
  totalPages: number;
  totalElements: number;
  last: false;
  size: number;
  number: number;

  pageable: Pageable;
}
