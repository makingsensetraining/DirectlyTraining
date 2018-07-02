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
    selectedUser: null,
    fetch: {
      pending: false,
      error: false
    }
  }
};
