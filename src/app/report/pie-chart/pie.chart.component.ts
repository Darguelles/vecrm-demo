import {Component, Input, AfterViewInit} from '@angular/core';

// webpack html imports
let template = require('./pie.chart.component.html');

@Component({
  selector: 'pie-chart',
  template: template
})
export class PieChartComponent {

  @Input() title: string = '';
  @Input() date: string = '';
  @Input() total: number = 0;
  @Input() public data: Array<any> = [300, 70, 80, 100, 200, 250, 60, 220, 150];
  // @Input() public colourScale: Array<any> = [
  //   '#2b1ab4',
  //   '#2f32d4',
  //   '#2d27eb',
  //   '#3348eb',
  //   '#4961e2',
  //   '#357de2',
  //   '#3694ff',
  //   '#39c9ff',
  //   '#0ce1ff',
  // ];


  @Input() public colourScale: Array<any> = [
    '#db5f29',
    '#e36833',
    '#ef7e3d',
    '#e36833',
    '#ef925a',
    '#e6a261',
    '#f3ae77',
    '#ffca93',
    '#ffdec4'
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
