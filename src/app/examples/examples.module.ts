import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTreeComponent } from './basic-tree/basic-tree.component';
import { ExampleService } from './example.service';
import { BasicTreeNodeComponent } from './basic-tree/basic-tree-node/basic-tree-node.component';
import { PiTreeChartModule } from 'projects/pi-tree-chart/src/public_api';
import { CollapsedTreeComponent } from './collapsed-tree/collapsed-tree.component';
import { CollapsedTreeNodeComponent } from './collapsed-tree/collapsed-tree-node/collapsed-tree-node.component';

@NgModule({
  declarations: [
    BasicTreeComponent,
    BasicTreeNodeComponent,
    CollapsedTreeComponent,
    CollapsedTreeNodeComponent
  ],
  providers: [ExampleService],
  imports: [
    CommonModule,
    PiTreeChartModule
  ],
  exports: [
    BasicTreeComponent,
    CollapsedTreeComponent
  ]
})
export class ExamplesModule { }
