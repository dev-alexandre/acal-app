import { User } from './../../_autenticacao/modelo/usuario.model';
import { Item } from './../../_layout/model/item.model';
import { Menu } from './../../_layout/model/menu.model';
import { AutenticacaoService } from '../../_autenticacao/service/autenticacao.service';
import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit , OnDestroy {

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
  public themeClass: string;
  public darkClass: string;
  public user: User;
  private ngUnsubscribe: any;


  constructor(
    public authenticationService: AutenticacaoService,
    private themeService: ThemeService) {

    this.navTab = 'menu';
    this.sidebarVisible =  true;
    this.changeNavTabEvent = new EventEmitter();
    this.activeInactiveMenuEvent = new EventEmitter();

    this.themeClass =  'theme-cyan';
    this.darkClass = '';
    this.ngUnsubscribe = new Subject();

    this.themeService.themeClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(themeClass => {
      this.themeClass = themeClass;
    });

    this.themeService.darkClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(darkClass => {
      this.darkClass = darkClass;
    });

    this.user = authenticationService.currentUserValue;
  }

  ngOnInit(): void {
    this.menu = [];
    this.adicionar();
  }

  private adicionar(): void {
    this.adicionarDashboard();
    this.adicionarCadastro();
    this.adicionarGrupoConsumo();
    this.adicionarAnalise();
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


  private adicionarGrupoConsumo(): void {
    const categoriaMenu = new Menu();
    categoriaMenu.nome = 'categoria';
    categoriaMenu.icone = 'fa fa-group';
    categoriaMenu.titulo = 'Categoria';

    categoriaMenu.itens = [];

    const categoria = new Item();
    categoria.link = '/acal/categoria/listar';
    categoria.titulo = 'Categoria';

    const grupoConsumo = new Item();
    grupoConsumo.link = '/acal/grupo-consumo/listar';
    grupoConsumo.titulo = 'Grupo de Consumo';

    categoriaMenu.itens.push(categoria);
    categoriaMenu.itens.push(grupoConsumo);
    this.menu.push(categoriaMenu);
  }

  private adicionarCadastro(): void {
    const cadastroMenu = new Menu();
    cadastroMenu.nome = 'cadastro';
    cadastroMenu.icone = 'icon-user';
    cadastroMenu.titulo = 'Cadastro';

    cadastroMenu.itens = [];

    const cliente = new Item();
    cliente.link = '/acal/cliente/listar';
    cliente.titulo = 'Cliente';

    cadastroMenu.itens.push(cliente);
    this.menu.push(cadastroMenu);
  }

  private adicionarAnalise(): void {
    const analiseMenu = new Menu();
    analiseMenu.nome = 'Análise';
    analiseMenu.icone = 'fa fa-tint';
    analiseMenu.titulo = 'Qualidade da Água';

    analiseMenu.itens = [];

    const parametro = new Item();
    parametro.link = '/acal/parametro/listar';
    parametro.titulo = 'Parâmetro';

    const analise = new Item();
    analise.link = '/acal/analise/listar';
    analise.titulo = 'Análise';

    analiseMenu.itens.push(parametro);
    analiseMenu.itens.push(analise);

    this.menu.push(analiseMenu);
  }

  public adicionarMatricula() {
    const matriculaMenu = new Menu();
    matriculaMenu.nome = 'Matricula';
    matriculaMenu.icone = 'icon-home';
    matriculaMenu.titulo = 'Matricula';

    matriculaMenu.itens = [];

    const matricula = new Item();
    matricula.link = '/acal/matricula/listar';
    matricula.titulo = 'Matricula';

    const logradouro = new Item();
    logradouro.link = '/acal/logradouro/listar';
    logradouro.titulo = 'Logradouro';

    const tipoLogradouro = new Item();
    tipoLogradouro.link = '/acal/tipo-logradouro/listar';
    tipoLogradouro.titulo = 'Tipo Logradouro';

    matriculaMenu.itens.push(matricula);
    matriculaMenu.itens.push(logradouro);
    matriculaMenu.itens.push(tipoLogradouro);

    this.menu.push(matriculaMenu);
  }

  public adicionarFaturamento() {
    const faturamentoMenu = new Menu();
    faturamentoMenu.nome = 'Faturamento';
    faturamentoMenu.icone = 'fa fa-money';
    faturamentoMenu.titulo = 'Faturamento';

    faturamentoMenu.itens = [];

    const contrato = new Item();
    contrato.link = '/acal/contrato/listar';
    contrato.titulo = 'Contrato';

    const boleto = new Item();
    boleto.link = '/acal/boleto/listar';
    boleto.titulo = 'Boleto';

    faturamentoMenu.itens.push(boleto);
    faturamentoMenu.itens.push(contrato);

    this.menu.push(faturamentoMenu);
  }


  ngOnDestroy() {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
  }

  changeNavTab(tab: string) {
    this.navTab = tab;
  }

  onLogout() {
   this.authenticationService.logout();
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
