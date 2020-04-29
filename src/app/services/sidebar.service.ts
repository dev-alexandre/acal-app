import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public sidebarVisible: boolean;

  constructor() {
    this.sidebarVisible = true;
  }

  toggle() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  getStatus() {
    return this.sidebarVisible;
  }
}
