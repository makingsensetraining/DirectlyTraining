import React from 'react';
import './Footer.css';

const Footer = () => {
  const githubRepo = 'https://github.com/makingsensetraining/DirectlyTraining';
  return (
    <footer className="footer">
      <div className="container">
        <p className="float-right">
          <a href="#">{i18nService.translate('text.back_to_top')}</a>
        </p>
        <p>{i18nService.translate('text.footer')}
          <a className="footer__github-link" href={githubRepo}>
            {i18nService.translate('text.github')}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
