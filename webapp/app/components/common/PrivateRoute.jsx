import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  /**
   * es preferible tener las rutas en constantes para reutilizarlas y evitar errores
   */
  <Route {...rest} render={(props) => (
    isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
);

/**
 * la sintaxis para esto se encuentra en el comment de otro componente.
 * los propTypes deberia ser required o tener un default
 */
PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

export default PrivateRoute;
