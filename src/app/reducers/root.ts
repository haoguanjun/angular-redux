import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { counterRootReducer,  counterRootEpic } from '../counter/reducers/main';
import  todosRootReducer from '../todos/reducers/main';

export const rootEpic = combineEpics(
  counterRootEpic
);

export const rootReducer = combineReducers({
  counter: counterRootReducer,
  todos: todosRootReducer
});
