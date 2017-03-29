import { Component, OnInit, OnDestroy, Input, Output, EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<div>
  <button (click)="onIncrement()">Increment</button>
  <div>Current Count: {{ counter }}</div>
  <button (click)="onDecrement()">Decrement</button>
  <button (click)="onReset()">Reset Counter</button>
</div>
  `
})
export class CounterComponent implements OnInit, OnDestroy {
  
  @Input() counter: number;

  @Output() increment: EventEmitter<any> = new EventEmitter<any>();
  @Output() decrement: EventEmitter<any> = new EventEmitter<any>();
  @Output() reset: EventEmitter<any> = new EventEmitter<any>();
  
  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onIncrement() {
    this.increment.emit();
  }

  onDecrement() {
    this.decrement.emit();
  }

  onReset() {
    this.reset.emit();
  }
}
