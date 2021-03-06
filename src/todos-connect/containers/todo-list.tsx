import React from 'react';
import { connect } from 'react-redux';
import Todo from './todo';
import { makeGetTodosByVisibilityFilter } from '../selectors';
import { State } from '../configure-store';

interface TodoListProps {
  todos: { id: number; content: string; completed: boolean }[];
}

const TodoList = ({ todos }: TodoListProps) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : 'No todos, yay!'}
  </ul>
);

const makeMapStateToProps = () => {
  const getTodosByVisibilityFilter = makeGetTodosByVisibilityFilter();
  const mapStateToProps = (state: State) => {
    const todos = getTodosByVisibilityFilter(state);
    return { todos };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(TodoList);
