/**
 * Base file for the project (injects code into public/index.html).
 */
import React from 'react';
import bemmit from 'bemmit';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Page from './components/Page';
import configureStore from './configureStore';
import './styles/index.scss';

export const getClass = bemmit('main-container');
export const pageTitle = "Test EOS Application";

const store = configureStore(process.env.NODE_ENV);
const provider = (
  <Provider store={store}>
    <div className={getClass()}>
      <Page title={pageTitle}/>
    </div>
  </Provider>
);

render(
  provider,
  document.getElementById('main'),
);
