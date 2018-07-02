import reducer from './users';
import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const {USERS} = actionTypes;

describe('users reducer', () => {
  const fetch = {
    pending: false,
    error: false
  };

  const { users: usersInitialState } = initialState;

  it('should return the initial state', () => {
    // Arrange
    const expected = usersInitialState;
    // Act.
    const result = reducer(undefined, {});

    // Assert.
    expect(result).toEqual(expected);
  });

  it('should handle USERS.GET_ALL_PENDING', () => {
    // Arrange
    const action = {
      type: `${USERS.GET_ALL}_PENDING`
    };
    const expected = {
      ...usersInitialState,
      fetch: {
        ...usersInitialState.fetch,
        pending: true
      }
    };

    // Act.
    const result = reducer(usersInitialState, action);

    // Assert.
    expect(result).toEqual(expected);
  });

  it('should handle USERS.GET_ALL_FULFILLED', () => {
    // Arrange
    const action = {
      type: `${USERS.GET_ALL}_FULFILLED`,
      payload: {
        data: {
          docs: ['a user']
        }
      }
    };
    const expected = {
      ...usersInitialState,
      data: ['a user'],
    };

    // Act.
    const result = reducer(usersInitialState, action);

    // Assert.
    expect(result).toEqual(expected);
  });

  it('should handle USERS.GET_ALL_REJECTED', () => {
    // Arrange
    const action = {
      type: `${USERS.GET_ALL}_REJECTED`
    };
    const expected = {
      ...usersInitialState,
      fetch: {
        ...usersInitialState.fetch,
        pending: false,
        error: true
      }
    };

    // Act.
    const result = reducer(usersInitialState, action);

    // Assert.
    expect(result).toEqual(expected);
  });

  it('should handle USERS.SELECT', () => {
    // Arrange
    const action = {
      type: USERS.SELECT,
      payload: {
        user: 'user'
      }
    };
    const expected = {
      ...usersInitialState,
      selectedUser: {
        user: 'user'
      }
    };

    // Act.
    const result = reducer(usersInitialState, action);

    // Assert.
    expect(result).toEqual(expected);
  });
});
