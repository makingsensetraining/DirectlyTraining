import {
  createStore,
  applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import { getQuery } from './utils';
import { initSagas } from './initSagas';
import initialState from './reducers/initialState';
import rootReducer from './reducers/rootReducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export function getStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [
    routerMiddleware(history),
    sagaMiddleware,
    thunk
  ];

  if (getQuery()['logger']) {
    middleWares.push(logger);
  }

  const composables = [applyMiddleware(...middleWares)];
  const enhancer = composeWithDevTools(
    ...composables
  );
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  initSagas(sagaMiddleware);
  
  return store;
}
