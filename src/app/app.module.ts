import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, rootEpic } from './reducers/root';
import { logger, thunk } from './middleware';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

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

    AppRoutingModule,
    CounterModule,
    TodosModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<any>) {
    console.log('AppModule constructor.');

    let __redux_devtools_extension_compose__ = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"];
    let composeEnhancers = typeof window === 'object' && __redux_devtools_extension_compose__ ?
      __redux_devtools_extension_compose__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;


    let epicMiddleware = createEpicMiddleware(rootEpic);

    let enhancer = composeEnhancers(
      applyMiddleware(epicMiddleware, logger, thunk)
    );

    let store = createStore(
      rootReducer,
      enhancer
    );

    this.ngRedux.provideStore(store);
  }
}
