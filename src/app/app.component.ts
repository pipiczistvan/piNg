import { Component, ViewChild } from '@angular/core';
import { PiLeaderLineOptions, PiLeaderLineShowEffectName } from 'projects/pi-leader-line/src/lib/pi-leader-line.types';
import { PiLeaderLineDirective } from 'projects/pi-leader-line/src/lib/pi-leader-line.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public datasource = {
    id: 1, name: 'Lao Lao', title: 'general manager',
    children: [
      { id: 2, name: 'Bo Miao', title: 'department manager' },
      {
        id: 3, name: 'Su Miao', title: 'department manager',
        children: [
          { id: 4, name: 'Tie Hua', title: 'senior engineer' },
          {
            id: 5, name: 'Hei Hei', title: 'senior engineer',
            children: [
              { id: 6, name: 'Pang Pang', title: 'engineer' },
              { id: 7, name: 'Xiang Xiang', title: 'UE engineer' }
            ]
          }
        ]
      },
      { id: 8, name: 'Hong Miao', title: 'department manager' },
      { id: 9, name: 'Chun Miao', title: 'department manager' }
    ]
  };
}
