import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { UsersContext, users } from './usersContext';

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

class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.getUsers = this.getUsers.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.selectUser = this.selectUser.bind(this);

    // State also contains the updater function so it will
    // be passed down withs the context provider
    this.state = {
      ...users,
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
        this.setState({
          ...this.state,
          data: data.docs,
          fetch: {
            error: null,
            loading: false
          }
        });

        return data;
      });
  }

  createUser (userData) {
    return createUsers(omit(userData, DEFAULT_USER_VALID_ID_PATHS))
      .then(handleErrors)
      .then(({ data }) => {
        this.setState({
          data: [
            ...this.state.data,
            data
          ]
        });

        return users;
      });
  }

  updateUser (updatedUser) {
    return updateUsers(getUserId(updatedUser), omit(updatedUser, DEFAULT_USER_VALID_ID_PATHS))
      .then(handleErrors)
      .then(() => {
        this.setState({
          data: [
            updatedUser,
            ...this.state.data.filter(
              user => getUserId(updatedUser) !== getUserId(user)
            )
          ],
          fetch: {
            loading: false,
            error: null
          }
        }, function () {
          return users;
        });
      });
  }

  deleteUser (deletedUser) {
    return deleteUsers(getUserId(deletedUser))
      .then(handleErrors)
      .then(() => {
        this.setState({
          ...this.state,
          data: this.state.data.filter(
            user => getUserId(deletedUser) !== getUserId(user)
          ),
          fetch: {
            loading: false,
            error: null
          },
          selectedUser: {}
        }, function () {
          return users;
        });
      });
  }

  selectUser (selectedUser) {
    this.setState({
      ...this.state,
      selectedUser
    });
  }

  render() {
    return (
      <UsersContext.Provider value={this.state}>
        {this.props.children}
      </UsersContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
