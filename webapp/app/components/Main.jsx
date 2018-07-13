import React from 'react';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/not_found/NotFoundPage';
import { Switch, Route } from 'react-router-dom';
import { UsersContext } from '../context-api/usersContext';

class Main extends React.Component {
  // Auth and Users share the same AppProvider we can combine the Providers?
  // Nested Providers? We can use two differents Providers? One for users and
  // other for auth?
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              <UsersContext.Consumer>
                { usersContext => <HomePage usersContext={usersContext} /> }
              </UsersContext.Consumer>
            } />
          <Route path="/login" component={LoginPage}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default Main;
