import React from 'react';
import PropTypes from 'prop-types';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/not_found/NotFoundPage';
import * as authActions from '../actions/authActions';
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage
              context={this.props.context} /> } />
          <Route
            path="/login"
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
