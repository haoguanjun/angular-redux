import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


import { Todo } from './todo';
@Component({
    selector: 'addTodo',
    template: `
<div>
    <form (ngSubmit)="onSubmit(myForm)" #myForm="ngForm" class="form-inline">
        <input type="text" name="taskName" [ngModel]="value" class="form-control" />
        <button type="submit" class="btn btn-outline-primary">Add</button>
    </form>
</div>
  `,
})
export class AddTodoComponent implements OnInit {
    @ViewChild(NgForm) myForm: NgForm;
    @Input() value: string;
    @Output() addClick: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit(){
        console.log( this.myForm);
    }

    onSubmit(f: NgForm) {
        this.addClick.emit( f.value.taskName );
    }
}
