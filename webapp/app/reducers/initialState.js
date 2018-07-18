import { initialState as users } from './usersReducer';
import { initialState as auth } from './authReducer';

export default {
  get auth() { return auth; },
  routing: null,
  get users() {return users; }
};
