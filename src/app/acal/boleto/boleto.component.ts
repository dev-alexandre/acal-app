import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Subject } from 'rxjs';
import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SidebarService } from '@app/services/sidebar.service';
import { ThemeService } from '@app/services/theme.service';

@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.component.html',
})

export class BoletoComponent implements OnDestroy {

  public sidebarVisible: boolean;
  public isResizing: boolean;
  public darkClass: string;
  private ngUnsubscribe = new Subject();

  constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private themeService: ThemeService) {
    this.sidebarVisible = true;
    this.isResizing = false;
    this.darkClass = '';
    this.ngUnsubscribe = new Subject();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleFullWidth() {
    this.isResizing = true;
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();

    const that = this;
    that.isResizing = false;
    that.cdr.detectChanges();
  }

}
