import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

import { Input, Output } from '@angular/core';
import { AppStore } from '../angular-redux/app.store';
import { Todo } from './todo';
@Component({
    selector: 'addTodo',
    template: `
<ul>
    <li *ngFor="let item of todos">
        {{ item.text }}
    </li>
</ul>
  `,
})
export class AddTodoComponent {
     @Input() todos: Array<Todo>;
}
