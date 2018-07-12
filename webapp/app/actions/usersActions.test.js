import {
  getUsersSuccess,
  loadingUsersBegin,
  loadingUsersComplete
} from './usersActions';
import {
  LOADING_USERS_BEGIN,
  LOADING_USERS_COMPLETE,
  GET_USERS_SUCCESS
} from '../actions/actionTypes';

describe('usersActions', () => {
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
