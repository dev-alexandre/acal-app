import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Table } from '@app/pacotes/modelo/_index';
import { Filtro } from '@app/pacotes/filtro/filtro';
import { LinkPagina } from '@app/pacotes/modelo/link-pagina.modelo';
import { AtualizacaoService } from '@app/pacotes/servico/_index';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})

export class TableComponent<T>  implements OnInit {

  @Input()
  public table: Table<T>;

  @Input()
  public filtro: Filtro;

  @Output()
  public setFiltro = new EventEmitter();

  public links: LinkPagina[];
  public valoresPaginacao: number[];

  constructor(public atualizacaoService: AtualizacaoService) {

  }


  ngOnInit(): void {
    this.valoresPaginacao = [];
    this.valoresPaginacao.push(1, 3, 5, 10, 25, 50);
    this.criarlinksPagina(null);

    this.atualizacaoService.atualizacaoPaginacao.subscribe( table => {

      if (table !== null) {
        this.atualizacaoService.atualizacaoPaginacao.next(null);
        this.criarlinksPagina(table);
        }
    });
  }



  onChange(size: number) {
    this.filtro.page = 0;
    this.listarComAtualizacaoRemota();
  }

  public criarlinksPagina(table: Table<T>): void {
    this.links = [];

    if (table) {
      this.table = table;
    }

    let paginaAtual;

    if (this.filtro.jaFoiPaginado) {
      paginaAtual = this.filtro.page;
    } else {
      paginaAtual = this.table.pageable.pageNumber;
    }

    this.criarLinkPagina(paginaAtual - 2, paginaAtual, this.links);
    this.criarLinkPagina(paginaAtual - 1, paginaAtual, this.links);
    this.criarLinkPagina(paginaAtual, paginaAtual, this.links);
    this.criarLinkPagina(paginaAtual + 1, paginaAtual, this.links);
    this.criarLinkPagina(paginaAtual + 2, paginaAtual, this.links);

    this.limparValoresInvalidos(this.links);
  }

  private criarLinkPagina(paginaAserCriada: number, paginalAtual: number, lista: LinkPagina[]) {

    const linkAtual = new LinkPagina();
    linkAtual.numero = paginaAserCriada;
    linkAtual.label =  (paginaAserCriada + 1).toString();
    linkAtual.selecionado = (paginalAtual === paginaAserCriada);
    lista.push(linkAtual);

  }

  private limparValoresInvalidos( lista: LinkPagina[]) {
    let listarLim: LinkPagina[];
    let paginaAtual: number;
    let totalpages: number;

    listarLim = [];
    paginaAtual = this.table.pageable.pageNumber + 1;
    totalpages = this.table.totalPages;

    for (let i = 0; i < lista.length; i++) {
      const item = lista[i];

      if (item.numero < 0 || item.numero  >= this.table.totalPages ) {
        continue;
      }

      listarLim.push(item);
    }

    this.links = listarLim;
  }



  public paginar(link: LinkPagina) {

    if (link.selecionado) {
      return;
    }

    this.filtro.page = link.numero;
    this.filtro.jaFoiPaginado = true;
    this.links = [];
    this.listar();
  }

  private listarComAtualizacaoRemota() {
    this.setFiltro.emit(this.filtro);
  }

  private listar() {
    this.setFiltro.emit(this.filtro);
    this.criarlinksPagina(null);
  }

}
