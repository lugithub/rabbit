import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TestScheduler } from 'rxjs/testing';

configure({ adapter: new Adapter() });

export const scheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});
