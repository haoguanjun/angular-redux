import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { StoreModule } from './store/store.module';

import { AppRoutingModule } from './app.routers';
import { CounterModule } from './counter/counter.module';
import { TodosModule } from './todos/todos.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    StoreModule,

    AppRoutingModule,
    CounterModule,
    TodosModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
