import { Injectable } from '@angular/core';
import { PiLeaderLineOptions, PiLeaderLineSocket, PiLeaderLinePath } from 'projects/pi-leader-line/src/public_api';

@Injectable()
export class ExampleService {

  constructor() { }

  public lineOptions(): PiLeaderLineOptions {
    return {
      startSocket: PiLeaderLineSocket.BOTTOM,
      endSocket: PiLeaderLineSocket.TOP,
      endSocketGravity: [0, -50],
      path: PiLeaderLinePath.FLUID,
      dash: {
        animation: true
      },
      color: 'green'
    }
  }

  public chineseOrgData(): any {
    return {
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
    }
  }
}
