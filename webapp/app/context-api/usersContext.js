import React from 'react';

export const users = {
  data: [],
  selectedUser: {},
  fetch: {
    loading: false,
    error: null
  }
};

export const UsersContext = React.createContext({
  users,
  getUsers: () => {},
  createUser: () => {},
  updateUser: () => {},
  deleteUser: () => {},
  selectUser: () => {},
});
