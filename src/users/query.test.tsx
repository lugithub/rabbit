import React from 'react';
import { ajax } from 'rxjs/ajax';
import { of, throwError } from 'rxjs';
import Query, { State } from './query';
import { render, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';

it('renders initally', () => {
  const children = (queryState: State) =>
    queryState.fetching ? 'fetching true' : 'fetching false';
  const { findByText } = render(
    <Query query="users" variables={{ foo: 'foo' }} children={children} />
  );

  return findByText('fetching false');
});

it('renders fetching true', () => {
  const children = (queryState: State) =>
    queryState.fetching ? 'fetching true' : 'fetching false';
  const { findByText } = render(
    <Query query="users" variables={{ foo: 'foo' }} children={children} />
  );

  return findByText('fetching true');
});

it('renders items', () => {
  const children = (queryState: State) => {
    if (queryState.data && queryState.data.items) {
      return (
        <ul>
          {queryState.data.items.map(({ login }) => (
            <li key={login}>{login}</li>
          ))}
        </ul>
      );
    } else {
      return '';
    }
  };

  const getJSON = jest.spyOn(ajax, `getJSON`).mockImplementation(() => {
    console.log('getJSON');
    return of({ items: [{ login: `foo` }] });
  });

  const { findByText } = render(
    <Query query="users" variables={{ foo: 'foo' }} children={children} />
  );

  return findByText('foo');
});

it('renders error', () => {
  const children = (queryState: State) => {
    if (queryState.error) {
      return queryState.error;
    } else {
      return '';
    }
  };

  const getJSON = jest.spyOn(ajax, `getJSON`).mockImplementation(() => {
    return throwError('my error');
  });

  const { findByText } = render(
    <Query query="users" variables={{ foo: 'foo' }} children={children} />
  );

  return findByText('my error');
});
