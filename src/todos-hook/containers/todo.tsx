import React from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import { toggleTodo } from '../actions';

interface TodoProps {
  todo: { id: number; content: string; completed: boolean };
}

const Todo = ({ todo }: TodoProps) => {
  const dispatch = useDispatch();

  return (
    <li
      className="todo-item"
      onClick={dispatch.bind(null, toggleTodo(todo.id))}
    >
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
};

export default Todo;
