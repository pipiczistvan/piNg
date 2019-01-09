import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PiTreeChartModule } from 'projects/pi-tree-chart/src/public_api';
import { AppNodeComponent } from './app-node/app-node.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNodeComponent
  ],
  imports: [
    BrowserModule,
    PiTreeChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
