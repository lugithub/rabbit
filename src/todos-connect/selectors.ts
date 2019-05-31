import { VISIBILITY_FILTERS } from './constants';
import { Store } from './configure-store';

export const getTodosState = (store: Store) => store.todos;

export const getTodoList = (store: Store) =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store: Store, id: number) => ({
  ...getTodosState(store).byIds[id],
  id
});

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = (store: Store) =>
  getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (
  store: Store,
  visibilityFilter: VISIBILITY_FILTERS
) => {
  const allTodos = getTodos(store);
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
