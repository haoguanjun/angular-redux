import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodosMainComponent } from './todos.main.component';
import { AddTodoComponent } from './addTodo.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        TodosMainComponent,
        AddTodoComponent
    ],
    exports: [TodosMainComponent]
})
export class TodosModule {
}
