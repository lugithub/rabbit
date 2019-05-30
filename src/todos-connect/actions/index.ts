import { ActionType } from './action-types';
import { VISIBILITY_FILTERS } from '../constants';
let nextTodoId = 0;

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
  filter: string;
}

export const addTodo = (content: string) => ({
  type: ActionType.ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id: number) => ({
  type: ActionType.TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter: VISIBILITY_FILTERS) => ({
  type: ActionType.SET_FILTER,
  payload: { filter },
});

export * from './action-types';
