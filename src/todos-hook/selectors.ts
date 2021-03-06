import { createSelector } from 'reselect';
import { identity } from 'ramda';
import { VISIBILITY_FILTERS } from './constants';
import { State } from './configure-store';

export const getTodosState = (state: State) => state.todos;

export const getTodoList = (state: State) =>
  getTodosState(state) ? getTodosState(state).allIds : [];

export const getTodoById = (state: State, id: number) => ({
  ...getTodosState(state).byIds[id],
  id,
});

/**
 * example of a slightly more complex selector
 * select from state combining information from multiple reducers
 */
export const getTodos = (state: State) =>
  getTodoList(state).map(id => getTodoById(state, id));

export const getTodosByVisibilityFilter = createSelector(
  getTodos,
  (state: State) => state.visibilityFilter,
  (allTodos, visibilityFilter) => {
    switch (visibilityFilter) {
      case VISIBILITY_FILTERS.COMPLETED:
        return allTodos.filter(todo => todo.completed);
      case VISIBILITY_FILTERS.INCOMPLETE:
        return allTodos.filter(todo => !todo.completed);
      case VISIBILITY_FILTERS.ALL:
      default:
        return allTodos;
    }
  }
);

export const getActiveFilter = createSelector(
  (state: State) => state.visibilityFilter,
  identity
);
