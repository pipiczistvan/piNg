import { Component, ViewChild } from '@angular/core';
import { PiLeaderLineOptions, PiLeaderLineShowEffectName } from 'projects/pi-leader-line/src/lib/pi-leader-line.types';
import { PiLeaderLineDirective } from 'projects/pi-leader-line/src/lib/pi-leader-line.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'piNg';
  private showLine: boolean = true;

  @ViewChild(PiLeaderLineDirective)
  private leaderLine: PiLeaderLineDirective;

  public lineOptions: PiLeaderLineOptions = {
    color: 'red'
  };

  public toggle(): void {
    if (this.showLine) {
      this.leaderLine.hide(PiLeaderLineShowEffectName.FADE);
      this.showLine = false;
    } else {
      this.leaderLine.show(PiLeaderLineShowEffectName.DRAW);
      this.showLine = true;
    }
  }
}
