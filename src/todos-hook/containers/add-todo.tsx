import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';
import { compose } from 'ramda';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <input onChange={e => setInput(e.target.value)} value={input} />
      <button
        className="add-todo"
        onClick={compose(
          setInput.bind(null, ''),
          dispatch.bind(null, addTodo(input))
        )}
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
