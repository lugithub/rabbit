import { ajax } from 'rxjs/ajax';
import { delay } from 'rxjs/operators';
import queryString from 'query-string';
import React from 'react';

export function search(query: string, variables: { [key: string]: any }) {
  return ajax
    .getJSON(
      `https://api.github.com/search/${query}?${queryString.stringify(
        variables
      )}`
    )
    .pipe(delay(3000));
}

export const GithubContext = React.createContext({ search });
