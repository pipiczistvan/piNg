import { Component } from '@angular/core';
import { PiLeaderLineOptions, PiLeaderLineDashAnimationTiming } from 'projects/pi-leader-line/src/lib/pi-leader-line.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'piNg';

  public lineOptions: PiLeaderLineOptions = {
    color: 'red'
  };
}
