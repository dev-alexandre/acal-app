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
    parametro.link = '/acal/parametro/listar';
    parametro.titulo = 'Parâmetro';

    const analise = new Item();
    analise.link = '/acal/analise/listar';
    analise.titulo = 'Análise';

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


/*
<li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" [ngClass]="{'active':currentActiveMenu == 'app'}">
            <a class="has-arrow" (click)="activeInactiveMenu('app')"><i class="icon-grid"></i> <span>App</span></a>
            <ul *ngIf="currentActiveMenu == 'app'">
                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/app/app-inbox']">Inbox</a></li>
                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/app/app-chat']">Chat</a></li>
                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/app/app-calendar']">Calendar</a></li>
                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/app/app-contact-grid']">Contact
                        Card <span class="badge badge-warning float-right">New</span></a></li>
            </ul>
          </li>

          <li [ngClass]="{'active':currentActiveMenu == 'file-manager'}">
              <a class="has-arrow" (click)="activeInactiveMenu('file-manager')"><i class="icon-folder"></i>
                  <span>File Manager</span></a>
              <ul *ngIf="currentActiveMenu == 'file-manager'">
                  <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/file-manager/file-documents']">Documents</a></li>
                  <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/file-manager/file-media']">Media</a></li>
                  <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/file-manager/file-images']">Images</a></li>
              </ul>
          </li>
          
                        <li [ngClass]="{'active':currentActiveMenu == 'blogs'}">
                            <a class="has-arrow" (click)="activeInactiveMenu('blogs')"><i class="icon-globe"></i>
                                <span>Blog</span></a>
                            <ul *ngIf="currentActiveMenu == 'blogs'">
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/blogs/blog-post']">New Post</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/blogs/blog-list']">Blog List</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/blogs/blog-details']">Blog Details</a></li>
                            </ul>
                        </li>
                        <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" [ngClass]="{'active':currentActiveMenu == 'ui-elements'}">
                            <a class="has-arrow" (click)="activeInactiveMenu('ui-elements')"><i class="icon-diamond"></i>
                                <span>UI Elements</span></a>
                            <ul *ngIf="currentActiveMenu == 'ui-elements'">
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/ui-elements/typography']">Typography</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/ui-elements/ui-tabs']">Tabs</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/ui-elements/ui-buttons']">Buttons</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/ui-elements/ui-bootstrap']">Bootstrap
                                        UI</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/ui-elements/ui-icons']">Icons</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/ui-elements/ui-notifications']">Notifications</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/ui-elements/ui-colors']">Colors</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/ui-elements/ui-list-group']">List
                                        Group</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/ui-elements/ui-media-object']">Media
                                        Object</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/ui-elements/ui-modal']">Modals</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/ui-elements/ui-progressbars']">Progress
                                        Bars</a></li>
                            </ul>
                        </li>

                        <li [ngClass]="{'active':currentActiveMenu == 'widgets'}">
                            <a class="has-arrow" (click)="activeInactiveMenu('widgets')"><i class="icon-puzzle"></i>
                                <span>Widgets</span></a>
                            <ul *ngIf="currentActiveMenu == 'widgets'">
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a
                                        [routerLink]="['/admin/widgets/widgets-data']">Data</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a
                                        [routerLink]="['/admin/widgets/widgets-weather']">Weather</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a
                                        [routerLink]="['/admin/widgets/widgets-blog']">Blog</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a
                                        [routerLink]="['/admin/widgets/widgets-ecommerce']">eCommerce</a></li>
                            </ul>
                        </li>
                        
                        <li [ngClass]="{'active':currentActiveMenu == 'authentication'}">
                            <a class="has-arrow" (click)="activeInactiveMenu('authentication')"><i class="icon-lock"></i>
                                <span>Authentication</span></a>
                            <ul *ngIf="currentActiveMenu == 'authentication'">
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/authentication/page-login']">Login</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/authentication/page-register']">Register</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/authentication/page-lockscreen']">Lockscreen</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/authentication/page-forgot-password']">Forgot Password</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/authentication/page-404']">Page 404</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/authentication/page-403']">Page 403</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/authentication/page-500']">Page 500</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/authentication/page-503']">Page 503</a></li>
                            </ul>
                        </li>
                        <li [ngClass]="{'active':currentActiveMenu == 'pages'}">
                            <a class="has-arrow" (click)="activeInactiveMenu('pages')"><i class="icon-docs"></i> <span>Pages</span></a>
                            <ul *ngIf="currentActiveMenu == 'pages'">
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-blank']">Blank
                                        Page</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-profile']">Profile
                                        <span class="badge badge-default float-right">v1</span></a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-profile2']">Profile
                                        <span class="badge badge-warning float-right">v2</span></a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-gallery']">Image
                                        Gallery</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-timeline']">Timeline</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-pricing']">Pricing</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-invoices']">Invoices
                                        <span class="badge badge-default float-right">v1</span></a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-invoices2']">Invoices
                                        <span class="badge badge-warning float-right">v2</span></a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-search-results']">Search
                                        Results</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-helper-class']">Helper
                                        Classes</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-teams-board']">Teams
                                        Board</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-projects-list']">Projects
                                        List</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/authentication/page-maintanance']">Maintanance</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-testimonials']">Testimonials</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/pages/page-faq']">FAQ</a></li>
                            </ul>
                        </li>
                        <li [ngClass]="{'active':currentActiveMenu == 'forms'}">
                            <a class="has-arrow" (click)="activeInactiveMenu('forms')"><i class="icon-pencil"></i>
                                <span>Forms</span></a>
                            <ul *ngIf="currentActiveMenu == 'forms'">
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a
                                        [routerLink]="['/admin/forms/forms-validation']">Form Validation</a></li>
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/forms/forms-basic']">Basic Elements</a></li>
                            </ul>
                        </li>
                        <li [ngClass]="{'active':currentActiveMenu == 'tables'}">
                            <a class="has-arrow" (click)="activeInactiveMenu('tables')"><i class="icon-tag"></i> <span>Tables</span></a>
                            <ul *ngIf="currentActiveMenu == 'tables'">
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/tables/table-normal']">Normal
                                        Tables</a></li>
                            </ul>
                        </li>
                        <li [ngClass]="{'active':currentActiveMenu == 'charts'}">
                            <a class="has-arrow" (click)="activeInactiveMenu('charts')"><i class="icon-bar-chart"></i>
                                <span>Charts</span></a>
                            <ul *ngIf="currentActiveMenu == 'charts'">
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/admin/charts/chart-echarts']">E-Charts</a></li>
                            </ul>
                        </li>
                        <li [ngClass]="{'active':currentActiveMenu == 'maps'}">
                            <a class="has-arrow" (click)="activeInactiveMenu('maps')"><i class="icon-bar-chart"></i>
                                <span>Maps</span></a>
                            <ul *ngIf="currentActiveMenu == 'maps'">
                                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a
                                        [routerLink]="['/admin/maps/leaflet']">Leaflet</a></li>
                            </ul>
                        </li>

*/