export default {
  auth: {
    authenticating: false,
    isAuthenticated: false,
    error: false,
    errorMessage: null,
    user: null
  },
  routing: null,
  users: {
    data: [],
    selectedUser: {},
    fetch: {  
      loading: false,
      error: null
    }
  }
};
