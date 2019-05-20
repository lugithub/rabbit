import React, { Children } from 'react';
import { ajax } from 'rxjs/ajax';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Query from './query';
import { of, throwError } from 'rxjs';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders initally', () => {
  const children = jest.fn();
  const query = shallow(
    <Query query="users" variables={{ foo: 'foo' }} children={children} />
  );
  expect(children).toBeCalledWith({ fetching: false });
});

it('renders fetching true', () => {
  const children = jest.fn().mockImplementation(() => '');

  act(() => {
    ReactDOM.render(
      <Query query="users" variables={{ foo: 'foo' }} children={children} />,
      container
    );
  });

  expect(children).toBeCalledWith({ fetching: false });
  expect(children).toBeCalledWith({ fetching: true });
});

it('renders items', () => {
  const children = jest.fn().mockImplementation(() => '');

  act(() => {
    const getJSON = jest.spyOn(ajax, `getJSON`).mockImplementation(() => {
      console.log('getJSON');
      return of({ items: [{ login: `foo` }] });
    });

    ReactDOM.render(
      <Query query="users" variables={{ foo: 'foo' }} children={children} />,
      container
    );
  });
  expect(children).toBeCalledWith({ fetching: false });
  // expect(children).toBeCalledWith({ fetching: true });
  expect(children).toBeCalledWith({
    fetching: false,
    data: { items: [{ login: `foo` }] }
  });
});

it('renders error', () => {
  const children = jest.fn().mockImplementation(() => '');

  act(() => {
    const getJSON = jest.spyOn(ajax, `getJSON`).mockImplementation(() => {
      console.log('getJSON');
      return throwError('my error');
    });

    ReactDOM.render(
      <Query query="users" variables={{ foo: 'foo' }} children={children} />,
      container
    );
  });
  expect(children).toBeCalledWith({ fetching: false });
  expect(children).toBeCalledWith({
    fetching: false,
    error: 'my error'
  });
});
