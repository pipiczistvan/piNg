import { Directive, OnInit, Input } from '@angular/core';

declare var LeaderLine: any;

@Directive({
  selector: 'pi-leader-line'
})
export class PiLeaderLineDirective implements OnInit {

  @Input() public start: HTMLElement;
  @Input() public end: HTMLElement;

  constructor() { }

  ngOnInit() {
    const line = new LeaderLine(this.start, this.end);
    line.show('none');
  }

}
