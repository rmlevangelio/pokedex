import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import PokedexApp from './app';
import configureStore from './store';
import rootSaga from './sagas';

import '../styles/main.scss';

const store = configureStore();
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <PokedexApp />
  </Provider>
, document.getElementById('root'));
