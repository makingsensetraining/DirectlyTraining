import React from 'react';
import { render } from 'react-dom';
import store, { history } from './store';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
render(
  <App store={store} history={history} />,
  document.getElementById('app')
);
