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

export const getTodosByVisibilityFilter = (
  state: State,
  visibilityFilter: VISIBILITY_FILTERS,
) => {
  const allTodos = getTodos(state);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
