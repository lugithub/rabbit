import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

interface AddTodoProps {
  addTodo: typeof addTodo;
}

function AddTodo({ addTodo }: AddTodoProps) {
  const [input, setInput] = useState('');

  function handleAddTodo() {
    addTodo(input);
    setInput('');
  }
  return (
    <div>
      <input onChange={e => setInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
