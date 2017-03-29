import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

import { CounterComponent } from './counter.component';
import { AppStore } from './angular-redux/app.store';
import { INCREMENT, DECREMENT, RESET } from './reducers';

@Component({
  selector: 'app-root',
  template: `
<appheader [title]="title | async"></appheader>
<counter [counter]="counter | async" (increment)="onIncrement()" (decrement)="onDecrement()" (reset)="onReset()" >
</counter>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  private title: Observable<string>;
  private counter: Observable<number>;

  constructor(private _store: AppStore) {
  }

  ngOnInit() {
    this.counter = this._store.select<number>(["clock", "counter"]);
    this.title = this._store.select<string>(["clock", "title"]);
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
}
