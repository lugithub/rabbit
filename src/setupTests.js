import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TestScheduler } from 'rxjs/testing';

// option 1
import 'react-testing-library/cleanup-after-each';

configure({ adapter: new Adapter() });

export const scheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

// option 2
// import { cleanup } from 'react-testing-library';
// afterEach(() => {
//   console.log('cleanup');
//   cleanup();
// });
