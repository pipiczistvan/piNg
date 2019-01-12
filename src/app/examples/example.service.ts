import { Injectable } from '@angular/core';
import { PiLeaderLineOptions, PiLeaderLineSocket, PiLeaderLinePath } from 'projects/pi-leader-line/src/public_api';

const DEFAULT_LINE_OPTIONS: PiLeaderLineOptions = {
  startSocket: PiLeaderLineSocket.BOTTOM,
  endSocket: PiLeaderLineSocket.TOP,
  endSocketGravity: [0, -50],
  path: PiLeaderLinePath.FLUID,
  dash: {
    animation: true
  },
  color: 'green'
};

const CHINESE_PEOPLE: any = {
  id: 1, name: 'Lao Lao', title: 'general manager', toggle: false,
  children: [
    { id: 2, name: 'Bo Miao', title: 'department manager', toggle: false },
    {
      id: 3, name: 'Su Miao', title: 'department manager', toggle: false,
      children: [
        {
          id: 4, name: 'Tie Hua', title: 'senior engineer', toggle: false,
          children: [
            { id: 10, name: 'Pang Pang', title: 'engineer', toggle: false },
            { id: 11, name: 'Xiang Xiang', title: 'UE engineer', toggle: false }
          ]
        },
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

const RANDOM_DATA: any = {
  "id": 1,
  "title": "ROOT",
  "description": "Description of ROOT",
  "imageUrl": "https://localhost:4200/images/fat_cat.png",
  "children": [
    {
      "id": 2,
      "title": "LEVEL_1_0",
      "description": "Description of LEVEL_1_0",
      "imageUrl": null,
      "children": [
        {
          "id": 4,
          "title": "LEVEL_2_0",
          "description": "Description of LEVEL_2_0",
          "imageUrl": null,
          "children": []
        },
        {
          "id": 5,
          "title": "LEVEL_2_1",
          "description": "Description of LEVEL_2_1",
          "imageUrl": null,
          "children": []
        }
      ]
    },
    {
      "id": 3,
      "title": "LEVEL_1_1",
      "description": "Description of LEVEL_1_1",
      "imageUrl": null,
      "children": [
        {
          "id": 6,
          "title": "LEVEL_2_2",
          "description": "Description of LEVEL_2_2",
          "imageUrl": null,
          "children": [
            {
              "id": 7,
              "title": "LEVEL_3_0",
              "description": "Description of LEVEL_3_0",
              "imageUrl": null,
              "children": [
                {
                  "id": 10,
                  "title": "LEVEL_4_0",
                  "description": "Description of LEVEL_4_0",
                  "imageUrl": null,
                  "children": []
                },
                {
                  "id": 11,
                  "title": "LEVEL_4_1",
                  "description": "Description of LEVEL_4_1",
                  "imageUrl": null,
                  "children": []
                }
              ]
            },
            {
              "id": 8,
              "title": "LEVEL_3_1",
              "description": "Description of LEVEL_3_1",
              "imageUrl": null,
              "children": []
            },
            {
              "id": 9,
              "title": "LEVEL_3_2",
              "description": "Description of LEVEL_3_2",
              "imageUrl": null,
              "children": [
                {
                  "id": 12,
                  "title": "LEVEL_4_2",
                  "description": "Description of LEVEL_4_2",
                  "imageUrl": null,
                  "children": []
                },
                {
                  "id": 13,
                  "title": "LEVEL_4_3",
                  "description": "Description of LEVEL_4_3",
                  "imageUrl": "https://localhost:4200/images/fat_cat.png",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

@Injectable()
export class ExampleService {

  constructor() { }

  public lineOptions(): PiLeaderLineOptions {
    return DEFAULT_LINE_OPTIONS;
  }

  public chineseOrgData(): any {
    return CHINESE_PEOPLE;
  }

  public randomData(): any {
    return RANDOM_DATA;
  }
}
