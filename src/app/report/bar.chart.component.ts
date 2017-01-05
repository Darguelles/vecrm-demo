import { Component } from '@angular/core';

// webpack html imports
let template = require('./bar.chart.component.html');

@Component({
  selector: 'bar-chart',
  template: template
})
export class BarChartComponent {

  public barChartOptions:any = {
    hover: {
      // Overrides the global setting
      mode: 'index'
    },
    tooltips: {
      enabled: false
    },
    scaleStepWidth: 30,
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        barThickness: 40,
        position: 'right',
        gridLines: {
          display: false,
          color: "#fff",
          zeroLineColor: "#fff",
          zeroLineWidth: 0
        },
        ticks: { //Tipo de letra
          fontFamily: "'Open Sans Bold', sans-serif",
          fontSize: 15,
          max: 5,
          min: 0,
          stepSize: 2
        },
        barPercentage: 0.5,
        categoryPercentage: 1.0
      }],
      xAxes: [{
        position: 'left',
        display: true,
        categoryPercentage: 0.9
      }]
    }
  };
  public barChartLabels:string[] = ['New York City', 'Austin', 'Los Angeles', 'Miami', 'Chicago'];
  public barChartType:string = 'horizontalBar';
  public barChartLegend:boolean = false;
  public maintainAspectRatio:boolean = true;
  public fullWidth:boolean = true;

  public barChartData:any[] = [
    {
      data: [10, 8, 6, 4, 2],
      label: 'Series A',
      fillColor: 'rgba(54, 162, 235, 0.2)',
      backgroundColor: "#ff6c23",
      borderColor: [
        'blue',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1,
      // scaleSteps: 10,
      scaleStepWidth: 20,
      // borderWidth: 1,
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
