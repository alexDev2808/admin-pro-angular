import { Component, Input } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Ventas';
  @Input() dataDona = [10, 10, 10];
  // Doughnut
  @Input('labelsDona') doughnutChartLabels: string [] = [ 'Label 1', 'Label 2', 'Label 3' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [210, 310, 110] },
    ]
  };

  
  public doughnutChartType: ChartType = 'doughnut';
}

