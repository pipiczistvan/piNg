import { Component, Input, TemplateRef, AfterViewInit, AfterContentInit, ViewChild, ElementRef, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { PiTreeChartDatasource } from '../pi-tree-chart.types';
import { PiLeaderLineDirective } from '@pipiczistvan/pi-leader-line';
import { PiLeaderLineOptions } from '@pipiczistvan/pi-leader-line';

@Component({
  selector: 'pi-tree-chart-node',
  templateUrl: './pi-tree-chart-node.component.html',
  styleUrls: ['./pi-tree-chart-node.component.scss']
})
export class PiTreeChartNodeComponent implements AfterViewInit, OnDestroy {

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
    });
  }

  ngOnDestroy(): void {
    if (this.parentNode) {
      this.parentNode.removeLineOfComponent(this);
    }
  }

  public createLines(): void {
    this.childElements.forEach((element) => {
      element.createLines();
      this.linesByNodeId[element.datasource.id].create(this.nodeElement.nativeElement, element.nodeElement.nativeElement);
    });
  }

  public setParentConnector(lineOptions: PiLeaderLineOptions): void {
    if (this.parentNode) {
      this.parentNode.setLineOptions(this, lineOptions);
    }
  }

  public getChildNodeComponents(): PiTreeChartNodeComponent[] {
    return this.childElements
      .map(child => [...child.getChildNodeComponents(), child])
      .reduce((a, b) => a.concat(b), []);
  }

  private setLineOptions(node: PiTreeChartNodeComponent, options: PiLeaderLineOptions): void {
    this.linesByNodeId[node.datasource.id].setOptions(options);
  }

  private removeLineOfComponent(node: PiTreeChartNodeComponent): void {
    this.linesByNodeId[node.datasource.id].remove();
  }
}
