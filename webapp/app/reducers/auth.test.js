import reducer from './auth';
import actionTypes from '../constants/actionTypes';

const { AUTH } = actionTypes;

describe('auth reducer', () => {
  it('should return the initial state', () => {
    // Act.
    const result = reducer(undefined, {});

    // Assert.
    expect(result).toEqual({
      authenticating: false,
      isAuthenticated: false,
      error: false,
      errorMessage: null,
      user: null
    });
  });

  it('should handle a login request', () => {
    // Act.
    const result = reducer([], {
      type: AUTH.LOGIN_REQUEST
    });

    // Assert.
    expect(result).toEqual({
      authenticating: true,
      isAuthenticated: false,
      error: false,
      errorMessage: null,
      user: null
    });
  });

  it('should handle a successfully login', () => {
    // Act.
    const result = reducer([], {
      type: AUTH.LOGIN_SUCCESS,
      user: {
        name: 'John'
      }
    });

    // Assert.
    expect(result).toEqual({
      authenticating: false,
      isAuthenticated: true,
      error: false,
      errorMessage: null,
      user: {
        name: 'John'
      }
    });
  });

  it('should handle a failed login', () => {
    // Act.
    const result = reducer([], {
      type: AUTH.LOGIN_ERROR,
      message: 'Unexpected error.'
    });

    // Assert.
    expect(result).toEqual({
      authenticating: false,
      isAuthenticated: false,
      error: true,
      errorMessage: 'Unexpected error.',
      user: null
    });
  });
});
