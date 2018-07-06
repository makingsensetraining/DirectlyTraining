import {
  LOADING_USERS_BEGIN,
  LOADING_USERS_COMPLETE,
  LOADING_USERS_FAILED,
  CREATE_USERS_SUCCESS,
  GET_USERS_SUCCESS,
  DELETE_USERS_SUCCESS,
  UPDATE_USERS_SUCCESS,
  SELECT_USERS_SUCCESS,
} from '../actions/actionTypes';
import { getUserId } from '../utils/user';

export const initialState = {
  data: [],
  selectedUser: {},
  fetch: {
    loading: false,
    error: null
  }
};

export default function usersReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_USERS_SUCCESS:
      return {
        ...state,
        data: [
          action.payload,
          ...state.data
        ]
      };

    case DELETE_USERS_SUCCESS:
      return {
        ...state,
        data: state.data.filter(user => getUserId(action.payload) !== getUserId(user))
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload.users
      };

    case SELECT_USERS_SUCCESS:
      return {
        ...state,
        selectedUser: action.payload
      };

    case UPDATE_USERS_SUCCESS:
      return {
        ...state,
        data: [
          action.payload,
          ...state.data.filter(user => getUserId(action.payload) !== getUserId(user))
        ]
      };

    case LOADING_USERS_BEGIN:
      return {
        ...state,
        fetch: {
          loading: true,
          error: null
        }
      };

    case LOADING_USERS_COMPLETE:
      return {
        ...state,
        fetch: {
          loading: false,
          error: null
        }
      };

    case LOADING_USERS_FAILED:
      return {
        ...state,
        fetch: {
          loading: false,
          error: action.payload.error
        }
      };

    default:
      return state;
  }
}
