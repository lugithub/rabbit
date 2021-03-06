import { combineReducers } from 'redux';
import visibilityFilter from './visibility-filters';
import todos from './todos';

export default combineReducers({ todos, visibilityFilter });
export * from './todos';
