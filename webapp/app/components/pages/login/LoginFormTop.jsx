
import React from 'react';
import PropTypes from 'prop-types';
import LoginHOC from './LoginHOC';
import { Button, FormGroup, Input, Label } from 'reactstrap';

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
        <form onSubmit={this.props.handleOnSubmit}>
          <FormGroup className="row">
            <Label className="col-sm-2 col-form-label">Username</Label>
            <div className="col-sm-10">
              <Input
                autoComplete="off"
                className="form-control"
                type="text"
                name="username"
                id="username"
                value={this.props.username}
                placeholder="Username"
                onChange={this.props.handleOnChange}
                required />
            </div>
          </FormGroup>
          <FormGroup className="row">
            <Label className="col-sm-2 col-form-label">Password</Label>
            <div className="col-sm-10">
              <Input
                autoComplete="off"
                className="form-control"
                type="password"
                name="password"
                id="password"
                value={this.props.password}
                placeholder="Password"
                onChange={this.props.handleOnChange} />
            </div>
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

export default LoginHOC(LoginFormTop);
