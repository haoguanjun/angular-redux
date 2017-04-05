import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

import { AppStore } from '../angular-redux/app.store';
import { Todo } from './todo';

@Component({
    selector: 'app-root',
    template: `
<div class="container">
    <addTodo [value]="newTodoText | async" (addClick)="onAddClick($event)" ></addTodo>
    <todolist [todos]="todos | async" (completed)="onCompleted($event)" ></todolist>
</div>
  `,
})
export class TodosMainComponent {
    private newTodoText: Observable<string>;
    private todos: Observable<Array<Todo>>;
    constructor(private _store: AppStore) {
        this.newTodoText = Observable.of("no name to do item");
        this.todos = this._store.select(["todos"]);
    }

    onCompleted(index: any) {
        this._store.dispatch({type:"Complete_Todo", index: index});
    }

    onAddClick(text: string) {
        this._store.dispatch({type: "Add_Todo", text: text});
    }
}
