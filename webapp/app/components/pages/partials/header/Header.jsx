import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Header extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  getClass() {
    return classNames('header', this.props.className);
  }

  render() {
    return (
      <header className={this.getClass()}>
        <div className="navbar bg-light box-shadow">
          <div className="container d-flex justify-content-between">
            <a
              className="navbar-brand d-flex align-items-center text-dark"
              href="#">Directly starter app
            </a>
          </div>
        </div>
      </header>
    );
  }
}
