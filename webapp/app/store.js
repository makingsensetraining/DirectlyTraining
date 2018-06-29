import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/root';
import promiseMiddleware from 'redux-promise-middleware';

export const history = createHistory();

const middleware = applyMiddleware(
  promiseMiddleware(),
  routerMiddleware(history),
  thunkMiddleware
);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
