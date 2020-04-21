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

  @Input() showNotifMenu: boolean = false;
  @Input() showToggleMenu: boolean = false;
  @Input() darkClass:string = '';
  @Output() toggleSettingDropMenuEvent = new EventEmitter();
  @Output() toggleNotificationDropMenuEvent = new EventEmitter();

  constructor(
    public autenciacaoService: AutenticacaoService,
    private config: NgbDropdownConfig,
    private themeService: ThemeService) {
    config.placement = 'bottom-right';
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
