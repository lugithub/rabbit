import { identity } from 'ramda';
import { useContext, useEffect, useReducer } from 'react';
import { GithubContext } from '../apis/github';

export interface State {
  fetching: boolean;
  data?: object;
  error?: object;
}

interface Action {
  data?: object;
  error?: object;
}

function queryReducer(state: State, action: Action) {
  if (action.error || action.data) {
    return {
      ...action,
      fetching: false
    };
  } else {
    return {
      ...action,
      fetching: true
    };
  }
}

export default function Query({
  query,
  variables,
  children,
  normalize = identity
}: {
  query: string;
  variables: { [key: string]: any };
  children: (queryState: State) => any;
  normalize?: any;
}) {
  const [queryState, dispatch] = useReducer(queryReducer, {
    fetching: false
  });

  const { search } = useContext(GithubContext);

  useEffect(() => {
    dispatch({});
    search(query, variables).subscribe(
      data => dispatch({ data }),
      error => dispatch({ error }),
      console.log.bind(console, `complete`)
    );
  }, [query, variables, search]);

  return children(queryState);
}
