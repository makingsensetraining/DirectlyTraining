
import React from 'react';
import PropTypes from 'prop-types';
import LoginHOC from './LoginHOC';

class LoginFormTop extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.props.handleOnSubmit} autoComplete="off">
          <div className="form-group">
            <label>Username</label>
            <input
              autoComplete="off"
              className="form-control"
              type="text"
              name="username"
              id="username"
              value={this.props.username}
              placeholder="Username"
              onChange={this.props.handleOnChange} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              autoComplete="off"
              className="form-control"
              type="password"
              name="password"
              id="password"
              value={this.props.password}
              placeholder="Password"
              onChange={this.props.handleOnChange} />
          </div>
          <div className="form-action">
            <input
              className="btn btn-outline-info"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginHOC(LoginFormTop);
