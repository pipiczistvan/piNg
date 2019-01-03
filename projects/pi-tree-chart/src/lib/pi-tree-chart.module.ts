import { NgModule } from '@angular/core';
import { PiLeaderLineModule } from 'projects/pi-leader-line/src/public_api';
import { PiTreeChartNodeComponent } from './pi-tree-chart-node/pi-tree-chart-node.component';
import { PiTreeChartComponent } from './pi-tree-chart/pi-tree-chart.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PiTreeChartComponent, PiTreeChartNodeComponent],
  imports: [
    CommonModule,
    PiLeaderLineModule
  ],
  exports: [PiTreeChartComponent]
})
export class PiTreeChartModule { }
