import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SidebarService } from '@app/services/sidebar.service';
import { ThemeService } from '@app/services/theme.service';

@Component({
  selector: 'app-acal',
  templateUrl: './acal.component.html',
})

export class AcalComponent implements AfterViewInit, OnInit, OnDestroy {

  public title = 'Acal Web';
  public isStopLoading: boolean;
  public showNotifMenu: boolean;
  public showToggleMenu: boolean;
  public navTab: string;
  public currentActiveMenu: string ;
  public currentActiveSubMenu: string;
  public themeClass: string ;
  public smallScreenMenu: string;
  public darkClass: string ;
  private ngUnsubscribe = new Subject();

  constructor(
    public sidebarService: SidebarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private themeService: ThemeService,
    private titleService: Title) {

    this.title = 'Acal Web';
    this.isStopLoading = false;
    this. showNotifMenu = false;
    this. showToggleMenu = false;
    this. navTab = 'menu';
    this. currentActiveMenu = 'light';
    this. themeClass  = 'theme-cyan';
    this. smallScreenMenu = '';
    this. darkClass = '';
    this. ngUnsubscribe = new Subject();


    this.activatedRoute.url.pipe(takeUntil(this.ngUnsubscribe)).subscribe(url => {
      this.isStopLoading = false;
      this.getActiveRoutes();
    });

    this.themeService.themeClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(themeClass => {
      this.themeClass = themeClass;
    });

    this.themeService.smallScreenMenuShow.pipe(takeUntil(this.ngUnsubscribe)).subscribe(showMenuClass => {
      this.smallScreenMenu = showMenuClass;
    });

    this.themeService.darkClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(darkClass => {
      this.darkClass = darkClass;
    });

  }

  ngOnInit() {
    const that = this;
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        that.themeService.hideMenu();
        while (route.firstChild) {
          route = route.firstChild; }
          return route;
        })
        .filter((route) => route.outlet === 'primary')
        .mergeMap((route) => route.data)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((event) => this.titleService.setTitle(event['title']));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleNotificationDropMenu() {
    this.showNotifMenu = !this.showNotifMenu;
  }

  toggleSettingDropMenu() {
    this.showToggleMenu = !this.showToggleMenu;
  }

  ngAfterViewInit() {
    const that = this;
    setTimeout(function () {
      that.isStopLoading = true;
    }, 1000);
  }

  getActiveRoutes() {
    const segments: Array<string> = this.router.url.split('/');
    this.currentActiveMenu = segments[2];
    this.currentActiveSubMenu = segments[3];
  }

  activeInactiveMenu($event: { item: string; }) {
    if ($event.item && $event.item === this.currentActiveMenu) {
      this.currentActiveMenu = '';
    } else {
      this.currentActiveMenu = $event.item;
    }
  }

}
