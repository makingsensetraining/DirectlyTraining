import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as actions from '../actions/authActions';
import * as usersActions from '../actions/usersActions';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/not_found/NotFoundPage';
import HomePage from './pages/home/HomePage';

/**
 * usar alguna estrategia para manejar code splitting mejoraria la UX
 */

/**
 * siempre que sea posible (cuando no se este usando manualmente "componentShouldUpdate") usar React.Component por performance
 */
export class Main extends React.Component {
  /**
   * static propTypes = {
   *  actions: PropTypes.object.isRequired,
   *  isAuthenticated: PropTypes.bool,
   *  usersActions: PropTypes.object.isRequired
   * };
   */

  /**
   * static defaultProps = {
   *   isAuthenticated: false
   * };
   */

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

/**
 * esto puede ser reemplazado por el codigo de ejemplo arriba para ser mas legible.
 * Arriba tambien esta el ejemplo de default prop para las no requeridas por propTypes
 */
Main.propTypes = {
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  usersActions: PropTypes.object.isRequired
};

/**
 * es preferible usar arrows por claridad y consistencia
 */
export function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    usersActions: bindActionCreators(usersActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
