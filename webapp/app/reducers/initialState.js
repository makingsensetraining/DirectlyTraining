/**
 * devolver el estado inicial con un getter (expeciamente cuando se usa mas de una vez para resetear)
 * es recomendable ya que garantiza que no van a haber mutaciones accidentales
 */
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
