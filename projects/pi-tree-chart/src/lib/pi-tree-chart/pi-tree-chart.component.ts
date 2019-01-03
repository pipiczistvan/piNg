import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { PiTreeChartDatasource } from '../pi-tree-chart.types';

@Component({
  selector: 'pi-tree-chart',
  templateUrl: './pi-tree-chart.component.html',
  styleUrls: ['./pi-tree-chart.component.scss']
})
export class PiTreeChartComponent implements OnInit {

  @Input() public datasource: PiTreeChartDatasource;
  @Input() public nodeTemplateOutlet: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
