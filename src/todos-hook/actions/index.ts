import { ActionType } from './action-type';
import { VISIBILITY_FILTERS } from '../constants';

let nextTodoId = 0;

// Action<AddTodo>, Action<ToggleTodo>, and Action<SetFilter> appear better than
// AddTodo, ToggleTodo, and SetFilter

export interface Action<T> {
  type: ActionType;
  payload: T;
}

export interface AddTodo {
  id: number;
  content: string;
}

export interface ToggleTodo {
  id: number;
}

export interface SetFilter {
  filter: VISIBILITY_FILTERS;
}

export const addTodo = (content: string): Action<AddTodo> => ({
  type: ActionType.ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id: number): Action<ToggleTodo> => ({
  type: ActionType.TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter: VISIBILITY_FILTERS): Action<SetFilter> => ({
  type: ActionType.SET_FILTER,
  payload: { filter },
});

export * from './action-type';
