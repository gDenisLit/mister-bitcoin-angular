import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  @Input() data!: ChartConfiguration<'line'>['data']
  @Input() options!: ChartOptions<'line'>

  constructor() { }
  ngOnInit() { }
}

