import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

import { Input, Output, EventEmitter } from '@angular/core';
import { AppStore } from '../angular-redux/app.store';
import { Todo } from './todo';
@Component({
    selector: 'todolist',
    template: `
<ul>
    <li *ngFor="let item of todos; let i = index;" (click)="onclick(i)">
        {{ item.text }} - {{ item.completed? "v" : "x" }}
    </li>
</ul>
  `,
})
export class TodoComponent {
    @Input() todos: Array<Todo>;
    @Output() completed: EventEmitter<any> = new EventEmitter<any>();
    onclick(item: any) {
        this.completed.emit(item);
    }
}
