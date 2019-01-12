import { Component, OnInit, Input } from '@angular/core';
import { PiTreeChartNodeComponent } from 'projects/pi-tree-chart/src/public_api';

@Component({
  selector: 'ping-collapsed-tree-node',
  templateUrl: './collapsed-tree-node.component.html',
  styleUrls: ['./collapsed-tree-node.component.scss']
})
export class CollapsedTreeNodeComponent implements OnInit {

  @Input() public datasource: any;
  @Input() public nodeComponent: PiTreeChartNodeComponent;
  
  constructor() { }

  ngOnInit() {
  }

  public showChildren(): void {
    this.nodeComponent.showChildren();
  }

  public hideChildren(): void {
    this.nodeComponent.hideChildren();
  }
}
