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

// function isAddTodo(
//   action: Action<AddTodo> | Action<ToggleTodo>
// ): action is Action<AddTodo> {
//   return (action as Action<AddTodo>).payload.content !== void 0;
// }

export default function todos(
  state: TodosState = initialState,
  action: Action<AddTodo> | Action<ToggleTodo> //at runtime, instance of Action<SetFilter> is passed here also
): TodosState {
  // if (isAddTodo(action)) {
  //   const { id, content } = action.payload;
  //   return {
  //     ...state,
  //     allIds: [...state.allIds, id],
  //     byIds: {
  //       ...state.byIds,
  //       [id]: {
  //         content,
  //         completed: false
  //       }
  //     }
  //   };
  // } else {
  //   const { id } = action.payload;
  //   return {
  //     ...state,
  //     byIds: {
  //       ...state.byIds,
  //       [id]: {
  //         ...state.byIds[id],
  //         completed: !state.byIds[id].completed
  //       }
  //     }
  //   };
  // }

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
