import React from 'react';
import { ajax } from 'rxjs/ajax';
import { of, throwError } from 'rxjs';
import Query, { State } from './query';
import { render, cleanup, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

it('renders initally', async () => {
  const children = (queryState: State) =>
    queryState.fetching ? 'fetching true' : 'fetching false';
  const { getByText } = render(
    <Query query="users" variables={{ foo: 'foo' }} children={children} />
  );

  const element = await waitForElement(() => getByText('fetching false'));
  expect(element).toHaveTextContent('fetching false');
});

it('renders fetching true', async () => {
  const children = (queryState: State) =>
    queryState.fetching ? 'fetching true' : 'fetching false';
  const { getByText } = render(
    <Query query="users" variables={{ foo: 'foo' }} children={children} />
  );

  const element = await waitForElement(() => getByText('fetching true'));
  expect(element).toHaveTextContent('fetching true');
});

it('renders items', async () => {
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

  const { getByText } = render(
    <Query query="users" variables={{ foo: 'foo' }} children={children} />
  );
  const element = await waitForElement(() => getByText('foo'));
});

it('renders error', async () => {
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

  const { getByText } = render(
    <Query query="users" variables={{ foo: 'foo' }} children={children} />
  );

  const element = await waitForElement(() => getByText('my error'));
});
