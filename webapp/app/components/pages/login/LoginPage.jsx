import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(username, password) {
    if (this.props.context && this.props.context.login) {
      this.props.context.login(username, password);
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
  context: PropTypes.object
};

export default LoginPage;
