import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '@app/_layout/model/item.model';
import { Menu } from '@app/_layout/model/menu.model';
import { ThemeService } from '@app/services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})

export class MenuComponent implements OnInit {

  @Input()
  public sidebarVisible: boolean;

  @Input()
  public navTab: string;

  @Input()
  public currentActiveMenu: any;

  @Input()
  public currentActiveSubMenu: any;

  @Output()
  public changeNavTabEvent: EventEmitter<any>;

  @Output()
  public activeInactiveMenuEvent: EventEmitter<any>;



  public menu: Menu[];

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.menu = [];
    this.adicionar();
  }


  private adicionar(): void {
    this.adicionarDashboard();
    this.adicionarCadastro();
    this.adicionarMatricula();
    this.adicionarFaturamento();
  }

  private adicionarDashboard(): void {
    const dashboard = new Menu();
    dashboard.nome = 'dashboard';
    dashboard.icone = 'fa fa-desktop';
    dashboard.titulo = 'Dashboard';

    dashboard.itens = [];

    const analytical = new Item();
    analytical.link = '/admin/dashboard/index';
    analytical.titulo = 'Analytical';

    const ioT = new Item();
    ioT.link = '/admin/dashboard/iot';
    ioT.titulo = 'IoT';

    dashboard.itens.push(analytical);
    dashboard.itens.push(ioT);

    this.menu.push(dashboard);
  }

  private adicionarCadastro(): void {
    const cadastro = new Menu();
    cadastro.nome = 'Análise';
    cadastro.icone = 'fa fa-tint';
    cadastro.titulo = 'Qualidade da Água';

    cadastro.itens = [];

    const parametro = new Item();
    parametro.link = '/acal/parametro/listar';
    parametro.titulo = 'Parâmetro';

    const analise = new Item();
    analise.link = '/acal/analise/listar';
    analise.titulo = 'Análise';

    const usuario = new Item();
    usuario.link = '/acal/cliente/listar';
    usuario.titulo = 'Cliente';

    cadastro.itens.push(usuario);
    cadastro.itens.push(parametro);
    cadastro.itens.push(analise);

    this.menu.push(cadastro);
  }

  public adicionarMatricula() {
    const matriculaMenu = new Menu();
    matriculaMenu.nome = 'Matricula';
    matriculaMenu.icone = 'icon-home';
    matriculaMenu.titulo = 'Matricula';

    matriculaMenu.itens = [];

    const matricula = new Item();
    matricula.link = '/acal/parametro/listar';
    matricula.titulo = 'Matricula';

    const logradouro = new Item();
    logradouro.link = '/acal/analise/listar';
    logradouro.titulo = 'Logradouro';

    const tipoLogradouro = new Item();
    tipoLogradouro.link = '/acal/cliente/listar';
    tipoLogradouro.titulo = 'Tipo Logradouro';

    matriculaMenu.itens.push(matricula);
    matriculaMenu.itens.push(logradouro);
    matriculaMenu.itens.push(tipoLogradouro);

    this.menu.push(matriculaMenu);
  }

  public adicionarFaturamento() {
    const faturamentoMenu = new Menu();
    faturamentoMenu.nome = 'Faturamento';
    faturamentoMenu.icone = 'icon-home';
    faturamentoMenu.titulo = 'Cadastro';

    faturamentoMenu.itens = [];

    const contrato = new Item();
    contrato.link = '/acal/parametro/listar';
    contrato.titulo = 'Contrato';

    const boleto = new Item();
    boleto.link = '/acal/analise/listar';
    boleto.titulo = 'Boleto';

    faturamentoMenu.itens.push(boleto);
    faturamentoMenu.itens.push(contrato);

    this.menu.push(faturamentoMenu);
  }

 changeNavTab(tab: string) {
    this.navTab = tab;
  }

  activeInactiveMenu(menuItem: string) {
    this.activeInactiveMenuEvent.emit({ 'item': menuItem });
  }

  changeTheme(theme: string) {
    this.themeService.themeChange(theme);
  }

  changeDarkMode(darkClass: string) {
    this.themeService.changeDarkMode(darkClass);
  }


}
