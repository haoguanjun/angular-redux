import { combineReducers } from 'redux';

export interface Action {
	readonly type: string;
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action): number {
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

export function titleReducer(state: string = "Angular Redux Sample", action: Action): string {
	switch( action.type) {
		default:
			return state;
	}
}
