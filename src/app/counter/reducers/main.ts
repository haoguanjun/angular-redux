import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { pingEpic, pingReducer } from './ping';
import { counterReducer, titleReducer } from './reducers';

export const counterRootEpic = combineEpics(
  pingEpic
);

export const counterRootReducer = combineReducers({
  clock: combineReducers({
		counter: counterReducer,
		title: titleReducer
	}),
  ping: pingReducer
});
