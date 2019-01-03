import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PiTreeChartModule } from 'projects/pi-tree-chart/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PiTreeChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
