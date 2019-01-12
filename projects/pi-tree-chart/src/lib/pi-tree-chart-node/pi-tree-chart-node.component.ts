import { Component, Input, TemplateRef, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, OnDestroy, OnInit } from '@angular/core';
import { PiTreeChartDatasource } from '../pi-tree-chart.types';
import { PiLeaderLineDirective } from '@ping/pi-leader-line';
import { PiLeaderLineOptions } from '@ping/pi-leader-line';

@Component({
  selector: 'pi-tree-chart-node',
  templateUrl: './pi-tree-chart-node.component.html',
  styleUrls: ['./pi-tree-chart-node.component.scss']
})
export class PiTreeChartNodeComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() public lineOptions: PiLeaderLineOptions;
  @Input() public datasource: PiTreeChartDatasource;
  @Input() public nodeTemplateOutlet: TemplateRef<any>;
  @Input() public parentNode: PiTreeChartNodeComponent;
  @Input() public verticalSpace: number;
  @Input() public level: number;
  @Input() public levelLimit: number;

  @ViewChild('node', { read: ElementRef }) public nodeElement: ElementRef;
  @ViewChildren('childNode', { read: PiTreeChartNodeComponent }) public childElements: QueryList<PiTreeChartNodeComponent>;
  @ViewChildren('line', { read: PiLeaderLineDirective }) public lines: QueryList<PiLeaderLineDirective>;

  createNextLevel: boolean = false;
  private linesByNodeId: { [key: number]: PiLeaderLineDirective } = {};
  private childrenVisible: boolean;

  constructor() { }

  ngOnInit(): void {
    this.childrenVisible = this.levelLimit === undefined || this.level <= this.levelLimit;
    this.createNextLevel = this.shouldCreateNextLevel();
  }

  ngAfterViewInit(): void {
    this.createLines();
    this.lines.changes.subscribe(() => {
      this.createLines();
      setTimeout(() => {
        this.findRootComponent().rePositionChildConnectors(true);
      });
    });
  }

  ngOnDestroy(): void {
    if (this.parentNode) {
      this.parentNode.removeLineOfComponent(this);
    }
  }

  // PUBLIC METHODS

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
      this.parentNode.rePositionChildConnectors();
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

  public showChildren(): void {
    this.childrenVisible = true;
    this.createNextLevel = this.shouldCreateNextLevel();
  }

  public hideChildren(): void {
    this.childrenVisible = false;
    this.createNextLevel = this.shouldCreateNextLevel();
  }

  // PRIVATE METHODS

  private setLineOptions(node: PiTreeChartNodeComponent, options: PiLeaderLineOptions): void {
    this.linesByNodeId[node.datasource.id].setOptions(options);
  }

  private removeLineOfComponent(node: PiTreeChartNodeComponent): void {
    this.linesByNodeId[node.datasource.id].remove();
  }

  private shouldCreateNextLevel(): boolean {
    return this.datasource.children !== undefined && this.datasource.children.length > 0 && this.childrenVisible;
  }

  private createLines(): void {
    this.linesByNodeId = {};
    const childElementArray: PiTreeChartNodeComponent[] = this.childElements.toArray();
    this.lines.forEach((line, index) => {
      const childElement: PiTreeChartNodeComponent = childElementArray[index];
      this.linesByNodeId[childElement.datasource.id] = line;
      line.create(this.nodeElement.nativeElement, childElement.nodeElement.nativeElement);
    });
  }

  private findRootComponent(): PiTreeChartNodeComponent {
    if (this.parentNode) {
      return this.parentNode.findRootComponent();
    }
    return this;
  }
}
