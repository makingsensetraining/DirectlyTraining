import React from 'react';
import { shallow } from 'enzyme';
import { AppProvider } from '../context-api/context';
import * as userService from '../services/userService';
import omit from 'lodash/omit';

function setup() {
  return shallow(
    <AppProvider>
      <p>John Doe</p>
    </AppProvider>
  );
}

describe('<AppProvider /> component', () => {
  let wrapper;

  it('should render correctly', () => {
    wrapper = setup();
    const instance = wrapper.instance();

    expect(wrapper.children().find('p')).toHaveLength(1);
    expect(wrapper.state()).toMatchObject({
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
      getUsers: instance.getUsers,
      createUser: instance.createUser,
      updateUser: instance.updateUser,
      deleteUser: instance.deleteUser,
      selectUser: instance.selectUser
    });
  });

  it('should update state from users data when we are a creating a new user', () => {
    wrapper = setup();
    const mockUser = {
      email: 'johndoe@gmail.com',
      id: '_id',
      name: 'John',
      phone: '432234',
      skypeId: 'johndoe',
      _id: '_id'
    };

    expect(wrapper.instance().getCreatedUsersData(mockUser)).toMatchObject({
      data: [mockUser],
      fetch: {
        error: null,
        loading: false
      },
      selectedUser: {}
    });
  });

  it('should update state from users data when we are a updating a user', () => {
    wrapper = setup();
    const mockUser = {
      email: 'johndoe@gmail.com',
      id: '_id',
      name: 'Johny',
      phone: '432234',
      skypeId: 'johnydoe',
      _id: '_id'
    };

    wrapper.instance().setState({
      users: {
        data: [{
          email: 'johndoe@gmail.com',
          id: '_id',
          name: 'John',
          phone: '432234',
          skypeId: 'johndoe',
          _id: '_id'
        }],
        fetch: {
          loading: true,
          error: null
        }
      }
    });

    expect(wrapper.instance().getUpdatedUsersData(mockUser)).toEqual({
      data: [mockUser],
      fetch: {
        loading: false,
        error: null
      }
    });
  });

  it('should update state from users data when we are a deleting a user', () => {
    wrapper = setup();
    const mockUser = {
      email: 'johndoe@gmail.com',
      id: '_id',
      name: 'John',
      phone: '432234',
      skypeId: 'johndoe',
      _id: '_id'
    };

    wrapper.instance().setState({
      users: {
        data: [mockUser],
        fetch: {
          loading: true,
          error: null
        },
        selectedUser: mockUser
      }
    });

    expect(wrapper.instance().getDeletedUsersData(mockUser)).toEqual({
      data: [],
      fetch: {
        loading: false,
        error: null
      },
      selectedUser: {}
    });
  });

  it('should update state from selectedUser when we are a selecting new users', () => {
    wrapper = setup();
    const mockUser = {
      email: 'johndoe@gmail.com',
      id: '_id',
      name: 'John',
      phone: '432234',
      skypeId: 'johndoe',
      _id: '_id'
    };
    const instance = wrapper.instance();

    instance.setState({
      users: {
        data: [mockUser],
        fetch: {
          loading: false,
          error: null
        },
        selectedUser: {}
      }
    });
    instance.selectUser(mockUser);

    expect(wrapper.state('users')).toEqual({
      data: [mockUser],
      fetch: {
        loading: false,
        error: null
      },
      selectedUser: mockUser
    });
  });
});
