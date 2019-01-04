import { Component, ViewChild } from '@angular/core';
import { PiLeaderLineOptions, PiLeaderLineShowEffectName, PiLeaderLineSocket, PiLeaderLinePath } from 'projects/pi-leader-line/src/lib/pi-leader-line.types';
import { PiLeaderLineDirective } from 'projects/pi-leader-line/src/lib/pi-leader-line.directive';
import { PiTreeChartNodeComponent } from 'projects/pi-tree-chart/src/lib/pi-tree-chart-node/pi-tree-chart-node.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public readonly datasource = {
    id: 1, name: 'Lao Lao', title: 'general manager', toggle: false,
    children: [
      { id: 2, name: 'Bo Miao', title: 'department manager', toggle: false },
      {
        id: 3, name: 'Su Miao', title: 'department manager', toggle: false,
        children: [
          { id: 4, name: 'Tie Hua', title: 'senior engineer', toggle: false },
          {
            id: 5, name: 'Hei Hei', title: 'senior engineer', toggle: false,
            children: [
              { id: 6, name: 'Pang Pang', title: 'engineer', toggle: false },
              { id: 7, name: 'Xiang Xiang', title: 'UE engineer', toggle: false }
            ]
          }
        ]
      },
      { id: 8, name: 'Hong Miao', title: 'department manager', toggle: false },
      { id: 9, name: 'Chun Miao', title: 'department manager', toggle: false }
    ]
  };

  public readonly lineOptions: PiLeaderLineOptions = {
    startSocket: PiLeaderLineSocket.BOTTOM,
    endSocket: PiLeaderLineSocket.TOP,
    endSocketGravity: [0, -50],
    path: PiLeaderLinePath.FLUID,
    dash: {
      animation: true
    },
    color: 'green'
  };

  public toggle(datasource: any, node: PiTreeChartNodeComponent): void {
    if (datasource.toggle) {
      node.setParentConnector({ color: 'green' });
    } else {
      node.setParentConnector({ color: 'black' });
    }
    datasource.toggle = !datasource.toggle;
  }
}
