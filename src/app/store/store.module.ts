import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { applyMiddleware, compose, createStore } from 'redux';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { logger, thunk } from './middleware';

import { combineEpics, createEpicMiddleware } from 'redux-observable';

// The top-level reducers and epics that make up our app's logic.
import rootReducer from './root.reducer';
import rootEpic from './root.epics';

@NgModule({
    imports: [NgReduxModule],
    providers: [],
})
export class StoreModule {
    constructor(
        public store: NgRedux<any>,
        devTools: DevToolsExtension
    ) {

        let __redux_devtools_extension_compose__ = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"];
        let composeEnhancers = typeof window === 'object' && __redux_devtools_extension_compose__ ?
            __redux_devtools_extension_compose__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;


        let epicMiddleware = createEpicMiddleware(rootEpic);

        // Tell Redux about our reducers and epics. If the Redux DevTools
        // chrome extension is available in the browser, tell Redux about
        // it too.
        store.configureStore(
            rootReducer,
            {},
            [epicMiddleware, logger, thunk],
            devTools.isEnabled() ? [devTools.enhancer()] : []
        );
    }
}