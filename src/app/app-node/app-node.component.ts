import { Component, OnInit, Input } from '@angular/core';
import { PiTreeChartNodeComponent } from 'projects/pi-tree-chart/src/public_api';

@Component({
  selector: 'app-node',
  templateUrl: './app-node.component.html',
  styleUrls: ['./app-node.component.scss']
})
export class AppNodeComponent implements OnInit {

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
