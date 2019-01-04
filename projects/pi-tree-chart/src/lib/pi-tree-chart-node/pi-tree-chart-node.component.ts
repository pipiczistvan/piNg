import { Component, OnInit, Input, TemplateRef, AfterViewInit, AfterContentInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { PiTreeChartDatasource } from '../pi-tree-chart.types';
import { PiLeaderLineDirective } from 'projects/pi-leader-line/src/lib/pi-leader-line.directive';
import { PiLeaderLineShowEffectName, PiLeaderLineOptions, PiLeaderLineSocket, PiLeaderLinePath } from 'projects/pi-leader-line/src/lib/pi-leader-line.types';

@Component({
  selector: 'pi-tree-chart-node',
  templateUrl: './pi-tree-chart-node.component.html',
  styleUrls: ['./pi-tree-chart-node.component.scss']
})
export class PiTreeChartNodeComponent implements AfterViewInit {

  @Input() public lineOptions: PiLeaderLineOptions;
  @Input() public datasource: PiTreeChartDatasource;
  @Input() public nodeTemplateOutlet: TemplateRef<any>;
  @Input() public parentNode: PiTreeChartNodeComponent;
  @Input() public verticalSpace: number;
  @ViewChild('node', { read: ElementRef }) public nodeElement: ElementRef;
  @ViewChildren('childNode', { read: PiTreeChartNodeComponent }) public childElements: QueryList<PiTreeChartNodeComponent>;
  @ViewChildren('line', { read: PiLeaderLineDirective }) public lines: QueryList<PiLeaderLineDirective>;

  private linesByNodeId: { [key: number]: PiLeaderLineDirective } = {};

  constructor() { }

  ngAfterViewInit(): void {
    const lineArray: PiLeaderLineDirective[] = this.lines.toArray();
    this.childElements.forEach((element, index) => {
      this.linesByNodeId[element.datasource.id] = lineArray[index];
      this.linesByNodeId[element.datasource.id].create(this.nodeElement.nativeElement, element.nodeElement.nativeElement);
    });
  }

  public setParentConnector(lineOptions: PiLeaderLineOptions): void {
    this.parentNode.setLineOptions(this, lineOptions);
  }

  private setLineOptions(node: PiTreeChartNodeComponent, options: PiLeaderLineOptions): void {
    this.linesByNodeId[node.datasource.id].setOptions(options);
  }
}
