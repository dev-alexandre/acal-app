import { Component, OnInit } from '@angular/core';
declare var require: any;
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-total-revenue',
  templateUrl: './total-revenue.component.html',
})

export class TotalRevenueComponent implements OnInit {

  public earningsBarChart: EChartOption = {};
  public doghnutChart: any = {};

  constructor() {
    this.earningsBarChart = this.getEarningsChartOptions();
    this.doghnutChart = this.getDougnutChartOptions();
  }

  ngOnInit() {
  }

  getEarningsChartOptions() {
    const options: EChartOption = {};
    return options;
  }

  getDougnutChartOptions(){
    const options: EChartOption = {};
    return options;
  }

}
