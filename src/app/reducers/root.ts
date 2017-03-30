import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { pingEpic, pingReducer } from './ping';
import { counterReducer, titleReducer } from './reducers';

export const rootEpic = combineEpics(
  pingEpic
);

export const rootReducer = combineReducers({
  clock: combineReducers({
		counter: counterReducer,
		title: titleReducer
	}),
  ping: pingReducer
});