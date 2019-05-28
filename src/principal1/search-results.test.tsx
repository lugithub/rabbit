import React from 'react';
import SearchResults from './search-results';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

it('renders {}', () => {
  const { getByText, debug } = render(<SearchResults query="foo" />);
  debug();
  getByText('{}');
});

it('renders foo', () => {
  jest.spyOn(ajax, 'getJSON').mockReturnValueOnce(of([{ name: 'foo' }]));
  const { findByText, debug } = render(<SearchResults query="foo" />);
  return findByText('{"data":[{"name":"foo"}]}').then(debug);
});

it('renders bar', () => {
  jest.spyOn(ajax, 'getJSON').mockReturnValueOnce(of([{ name: 'foo' }]));
  const { findByText, debug, rerender } = render(<SearchResults query="foo" />);

  jest.spyOn(ajax, 'getJSON').mockReturnValueOnce(of([{ name: 'bar' }]));
  rerender(<SearchResults query="bar" />);
  debug();
  return findByText('{"data":[{"name":"bar"}]}').then(debug);
});
