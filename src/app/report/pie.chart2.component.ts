import {Component, Input, AfterViewInit} from '@angular/core';

// webpack html imports
let template = require('./pie.chart2.component.html');

@Component({
  selector: 'pie-chart2',
  template: template
})
export class PieChart2Component {



  @Input() title: string = '';
  @Input() date: string = '';
  @Input() total: number = 0;
  @Input() public data: Array<any> = [54, 26, 8, 12];
  @Input() public colourScale: Array<any> = [
    '#34588c',
    '#94b4e7',
    '#456bbc',
    '#d5f3ff',
    '#4961e2',
    '#357de2',
    '#3694ff',
    '#39c9ff',
    '#0ce1ff',
  ];

  @Input() labels: Array<any> = [];

  constructor(){}

  dataSet: number[];

  // pieChartData:number[] = [300, 500, 100];

  // ngAfterViewInit() {
  //   var dataset = this.data;
  //   console.log(dataset);
  //   this.dataSet = this.data;
  //   this.pieChartData = this.data;
  // }


  public pieChartType: string = 'pie';
  public pieChartLegend: boolean = false;
  // public backgroundColor:string = 'linear-gradient(to right, red , yellow)';
  public colours: string[] = [""];

  public arraycolors: string[] = [
    '#a71313',
    '#a71313',
    '#a71313',
    '#a71313',
    '#a71313'
  ]

  public pieChartData: any[] =
    [
      {
        data: this.data,
        // label: 'Series A',
        backgroundColor: this.colourScale,
        hoverBackgroundColor: [
          this.arraycolors
        ],
        borderWidth: 1,
        scaleStepWidth: 20,
      }
    ];


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
