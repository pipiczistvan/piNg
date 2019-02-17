import { Component, OnInit, ViewChild } from '@angular/core';
import { PiIframeComponent, Key } from 'projects/pi-iframe/src/public_api';
import { TestData } from '../iframe-api.types';
import { TEST_KEY_1, TEST_KEY_2 } from '../iframe-api.constants';

@Component({
  selector: 'ping-parent-iframe',
  templateUrl: './parent-iframe.component.html',
  styleUrls: ['./parent-iframe.component.scss']
})
export class ParentIframeComponent implements OnInit {

  @ViewChild('piIframe', {read: PiIframeComponent}) piIframe: PiIframeComponent;

  receivedMessage: string;

  constructor() { }

  ngOnInit() {
    this.piIframe.listen<TestData>(TEST_KEY_1, (data: TestData) => {
      this.receivedMessage = data.message;
    });
  }

  send1(): void {
    this.piIframe.post<TestData>(TEST_KEY_1, {message: 'this is the message 1'});
  }

  send2(): void {
    this.piIframe.post<TestData>(TEST_KEY_2, {message: 'this is the message 2'});
  }
}
