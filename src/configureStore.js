/**
 * File for setting up and creating the store for the application.
 */
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

export default function configureStore() {
  const middleware = [thunk];

  let composeEnhancers = compose;
  if (process.env.NODE_ENV === 'development') {
    if ('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    middleware.push(createLogger());
  }

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
