import { ActionType, Action, SetFilter } from '../actions';
import { VISIBILITY_FILTERS } from '../constants';

export default function visibilityFilter(
  state = VISIBILITY_FILTERS.ALL,
  action: Action<SetFilter>,
) {
  switch (action.type) {
    case ActionType.SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
}
