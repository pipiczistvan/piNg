import { Component, OnInit, Input } from '@angular/core';
import { PiTreeChartNodeComponent } from 'projects/pi-tree-chart/src/public_api';

@Component({
  selector: 'ping-basic-tree-node',
  templateUrl: './basic-tree-node.component.html',
  styleUrls: ['./basic-tree-node.component.scss']
})
export class BasicTreeNodeComponent implements OnInit {

  @Input() public datasource: any;
  @Input() public nodeComponent: PiTreeChartNodeComponent;

  constructor() { }

  ngOnInit() {
  }

  public toggle(): void {
    // console.log(this.nodeComponent.getChildNodeComponents(true));
    this.nodeComponent.rePositionChildConnectors(true);

    // if (this.datasource.toggle) {
    //   this.nodeComponent.setParentConnector({ color: 'green' });
    // } else {
    //   this.nodeComponent.setParentConnector({ color: 'black' });
    // }
    // this.datasource.toggle = !this.datasource.toggle;
  }

  public grow(element: HTMLElement):void {
    element.style.height = (element.offsetHeight + 10) + 'px';
  }

}
