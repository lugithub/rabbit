import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import store from '../todos-connect/configure-store';
import App from '../App';

storiesOf('todos-connect', module).add('fun', () => (
  <Provider store={store}>
    <App />
  </Provider>
));
