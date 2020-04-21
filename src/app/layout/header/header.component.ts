import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from '../../services/theme.service';
import { AutenticacaoService } from '../../_autenticacao/service/autenticacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [NgbDropdownConfig]
})

export class HeaderComponent implements OnInit {

  @Input()
  public showNotifMenu: boolean ;

  @Input()
  public showToggleMenu: boolean;

  @Input()
  public darkClass: string;

  @Output()
  public toggleSettingDropMenuEvent: EventEmitter<any>;

  @Output()
  public toggleNotificationDropMenuEvent: EventEmitter<any>;

  constructor(
    public autenciacaoService: AutenticacaoService,
    private config: NgbDropdownConfig,
    private themeService: ThemeService) {
    config.placement = 'bottom-right';

      this.showNotifMenu = false;
      this.showToggleMenu = false;
      this.darkClass = '';
      this.toggleSettingDropMenuEvent = new EventEmitter();
      this.toggleNotificationDropMenuEvent = new EventEmitter();
  }

  ngOnInit() {
  }

  onLogout() {
    this.autenciacaoService.logout();
  }

  toggleSettingDropMenu() {
    this.toggleSettingDropMenuEvent.emit();
  }

  toggleNotificationDropMenu() {
    this.toggleNotificationDropMenuEvent.emit();
  }

  toggleSideMenu() {
    this.themeService.showHideMenu();
  }

}
