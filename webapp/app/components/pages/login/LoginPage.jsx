import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(username, password) {
    if (this.props.authActions && this.props.authActions.login) {
      this.props.authActions.login(username, password);
    }
  }

  render() {
    return (
      <section>
        <LoginForm onSubmit={this.handleOnSubmit} />
      </section>
    );
  }
}

LoginPage.propTypes = {
  context: PropTypes.object.isRequired,
  authActions: PropTypes.object.isRequired
};

export default LoginPage;
