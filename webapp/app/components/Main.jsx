import React from 'react';
import PropTypes from 'prop-types';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/not_found/NotFoundPage';
import * as usersActions from '../actions/usersActions';
import * as authActions from '../actions/authActions';
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          // inject context prop, we need the initial state from users
          <Route
            exact
            path="/"
            render={() => <HomePage
              context={this.props.context}
              usersActions={usersActions} /> } />
          // inject context prop, we need the initial state from auth
          <Route
            ath="/login"
            render={() => <LoginPage
              context={this.props.context}
              authActions={authActions} /> } />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

Main.propTypes = {
  context: PropTypes.object.isRequired
};

export default Main;
