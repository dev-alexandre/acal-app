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
  }

  private adicionarDashboard(): void {
    const dashboard = new Menu();
    dashboard.nome = 'dashboard';
    dashboard.icone = 'icon-home';
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
    cadastro.nome = 'cadastro';
    cadastro.icone = 'icon-home';
    cadastro.titulo = 'Cadastro';

    cadastro.itens = [];

    const parametro = new Item();
    parametro.link = '/acal/cadastro/parametro';
    parametro.titulo = 'Parametro';

    const analise = new Item();
    analise.link = '/acal/cadastro/analise';
    analise.titulo = 'analise';

    cadastro.itens.push(parametro);
    cadastro.itens.push(analise);

    this.menu.push(cadastro);
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
