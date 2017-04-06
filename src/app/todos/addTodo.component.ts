import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

import { Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';
@Component({
    selector: 'addTodo',
    template: `
<div>
    <form class="form-inline">
        <input type="text" name="new" [(ngModel)]="value" class="form-control" />
        <button type="button" (click)="onClick()" class="btn btn-outline-primary">Add</button>
    </form>
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
