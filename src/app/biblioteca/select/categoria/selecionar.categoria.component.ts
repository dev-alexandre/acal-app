import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Categoria } from '@app/acal/categoria/categoria.modelo';

@Component({
  selector: 'app-selecionar-categoria',
  templateUrl: './selecionar.categoria.component.html',
})

export class SelecionarCategoriaComponent implements OnInit{

  @Input()
  public categoria: Categoria;

  @Output()
  public setCategoria = new EventEmitter();

  public categorias: Categoria [];

  ngOnInit(): void {

    this.categorias = [];
    this.categorias.push({nome: 'Sócio Fundador'});
    this.categorias.push({nome: 'Sócio Efetivo'});
    this.categorias.push({nome: 'Sócio Temporario'});

    if (this.categoria == null) {
      this.categoria = ({nome: 'Selecione' });
    }

  }

  public onModelChange(categoria: Categoria) {
    this.setCategoria.emit(categoria);
  }

}
