import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../../actions/authActions';
import LoginForm from './LoginForm';

export class LoginPage extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  handleOnSubmit = (username, password) => {
    this.props.actions.login({username, password});
  };

  render() {
    return (
      <section>
        <LoginForm onSubmit={this.handleOnSubmit} />
      </section>
    );
  }
}


export function mapStateToProps(state) {
  return {
    ...state.auth
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
