import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

import { AppStore } from '../angular-redux/app.store';
import { Todo } from './todo';

@Component({
    selector: 'app-root',
    template: `
<div>
    <addTodo [todos]="todos | async"></addTodo>
</div>
  `,
})
export class TodosMainComponent {
    private todos: Observable<Array<Todo>>;
    constructor(private _store: AppStore) {
        this.todos = Observable.of( [ { id: 1, text: "item1"} ] );
    }
}
