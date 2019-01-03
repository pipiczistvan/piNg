import { Directive, OnInit, Input } from '@angular/core';
import { PiLeaderLineOptions, PiLeaderLineDash, PiLeaderLineDashAnimation, PiLeaderLineGradient } from './pi-leader-line.types';
import PiLeaderLineOptionsMerger from './pi-leader-line.defaults';

declare var LeaderLine: any;

@Directive({
  selector: 'pi-leader-line'
})
export class PiLeaderLineDirective implements OnInit {

  @Input() public start: HTMLElement;
  @Input() public end: HTMLElement;
  @Input() public options: PiLeaderLineOptions;

  private leaderLine: any;

  constructor() { }

  ngOnInit() {
    const mergedOptions = PiLeaderLineOptionsMerger.mergeWithDefaults(this.options);
    this.leaderLine = new LeaderLine(this.start, this.end, mergedOptions);
    this.leaderLine.show('none');
  }
}
