/** 
 * evitar usar lodash siempre que sea posible. El peso de la libreria es MUCHO y no ayuda tanto importar
 * las funciones por separado porque la codependencia interna de lodash es demasiado alta
 */
import omit from 'lodash/omit';
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
import {
  createUsers,
  deleteUsers,
  fetchUsers,
  updateUsers
} from '../services/userService';
import {
  DEFAULT_USER_VALID_ID_PATHS,
  DEFAULT_PAGINATION_QUERY
} from '../constants';
import { getUserId } from '../utils/user';

export const loadingUsersBegin = () => {
  return ({
    type: LOADING_USERS_BEGIN
  });
};

export const loadingUsersComplete = () => ({
  type: LOADING_USERS_COMPLETE
});

export const loadingUsersFailed = error => ({
  type: LOADING_USERS_FAILED,
  payload: { error }
});

export const createUsersSuccess = user => ({
  type: CREATE_USERS_SUCCESS,
  payload: user
});

export const selectUsersSuccess = user => ({
  type: SELECT_USERS_SUCCESS,
  payload: user
});

export const getUsersSuccess = (usersData) => ({
  type: GET_USERS_SUCCESS,
  payload: { ...usersData }
});

export const updateUsersSuccess = user => ({
  type: UPDATE_USERS_SUCCESS,
  payload: user
});

export const deleteUsersSuccess = user => ({
  type: DELETE_USERS_SUCCESS,
  payload: user
});

export function selectUser(user) {
  return dispatch => {
    return new Promise(resolve => {
      dispatch(selectUsersSuccess(user));
      resolve(user);
    });
  };
}

/**
 * !!
 * las acciones solo deberian describir modelos. La logica deberia estar en otro lado (servicio/saga/thunk)
 */
export function deleteUser(user) {
  return dispatch => {
    dispatch(loadingUsersBegin());
    return deleteUsers(getUserId(user))
      .then(handleErrors)
      .then(res => res.json())
      .then(() => {
        dispatch(loadingUsersComplete());
        dispatch(deleteUsersSuccess(user));
        return user;
      })
      .catch(error => dispatch(loadingUsersFailed(error)));
  };
}

export function updateUser(user) {
  return dispatch => {
    dispatch(loadingUsersBegin());
    return updateUsers(getUserId(user), omit(user, DEFAULT_USER_VALID_ID_PATHS))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(loadingUsersComplete());
        dispatch(updateUsersSuccess(json.data));
        return json.data;
      })
      .catch(error => dispatch(loadingUsersFailed(error)));
  };
}

export function createUser(userData) {
  return dispatch => {
    dispatch(loadingUsersBegin());
    return createUsers(omit(userData, DEFAULT_USER_VALID_ID_PATHS))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(loadingUsersComplete());
        dispatch(createUsersSuccess(json.data));
        return json.data;
      })
      .catch(error => dispatch(loadingUsersFailed(error)));
  };
}

export function getUsers(queryParams = DEFAULT_PAGINATION_QUERY) {
  return dispatch => {
    dispatch(loadingUsersBegin());
    return fetchUsers(queryParams)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        const usersPayload = {
          ...omit(json.data, ['docs']),
          users: json.data.docs
        };
        dispatch(loadingUsersComplete());
        dispatch(getUsersSuccess(usersPayload));
        return usersPayload;
      })
      .catch(error => dispatch(loadingUsersFailed(error)));
  };
}

// TODO move to service errors utility
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
