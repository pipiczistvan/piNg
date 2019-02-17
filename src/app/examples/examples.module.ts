import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTreeComponent } from './basic-tree/basic-tree.component';
import { ExampleService } from './example.service';
import { BasicTreeNodeComponent } from './basic-tree/basic-tree-node/basic-tree-node.component';
import { PiTreeChartModule } from 'projects/pi-tree-chart/src/public_api';
import { CollapsedTreeComponent } from './collapsed-tree/collapsed-tree.component';
import { CollapsedTreeNodeComponent } from './collapsed-tree/collapsed-tree-node/collapsed-tree-node.component';
import { PiIframeModule } from 'projects/pi-iframe/src/public_api';
import { ParentIframeComponent } from './iframe/parent-iframe/parent-iframe.component';
import { ChildIframeComponent } from './iframe/child-iframe/child-iframe.component';

@NgModule({
  declarations: [
    BasicTreeComponent,
    BasicTreeNodeComponent,
    CollapsedTreeComponent,
    CollapsedTreeNodeComponent,
    ParentIframeComponent,
    ChildIframeComponent
  ],
  providers: [ExampleService],
  imports: [
    CommonModule,
    PiTreeChartModule,
    PiIframeModule
  ],
  exports: [
    BasicTreeComponent,
    CollapsedTreeComponent
  ]
})
export class ExamplesModule { }
