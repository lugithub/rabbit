import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleTodo } from '../actions';

interface TodoProps {
  todo: { id: number; content: string; completed: boolean };
  toggleTodo: typeof toggleTodo;
}

const Todo = ({ todo, toggleTodo }: TodoProps) => (
  <li className="todo-item" onClick={toggleTodo.bind(null, todo.id)}>
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

export default connect(
  null,
  { toggleTodo }
)(Todo);
