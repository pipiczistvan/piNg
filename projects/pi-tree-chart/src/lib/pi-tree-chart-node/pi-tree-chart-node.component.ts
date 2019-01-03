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

  @Input() public datasource: PiTreeChartDatasource;
  @Input() public nodeTemplateOutlet: TemplateRef<any>;
  @ViewChild('node', {read: ElementRef}) public nodeElement: ElementRef;
  @ViewChildren('childNode', {read: PiTreeChartNodeComponent}) public childElements: QueryList<PiTreeChartNodeComponent>;
  @ViewChildren('line', {read: PiLeaderLineDirective}) public lines: QueryList<PiLeaderLineDirective>;

  public readonly lineOptions: PiLeaderLineOptions = {
    startSocket: PiLeaderLineSocket.BOTTOM,
    endSocket: PiLeaderLineSocket.TOP,
    endSocketGravity: [0, -50],
    path: PiLeaderLinePath.FLUID,
    dash: {
      animation: true
    }
  };

  constructor() { }

  ngAfterViewInit(): void {
    const lineArray: PiLeaderLineDirective[] = this.lines.toArray();
    this.childElements.forEach((element, index) => {
      lineArray[index].show(this.nodeElement.nativeElement, element.nodeElement.nativeElement, PiLeaderLineShowEffectName.NONE);
    });
  }
}
