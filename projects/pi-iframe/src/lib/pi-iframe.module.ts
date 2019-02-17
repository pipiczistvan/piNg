import { NgModule } from '@angular/core';
import { PiIframeComponent } from './pi-iframe/pi-iframe.component';
import { SafePipe } from './safe-pipe/safe.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PiIframeComponent,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [PiIframeComponent]
})
export class PiIframeModule { }
