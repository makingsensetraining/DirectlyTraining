import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../../actions/authActions';

const LoginHOC = (LoginChild) => {
  class LoginParent extends React.Component {
    static propTypes = {
      actions: PropTypes.object.isRequired
    };

    constructor() {
      super();

      this.state = {
        username: '',
        password: '',
        auth: {}
      };
    }

    handleOnChange = (e) => {
      const { name, value } = e.target;

      this.setState({
        [name]: value,
      });
    }

    handleOnSubmit = (e) => {
      e.preventDefault();

      const { username, password } = this.state;

      this.props.actions.login({
        username: username,
        password: password
      });
    }

    render() {
      const { username, password } = this.state;
      return (
        <div>
          <LoginChild
            username={username}
            password={password}
            handleOnChange={this.handleOnChange}
            handleOnSubmit={this.handleOnSubmit}
          />
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      auth: state.auth
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(authActions, dispatch)
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(LoginParent);
};

export default LoginHOC;
