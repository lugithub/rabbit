import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { compose } from 'ramda';
interface AddTodoProps {
  addTodo: typeof addTodo;
}

function AddTodo({ addTodo }: AddTodoProps) {
  const [input, setInput] = useState('');

  return (
    <div>
      <input onChange={e => setInput(e.target.value)} value={input} />
      <button
        className="add-todo"
        onClick={compose(
          setInput.bind(null, ''),
          addTodo.bind(null, input)
        )}
      >
        Add Todo
      </button>
    </div>
  );
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
