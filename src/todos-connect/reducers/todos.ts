import { Action, ActionType, AddTodo, ToggleTodo } from '../actions';

interface ByIds {
  [key: string]: { id: number; content: string; completed: boolean };
}

const initialState: {
  allIds: number[];
  byIds: ByIds;
} = {
  allIds: [],
  byIds: {},
};

export default function(
  state = initialState,
  action: Action<AddTodo | ToggleTodo>,
) {
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
