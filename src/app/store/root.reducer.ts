import { combineReducers } from 'redux';
import { counterRootReducer } from '../counter/reducers/main';
import  todosRootReducer from '../todos/reducers/main';

export default combineReducers({
  counter: counterRootReducer,
  todos: todosRootReducer
});
