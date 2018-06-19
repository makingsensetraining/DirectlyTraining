import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>Directly starter app in React Redux.
        See this project @ <a href="https://github.com/makingsensetraining/DirectlyTraining">GitHub</a></p>
      </div>
    </footer>
  );
};

export default Footer;
