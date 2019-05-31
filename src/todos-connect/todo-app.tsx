import React from 'react';
import AddTodo from './containers/add-todo';
import TodoList from './containers/todo-list';
import VisibilityFilters from './containers/visibility-filters';
import './styles.css';

export default function TodoApp() {
  return (
    <>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </>
  );
}
