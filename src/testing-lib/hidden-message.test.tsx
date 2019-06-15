import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { render, fireEvent } from 'react-testing-library';
import HiddenMessage from './hidden-message';

// NOTE: you do NOT have to do this in every test.
// Learn more about Jest's __mocks__ directory:
// https://jestjs.io/docs/en/manual-mocks

jest.mock('react-transition-group', () => {
  return {
    CSSTransition: jest.fn(({ children, in: show }) =>
      show ? children : null
    ),
  };
});

afterAll(() => jest.resetAllMocks());

test('you can mock things with jest.mock', () => {
  const { getByText, queryByText } = render(
    <HiddenMessage initialShow={true} />
  );
  const toggleButton = getByText('Toggle');
  const children = expect.any(Object);

  expect(getByText('Hello world')).not.toBeNull();

  fireEvent.click(toggleButton);
  expect(queryByText('Hello world')).toBeNull();

  fireEvent.click(toggleButton);
  expect(queryByText('Hello world')).not.toBeNull();

  fireEvent.click(toggleButton);
  expect(queryByText('Hello world')).toBeNull();
});
