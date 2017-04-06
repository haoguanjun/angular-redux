import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { CounterComponent } from './counter.component';
import { INCREMENT, DECREMENT, RESET } from './reducers/reducers';

@Component({
  selector: 'app-root',
  template: `
<div class="container">
  <appheader [title]="title | async"></appheader>
  <hr/>
  <counter [counter]="counter | async" (increment)="onIncrement()" (decrement)="onDecrement()" (reset)="onReset()" >
  </counter>

  <pingpong [isPinging]="isPinging | async" (startPing)="onStartPing()" ></pingpong>
  `,
})
export class CounterMainComponent implements OnInit, OnDestroy {
  private title: Observable<string>;
  private counter: Observable<number>;
  private isPinging: Observable<boolean>;

  constructor(private _store: NgRedux<any>) {
  }

  ngOnInit() {
    this.counter = this._store.select<number>(["counter", "clock", "counter"]);
    this.title = this._store.select<string>(["counter", "clock", "title"]);
    this.isPinging = this._store.select<boolean>(["counter", "ping", "isPinging"]);
  }

  ngOnDestroy() {
  }

  onIncrement() {
    this._store.dispatch({ type: INCREMENT });
  }

  onDecrement() {
    this._store.dispatch({ type: DECREMENT });
  }

  onReset() {
    this._store.dispatch({ type: RESET });
  }

  onStartPing() {
    this._store.dispatch({type: "PING"});
  }
}
