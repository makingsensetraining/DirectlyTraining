import keyMirror from 'key-mirror-nested';

export default keyMirror({
  AUTH: {
    LOGIN_REQUEST: null,
    LOGIN_SUCCESS: null,
    LOGIN_ERROR: null
  },
  USERS: {
    GET_ALL: null
  },
}, { connChar: '/' });
