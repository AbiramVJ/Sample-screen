import { Component } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  private _colors: string[] = ['#ffcb8f', '#3ec796', '#407bff', '#ad00ff'];
  public datas:any = {
    "xaxisName": "Period",
    "yaxisName": "Views",
    "dashboardType": 0,
    "series": [
        {
            "data": [
                11,
                78,
                84,
                108,
                108,
                108,
                127,
                133,
                349,
                355,
                372,
                372,
                372,
                386,
                387,
                397,
                397,
                436,
                437,
                437,
                438,
                438,
                445,
                451,
                659,
                659,
                659,
                678,
                681,
                732,
                732,
                745,
                745,
                745,
                753,
                758,
                774,
                972,
                973,
                null
            ],
            "group": "apexcharts-axis-0"
        }
    ],
    "periods": [
        "15 Oct",
        "16 Oct",
        "17 Oct",
        "18 Oct",
        "19 Oct",
        "20 Oct",
        "21 Oct",
        "22 Oct",
        "23 Oct",
        "24 Oct",
        "25 Oct",
        "26 Oct",
        "27 Oct",
        "28 Oct",
        "29 Oct",
        "30 Oct",
        "31 Oct",
        "1 Nov",
        "2 Nov",
        "3 Nov",
        "4 Nov",
        "5 Nov",
        "6 Nov",
        "7 Nov",
        "8 Nov",
        "9 Nov",
        "10 Nov",
        "11 Nov",
        "12 Nov",
        "13 Nov",
        "14 Nov",
        "15 Nov",
        "16 Nov",
        "17 Nov",
        "18 Nov",
        "19 Nov",
        "20 Nov",
        "21 Nov",
        "22 Nov",
        "23 Nov"
    ],
    "isDates": true,
    "tooltips": [
        {
            "labelDate": "15 Oct",
            "tooltipDate": "15 Oct 2024"
        },
        {
            "labelDate": "16 Oct",
            "tooltipDate": "16 Oct 2024"
        },
        {
            "labelDate": "17 Oct",
            "tooltipDate": "17 Oct 2024"
        },
        {
            "labelDate": "18 Oct",
            "tooltipDate": "18 Oct 2024"
        },
        {
            "labelDate": "19 Oct",
            "tooltipDate": "19 Oct 2024"
        },
        {
            "labelDate": "20 Oct",
            "tooltipDate": "20 Oct 2024"
        },
        {
            "labelDate": "21 Oct",
            "tooltipDate": "21 Oct 2024"
        },
        {
            "labelDate": "22 Oct",
            "tooltipDate": "22 Oct 2024"
        },
        {
            "labelDate": "23 Oct",
            "tooltipDate": "23 Oct 2024"
        },
        {
            "labelDate": "24 Oct",
            "tooltipDate": "24 Oct 2024"
        },
        {
            "labelDate": "25 Oct",
            "tooltipDate": "25 Oct 2024"
        },
        {
            "labelDate": "26 Oct",
            "tooltipDate": "26 Oct 2024"
        },
        {
            "labelDate": "27 Oct",
            "tooltipDate": "27 Oct 2024"
        },
        {
            "labelDate": "28 Oct",
            "tooltipDate": "28 Oct 2024"
        },
        {
            "labelDate": "29 Oct",
            "tooltipDate": "29 Oct 2024"
        },
        {
            "labelDate": "30 Oct",
            "tooltipDate": "30 Oct 2024"
        },
        {
            "labelDate": "31 Oct",
            "tooltipDate": "31 Oct 2024"
        },
        {
            "labelDate": "1 Nov",
            "tooltipDate": "1 Nov 2024"
        },
        {
            "labelDate": "2 Nov",
            "tooltipDate": "2 Nov 2024"
        },
        {
            "labelDate": "3 Nov",
            "tooltipDate": "3 Nov 2024"
        },
        {
            "labelDate": "4 Nov",
            "tooltipDate": "4 Nov 2024"
        },
        {
            "labelDate": "5 Nov",
            "tooltipDate": "5 Nov 2024"
        },
        {
            "labelDate": "6 Nov",
            "tooltipDate": "6 Nov 2024"
        },
        {
            "labelDate": "7 Nov",
            "tooltipDate": "7 Nov 2024"
        },
        {
            "labelDate": "8 Nov",
            "tooltipDate": "8 Nov 2024"
        },
        {
            "labelDate": "9 Nov",
            "tooltipDate": "9 Nov 2024"
        },
        {
            "labelDate": "10 Nov",
            "tooltipDate": "10 Nov 2024"
        },
        {
            "labelDate": "11 Nov",
            "tooltipDate": "11 Nov 2024"
        },
        {
            "labelDate": "12 Nov",
            "tooltipDate": "12 Nov 2024"
        },
        {
            "labelDate": "13 Nov",
            "tooltipDate": "13 Nov 2024"
        },
        {
            "labelDate": "14 Nov",
            "tooltipDate": "14 Nov 2024"
        },
        {
            "labelDate": "15 Nov",
            "tooltipDate": "15 Nov 2024"
        },
        {
            "labelDate": "16 Nov",
            "tooltipDate": "16 Nov 2024"
        },
        {
            "labelDate": "17 Nov",
            "tooltipDate": "17 Nov 2024"
        },
        {
            "labelDate": "18 Nov",
            "tooltipDate": "18 Nov 2024"
        },
        {
            "labelDate": "19 Nov",
            "tooltipDate": "19 Nov 2024"
        },
        {
            "labelDate": "20 Nov",
            "tooltipDate": "20 Nov 2024"
        },
        {
            "labelDate": "21 Nov",
            "tooltipDate": "21 Nov 2024"
        },
        {
            "labelDate": "22 Nov",
            "tooltipDate": "22 Nov 2024"
        },
        {
            "labelDate": "23 Nov",
            "tooltipDate": "23 Nov 2024"
        }
    ],
    "isPrice": false,
    "tickAmount": 20
}

public multichartData:any = {
  "xAxisName": "Period",
  "yAxisName": "Rewards given",
  "dashboardType": 1,
  "series": [
      {
          "name": "New joiner offer",
          "data": [
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "7",
              "7",
              "7",
              "7",
              "7",
              "7",
              "9",
              "10",
              "10",
              "10",
              null
          ],
          "group": "apexcharts-axis-0"
      },
      {
          "name": "£3.40 off",
          "data": [
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "2",
              "2",
              "2",
              null
          ],
          "group": "apexcharts-axis-0"
      },
      {
          "name": "12% off",
          "data": [
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "1",
              "1",
              "1",
              null
          ],
          "group": "apexcharts-axis-0"
      }
  ],
  "periods": [
      "15 Oct",
      "16 Oct",
      "17 Oct",
      "18 Oct",
      "19 Oct",
      "20 Oct",
      "21 Oct",
      "22 Oct",
      "23 Oct",
      "24 Oct",
      "25 Oct",
      "26 Oct",
      "27 Oct",
      "28 Oct",
      "29 Oct",
      "30 Oct",
      "31 Oct",
      "1 Nov",
      "2 Nov",
      "3 Nov",
      "4 Nov",
      "5 Nov",
      "6 Nov",
      "7 Nov",
      "8 Nov",
      "9 Nov",
      "10 Nov",
      "11 Nov",
      "12 Nov",
      "13 Nov",
      "14 Nov",
      "15 Nov",
      "16 Nov",
      "17 Nov",
      "18 Nov",
      "19 Nov",
      "20 Nov",
      "21 Nov",
      "22 Nov",
      "23 Nov"
  ],
  "vendorCurrency": "£",
  "isDates": true,
  "tooltips": [
      {
          "labelDate": "15 Oct",
          "tooltipDate": "15 Oct 2024"
      },
      {
          "labelDate": "16 Oct",
          "tooltipDate": "16 Oct 2024"
      },
      {
          "labelDate": "17 Oct",
          "tooltipDate": "17 Oct 2024"
      },
      {
          "labelDate": "18 Oct",
          "tooltipDate": "18 Oct 2024"
      },
      {
          "labelDate": "19 Oct",
          "tooltipDate": "19 Oct 2024"
      },
      {
          "labelDate": "20 Oct",
          "tooltipDate": "20 Oct 2024"
      },
      {
          "labelDate": "21 Oct",
          "tooltipDate": "21 Oct 2024"
      },
      {
          "labelDate": "22 Oct",
          "tooltipDate": "22 Oct 2024"
      },
      {
          "labelDate": "23 Oct",
          "tooltipDate": "23 Oct 2024"
      },
      {
          "labelDate": "24 Oct",
          "tooltipDate": "24 Oct 2024"
      },
      {
          "labelDate": "25 Oct",
          "tooltipDate": "25 Oct 2024"
      },
      {
          "labelDate": "26 Oct",
          "tooltipDate": "26 Oct 2024"
      },
      {
          "labelDate": "27 Oct",
          "tooltipDate": "27 Oct 2024"
      },
      {
          "labelDate": "28 Oct",
          "tooltipDate": "28 Oct 2024"
      },
      {
          "labelDate": "29 Oct",
          "tooltipDate": "29 Oct 2024"
      },
      {
          "labelDate": "30 Oct",
          "tooltipDate": "30 Oct 2024"
      },
      {
          "labelDate": "31 Oct",
          "tooltipDate": "31 Oct 2024"
      },
      {
          "labelDate": "1 Nov",
          "tooltipDate": "1 Nov 2024"
      },
      {
          "labelDate": "2 Nov",
          "tooltipDate": "2 Nov 2024"
      },
      {
          "labelDate": "3 Nov",
          "tooltipDate": "3 Nov 2024"
      },
      {
          "labelDate": "4 Nov",
          "tooltipDate": "4 Nov 2024"
      },
      {
          "labelDate": "5 Nov",
          "tooltipDate": "5 Nov 2024"
      },
      {
          "labelDate": "6 Nov",
          "tooltipDate": "6 Nov 2024"
      },
      {
          "labelDate": "7 Nov",
          "tooltipDate": "7 Nov 2024"
      },
      {
          "labelDate": "8 Nov",
          "tooltipDate": "8 Nov 2024"
      },
      {
          "labelDate": "9 Nov",
          "tooltipDate": "9 Nov 2024"
      },
      {
          "labelDate": "10 Nov",
          "tooltipDate": "10 Nov 2024"
      },
      {
          "labelDate": "11 Nov",
          "tooltipDate": "11 Nov 2024"
      },
      {
          "labelDate": "12 Nov",
          "tooltipDate": "12 Nov 2024"
      },
      {
          "labelDate": "13 Nov",
          "tooltipDate": "13 Nov 2024"
      },
      {
          "labelDate": "14 Nov",
          "tooltipDate": "14 Nov 2024"
      },
      {
          "labelDate": "15 Nov",
          "tooltipDate": "15 Nov 2024"
      },
      {
          "labelDate": "16 Nov",
          "tooltipDate": "16 Nov 2024"
      },
      {
          "labelDate": "17 Nov",
          "tooltipDate": "17 Nov 2024"
      },
      {
          "labelDate": "18 Nov",
          "tooltipDate": "18 Nov 2024"
      },
      {
          "labelDate": "19 Nov",
          "tooltipDate": "19 Nov 2024"
      },
      {
          "labelDate": "20 Nov",
          "tooltipDate": "20 Nov 2024"
      },
      {
          "labelDate": "21 Nov",
          "tooltipDate": "21 Nov 2024"
      },
      {
          "labelDate": "22 Nov",
          "tooltipDate": "22 Nov 2024"
      },
      {
          "labelDate": "23 Nov",
          "tooltipDate": "23 Nov 2024"
      }
  ],
  "isPrice": false,
  "tickAmount": 20
}

  constructor(){
   // this._renderLineChart(this.datas,false);
    this._renderMultiLineChart(this.multichartData,false)
  }
  // renderChart(){
  //   let options = {
  //     chart: {
  //       type: 'bar'
  //     },
  //     series: [
  //       {
  //         name: 'sales',
  //         data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  //       }
  //     ],
  //     xaxis: {
  //       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  //     }
  //   }

  //   let chartOptions = {
  //     series: [
  //       {
  //         name: "Value",
  //         data: [140, 130, 120, 110]
  //       }
  //     ],
  //     chart: {
  //       type: "bar",
  //       height: 350
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: true,
  //         barHeight: '70%',
  //         borderRadius: 5,
  //         colors: {
  //           backgroundBarColors: ['#E0E0E0'],
  //           backgroundBarOpacity: 0.6
  //         }
  //       }
  //     },
  //     dataLabels: {
  //       enabled: false
  //     },
  //     colors: ['#ADD8E6'], // Light blue color for bars
  //     stroke: {
  //       show: true,
  //       width: 3,
  //       curve:'monotoneCubic',
  //       lineCap:'square',
  //       colors: ['#ffffff'] // White border color
  //     },
  //     xaxis: {
  //       categories: ["Elliott", "Mark", "Stacy", "Gavin"],
  //       labels: {
  //         show: true,
  //         style: {
  //           colors: ['#000000'], // Black color for labels
  //           fontSize: '12px'
  //         }
  //       }
  //     },
  //     grid: {
  //       xaxis: {
  //         lines: {
  //           show: false // Hide vertical grid lines
  //         }
  //       }
  //     },
  //     yaxis: {
  //       labels: {
  //         style: {
  //           colors: ['#000000'], // Black color for labels
  //           fontSize: '12px'
  //         }
  //       }
  //     },

  //   };

  //   setTimeout(() => {
  //     let element = document.querySelector("#chart") as HTMLElement;
  //     if (element) {
  //       var chart = new ApexCharts(element, chartOptions);
  //       chart!.render();
  //     }
  //   }, 500)
  // }

  public _getHoursChatData(){
    let datas = {
        "xaxisName": "Period",
        "yaxisName": "Views",
        "dashboardType": 0,
        "series": [
            {
                "data": [
                  11, 78, 84, 108, 108, 108, 127, 133, 349, 355, 372, 372,
                  386, 387, 397, 436, 437, 438, 445, 451, 659, 678, 732, null

                ],
                "group": "apexcharts-axis-0"
            }
        ],
        "periods": [
          "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM",
          "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
          "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
          "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM", "12:00 AM"
        ],
        "isDates": true,
        "tooltips": [
            {
                "labelDate": "15 Oct",
                "tooltipDate": "15 Oct 2024"
            },
            {
                "labelDate": "16 Oct",
                "tooltipDate": "16 Oct 2024"
            },
            {
                "labelDate": "17 Oct",
                "tooltipDate": "17 Oct 2024"
            },
            {
                "labelDate": "18 Oct",
                "tooltipDate": "18 Oct 2024"
            },
            {
                "labelDate": "19 Oct",
                "tooltipDate": "19 Oct 2024"
            },
            {
                "labelDate": "20 Oct",
                "tooltipDate": "20 Oct 2024"
            },
            {
                "labelDate": "21 Oct",
                "tooltipDate": "21 Oct 2024"
            },
            {
                "labelDate": "22 Oct",
                "tooltipDate": "22 Oct 2024"
            },
            {
                "labelDate": "23 Oct",
                "tooltipDate": "23 Oct 2024"
            },
            {
                "labelDate": "24 Oct",
                "tooltipDate": "24 Oct 2024"
            },
            {
                "labelDate": "25 Oct",
                "tooltipDate": "25 Oct 2024"
            },
            {
                "labelDate": "26 Oct",
                "tooltipDate": "26 Oct 2024"
            },
            {
                "labelDate": "27 Oct",
                "tooltipDate": "27 Oct 2024"
            },
            {
                "labelDate": "28 Oct",
                "tooltipDate": "28 Oct 2024"
            },
            {
                "labelDate": "29 Oct",
                "tooltipDate": "29 Oct 2024"
            },
            {
                "labelDate": "30 Oct",
                "tooltipDate": "30 Oct 2024"
            },
            {
                "labelDate": "31 Oct",
                "tooltipDate": "31 Oct 2024"
            },
            {
                "labelDate": "1 Nov",
                "tooltipDate": "1 Nov 2024"
            },
            {
                "labelDate": "2 Nov",
                "tooltipDate": "2 Nov 2024"
            },
            {
                "labelDate": "3 Nov",
                "tooltipDate": "3 Nov 2024"
            },
            {
                "labelDate": "4 Nov",
                "tooltipDate": "4 Nov 2024"
            },
            {
                "labelDate": "5 Nov",
                "tooltipDate": "5 Nov 2024"
            },
            {
                "labelDate": "6 Nov",
                "tooltipDate": "6 Nov 2024"
            },
            {
                "labelDate": "7 Nov",
                "tooltipDate": "7 Nov 2024"
            },
            {
                "labelDate": "8 Nov",
                "tooltipDate": "8 Nov 2024"
            },
            {
                "labelDate": "9 Nov",
                "tooltipDate": "9 Nov 2024"
            },
            {
                "labelDate": "10 Nov",
                "tooltipDate": "10 Nov 2024"
            },
            {
                "labelDate": "11 Nov",
                "tooltipDate": "11 Nov 2024"
            },
            {
                "labelDate": "12 Nov",
                "tooltipDate": "12 Nov 2024"
            },
            {
                "labelDate": "13 Nov",
                "tooltipDate": "13 Nov 2024"
            },
            {
                "labelDate": "14 Nov",
                "tooltipDate": "14 Nov 2024"
            },
            {
                "labelDate": "15 Nov",
                "tooltipDate": "15 Nov 2024"
            },
            {
                "labelDate": "16 Nov",
                "tooltipDate": "16 Nov 2024"
            },
            {
                "labelDate": "17 Nov",
                "tooltipDate": "17 Nov 2024"
            },
            {
                "labelDate": "18 Nov",
                "tooltipDate": "18 Nov 2024"
            },
            {
                "labelDate": "19 Nov",
                "tooltipDate": "19 Nov 2024"
            },
            {
                "labelDate": "20 Nov",
                "tooltipDate": "20 Nov 2024"
            },
            {
                "labelDate": "21 Nov",
                "tooltipDate": "21 Nov 2024"
            },
            {
                "labelDate": "22 Nov",
                "tooltipDate": "22 Nov 2024"
            },
            {
                "labelDate": "23 Nov",
                "tooltipDate": "23 Nov 2024"
            }
        ],
        "isPrice": false,
        "tickAmount": 20
    }

    this._renderLineChart(datas,true);
    }


  public _renderLineChart(data:any, isUpdate:boolean) {

    var options = {

      series:data.series,

      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          enabled: false
        },

        events: {
          markerClick: (event: any, chartContext: any, opts: any) => {
            const xAxisDate = opts.w.globals.labels[opts.dataPointIndex];
            console.log(opts.w.globals.categoryLabels[opts.dataPointIndex]);
            console.log(data.tooltips[xAxisDate]?.tooltipDate);
            console.log(xAxisDate);
            this._getHoursChatData();
          }
        }
      },

      stroke: {
        curve: 'straight',
        width:3
      },

      dataLabels: {
        enabled: false
      },

      grid: {
        show: true,
        borderColor: "#F7F7F7",
        yaxis: {
          lines: {
            show: true
           }
         },
      },

      markers: {
        size: 0,
      },

      title: {
        text: '',
        align: 'left'
      },
      colors: ['#AD00FF'],

      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },

      yaxis: {
        decimalsInFloat: 0,
        tickAmount: 6,
        title: {
          text: data.yaxisName,
          style: {
            fontFamily: '"Raleway", sans-serif',
            fontSize: '15px',
            fontWeight: 600
          }
        },
        labels: {
          style: {
            colors: '#646464',
            fontFamily: '"Raleway", sans-serif',
          }
        },
      },

      xaxis: {
        tickAmount:data.tickAmount,
        title: {
          text: data.xaxisName,
          style: {
            fontFamily: '"Raleway", sans-serif',
            fontSize: '15px',
            fontWeight: 600
          }
        },
        labels: {
          style: {
            colors: '#646464',
          }
        },
        tooltip: {
          enabled: false
        },
        categories: data.periods,
      },

      tooltip: {
        custom: function({ series, seriesIndex, dataPointIndex, w }:any) {
          var tooltip = w.globals.categoryLabels[dataPointIndex];
          var date = data.tooltips[dataPointIndex];
          if(date) {
            tooltip = date.tooltipDate
          }
          var value = 'No Data';
          if(series[seriesIndex][dataPointIndex] !== null) {
            let values = makePriceFormat(Number(series[seriesIndex][dataPointIndex]));
            value = (data.isPrice ? data.vendorCurrency : '') + values;
          }
          return (
            '<div class="arrow_box">' +
            '<span>'+ '<span>' +
            '<div class="points">' +
            'Stamp given: 12' +
            "</div>" +
            '<div class="points">' +
            'Reward given: 12' +
            "</div>" +
            '<div class="date-data">' +
            tooltip +
            "</div>" +
            "</div>" +
            "<div>"+
            "" +
            "</div>"
          );
        },
      },


    };

    setTimeout(() => {
      let element = document.querySelector("#chart") as HTMLElement;
      if (element) {
        var chart = new ApexCharts(element, options);
        if(!isUpdate){
          chart!.render();
        }else{
          chart!.render();
          chart!.resetSeries();
        }

      }
    }, 500)
  }

  public _renderMultiLineChart(data: any, isUpdate:boolean) {

    var chartOptions = {
      series: data.series,
      chart: {
        type: "line",
        stacked: false,
        height: 350,
        zoom: {
          enabled: false,
        },
        events: {
          markerClick: (event: any, chartContext: any, opts: any) => {
          //  console.log(chartContext)

            //console.log(event)

            const xAxisDate = opts.w.globals.labels[opts.dataPointIndex];
          //  console.log(opts.w.globals.categoryLabels[opts.dataPointIndex]);
            console.log('Date :' +  data.tooltips[xAxisDate - 1]?.tooltipDate);
            console.log('index :' + xAxisDate);
            console.log('serious index: ' + opts.seriesIndex);
          //  this._getHoursChatData();
          }
        }
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      stroke: {
        width: 2,
        curve: "straight"
      },
      colors: this._colors,
      yaxis: {
        min: 0,

        decimalsInFloat: 0,
        tickAmount: 6,
        title: {
          text: 'Rewards given',
          style: {
            fontFamily: '"Raleway", sans-serif',
            fontSize: '15px',
            fontWeight: 600
          }
        },
        labels: {
          style: {
            colors: '#646464',
            fontFamily: '"Raleway", sans-serif',
          }
        },
      },
      xaxis: {
        tickAmount:data.tickAmount,
        title: {
          text: 'Period',
          style: {
            fontFamily: '"Raleway", sans-serif',
            fontSize: '15px',
            fontWeight: 600
          }
        },
        labels: {
          style: {
            colors: '#646464',
          }
        },
        tooltip: {
          enabled: false
        },
        categories: data.periods,
      },
      tooltip: {
        shared: false,
        custom: function({ series, seriesIndex, dataPointIndex, w }:any) {
          var tooltip = w.globals.categoryLabels[dataPointIndex];
          var date = data.tooltips[dataPointIndex];
          if(date) {
            tooltip = date.tooltipDate
          }
          var value = 'No Data';
          if(series[seriesIndex][dataPointIndex] !== null) {
            let values = makePriceFormat(Number(series[seriesIndex][dataPointIndex]));
            value = (data.isPrice ? data.vendorCurrency : '') + values;
          }
          return (
            '<div class="arrow_box">' +
            '<span>'+ '<span>' +
            '<div class="points">' +
            value +
            "</div>" +
            '<div class="date-data">' +
            tooltip +
            "</div>" +
            "</div>" +
            "<div>"+
            "" +
            "</div>"
          );
        },
      },
      legend: {
        showForSingleSeries: true,
        position: "bottom",
        horizontalAlign: "left",
        markers: {
          width: 12,
          height: 12,
          radius: 0,
          shape: "square",
        },
      },
    };

    setTimeout(() => {
      let element = document.querySelector("#chart") as HTMLElement;
      if (element) {
        var chart = new ApexCharts(element, chartOptions);
        if(!isUpdate){
          chart!.render();
        }else{
          chart!.render();
          chart!.resetSeries();
        }

      }
    }, 500)
  }

}

export function makePriceFormat(price:any){
  if(price !== undefined && price !== null){
    if(price.toString().split('.')[1] === undefined) {
      price = price;
    } else {
      if(price.toString().split('.')[1].length == 1) {
        price = price.toFixed(2);
      }
    }
    return price.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
  }else{
    return null;
  }
}
