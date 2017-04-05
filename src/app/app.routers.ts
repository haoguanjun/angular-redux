import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule }     from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CounterMainComponent } from './counter/counter.main.component';
import { TodosMainComponent } from './todos/todos.main.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', component: HelloComponent},
            { path: 'counter', component: CounterMainComponent },
            { path: 'todos', component: TodosMainComponent }
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }

