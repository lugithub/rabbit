import { search } from './github';
import { ajax } from 'rxjs/ajax';
import { scheduler } from '../setupTests';

it('returns observable', () => {
  scheduler.run(helpers => {
    const { cold, expectObservable, expectSubscriptions } = helpers;
    const getJSON = jest
      .spyOn(ajax, `getJSON`)
      .mockImplementation(() =>
        cold('-a|', { a: { items: [{ login: `foo` }] } })
      );
    const users$ = search(`users`, { foo: `foo` });
    expect(getJSON).toBeCalledWith(
      `https://api.github.com/search/users?foo=foo`
    );
    expectObservable(users$).toBe('-- 2999ms a|', {
      a: { items: [{ login: `foo` }] }
    });
  });
});
