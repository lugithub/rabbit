import React from 'react';
import { render, findByText } from 'react-testing-library';
import Clock from './clock';

it('renders 0', () => {
  const { getByText } = render(<Clock />);
  getByText('Seconds: 0');
});

it('renders 10', () => {
  const timeout = 20000;
  jest.setTimeout(timeout);
  const { container, debug } = render(<Clock />);
  return findByText(container, 'Seconds: 10', undefined, { timeout }).then(
    debug,
  );
});
