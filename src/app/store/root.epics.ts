import { combineEpics } from 'redux-observable';
import { counterRootEpic } from '../counter/reducers/main';

export default combineEpics(
  counterRootEpic
);
