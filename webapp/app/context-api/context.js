import initialState from './initialState';
import PropTypes from 'prop-types';
import React from 'react';
import { extend } from 'lodash';
import omit from 'lodash/omit';

const AppContext = React.createContext();

import {
  DEFAULT_USER_VALID_ID_PATHS,
  DEFAULT_PAGINATION_QUERY
} from '../constants';

import {
  createUsers,
  deleteUsers,
  fetchUsers,
  updateUsers,
  handleErrors
} from '../services/userService';

import { getUserId } from '../utils/user';

export class AppProvider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getUsers = this.getUsers.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.selectUser = this.selectUser.bind(this);

    this.state = extend(initialState, {
      getUsers: this.getUsers,
      createUser: this.createUser,
      updateUser: this.updateUser,
      deleteUser: this.deleteUser,
      selectUser: this.selectUser
    });
  }

  getUsers (queryParams = DEFAULT_PAGINATION_QUERY) {
    fetchUsers(queryParams)
      .then(handleErrors)
      .then(({ data }) => {
        let users = extend(this.state.users, {
          fetch: {
            error: null,
            loading: false
          },
          data: data.docs
        });
        this.setState({ users: users });
      });
  }

  createUser (userData) {
    return createUsers(omit(userData, DEFAULT_USER_VALID_ID_PATHS))
      .then(handleErrors)
      .then(({ data }) => {
        let users = this.state.users;
        users.data = [
          ...users.data,
          data
        ];

        this.setState({
          users: users
        });

        return users;
      });
  }

  updateUser (updatedUser) {
    return updateUsers(getUserId(updatedUser), omit(updatedUser, DEFAULT_USER_VALID_ID_PATHS))
      .then(handleErrors)
      .then(() => {
        let users = this.state.users;
        users = extend(users, {
          data: [
            updatedUser,
            ...users.data.filter(
              user => getUserId(updatedUser) !== getUserId(user)
            )
          ],
          fetch: {
            loading: false,
            error: null
          }
        });

        this.setState({
          users: users
        });

        return users;
      });
  }

  deleteUser (deletedUser) {
    return deleteUsers(getUserId(deletedUser))
      .then(handleErrors)
      .then(() => {
        let users = this.state.users;
        users = extend(users, {
          data: users.data.filter(
            user => getUserId(deletedUser) !== getUserId(user)
          ),
          fetch: {
            loading: false,
            error: null
          },
          selectedUser: {}
        });

        this.setState({
          users: users
        });

        return users;
      });
  }

  selectUser (user) {
    this.setState({
      users: extend(this.state.users, {
        selectedUser: user
      })
    });
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AppConsumer = AppContext.Consumer;
