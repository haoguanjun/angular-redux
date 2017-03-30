import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, rootEpic } from './reducers/root';
import { logger, thunk } from './middleware';
import { AppStore } from './angular-redux/app.store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { CounterComponent } from './counter.component';
import { PingpongComponent } from './pingpong.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CounterComponent,
    PingpongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AppStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private appStore: AppStore) {
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
    appStore.setReduxStore(store);
  }
}
