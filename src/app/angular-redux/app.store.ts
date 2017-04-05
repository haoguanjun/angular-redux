import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { NgZone } from '@angular/core';

import { getIn } from './get-in';
export type PropertySelector = string | number | symbol;
export type PathSelector = (string | number)[];
export type FunctionSelector<RootState, S> = ((s: RootState) => S);
export type Comparator = (x: any, y: any) => boolean;

/**
 *
 * A minimalistic Redux store for Angular 2. This class is meant to demonstrate how Redux can be integrated with Angular 2.
 *
 * This class is meant to be sub-classed per project, and a redux store needs to be passed in the constructor.
 *
 * This class then needs to be passed to the root bootstrap call of the application, so that the store can be
 * injected in any part of the application that needs it.
 *
 * The redux API methods getState(), dispatch() and subscribe() are exposed directly.
 *
 */
@Injectable()
export class AppStore {
    private _store: any = null;
    static _initialized = false;
    private _observable$: BehaviorSubject<any> = null;

    public get observable$(): Observable<any> {
        return this._observable$;
    }

    constructor(private _ngZone: NgZone) {
        console.log('AppStore constructor.');
    }

    setReduxStore(store: any) {
        console.log('App Store setReduxStore.');

        if (!store) {
            throw new Error('store cannot be undefined. Make sure to pass the redux store as the only argument of the constructor.');
        }
        if (AppStore._initialized) {
            throw new Error('Only one redux store can exist per application.');
        }

        this._store = store;

        // http://reactivex.io/documentation/operators/filter.html
        // http://reactivex.io/documentation/operators/switch.html
        // http://reactivex.io/documentation/operators/from.html
        this._observable$ = new BehaviorSubject(this._store.getState());
        
        this._store.subscribe(() => {
            let state = this._store.getState();
            this._observable$.next(state);
        })

        AppStore._initialized = true;
    }

    // Only when data changed, emit the new data.
    // http://reactivex.io/documentation/operators/distinct.html
    select<S>(
        selector?: PropertySelector | PathSelector | FunctionSelector<any, S>,
        comparator?: Comparator): Observable<S> {

        if (!selector) {
            return (this._observable$
                .distinctUntilChanged(comparator) as any) as Observable<S>;
        }

        let result: Observable<S>;
        let changedStore = this.observable$.distinctUntilChanged();
        if (typeof selector === 'string' ||
            typeof selector === 'number' ||
            typeof selector === 'symbol') {
            result = changedStore
                .map(state => state[selector as PropertySelector]);
        } else if (Array.isArray(selector)) {
            result = changedStore
                .map(state => getIn(state, selector as PathSelector));
        } else {
            result = changedStore
                .map(selector as FunctionSelector<any, S>);
        }

        return result.distinctUntilChanged(comparator);
    }

    getState() {
        return this._store.getState();
    }

    dispatch(action) {
        // Some apps dispatch actions from outside the angular zone; e.g. as
        // part of a 3rd-party callback, etc. When this happens, we need to
        // execute the dispatch in-zone or Angular2's UI won't update.
        return this._ngZone.run(() => this._store.dispatch(action));
    }

    subscribe(listener: Function) {
        return this._store.subscribe(() => listener(this.getState()));
    }

    replaceReducer(nextReducer) {
        return this._store.replaceReducer(nextReducer);
    }
}