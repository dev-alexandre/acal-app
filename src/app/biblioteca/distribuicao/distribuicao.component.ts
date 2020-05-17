import { Component, OnInit, Input } from '@angular/core';


export interface Distribuicao {

  nome: string;
  lista: ItemDistribuicao [];

}

export interface ItemDistribuicao {

  nome: string;
  numero: number;
  valor: number;

}

@Component({
  selector: 'app-distribuicao',
  templateUrl: './distribuicao.component.html',
})

export class DistribuicaoComponent implements OnInit {

  @Input()
  public distribuicao: Distribuicao;

  public cores: string[];

  constructor() {

  }

  ngOnInit() {
    this.cores = [];
    this.cores.push('custom-color-blue', 'custom-color-purple', 'custom-color-yellow', 'custom-color-green');
  }

  public getColor(index: number): string {
    return this.cores[index];
  }

}
