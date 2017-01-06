import { Component, Input } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

// webpack html imports
let template = require('./pie.chart.component.html');

@Component({
  selector: 'pie-chart',
  template: template
})
export class PieChartComponent {

  @Input() title:string = '';
  @Input() date:string = '';
  @Input() total:number = 0;
  @Input() data:number[] = [60, 70, 80, 100, 200, 250, 300, 541, 150];


  public pieChartType:string = 'pie';
  public pieChartLegend:boolean = false;
  // public backgroundColor:string = 'linear-gradient(to right, red , yellow)';
  public colours:string[]=[""];

  public arraycolors: string[] = [
    '#a71313',
    '#a71313',
    '#a71313',
    '#a71313',
    '#a71313'
  ]

  public pieChartData:any[] = [
    {
      data: this.data,
      // label: 'Series A',
      backgroundColor: [
        '#ff672b',
        '#ef6833',
        '#dd6a3d',
        '#d56d45',
        '#d97d59',
        '#c67a5d',
        '#dd9073',
        '#eda386',
        '#f3b8a1',
      ],
      hoverBackgroundColor: [
        this.arraycolors
      ],

      borderWidth: 1,
      scaleStepWidth: 20,
    }
  ];


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
