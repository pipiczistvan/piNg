import { Component, OnInit, Input, TemplateRef, ViewChildren, QueryList, ViewChild, AfterViewInit } from '@angular/core';
import { PiTreeChartDatasource } from '../pi-tree-chart.types';
import { PiLeaderLineOptions } from '@ping/pi-leader-line';
import { PiTreeChartNodeComponent } from '../pi-tree-chart-node/pi-tree-chart-node.component';

@Component({
  selector: 'pi-tree-chart',
  templateUrl: './pi-tree-chart.component.html',
  styleUrls: ['./pi-tree-chart.component.scss']
})
export class PiTreeChartComponent implements AfterViewInit {

  @Input() public lineOptions: PiLeaderLineOptions;
  @Input() public datasource: PiTreeChartDatasource;
  @Input() public nodeTemplateOutlet: TemplateRef<any>;
  @Input() public verticalSpace: number;
  @ViewChild('node', { read: PiTreeChartNodeComponent }) public node: PiTreeChartNodeComponent;

  private nodesByDatasourceId: { [key: number]: PiTreeChartNodeComponent } = {};

  constructor() { }

  ngAfterViewInit(): void {
    this.nodesByDatasourceId[this.datasource.id] = this.node;
    this.node.getChildNodeComponents().forEach(component => {
      this.nodesByDatasourceId[component.datasource.id] = component
    });
  }

  public createLines(): void {
    this.node.createLines();
  }

  public getNodeByDatasourceId(id: number): PiTreeChartNodeComponent {
    return this.nodesByDatasourceId[id];
  }
}
