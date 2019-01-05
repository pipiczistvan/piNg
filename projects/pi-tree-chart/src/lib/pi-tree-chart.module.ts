import { NgModule } from '@angular/core';
import { PiTreeChartNodeComponent } from './pi-tree-chart-node/pi-tree-chart-node.component';
import { PiTreeChartComponent } from './pi-tree-chart/pi-tree-chart.component';
import { CommonModule } from '@angular/common';
import { PiLeaderLineModule } from '@ping/pi-leader-line';

@NgModule({
  declarations: [PiTreeChartComponent, PiTreeChartNodeComponent],
  imports: [
    CommonModule,
    PiLeaderLineModule
  ],
  exports: [PiTreeChartComponent]
})
export class PiTreeChartModule { }
