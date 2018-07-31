import React from 'react';
import './Footer.css';

const Footer = () => {
  const githubRepo = 'https://github.com/makingsensetraining/DirectlyTraining';
  return (
    <footer className="footer">
      <div className="container">
        <p className="float-right">
          <a href="#">{i18nService.translate('TEXT.BACK_TO_TOP')}</a>
        </p>
        <p>{i18nService.translate('TEXT.FOOTER')}
          <a className="footer__github-link" href={githubRepo}>
            {i18nService.translate('TEXT.GITHUB')}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
