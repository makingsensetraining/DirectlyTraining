import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section>
      <h2>{i18nService.translate('TEXT.PAGE_NOT_FOUND')}</h2>
      <Link to="/">{i18nService.translate('TEXT.GO_BACK', {
        page: 'home'
      })}</Link>
    </section>
  );
};

export default NotFoundPage;
