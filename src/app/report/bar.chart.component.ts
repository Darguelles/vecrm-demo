import { Component } from '@angular/core';

// webpack html imports
let template = require('./bar.chart.component.html');

@Component({
  selector: 'bar-chart',
  template: template
})
export class BarChartComponent {


  public barChartOptions:any = {
    scaleStepWidth: 30,
    scaleShowVerticalLines: false,

    responsive: true,
    showTooltips : true,
    scales: {
      yAxes: [{
        barThickness: 40,
        position: 'right',
        gridLines: {
          display: true,
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
        // position: 'left',
        display: true,
        categoryPercentage: 0.5
      }]
    }
  };
  public barChartLabels:string[] = ['New York City', 'Austin', 'Los Angeles', 'Miami', 'Chicago'];
  public barChartType:string = 'horizontalBar';
  public barChartLegend:boolean = false;
  public maintainAspectRatio:boolean = true;
  public fullWidth:boolean = true;
  public backgroundColor:string = 'linear-gradient(to right, red , yellow)';

  public barChartData:any[] = [
    {
      data: [5000, 4500, 1000, 230, 120],
      // label: 'Series A',
      radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
      backgroundColor: [
        '#a71313',
        '#a71313',
        '#a71313',
        '#a71313',
        '#a71313',
      ],
      hoverBackgroundColor: [
        '#B91313',
        '#B91313',
        '#B91313',
        '#B91313',
        '#B91313',
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
