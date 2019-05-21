import React, { useReducer } from 'react';
import axios from 'axios';

function reducer(
  state: { loading: boolean; data?: string; error?: string },
  action: { data?: string; error?: string }
) {
  if (action.data || action.error) {
    return { loading: false, ...action };
  } else {
    return state;
  }
}
export default function Fetch({ url }: { url: string }) {
  const [state, dispatch] = useReducer(reducer, { loading: false });

  return (
    <>
      <p>{state.data || state.error}</p>
      <button
        disabled={!!state.data || !!state.error}
        onClick={() => {
          dispatch({});
          axios
            .get(url)
            .then(value => dispatch({ data: value.data }))
            .catch(error => dispatch({ error: error.data }));
        }}
      >
        Load Greeting
      </button>
    </>
  );
}
