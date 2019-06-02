import { createSelector } from 'reselect';
import { VISIBILITY_FILTERS } from './constants';
import { State } from './configure-store';

export const getTodosState = (state: State) => state.todos;

export const getTodos = createSelector(
  getTodosState,
  todoState => todoState.allIds.map(id => ({ ...todoState.byIds[id], id }))
);

export const getVisibilityFilter = (state: State) => state.visibilityFilter;

export const getTodosByVisibilityFilter = createSelector(
  getTodos,
  getVisibilityFilter,
  (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case VISIBILITY_FILTERS.COMPLETED:
        return todos.filter(todo => todo.completed);
      case VISIBILITY_FILTERS.INCOMPLETE:
        return todos.filter(todo => !todo.completed);
      case VISIBILITY_FILTERS.ALL:
      default:
        return todos;
    }
  }
);

export const makeGetVisibilityFilter = () => (state: State) =>
  state.visibilityFilter;

export const makeGetTodosByVisibilityFilter = () =>
  createSelector(
    getTodos,
    getVisibilityFilter,
    (todos, visibilityFilter) => {
      switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
          return todos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
          return todos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
          return todos;
      }
    }
  );
