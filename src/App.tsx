import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './hooks/counter';
import Query from './users/query';
import { pathOr } from 'ramda';
import { State } from './users/query';

const App: React.FC = () => {
  return (
    <div className="App">
      <Query query="users" variables={{ q: `tom repos:>42 followers:>1000` }}>
        {(queryState: State) => {
          return (
            <ul>
              {pathOr([], ['data', 'items'])(queryState).map(
                (item: { login: string }) => (
                  <li key={item.login}>{item.login}</li>
                )
              )}
            </ul>
          );
        }}
      </Query>
      <Counter />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="lqueryStateogo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
