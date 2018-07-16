import {
  getUsers,
  getUsersSuccess,
  deleteUsers,
  deleteUsersSuccess,
  selectUser,
  selectUserSuccess,
  loadingUsersBegin,
  loadingUsersComplete
} from './usersActions';
import {
  LOADING_USERS_BEGIN,
  LOADING_USERS_COMPLETE,
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  DELETE_USERS_BEGIN,
  DELETE_USERS_SUCCESS,
  SELECT_USER_BEGIN,
  SELECT_USER_SUCCESS
} from '../actions/actionTypes';

describe('usersActions', () => {
  describe('getUsers', () => {
    it('should be defined', () => {
      expect(getUsers).toBeDefined();
    });

    it('should be a function', () => {
      expect(getUsers).toEqual(expect.any(Function));
    });

    it('should create an action `GET_USERS_BEGIN`', () => {
      expect(getUsers()).toEqual({ 
        type: GET_USERS_BEGIN       
      });
    });
  });

  describe('getUsersSuccess', () => {
    it('should be defined', () => {
      expect(getUsersSuccess).toBeDefined();
    });

    it('should be a function', () => {
      expect(getUsersSuccess).toEqual(expect.any(Function));
    });

    it('should create an action `GET_USERS_SUCCESS`', () => {
      expect(getUsersSuccess()).toEqual({ 
        type: GET_USERS_SUCCESS,
        users: undefined            
      });
    });
  });

  describe('selectUser', () => {
    it('should be defined', () => {
      expect(selectUser).toBeDefined();
    });

    it('should be a function', () => {
      expect(selectUser).toEqual(expect.any(Function));
    });

    it('should create an action `SELECT_USER_BEGIN`', () => {
      expect(selectUser('foo')).toEqual({ 
        type: SELECT_USER_BEGIN,
        user: 'foo'            
      });
    });
  });

  describe('selectUserSuccess', () => {
    it('should be defined', () => {
      expect(selectUserSuccess).toBeDefined();
    });

    it('should be a function', () => {
      expect(selectUserSuccess).toEqual(expect.any(Function));
    });

    it('should create an action `SELECT_USERS_SUCCESS`', () => {
      expect(selectUserSuccess('foo')).toEqual({ 
        type: SELECT_USER_SUCCESS,
        user: 'foo'            
      });
    });
  });

  describe('deleteUsers', () => {
    it('should be defined', () => {
      expect(deleteUsers).toBeDefined();
    });

    it('should be a function', () => {
      expect(deleteUsers).toEqual(expect.any(Function));
    });

    it('should create an action `DELETE_USERS_BEGIN`', () => {
      expect(deleteUsers('foo')).toEqual({ 
        type: DELETE_USERS_BEGIN,
        user: 'foo'            
      });
    });
  });

  describe('deleteUsersSuccess', () => {
    it('should be defined', () => {
      expect(deleteUsersSuccess).toBeDefined();
    });

    it('should be a function', () => {
      expect(deleteUsersSuccess).toEqual(expect.any(Function));
    });

    it('should create an action `DELETE_USERS_SUCCESS`', () => {
      expect(deleteUsersSuccess('foo')).toEqual({ 
        type: DELETE_USERS_SUCCESS,
        user: 'foo'            
      });
    });
  });

  describe('loadingUsersBegin', () => {
    it('should be defined', () => {
      expect(loadingUsersBegin).toBeDefined();
    });

    it('should be a function', () => {
      expect(loadingUsersBegin).toEqual(expect.any(Function));
    });

    it('should create an action `LOADING_USERS_BEGIN`', () => {
      expect(loadingUsersBegin()).toEqual({ 
        type: LOADING_USERS_BEGIN   
      });
    });
  });

  describe('loadingUsersComplete', () => {
    it('should be defined', () => {
      expect(loadingUsersComplete).toBeDefined();
    });

    it('should be a function', () => {
      expect(loadingUsersComplete).toEqual(expect.any(Function));
    });

    it('should create an action `LOADING_USERS_COMPLETE`', () => {
      expect(loadingUsersComplete()).toEqual({ 
        type: LOADING_USERS_COMPLETE  
      });
    });
  });
});
