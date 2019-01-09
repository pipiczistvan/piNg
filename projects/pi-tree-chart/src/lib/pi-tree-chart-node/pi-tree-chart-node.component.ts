import { Component, Input, TemplateRef, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { PiTreeChartDatasource } from '../pi-tree-chart.types';
import { PiLeaderLineDirective } from '@ping/pi-leader-line';
import { PiLeaderLineOptions } from '@ping/pi-leader-line';

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

  // PUBLIC METHODS

  public createLines(): void {
    this.childElements.forEach((element) => {
      element.createLines();
      this.linesByNodeId[element.datasource.id].create(this.nodeElement.nativeElement, element.nodeElement.nativeElement);
    });
  }

  public setParentConnector(lineOptions: PiLeaderLineOptions, recursive?: boolean): void {
    if (this.parentNode) {
      if (recursive) {
        this.parentNode.setParentConnector(lineOptions, recursive);
      }
      this.parentNode.setLineOptions(this, lineOptions);
    }
  }

  public setChildConnectors(lineOptions: PiLeaderLineOptions, recursive?: boolean): void {
    this.lines.forEach(line => line.setOptions(lineOptions));
    if (recursive) {
      this.childElements.forEach(child => child.setChildConnectors(lineOptions, recursive));
    }
  }

  public rePositionParentConnector(recursive?: boolean): void {
    if (this.parentNode) {
      if (recursive) {
        this.parentNode.rePositionParentConnector(recursive);
      }
      this.parentNode.repositionLine(this);
    }

    this.lines.forEach(line => line.position());
    if (recursive) {
      this.childElements.forEach(child => child.rePositionChildConnectors(recursive));
    }
  }

  public rePositionChildConnectors(recursive?: boolean): void {
    this.lines.forEach(line => line.position());
    if (recursive) {
      this.childElements.forEach(child => child.rePositionChildConnectors(recursive));
    }
  }

  public getChildNodeComponents(recursive?: boolean): PiTreeChartNodeComponent[] {
    return this.childElements
      .map(child => recursive ? [...child.getChildNodeComponents(), child] : [child])
      .reduce((a, b) => a.concat(b), []);
  }

  // PRIVATE METHODS

  private repositionLine(node: PiTreeChartNodeComponent): void {
    this.linesByNodeId[node.datasource.id].position;
  }

  private setLineOptions(node: PiTreeChartNodeComponent, options: PiLeaderLineOptions): void {
    this.linesByNodeId[node.datasource.id].setOptions(options);
  }

  private removeLineOfComponent(node: PiTreeChartNodeComponent): void {
    this.linesByNodeId[node.datasource.id].remove();
  }
}
