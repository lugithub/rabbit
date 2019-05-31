import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleTodo } from '../actions';

const Todo = ({
  todo,
  toggleTodo
}: {
  todo: { id: number; content: string; completed: boolean };
  toggleTodo: (id: number) => {};
}) => (
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? '👌' : '👋'}{' '}
    <span
      className={cx(
        'todo-item__text',
        todo && todo.completed && 'todo-item__text--completed'
      )}
    >
      {todo.content}
    </span>
  </li>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo }
)(Todo);
