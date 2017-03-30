import { Component, Input, Output, EventEmitter,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pingpong',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<h2>Is pinging: {{ isPinging }}</h2>
<button type="button" (click)="onStartPing()">Start PING</button>
  `
})
export class PingpongComponent  {
  @Input() isPinging: boolean;
  @Output() startPing: EventEmitter<any> = new EventEmitter<any>();

  onStartPing(): void {
      this.startPing.emit();
  }
}
