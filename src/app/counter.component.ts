import { Component, OnInit, OnDestroy, Input, Output, EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<div>
  <h2>Current Count: {{ counter }}</h2>
  <div class="btn-group" role="group">
    <button (click)="onIncrement()" class="btn btn-outline-primary">Increment</button>
    <button (click)="onDecrement()" class="btn btn-outline-primary">Decrement</button>
    <button (click)="onReset()" class="btn btn-outline-danger">Reset Counter</button>
  </div>
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
