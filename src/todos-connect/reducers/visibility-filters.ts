import { ActionType, Action, SetFilter } from '../actions';
import { VISIBILITY_FILTERS } from '../constants';

// const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (
  state: VISIBILITY_FILTERS,
  action: Action<SetFilter>,
) => {
  switch (action.type) {
    case ActionType.SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
