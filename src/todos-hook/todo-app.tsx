import React from 'react';
import AddTodo from './containers/add-todo';
import TodoList from './containers/todo-list';
import VisibilityFilters from './containers/visibility-filters';
import './styles.css';

export default function TodoAppHook() {
  return (
    <>
      <h1>Todo List hooks</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </>
  );
}
