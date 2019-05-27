import React from 'react';
import Button from './button';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

it('renders', () => {
  const { getByText, debug } = render(<Button color="red">data flow</Button>);
  const element = getByText('data flow');
  debug(element);
  expect(element).toHaveClass('Button-red', 'Button-text-red');
});
