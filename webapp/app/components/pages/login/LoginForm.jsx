import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../common/form/FormInput';

import './LoginForm.scss';

class LoginForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    username: '',
    password: ''
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleOnSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">
          {i18nService.translate('text.please_sign_in')}
        </h1>
        <FormInput
          inputId="inputEmail"
          label={i18nService.translate('text.username_or_email')}
          onChange={this.handleOnChange}
          name="username"
          placeholder={i18nService.translate('text.username_or_email')}
          value={this.state.username} />
        <FormInput
          inputId="inputPassword"
          label={i18nService.translate('text.password')}
          onChange={this.handleOnChange}
          type="password"
          name="password"
          placeholder={i18nService.translate('text.password')}
          value={this.state.password} />
        <span>{i18nService.translate('text.hint')}
          <i>{i18nService.translate('text.hint_username_password')}</i>
        </span>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          {i18nService.translate('button.sign_in')}
        </button>
      </form>
    );
  }
}

export default LoginForm;
