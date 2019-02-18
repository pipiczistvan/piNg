import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Key } from '../pi-iframe.types';

@Component({
  selector: 'pi-iframe',
  templateUrl: './pi-iframe.component.html',
  styleUrls: ['./pi-iframe.component.scss']
})
export class PiIframeComponent implements OnDestroy {

  @ViewChild('iframe', { read: ElementRef }) iframe: ElementRef;

  @Input() public src: string;

  private eventListeners: EventListenerOrEventListenerObject[] = [];

  ngOnDestroy(): void {
    this.eventListeners.forEach(eventListener => {
      window.removeEventListener('message', eventListener);
    })
  }

  public post<T>(key: Key<T>, data: T): void {
    if (this.iframe) {
      this.iframe.nativeElement.contentWindow.postMessage({ key, data }, window.location.href);
    } else {
      window.parent.postMessage({ key, data }, window.location.href);
    }
  }

  public listen<T>(key: Key<T>, handler: (arg: T) => void): void {
    const eventListener: EventListenerOrEventListenerObject = (event: MessageEvent) => {
      if (event.data && event.data.key && event.data.key.key === key.key) {
        handler(event.data.data);
      }
    };

    this.eventListeners.push(eventListener);
    window.addEventListener('message', eventListener);
  }
}
