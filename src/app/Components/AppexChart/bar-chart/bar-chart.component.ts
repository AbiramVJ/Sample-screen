import { Component } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  constructor(){
    this.renderChart();
  }
  renderChart(){
    let options = {
      chart: {
        type: 'bar'
      },
      series: [
        {
          name: 'sales',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    }

    let chartOptions = {
      series: [
        {
          name: "Value",
          data: [140, 130, 120, 110]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '70%',
          borderRadius: 5,
          colors: {
            backgroundBarColors: ['#E0E0E0'],
            backgroundBarOpacity: 0.6
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#ADD8E6'], // Light blue color for bars
      stroke: {
        show: true,
        width: 3,
        curve:'monotoneCubic',
        lineCap:'square',
        colors: ['#ffffff'] // White border color
      },
      xaxis: {
        categories: ["Elliott", "Mark", "Stacy", "Gavin"],
        labels: {
          show: true,
          style: {
            colors: ['#000000'], // Black color for labels
            fontSize: '12px'
          }
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: false // Hide vertical grid lines
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: ['#000000'], // Black color for labels
            fontSize: '12px'
          }
        }
      },

    };

    setTimeout(() => {
      let element = document.querySelector("#chart") as HTMLElement;
      if (element) {
        var chart = new ApexCharts(element, chartOptions);
        chart!.render();
      }
    }, 500)
  }

}
