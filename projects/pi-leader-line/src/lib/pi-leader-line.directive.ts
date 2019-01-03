import { Directive, OnInit, Input } from '@angular/core';
import { PiLeaderLineOptions, PiLeaderLineShowEffectName, PiLeaderLineAnimation } from './pi-leader-line.types';
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
    this.leaderLine = new LeaderLine(this.start, this.end);
    this.leaderLine.setOptions(this.options);
  }

  /**
   * Set one or more options.
   */
  public setOptions(options: PiLeaderLineOptions): void {
    const mergedOptions = PiLeaderLineOptionsMerger.mergeLineOptionsWithDefaults(this.options);
    this.leaderLine.setOptions(mergedOptions);
  }

  /**
   * Show the leader line.
   */
  public show(showEffectName: PiLeaderLineShowEffectName, animOptions?: PiLeaderLineAnimation): void {
    const mergedOptions = PiLeaderLineOptionsMerger.mergeShowAnimationOptionsWithDefaults(animOptions);
    this.leaderLine.show(showEffectName, mergedOptions);
  }

  /**
   * Hide the leader line.
   */
  public hide(showEffectName: PiLeaderLineShowEffectName, animOptions?: PiLeaderLineAnimation): void {
    const mergedOptions = PiLeaderLineOptionsMerger.mergeHideAnimationOptionsWithDefaults(animOptions);
    this.leaderLine.hide(showEffectName, mergedOptions);
  }

  /**
   * Re-position the leader line with current position and size of the elements as start or end option.
   */
  public position(): void {
    this.leaderLine.position();
  }

  /**
   * Remove the leader line from the web page. It can't be used anymore.
   */
  public remove(): void {
    this.leaderLine.remove();
  }
}
