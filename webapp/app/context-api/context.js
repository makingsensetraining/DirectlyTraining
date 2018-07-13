import React from 'react';
import PropTypes from 'prop-types';
import { extend, omit } from 'lodash';

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
  constructor(props) {
    super(props);

    this.getUsers = this.getUsers.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.selectUser = this.selectUser.bind(this);

    this.state = {
      auth: {
        authenticating: false,
        isAuthenticated: false,
        error: false,
        errorMessage: null,
        user: null
      },
      users: {
        data: [],
        selectedUser: {},
        fetch: {
          loading: false,
          error: null
        }
      },
      getUsers: this.getUsers,
      createUser: this.createUser,
      updateUser: this.updateUser,
      deleteUser: this.deleteUser,
      selectUser: this.selectUser
    };
  }

  getUsers (queryParams = DEFAULT_PAGINATION_QUERY) {
    return fetchUsers(queryParams)
      .then(handleErrors)
      .then(({ data }) => {
        let users = extend(this.state.users, {
          data: data.docs,
          fetch: {
            error: null,
            loading: false
          }
        });

        this.setState({ users: users });
      });
  }

  createUser (userData) {
    return createUsers(omit(userData, DEFAULT_USER_VALID_ID_PATHS))
      .then(handleErrors)
      .then(({ data }) => {
        let users = this.getCreatedUsersData(data);

        this.setState({
          users: users
        });

        return users;
      });
  }

  getCreatedUsersData (user) {
    let users = this.state.users;
    users.data = [
      ...users.data,
      user
    ];

    return users;
  }

  updateUser (updatedUser) {
    return updateUsers(getUserId(updatedUser), omit(updatedUser, DEFAULT_USER_VALID_ID_PATHS))
      .then(handleErrors)
      .then(() => {
        let users = this.getUpdatedUsersData(updatedUser);

        this.setState({
          users: users
        }, function () {
          return users;
        });
      });
  }

  getUpdatedUsersData (updatedUser) {
    let users = this.state.users;

    return extend(users, {
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
  }

  deleteUser (deletedUser) {
    return deleteUsers(getUserId(deletedUser))
      .then(handleErrors)
      .then(() => {
        let users = this.getDeletedUsersData(deletedUser);

        this.setState({
          users: users
        }, function () {
          return users;
        });
      });
  }

  getDeletedUsersData (deletedUser) {
    let users = this.state.users;

    return extend(users, {
      data: users.data.filter(
        user => getUserId(deletedUser) !== getUserId(user)
      ),
      fetch: {
        loading: false,
        error: null
      },
      selectedUser: {}
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
