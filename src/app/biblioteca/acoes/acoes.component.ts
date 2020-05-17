import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
})

export class AcoesComponent implements OnInit {

  public showActions: boolean;

  public actions: Array<any> = [
    { 'key' : 'Action', 'url': '' },
    { 'key' : 'Another Action', 'url': '' },
    { 'key' : 'Something else', 'url': '' }
  ];

  constructor() { }

  ngOnInit() {
    this.showActions = false;
  }

}
