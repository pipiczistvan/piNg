import { Component, OnInit, ViewChild } from '@angular/core';
import { PiIframeComponent } from 'projects/pi-iframe/src/public_api';
import { TEST_KEY_1, TEST_KEY_2 } from '../iframe-api.constants';
import { TestData } from '../iframe-api.types';

@Component({
  selector: 'ping-child-iframe',
  templateUrl: './child-iframe.component.html',
  styleUrls: ['./child-iframe.component.scss']
})
export class ChildIframeComponent implements OnInit {

  @ViewChild('piIframe', {read: PiIframeComponent}) piIframe: PiIframeComponent;
  
  receivedMessage: string;

  constructor() { }

  ngOnInit() {
    this.piIframe.listen<TestData>(TEST_KEY_1, (data: TestData) => {
      this.receivedMessage = data.message;
    });
    this.piIframe.listen<TestData>(TEST_KEY_2, (data: TestData) => {
      this.receivedMessage = data.message;
    });
  }

  send(): void {
    this.piIframe.post<TestData>(TEST_KEY_1, {message: this.receivedMessage});
  }
}
