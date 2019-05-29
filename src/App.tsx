import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './hooks/counter';
import Query from './users/query';
import { pathOr } from 'ramda';
import { State } from './users/query';
import Fetch from './testing-lib/fetch';
import HiddenMessage from './testing-lib/hidden-message';
import Button from './principal1/button';
import IntervalCounter from './hooks/interval-counter';
import Clock from './hooks/clock';

const App: React.FC = () => {
  return (
    <div className="App">
      <Clock />
      <IntervalCounter />
      <Button color="red">principal 1</Button>
      <HiddenMessage initialShow={false} />
      <Fetch url="https://www.google.com" />
      <Query query="users" variables={{ q: `tom repos:>42 followers:>1000` }}>
        {(queryState: State) => {
          return (
            <ul>
              {pathOr([], ['data', 'items'])(queryState).map(
                (item: { login: string }) => (
                  <li key={item.login}>{item.login}</li>
                ),
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
