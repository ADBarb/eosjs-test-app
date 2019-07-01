/**
 * Base file for the project (injects code into public/index.html).
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Page from './components/Page';
import configureStore from './configureStore';
import './styles/index.scss';

render(
  <Provider store={configureStore()}>
    <Page />
  </Provider>,
  document.getElementById('main')
);
