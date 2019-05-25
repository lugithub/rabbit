import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import axios from 'axios';
import Fetch from './fetch';

afterEach(cleanup);

const axiosMock = axios as jest.Mocked<typeof axios>;

it('loads and displays greeting', async () => {
  const { getByText } = render(<Fetch url="/greeting" />);

  axiosMock.get.mockResolvedValueOnce({
    data: 'hello there',
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {}
  });

  fireEvent.click(getByText('Load Greeting'));

  const hello = await waitForElement(() => getByText('hello there'));
  expect(hello).toBeInTheDocument();
  expect(getByText('Load Greeting')).toHaveAttribute('disabled');
});

it('loads and displays error', async () => {
  const { getByText } = render(<Fetch url="/greeting" />);

  axiosMock.get.mockRejectedValue({
    data: 'error there'
  });

  fireEvent.click(getByText('Load Greeting'));

  const error = await waitForElement(() => getByText('error there'));
  expect(error).toBeInTheDocument();
  expect(getByText('Load Greeting')).toHaveAttribute('disabled');
});
