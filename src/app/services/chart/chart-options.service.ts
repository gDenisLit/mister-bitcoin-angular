import { Injectable } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartOptionsService {

  constructor() { }

  public btcDailyOptions(): ChartOptions<'line'>{
    return {
      responsive: true,
      elements: {
        point: { radius: 0 }
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'BTC/USD Daily 2020/2022',
          font: {
            size: 28,

          },
          color: '#fff'
        }
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            maxTicksLimit: 12,
            minRotation: 360,
            align: 'inner',
            crossAlign: 'far',
            color: '#fff',
            padding: 5,
            mirror: false,
            labelOffset: 40
          },
        },
        y: {
          ticks: {
            stepSize: 5000,
            color: '#fff',
            padding: 10
          },
          grid: {
            color: 'rgba(104, 236, 248, 0.17)',
            drawBorder: false,
          }
        },
      },
    }
  }
}
