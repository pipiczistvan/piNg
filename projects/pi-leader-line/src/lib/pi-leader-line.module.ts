import { NgModule } from '@angular/core';
import { PiLeaderLineDirective } from './pi-leader-line.directive';

declare var LeaderLine: any;

@NgModule({
  declarations: [PiLeaderLineDirective],
  imports: [
  ],
  exports: [PiLeaderLineDirective]
})
export class PiLeaderLineModule {

}
