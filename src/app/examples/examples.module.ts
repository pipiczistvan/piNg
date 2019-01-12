import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTreeComponent } from './basic-tree/basic-tree.component';
import { ExampleService } from './example.service';
import { BasicTreeNodeComponent } from './basic-tree/basic-tree-node/basic-tree-node.component';
import { PiTreeChartModule } from 'projects/pi-tree-chart/src/public_api';

@NgModule({
  declarations: [
    BasicTreeComponent,
    BasicTreeNodeComponent
  ],
  providers: [ExampleService],
  imports: [
    CommonModule,
    PiTreeChartModule
  ],
  exports: [
    BasicTreeComponent
  ]
})
export class ExamplesModule { }
