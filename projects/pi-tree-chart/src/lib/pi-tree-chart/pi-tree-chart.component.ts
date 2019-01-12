import { Component, Input, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { PiTreeChartDatasource } from '../pi-tree-chart.types';
import { PiLeaderLineOptions } from '@ping/pi-leader-line';
import { PiTreeChartNodeComponent } from '../pi-tree-chart-node/pi-tree-chart-node.component';

@Component({
  selector: 'pi-tree-chart',
  templateUrl: './pi-tree-chart.component.html',
  styleUrls: ['./pi-tree-chart.component.scss']
})
export class PiTreeChartComponent {

  @Input() public lineOptions: PiLeaderLineOptions;
  @Input() public datasource: PiTreeChartDatasource;
  @Input() public nodeTemplateOutlet: TemplateRef<any>;
  @Input() public verticalSpace: number;
  @Input() public levelLimit: number;

  @ViewChild('node', { read: PiTreeChartNodeComponent }) public node: PiTreeChartNodeComponent;

  constructor() { }
}
