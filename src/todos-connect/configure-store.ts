import { createStore } from 'redux';
import rootReducer, { ByIds } from './reducers';
import { VISIBILITY_FILTERS } from './constants';

export interface State {
  todos: {
    allIds: number[];
    byIds: ByIds;
  };
  visibilityFilter: VISIBILITY_FILTERS;
}

export default createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
