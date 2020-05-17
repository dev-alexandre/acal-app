import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
})

export class ReferralsComponent implements OnInit {

  public facebookTransitiongoal:number = 87;
  public tweeterTransitiongoal:number = 34;
  public searchTransitiongoal:number = 54;
  public visitsTransitiongoal:number = 67;
  constructor() { }

  ngOnInit() {
  }

}
