import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { TodosMainComponent } from './todos.main.component';
import { AddTodoComponent } from './addTodo.component';
import { TodoComponent } from './TodoList.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        TodosMainComponent,
        AddTodoComponent,
        TodoComponent
    ],
    exports: [TodosMainComponent]
})
export class TodosModule {
}
