import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PiLeaderLineModule } from 'projects/pi-leader-line/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PiLeaderLineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
