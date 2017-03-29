import { combineReducers } from 'redux';

export interface Action {
	readonly type: string;
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

function counterReducer(state: number = 0, action: Action): number {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		case RESET:
			return 0;
		default:
			return state;
	}
}

function titleReducer(state: string = "App", action: Action): string {
	switch( action.type) {
		default:
			return state;
	}
}

export default combineReducers({
	clock: combineReducers({
		counter: counterReducer,
		title: titleReducer
	})
});