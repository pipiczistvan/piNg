import { Directive, OnInit, Input, AfterViewInit } from '@angular/core';
import { PiLeaderLineOptions, PiLeaderLineShowEffectName, PiLeaderLineAnimation } from './pi-leader-line.types';
import PiLeaderLineOptionsMerger, { DEFAULT_OPTIONS } from './pi-leader-line.defaults';

declare var LeaderLine: any;

@Directive({
  selector: 'pi-leader-line'
})
export class PiLeaderLineDirective {

  @Input() public options: PiLeaderLineOptions;

  private leaderLine: any;
  private created: boolean = false;

  /**
   * Creates the leader line.
   */
  public create(start: HTMLElement, end: HTMLElement): void {
    if (this.created) {
      throw new Error('PiLeaderLineDirective already created.')
    }
    this.options = PiLeaderLineOptionsMerger.mergeLineOptions(DEFAULT_OPTIONS, this.options);
    this.leaderLine = new LeaderLine(start, end, this.options);
    this.created = true;
  }

  /**
   * Set one or more options.
   */
  public setOptions(options: PiLeaderLineOptions): void {
    const mergedOptions = PiLeaderLineOptionsMerger.mergeLineOptions(this.options, options);
    this.leaderLine.setOptions(mergedOptions);
  }

  /**
   * Show the leader line.
   */
  public show(start: HTMLElement, end: HTMLElement, showEffectName: PiLeaderLineShowEffectName, animOptions?: PiLeaderLineAnimation): void {
    if (!this.created) {
      throw new Error('PiLeaderLineDirective not created.')
    }
    this.leaderLine = new LeaderLine(start, end);
    this.leaderLine.setOptions(this.options);
    const mergedOptions = PiLeaderLineOptionsMerger.mergeShowAnimationOptionsWithDefaults(animOptions);
    this.leaderLine.show(showEffectName, mergedOptions);
  }

  /**
   * Hide the leader line.
   */
  public hide(showEffectName: PiLeaderLineShowEffectName, animOptions?: PiLeaderLineAnimation): void {
    if (!this.created) {
      throw new Error('PiLeaderLineDirective not created.')
    }
    const mergedOptions = PiLeaderLineOptionsMerger.mergeHideAnimationOptionsWithDefaults(animOptions);
    this.leaderLine.hide(showEffectName, mergedOptions);
  }

  /**
   * Re-position the leader line with current position and size of the elements as start or end option.
   */
  public position(): void {
    if (!this.created) {
      throw new Error('PiLeaderLineDirective not created.')
    }
    this.leaderLine.position();
  }

  /**
   * Remove the leader line from the web page. It can't be used anymore.
   */
  public remove(): void {
    if (!this.created) {
      throw new Error('PiLeaderLineDirective not created.')
    }
    this.leaderLine.remove();
  }
}
