import actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const { AUTH } = actionTypes;

// TODO migrate to handleActions when implemented
function auth(state = initialState.auth, action) {
  switch (action.type) {
    case AUTH.LOGIN_REQUEST:
      return Object.assign({}, state,
        {
          authenticating: true,
          isAuthenticated: false,
          error: false,
          errorMessage: null,
          user: null
        }
      );

    case AUTH.LOGIN_SUCCESS:
      return Object.assign({}, state,
        {
          authenticating: false,
          isAuthenticated: true,
          error: false,
          errorMessage: null,
          user: action.user
        }
      );

    case AUTH.LOGIN_ERROR:
      return Object.assign({}, state,
        {
          authenticating: false,
          isAuthenticated: false,
          error: true,
          errorMessage: action.message,
          user: null
        }
      );

    default:
      return state;
  }
}

export default auth;
