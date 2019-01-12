import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { PiLeaderLineOptions, PiLeaderLineSocket, PiLeaderLinePath } from 'projects/pi-leader-line/src/public_api';
import { PiTreeChartComponent } from 'projects/pi-tree-chart/src/public_api';
import { ExampleService } from '../example.service';

@Component({
  selector: 'ping-basic-tree',
  templateUrl: './basic-tree.component.html',
  styleUrls: ['./basic-tree.component.scss']
})
export class BasicTreeComponent implements OnInit, AfterViewInit {

  @ViewChild('tree', {read: PiTreeChartComponent})
  public tree: PiTreeChartComponent;

  public datasource: any;
  public lineOptions: PiLeaderLineOptions;
  public destroyed: boolean = false;

  constructor(private exampleService: ExampleService) {
  }

  ngOnInit(): void {
    this.datasource = this.exampleService.chineseOrgData();
    this.lineOptions = this.exampleService.lineOptions();
  }

  ngAfterViewInit(): void {
    this.tree.createLines();
  }

  public destroy(): void {
    this.destroyed = !this.destroyed;
  }
}

