import { Action, ActionType, AddTodo, ToggleTodo } from '../actions';

export interface ByIds {
  [key: string]: { content: string; completed: boolean };
}

export interface TodosState {
  allIds: number[];
  byIds: ByIds;
}

const initialState = {
  allIds: [],
  byIds: {},
};

export default function todos(
  state: TodosState = initialState,
  action: Action<AddTodo> | Action<ToggleTodo>, //at runtime, instance of Action<SetFilter> is passed here also
): TodosState {
  switch (action.type) {
    case ActionType.ADD_TODO: {
      const { id, content } = action.payload as AddTodo;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    case ActionType.TOGGLE_TODO: {
      const { id } = action.payload as ToggleTodo;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
}
