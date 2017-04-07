import { Routes, RouterModule } from '@angular/router';
import { NgModule }     from '@angular/core';

import { HelloComponent } from './hello.component';
import { CounterMainComponent } from './counter/counter.main.component';
import { TodosMainComponent } from './todos/todos.main.component';
import { DynamicComponent } from './dynamic.components/dynamic.component'

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', component: HelloComponent},
            { path: 'counter', component: CounterMainComponent },
            { path: 'todos', component: TodosMainComponent },
			{ path: 'dynamic-grid', component: DynamicComponent }
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }

