import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

import { Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';
@Component({
    selector: 'addTodo',
    template: `
<div>
    <input type="text" [(ngModel)]="value" />
    <button type="button" (click)="onClick()" class="btn btn-outline-primary">Add</button>
</div>
  `,
})
export class AddTodoComponent {
    @Input() value: string;
    @Output() addClick: EventEmitter<any> = new EventEmitter<any>();
    onClick() {
        this.addClick.emit( this.value );
    }
}
