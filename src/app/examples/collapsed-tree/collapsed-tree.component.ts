import { Component, OnInit, ViewChild } from '@angular/core';
import { PiTreeChartComponent } from 'projects/pi-tree-chart/src/public_api';
import { PiLeaderLineOptions } from 'projects/pi-leader-line/src/public_api';
import { ExampleService } from '../example.service';

@Component({
  selector: 'ping-collapsed-tree',
  templateUrl: './collapsed-tree.component.html',
  styleUrls: ['./collapsed-tree.component.scss']
})
export class CollapsedTreeComponent implements OnInit {

  @ViewChild('tree', {read: PiTreeChartComponent})
  public tree: PiTreeChartComponent;

  public datasource: any;
  public lineOptions: PiLeaderLineOptions;

  constructor(private exampleService: ExampleService) {
  }

  ngOnInit(): void {
    this.datasource = this.exampleService.randomData();
    this.lineOptions = this.exampleService.lineOptions();
  }
}
