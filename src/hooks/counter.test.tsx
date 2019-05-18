import React from 'react';
import { shallow } from 'enzyme';
import Counter from './counter';

it('renders 0 times message', () => {
  const wrapper = shallow(<Counter />);
  const welcome = <p>You clicked 0 times</p>;
  expect(wrapper.contains(welcome)).toBe(true);
});

it('renders 1 times message', () => {
  const wrapper = shallow(<Counter />);
  const welcome = <p>You clicked 1 times</p>;
  wrapper.find('button').simulate('click');
  expect(wrapper.contains(welcome)).toBe(true);
});
