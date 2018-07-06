import {
  AUTH_LOGIN_BEGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED
} from '../actions/actionTypes';

export const initialState = {
  authenticating: false,
  isAuthenticated: false,
  error: false,
  errorMessage: null,
  user: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN_BEGIN:
      return {
        ...state,
        ...initialState,
        authenticating: true
      };

    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        ...initialState,
        isAuthenticated: true,
        user: action.user
      };

    case AUTH_LOGIN_FAILED:
      return {
        ...state,
        ...initialState,
        error: true,
        errorMessage: action.message
      };

    default:
      return state;
  }
}
