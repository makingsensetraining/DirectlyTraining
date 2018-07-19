import React from 'react';
import LoginNavigation from '../navbar/LoginNavigation';
import LoginFormMain from './LoginFormMain';

import './LoginPage.css';

export default class LoginPage extends React.Component {

  render() {
    return (
      <section>
        <LoginNavigation />
        <div className="container">
          <div className="card card-container">
            <img
              id="profile-img"
              className="profile-img-card"
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <LoginFormMain />
          </div>
        </div>
      </section>
    );
  }
}
