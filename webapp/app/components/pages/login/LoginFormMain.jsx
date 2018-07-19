import React from 'react';
import PropTypes from 'prop-types';
import LoginHOC from './LoginHOC';
import { Button, FormGroup, Input, Label } from 'reactstrap';

class LoginFormMain extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.props.handleOnSubmit}>
          <FormGroup>
            <Label>Username</Label>
            <Input
              autoComplete="off"
              className="form-control"
              type="text"
              name="username"
              id="username"
              value={this.props.username}
              placeholder="Username"
              onChange={this.props.handleOnChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              autoComplete="off"
              className="form-control"
              type="password"
              name="password"
              id="password"
              value={this.props.password}
              placeholder="Password"
              onChange={this.props.handleOnChange}
              required
            />
          </FormGroup>
          <div className="form-action">
            <Button
              className="btn btn-outline-info"
              type="submit">Login</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginHOC(LoginFormMain);
